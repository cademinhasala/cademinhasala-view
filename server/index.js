const app = require('./app')
const conditional = require('koa-conditional-get')
const etag = require('koa-etag')
const logger = require('koa-logger')
const path = require('path')
const serve = require('koa-static')

const port = process.env.PORT || 8080
const root = path.resolve(__dirname, '../dist')

app.use(logger())

app.use(conditional())
app.use(etag())

app.use(serve(root))

app.listen(port)
