var path = require('path');
var webpack = require('webpack');
var clientpath='client_routing';//ruta del cliente..cambiar para cada ejemplo

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './'+clientpath+'/main.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.jsx$/,
      loaders: ['babel'],
      include: path.join(__dirname, clientpath)
    },
    // CSS
    { 
      test: /\.styl$/, 
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  }
};
