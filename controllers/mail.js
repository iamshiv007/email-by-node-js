const nodemailer = require("nodemailer")

exports.sendMail = async (req, res) => {

    const { email, subject, text } = req.body
    const { originalname, buffer } = req.file

    let sender = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'iamshiv20032003@gmail.com',
            pass: process.env.PASS
        }
    })

    let mail = {
        from: 'iamshiv20032003@gmail.com',
        to: email,
        subject: subject,
        text: text,
        attachments: {
            filename: originalname,
            content: buffer
        }
    }

    sender.sendMail(mail, function (error, info) {
        if (error) {
            res.status(500).json(error.message)
        } else {
            res.status(200).json("Email sent successfully" + info.response)
        }
    })
}