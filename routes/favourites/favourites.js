const router = require('express').Router()
const User = require('../../models/users')
const Socks = require('../../models/socks')

router.get('/', async (req,res)=>{
  let user = await User.findOne({ email: req.session.email }).populate('favourites')
  let fav = user.favourites
  console.log(fav);
  res.render('favourites', {fav})
})

router.get('/:id',async(req,res)=>{
 let {id} = req.params
 let sock = await Socks.findById(id)
 console.log(sock)
 res.render('favsock',{sock})
})

router.get('/inbox/:id',async(req,res)=>{
  let user = await User.findOne({ email: req.session.email })
  let {id} = req.params
  let sock = await Socks.findById(id)
  console.log(sock)
  user.box.push({ item: sock, amount: 1 })
  await user.save()
res.json({user})
  // res.render('favsock',{sock})
 })

module.exports= router
