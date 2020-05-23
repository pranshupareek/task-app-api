const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pranshupareek47@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }).then(() => {
        console.log('Mail Sent')
    }).catch((e) => {
        console.log(e)
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pranshupareek47@gmail.com',
        subject: 'Good Bye!',
        text: `Hope to see you again, ${name} . Thanks for choosing us.`
    }).then(() => {
        console.log('Mail Sent')
    }).catch((e) => {
        console.log(e)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}