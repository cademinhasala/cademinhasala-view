import React from 'react'
import App from '../../src/Components/App'
import ReactDOMServer from 'react-dom/server'
import koaRouter from 'koa-router'

const AppServer = ReactDOMServer.renderToString(<App />)
const router = koaRouter()

router
  .get(/(?:\/|\.html)$/, function *() {
    yield this.render(this.path, {
      mount: AppServer,
    })
  })

export default router
