const router = require('express').Router()
const { sendMail } = require('../controllers/mail')

const multer = require('multer')
const upload = multer()

router.route('/mail/new').post(upload.single("attachment"), sendMail)

module.exports = router