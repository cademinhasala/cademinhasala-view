const app = require('./app')
const path = require('path')
const logger = require('koa-logger')
const serve = require('koa-static')
const port = process.env.PORT || 8080

const root = path.resolve(__dirname, '../dist')

app.use(logger())
app.use(serve(root))

app.listen(port)
