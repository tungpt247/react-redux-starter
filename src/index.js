import 'babel-polyfill'
import React                      from 'react'
import { render }                 from 'react-dom'
import { Provider }               from 'react-redux'
import { Router, browserHistory } from 'react-router'

import configStore                from './store/configureStore'
import routes                     from './routes'

const store = configStore()

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
