import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const loaders = [
  {
    test: /\.js$/,
    include: path.join(__dirname, 'src'),
    exclude: /node_modules/,
    loaders: ['babel']
  },
  {
    test: /(\.css)$/,
    loaders: ['style', 'css']
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader'),
    include: path.resolve(__dirname, 'stylesheets')
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file'
  },
  {
    test: /\.(woff|woff2)$/,
    loader: 'url?prefix=font/&limit=5000'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=image/svg+xml'
  }
]
export default loaders
