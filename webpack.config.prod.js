import path              from 'path'
import webpack           from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CleanPlugin       from 'clean-webpack-plugin'
import HtmlwebpackPlugin from 'html-webpack-plugin'
import autoprefixer      from 'autoprefixer'
import postcssImport     from 'postcss-import'
import loaders           from './webpack.loaders'

const bourbonPath = require('bourbon').includePaths
const neatPath = require('bourbon-neat').includePaths
const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
}

export default {
  debug: false,
  devtool: 'cheap-module-source-map',
  noInfo: true,
  entry: [
    './src/index',
    './stylesheets/main.scss'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    loaders: loaders
  },
  // sass-loader bourbon, neat path
  sassLoader: {
    includePaths: bourbonPath.concat(neatPath)
  },
  postcss: function(webpack) {
    return [
      autoprefixer,
      postcssImport({addDependencyTo: webpack})
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'React-Redux Kit',
      appMountId: 'app',
      inject: false
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      },
      mangle: true,
      output: {
        comments: false
      }
    })
  ]
}
