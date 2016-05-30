var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      //{test: /\.js?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['react'] }}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
