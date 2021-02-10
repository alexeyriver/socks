const router = require('express').Router()
const session = require('express-session');
const BaseSock = require('../../models/basesocks')
const User = require('../../models/users')
const Socks = require('../../models/socks')


router.get('/', async (req, res) => {
  const base = await BaseSock.find()  
  res.render('generator', base[0])
})

router.post('/', async (req, res) => {
  console.log(req.body);
  console.log(req.session.email, '<<<generator 11')
  let user = await User.find({ email: req.session.email })
  let sock = await new Socks({ color: req.body.colorName, author: user[0] })
  await sock.save()
  console.log(sock.id)
  req.session.idi = sock.id
  const base = await BaseSock.find()
  res.json(base[0])
})

router.post('/img', async (req, res) => {
 console.log( req.session.idi,'<<<<<<<<<<<<<<<<<<<<<<<<')
  let user = await User.find({ email: req.session.email })
  let sock = await Socks.findById(req.session.idi)
  console.log(sock);
  const base = await BaseSock.find()
  let pictures = base[0].pic;
  // console.log(pictures)
  let target = pictures.filter((el) => { return el.name == req.body.imgName })
  //console.log(target[0]);
  sock.pic = { name: target[0].name, url: target[0].url }
  await sock.save()
  // const base = await BaseSock.find()  
  res.json(base[0])
})

router.post('/pattern', async (req, res) => {
  console.log(req.body)
  let user = await User.find({ email: req.session.email })
  let sock = await Socks.findById(req.session.idi)
  const base = await BaseSock.find()
  let pattern = base[0].pattern;
  console.log(pattern);
  let target = pattern.filter((el) => { return el.name == req.body.patternName })
  sock.pattern = { name: target[0].name, url: target[0].url }
  await sock.save()
  res.json(sock)
})

router.post('/favourite', async (req, res) => {
  console.log(req.body)
  let user = await User.find({ email: req.session.email })
  let sock = await Socks.findById(req.session.idi)
  user[0].favourites.push(sock)
  await user[0].save()
  const base = await BaseSock.find()
  res.redirect('http://localhost:3000/generator')
})

router.post('/box', async (req, res) => {
  console.log(req.body)
  let user = await User.find({ email: req.session.email })
  let sock = await Socks.findById(req.session.idi)
  user[0].box.push({ item: sock, amount: 1 })
  await user[0].save()
  const base = await BaseSock.find()
  res.redirect('http://localhost:3000/generator')
})

router.post('/skip', async (req, res) => {
  console.log(req.session.idi ,'<<<<<<<<')
   await Socks.findOneAndDelete({ _id: req.session.idi })
  res.redirect('http://localhost:3000/generator')
})



module.exports = router
