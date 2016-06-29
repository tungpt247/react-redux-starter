import express        from 'express'
import path           from 'path'
import open           from 'open'
import compression    from 'compression'
import methodOverride from 'method-override'

const port = 3000
const app = express()

app.use(compression())
app.use(methodOverride());
app.use(express.static('dist'))

// app.get('*', function(req, res, next) {
//   if (req.url.indexOf('/images/') === 0 || req.url.indexOf('/main.js/') === 0) {
//     res.setHeader('Cache-Control', 'public, max-age=2592000')
//     res.setHeader('Expires', new Date(Date.now() + 2592000000).toUTCString())
//   }
//   next()
// })

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(port, function(err) {
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
  }
})
