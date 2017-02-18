const router = require('koa-router')()

router
  .get(/(?:\/|\.html)$/, function *() {
    yield this.render(this.path)
  })

module.exports = router
