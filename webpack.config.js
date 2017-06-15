const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('./config');

// 防止报 query() 废除警告
process.noDeprecation = true;

module.exports = {
  entry: {
    home: './src/main.js'
  },
  output: {
    filename: './js/[name].js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: config.public_path + '/'
  },

  module: {
    rules: [{
      test: /\.js[x]?$/,
      exclude: [/(node_modules)/],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-0'],
          plugins: ['add-module-exports', ['import', {
            libraryName: 'antd',
            style: 'css'
          }]]
        }
      }
    },{
      test: /.css$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader'],
        fallback: 'style-loader'
      })
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({resource}) => (
        resource &&
        resource.indexOf('node_modules') >= -1 &&
        resource.match(/\.js$/)
      )
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV) || JSON.stringify('development')
      }
    }),
    new htmlWebpackPlugin({
      filename: 'index.ejs',
      template: path.resolve(process.cwd(), 'src/index.html'),
      meta: '<%- meta %>',
      htmlDOM: '<%- html %>',
      reduxState: '<%- reduxState %>'
    }),
    new ExtractTextPlugin('./css/[name].css')
  ]
};