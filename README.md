<h1 align="center">
  <img src="https://raw.githubusercontent.com/coderscraft/react-svg-loader/master/resources/logo-light.png" alt="svgr" title="svgr" width="300">
</h1>
<p align="center" style="font-size: 1.2rem;">Transform SVGs Sprite icons  into React components  </p>

[![License](https://img.shields.io/npm/l/@svgr/core.svg)](https://github.com/coderscraft/react-svg-loader/blob/master/LICENSE)
[![npm package](https://img.shields.io/npm/v/@svgr/core/latest.svg)](https://www.npmjs.com/package/@rcube/react-svg-loader)
[![npm downloads](https://img.shields.io/npm/dm/@svgr/core.svg)](https://www.npmjs.com/package/@rcube/react-svg-loader)
[![Build Status](https://img.shields.io/travis/gregberge/svgr.svg)](https://travis-ci.org/coderscraft/react-svg-loader.svg?branch=master)
[![Code Coverage](https://img.shields.io/codecov/c/github/gregberge/svgr.svg)](https://codecov.io/github/coderscraft/react-svg-loader)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Dependencies](https://img.shields.io/david/gregberge/svgr.svg?path=packages%2Fcore)](https://david-dm.org/coderscraft/repo.svg)
[![DevDependencies](https://img.shields.io/david/dev/gregberge/svgr.svg)](https://david-dm.org/coderscraft/repo.svg)

React SVG loader is Webpack loader. Using this loader we can load individual icon from SVG sprite file as a react component.

## Contents

- [Requirements](#-requirements)
- [Advantages](#-advantages)
- [Integration](#-integration)
- [Documentation](#-documentation)
- [Future Enhancements](#future-enhancements)
- [License](#-license)


## 📋 Requirements

We can use libraries like SVGR to load SVG icon as a react component. With this library we can load individual SVG icon from SVG sprite as a react component. Usually we can set sprite icon as a background of dive using CSS positioning. But that way we end up importing entire SVG file in app. That can be a performance hit. With this loader if we need only one icon from SVG file, we just import that icon only. This approach reduces bundle size significantly. 

## 🎉 Advantages

 - Reduces bundle size by importing only required icons.
 - Import SVG icons as a react components.
 - Control Icon size and color easily through Javascript and CSS.
 - Rename Icon components based on context
 - Transform SVG elements at build time

## 🎉 Integration

Install SVG Loader
````
    npm i @rcube/react-svg-loader
````
Add Webpack loader to process SVG file
````
{
              test: /\.svg$/,
              use: [
                {
                  loader: '@rcube/react-svg-loader',
                  options: {
                    mapping: [],
                    defaultSetting: {}
                  }
                }
              ]
            }
````
Add Mapping for SVG Icon and React component name
````
mapping: [
{ id:  "amazon", name:  "Amazon" },
{ id:  "angular", name:  "Angular" }
],
````

Usage 
````
import  React  from  'react';
import  ReactDOM  from  'react-dom';
import { Amazon, Angular } from  './asset/brands.svg'
  
class  App  extends  React.Component {
	render() {
		return(
			<div>
				<Amazon  style={{ width:  100, height:  100 }}  />
				<Angular  style={{ width:  100, height:  100 }}  />
			</div>
		)
	}
}
````

## 📖 Documentation

#### Customize SVG attributes   (e.g. to add viewBox to SVG node)
````
svgAttributes: [ { key:  'viewBox', value:  "0 0 25 25" } ]
````

### Transformaters (e.g. remove transform)

We can add custom Transformers which can take string SVG and return back transformed SVG. Transformers can remove node, edit content.

````
export  const  parseIcon = (element: String) => {
	if ( element ) {
		var  result1 = convert.xml2js(element, {compact:  true});
		delete  result1["g"]['_attributes']['transform']
		return  convert.js2xml(result1, {compact:  true});
	}
	return  element
}
````

## 🚀 Future Enhancements

 - Externalize icon parser
 - Apply parser based on pattern or Id
 - Add SVG wrapper parameters
 - Add default icon parser and SVG wrapper props
 - Add pattern based icon parser and SVG props

## 📄 License

Licensed under the MIT License, Copyright © 2017-present Smooth Code.

See [LICENSE](./LICENSE) for more information.