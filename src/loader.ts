import svgr from '@svgr/core'
import { JSDOM } from 'jsdom'
import { getOptions } from 'loader-utils'
import { transformAsync, createConfigItem } from '@babel/core'
import presetReact from '@babel/preset-react'
import presetEnv from '@babel/preset-env'
import { validate } from 'schema-utils'
import { Schema } from "schema-utils/declarations/validate";
import pluginTransformReactConstantElements from '@babel/plugin-transform-react-constant-elements'
import { Setting } from './types'
import schema from './static/schema.json'

const iconEl : { [ key: string ] : string } = {}
const configuration = { name: 'SVG Icon Loader' }

const buildDict = (mapping: any) => {
  const dict: { [key: string]: string } = {}
  mapping.forEach((item: { id: string, name: string }) => { dict[item.id] = item.name})
  return dict
}

const babelOptions = {
  babelrc: false,
  configFile: false,
  presets: [
    createConfigItem(presetReact, { type: 'preset' }),
    createConfigItem([presetEnv, { modules: false }], { type: 'preset' }),
  ],
  plugins: [createConfigItem(pluginTransformReactConstantElements)],
}

function template1(
  { template }: { template: any },
  opts: string,
  { componentName, props, jsx }: {componentName: string, props:string, jsx: string }
) {
  return template.ast`
     export const ${componentName} = (${props}) => ${jsx}
    `
}
  
async function svgLoader(source: string): Promise<string> {
  const options = getOptions(this)
  validate(schema as Schema, options, configuration);
  const { mapping, defaultSetting } = options;
  const dict = buildDict(mapping)
  const dom = new JSDOM(source, {contentType: 'text/xml'})
  const doc = dom.window.document
  doc.querySelectorAll('g').forEach((el) => {
    let result = el.outerHTML.toString()
    const elId = el.getAttribute('id')
    if (elId) {
      if (dict[elId]) {
        if (defaultSetting) {
          const { parseIcon } = defaultSetting
          if (parseIcon) {
            result = parseIcon(el.outerHTML.toString())
          }
        }
        iconEl[dict[elId]] = result
      }
    }
  })
  const icons = Object.keys(iconEl)
  const reducer = (accumulator: string, currentValue: string) => `${accumulator} ${currentValue}`
  const promises = icons.map(icon => buildSvg(icon, doc, defaultSetting))
  const response = await Promise.all(promises)
  const finalCode = response.reduce(reducer, 'import React from "react";')
  const { code } = await transformAsync(finalCode, babelOptions)
  return code
}

async function buildSvg(icon: string, doc: Document, defaultSetting: Setting) {
  const { svgAttributes } = defaultSetting
  const el = iconEl[icon]
  const svg = doc.createElementNS('http://www.w3.org/2000/svg','svg')
  if (svgAttributes && svgAttributes.length > 0) {
    svgAttributes.forEach(attr => svg.setAttribute(attr.key, attr.value))
  }
  svg.innerHTML = el;
  const svgCode = svg.outerHTML.toString()
  const jsCode = await svgr(svgCode, { template: template1 }, { componentName: icon })
  return jsCode
}

export default svgLoader