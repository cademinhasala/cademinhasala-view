const app = require('./app')
const conditional = require('koa-conditional-get')
const etag = require('koa-etag')
const logger = require('koa-logger')
const serve = require('koa-static')
const htmlRouter = require('./routes/html')
const { root } = require('./config')

const port = process.env.PORT || 8080

app.use(logger())

app.use(conditional())
app.use(etag())

app.use(htmlRouter.routes())

const ONE_YEAR = 365 * 24 * 60 * 60 * 1000
app.use(serve(root, { maxage: ONE_YEAR }))

app.listen(port)
