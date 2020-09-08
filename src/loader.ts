import svgr from '@svgr/core'
import { JSDOM } from 'jsdom'
import { getOptions } from 'loader-utils'
import { transformAsync, createConfigItem } from '@babel/core'
import presetReact from '@babel/preset-react'
import presetEnv from '@babel/preset-env'
import pluginTransformReactConstantElements from '@babel/plugin-transform-react-constant-elements'

const iconEl : { [ key: string ] : SVGGElement } = {}

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
  const dict = buildDict(options.mapping)
  console.log('dict - ', dict)
  const dom = new JSDOM(source, {contentType: 'text/xml'})
  const doc = dom.window.document
  doc.querySelectorAll('g').forEach((el) => {
    if (dict[el.getAttribute('id')]) {
      iconEl[dict[el.getAttribute('id')]] = el
    }
  })
  console.log('iconEl - ', iconEl)
  const icons = Object.keys(iconEl)
  const reducer = (accumulator: string, currentValue: string) => `${accumulator} ${currentValue}`
  const promises = icons.map(icon => buildSvg(icon, doc))
  const response = await Promise.all(promises)
  const finalCode = response.reduce(reducer, 'import React from "react";')
  console.log('finalCode - ', finalCode)
  const { code } = await transformAsync(finalCode, babelOptions)
  return code
}

async function buildSvg(icon: string, doc: Document) {
  const el = iconEl[icon]
  const svg = doc.createElementNS('http://www.w3.org/2000/svg','svg')
  svg.setAttribute('viewBox', '0 0 18 18')
  svg.appendChild(el)
  const svgCode = svg.outerHTML.toString()
  const jsCode = await svgr(svgCode, { template: template1 }, { componentName: icon })
  return jsCode
}

export default svgLoader