import conditional from 'koa-conditional-get'
import etag from 'koa-etag'
import logger from 'koa-logger'
import serve from 'koa-static'
import views from 'koa-views'
import app from './app'
import htmlRouter from './routes/html'

const port = process.env.PORT || 8080

app.use(logger())

app.use(conditional())

const root = './build/web'
app.use(views(root, {
  extension: 'njk',
  map: {
    njk: 'nunjucks',
  },
}))
app.use(htmlRouter.routes())

app.use(etag())

const ONE_YEAR = 365 * 24 * 60 * 60 * 1000
app.use(serve(root, { maxage: ONE_YEAR }))

app.listen(port)
