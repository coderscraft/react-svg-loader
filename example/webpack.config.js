var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');
var iconParser = require('../lib/plugins/iconParser')

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']},
            {
              test: /\.svg$/,
              use: [
                {
                  loader: '@rcube/react-svg-loader',
                  options: {
                    mapping: [
                      { id: "amazon",  name: "Amazon" },
                      { id: "angular",  name: "Angular" }
                    ],
                    defaultSetting: {
                      parseIcon: iconParser.parseIcon,
                      svgAttributes: [ { key: 'viewBox', value: "0 0 25 25" } ]
                    }
                  }
                }
              ]
            }
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'src/index.html'
        })
    ]
}
