const path = require('path');

module.exports = (env, options) => {
  return {
    entry: './src/loader.ts',
    mode: options.mode,
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
      extensions: [ '.ts' ],
    },
    output: {
      filename: 'loader.js',
      path: path.resolve(__dirname, 'lib'),
    }
  }
};