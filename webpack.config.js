const path = require('path');

module.exports = (env, options) => {
  return {
    entry: './src/loader.ts',
    mode: options.mode,
    target: "node",
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    output: {
      filename: 'loader.js',
      path: path.resolve(__dirname, 'lib'),
      libraryTarget: 'umd',
      library: 'lib',
      umdNamedDefine: true,
      globalObject: 'this'
    },
    externals: {
      canvas: "commonjs canvas"
    }
  }
};