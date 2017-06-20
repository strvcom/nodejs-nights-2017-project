'use strict'

const compose = require('koa-compose')
const koaStatic = require('koa-static2')
const Router = require('koa-router')
const path = require('path')

module.exports = compose([

  // Redirect /docs --> /docs/index.html
  new Router().redirect('/docs', '/docs/index.html', 302).routes(),

  // Overrides swagger index HTML with the customized one
  koaStatic('docs', path.join(__dirname, '../../../docs')),
])
