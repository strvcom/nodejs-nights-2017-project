'use strict'

const Router = require('koa-router')
const controllers = require('../controllers')

const router = new Router()

// Status
router.get('/', controllers.status.get)

// Users
router.post('/users', controllers.users.post)
router.get('/users/:userId', controllers.users.get)

const middleware = router.routes()
module.exports = middleware
