import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const logger = createLogger()
  const finalCreateStore = compose(applyMiddleware(promise, thunk, logger),
    global.devToolsExtension ? global.devToolsExtension() : f => f)(createStore)

  const store = finalCreateStore(rootReducer, initialState)

  return store
}
