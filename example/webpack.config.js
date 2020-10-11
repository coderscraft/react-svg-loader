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
                  loader: path.resolve(__dirname,'../lib/loader.js'),
                  options: {
                    mapping: [
                      { id: "amazon",  name: "Amazon" }
                    ],
                    defaultSetting: {
                      parseIcon: iconParser.parseIcon,
                      svgAttributes: []
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
