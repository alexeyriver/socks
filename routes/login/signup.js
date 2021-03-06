const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../../models/users')

router.get('/signup', (req, res) => {
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
  res.json({
      success: true,
      message: 'User done'
    })
 // res.render('index')
// res.redirect('/')
  }
  else res.json({
    success: false,
    message: 'Email already use'
  })
  // res.status(201).json({
  //   success: true,
  //   message: 'User done'
  // })

})


module.exports = router
