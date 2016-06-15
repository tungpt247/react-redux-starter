import express from 'express'
import webpack from 'webpack'
import path from 'path'
import open from 'open'
import config from '../webpack.config.dev'

const port = 3000
const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function(err) {
  if (!err) {
    open(`http://localhost:${port}`)
  } else {
    console.log('Error ', err)
  }
})
