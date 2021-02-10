const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../../models/users')

router.get('/signin', (req, res) => {

  /////  вход  пользователя
  //// если такого пользователя нет, выводим ошибку
  ///// 






  res.render('signin')
})


router.post('/signin',async (req, res) => {
  const { email, password } = req.body
console.log(email,password);
  const candidate = await User.findOne({email: email })
  if (candidate) {
    if ( bcrypt.compareSync(password, candidate.password)) {
     
      res.locals.login = true;
      req.session.name = candidate.name // ???
res.render('index')
      // res.status(200).json({
      //   success: true,
      //   message: 'User in'
      // })
    } else {
      res.status(404).json({
        success: false,
        message: 'User donot found'
      })
    }

  } else {
    res.status(404).json({
      success: false,
      message: 'User donot found'
    })
  }


})



module.exports = router
