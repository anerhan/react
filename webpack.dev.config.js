var webpack = require('webpack');

module.exports = {
  entry: ['webpack-hot-middleware/client', './src/index.js'],
  output: {
    path: __dirname + '/static',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!babel' }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    moduleDirectories: ['node_modules', 'src']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
