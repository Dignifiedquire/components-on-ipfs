var HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './lib/index',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        query: {
          mimetype: 'image/png'
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'IPFS Rocks',
      template: './templates/index.html'
    })
  ]
}
