const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../../models/users')

// registartion

router.get('/signup', (req, res) => {

  /////  регистрация пользователя
  //// проверка имени пользователя на уникальность
  //// 
  ///// редирект на мэйн
  res.render('signup')
})


router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body
  console.log(name, email, password ,'19');
  const userCheck =await User.find({email:email})
  console.log(userCheck, '21signup')
  if(!userCheck.length){
      const salt = bcrypt.genSaltSync(10)
  const hashPassword = bcrypt.hashSync(password, salt)
  const user = new User({
    name,
    email,
    password: hashPassword
  })
  res.locals.login = true;
  req.session.name = name
  req.session.email = email // ???

  await user.save()
  console.log(req.session);
  // res.status(201).json({
  //     success: true,
  //     message: 'User done'
  //   })
  res.render('index')
  }
  else res.send('такой пользователь уже есть')

  // res.status(201).json({
  //   success: true,
  //   message: 'User done'
  // })

})



module.exports = router
