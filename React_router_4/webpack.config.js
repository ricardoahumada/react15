var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/main.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({$: "jquery",jQuery: "jquery"})
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    },
    // CSS
    { 
      test: /\.styl$/, 
      include: path.join(__dirname, 'src'),
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  }
};
