const sgMail = require('@sendgrid/mail')


module.exports = function mail(mail,texthtml){
sgMail.setApiKey('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')
const msg = {
  to: mail , // Change to your recipient
  from: 'pankina1ex@yandex.ru', // Change to your verified sender
  subject: 'New Order from SOCKSHOP',
  text:mail,
  html: texthtml,
}



sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })


}
