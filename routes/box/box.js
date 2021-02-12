const router = require('express').Router()
const User = require('../../models/users')
const Socks = require('../../models/socks')
const mail = require('../../middleware/mail')

router.get('/', async (req, res) => {
  let user = await User.findOne({ email: req.session.email }).populate({ path: 'box', populate: { path: 'item' } })
  let box = user.box
  console.log(box);
  res.render('box', { box })
})

router.delete('/:id', async (req, res) => {
  console.log(req.params)
  let user = await User.findOne({ email: req.session.email }).populate({ path: 'box', populate: { path: 'item' } })
  console.log(user.box)
  user.box.pull({ _id: req.params.id })
  console.log(user.box)
  //  let sock = await Socks.findById()
  await user.save()
  res.json({ id: req.params.id })
})

router.get('/less/:id', async (req, res) => {
  console.log(req.params.id, 'lessssss')
  let user = await User.findOne({ email: req.session.email })//.populate({path:'box',populate:{path:'item'}})
  let newBox = user.box.filter((el) => { return el.id == req.params.id })
  newBox[0].amount = newBox[0].amount - 1

  if (newBox[0].amount <= 0) {
    user.box.pull({ _id: req.params.id })
    await user.save()
    res.json({ status: 'delete', id: req.params.id })
  }
  await user.save()
  res.json({ amount: newBox[0].amount, id: req.params.id })
})

router.get('/plus/:id', async (req, res) => {
  // console.log(req.params.id,'plussss')
  let user = await User.findOne({ email: req.session.email })//.populate({path:'box',populate:{path:'item'}})
  let newBox = user.box.filter((el) => { return el.id == req.params.id })
  console.log(newBox[0], '11111')
  newBox[0].amount = newBox[0].amount + 1
  await user.save()
  res.json({ amount: newBox[0].amount, id: req.params.id })
})

router.get('/order', async (req, res) => {
  let user = await User.findOne({ email: req.session.email }).populate({ path: 'box', populate: { path: 'item' } })
  console.log(user);
  res.render('order', { user })
})

router.post('/order', async (req, res) => {
  let user = await User.findOne({ email: req.session.email }).populate({ path: 'box', populate: { path: 'item' } })
  // отправить инфу на e-mail 
  let textbox = user.box.map((el) => {
    let item = el.item.pic;
    let pattern = el.item.pattern;
    let color = el.item.color;
    let amount = el.amount
    let final = `
<p> Item: ${item} </p> ,   <p> Pattern: ${pattern} </p> ,  <p> Color: ${color} </p> ,  <p> Amount: ${amount} </p> `
    return final
  })
  let value = `<p> Покупатель - ${user.name} , </p>
           <p> E-mail: ${user.email}, </p>
           <p>   Phone:  ${req.body.phone}, </p>
           <p>   Comment: ${req.body.comment}, </p>
           <p>   Корзина: ${textbox}  </p>`                /// user.box
  mail(req.session.email, `<h2>${value}</h2>`)   // .then(console.log('email-send')).catch(console.log('email-not send'))
  user.box = []
  await user.save()
  console.log(req.body)
  res.render('submitorder')
})

module.exports = router
