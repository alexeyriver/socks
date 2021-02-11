const sgMail = require('@sendgrid/mail')


module.exports = function mail(value,texthtml){
sgMail.setApiKey('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')
const msg = {
  to: 'lekspank@gmail.com', // Change to your recipient
  from: 'pankina1ex@yandex.ru', // Change to your verified sender
  subject: 'New Order from SOCKSHOP',
  text: value,
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
