import React from 'react'
import compress from 'koa-compress'
import ReactDOMServer from 'react-dom/server'
import koaRouter from 'koa-router'
import { Provider } from 'react-redux'
import App from '../../src/Components/App'
import { getTurmas } from '../../src/actions'
import configureStore from '../../src/store/configure-store'

const store = configureStore()

let locals = {}
store.subscribe(() => {
  locals = {
    mount: ReactDOMServer.renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    ),
    preloadedState: store.getState(),
  }
})

function updateStore() {
  store.dispatch(getTurmas())
}

const TEN_MINUTES = 10 * 60 * 1000
setInterval(updateStore, TEN_MINUTES)
updateStore()

const router = koaRouter()
router
  .get(/(?:\/|\.html)$/, function *(next) {
    yield this.render(this.path, locals)
    yield next
  }, compress({}))

export default router
