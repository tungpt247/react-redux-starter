import webpack           from 'webpack'
import path              from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlwebpackPlugin from 'html-webpack-plugin'
import autoprefixer      from 'autoprefixer'
import postcssImport     from 'postcss-import'
import loaders from './webpack.loaders'

const bourbonPath = require('bourbon').includePaths
const neatPath = require('bourbon-neat').includePaths
export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
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
    contentBase: './src'
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'test']
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new HtmlwebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'React-Redux Kit',
      appMountId: 'app',
      inject: false
    })
  ],
}
