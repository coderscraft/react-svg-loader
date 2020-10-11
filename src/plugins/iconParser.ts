var convert = require('xml-js');

export const parseIcon = (element: String) => {
  if ( element ) {
    var result1 = convert.xml2js(element, {compact: true});
    delete result1["g"]['_attributes']['transform']
    return convert.js2xml(result1, {compact: true});
  }
  return element
}