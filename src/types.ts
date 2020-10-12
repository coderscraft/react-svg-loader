export type OptionType = {
  mapping: Mapping,
  defaultSetting: Setting
}

export type Setting = {
  parseIcon: Function,
  svgAttributes: [ SvgAttribute ]
}

export type Mapping = {
  id: string,
  name: string
}

export type SvgAttribute = { key: string, value: string }