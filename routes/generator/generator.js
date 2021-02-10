const router = require('express').Router()
const session = require('express-session');
const BaseSock = require('../../models/basesocks')
const User = require('../../models/users')
const Socks = require('../../models/socks')


router.get('/', async (req, res) => {
  const base = await BaseSock.find()     //.populate('color')
  console.log(base[0]);
  res.render('generator', base[0])
})

router.post('/', async (req, res) => {
  console.log(req.body);
  console.log(req.session.email, '<<<generator 11')
  let user = await User.find({ email: req.session.email })
  console.log(user[0])
  let sock = await new Socks({ color: req.body.colorName, author: user[0] })
  await sock.save()
  const base = await BaseSock.find()  
  res.json(base[0])
})




module.exports = router
