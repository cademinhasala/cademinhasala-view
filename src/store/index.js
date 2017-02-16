import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(promiseMiddleware())
));

if (module.hot) {
  module.hot.accept('../reducers', () => {
    store.replaceReducer(require('../reducers'))
  })
}

export default store
