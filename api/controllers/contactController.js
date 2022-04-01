require('dotenv').config()

const sgMail = require('@sendgrid/mail')

exports.contactPost = function (req, res) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    var name = req.body.name
    var email = req.body.email
    var clientMessage = req.body.content

    const msg = {
        to: 'theblackseaconsultancy@gmail.com',
        from: 'theblackseaconsultancy@gmail.com', // Change to your verified sender
        subject: 'New Contact Request',
        text: `name : ${name} \n
               email :  ${email} \n
               clientMessage :  ${clientMessage} \n
        `,
        html: `<div> name : ${name} </div>
                <div> email :  ${email} </div>
                <div> message :  ${clientMessage} </div>`   
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
            res.send("sent")
        })
        .catch((error) => {
            console.error(error)
            res.send(error)

        })
}