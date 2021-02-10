const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user') 

// registartion

router.get('/signup',(req,res)=>{

  /////  регистрация пользователя
  //// проверка имени пользователя на уникальность
  //// 
  ///// редирект на мэйн
  res.render('signup')
})


router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body
  const salt = bcrypt.genSaltSync(10)
  const hashPassword = bcrypt.hashSync(password, salt) 
  const user = new User({
    name,
    email,
    password: hashPassword
  })

  req.session.name = name
  await user.save()

  res.status(201).json({
    success: true,
    message: 'User done'
})
})



module.exports= router
