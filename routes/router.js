const router = require('express').Router()

// mail routes
const mailRoute = require('./mail')
router.use('/', mailRoute)

module.exports = mailRoute