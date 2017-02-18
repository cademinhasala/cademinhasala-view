const router = require('koa-router')()
const send = require('koa-send')
const { root } = require('../config')

const opts = {
  index: 'index.html',
  root,
}

router
  .get(/(?:\/|\.html)$/, function *() {
    yield send(this, this.path, opts)
  })

module.exports = router
