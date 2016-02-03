'use strict'

let autoprefixer = require('autoprefixer')
let precss       = require('precss')

module.exports = {
  context: __dirname,
  entry: './index',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-runtime', 'transform-class-properties']
        }
      },
      {
        test:   /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  postcss: () => [autoprefixer, precss]
}
