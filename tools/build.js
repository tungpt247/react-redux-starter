import webpack from 'webpack'
import colors from 'colors'
import webpackConfigureProd from '../webpack.config.prod'

console.log('Generating minified bundle for production via webpack. This will take a moment...'.blue)

webpack(webpackConfigureProd).run((err, stats) => {
  if (err) {
    console.log(err.bold.red)
    return 1
  }

  const jsonStats = stats.toJson()

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(err => console.log(error.red))
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings:'.bold.yellow)
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`)

  // Got so far, the build succeeded.
  console.log('Your app has been compiled in Production mode and written to /dist.'.green)

  return 0
})
