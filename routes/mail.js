const router = require('express').Router()
const { sendMail } = require('../controllers/mail')

router.route('/mail/new').post(sendMail)

module.exports = router