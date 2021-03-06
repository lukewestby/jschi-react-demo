var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var srcPath = path.join(__dirname, 'src');

module.exports = {

  target: 'web',

  cache: true,

  node: {
    fs: 'empty'
  },

  entry: {
    app: path.join(srcPath, 'app.js'),
    common: [
      'react',
      'react-router',
      'redux',
      'superagent',
      'immutable',
      'moment',
      'react-redux',
      'redux-devtools',
      'redux-thunk'
    ]
  },

  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['node_modules', 'src']
  },

  output: {
    path: path.join(__dirname, 'tmp'),
    publicPath: '',
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?cacheDirectory&stage=0&optional=runtime']
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader?modules&localIdentName=[local]__[hash:base64]', 'autoprefixer-loader']
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new webpack.NoErrorsPlugin()
  ],

  debug: true,

  devtool: 'source-map',

  devServer: {
    contentBase: './tmp',
    historyApiFallback: true
  }
};
