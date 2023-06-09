const nodemailer = require("nodemailer")

exports.sendMail = async (req, res) => {

    let sender = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'iamshiv20032003@gmail.com',
            pass: 'wgoxruroilbvoizx'
        }
    })

    let mail = {
        from: 'iamshiv20032003@gmail.com',
        to: "shivrajg20032003@gmail.com",
        subject: "test",
        text: "Send a email using node.js"
    }

    sender.sendMail(mail, function (error, info) {
        if (error) {
            res.status(500).json(error.message)
        } else {
            res.status(200).json("Email sent successfully" + info.response)
        }
    })
}