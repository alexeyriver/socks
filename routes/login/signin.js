const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../../models/users')

router.get('/signin', (req, res) => {
  res.render('signin')
})

router.post('/signin', async (req, res) => {
  const { email, password } = req.body
  console.log(email, password);
  const candidate = await User.findOne({ email: email })
  if (candidate) {
    if (bcrypt.compareSync(password, candidate.password)) {
      res.locals.login = true;
      req.session.name = candidate.name // ???
      req.session.email = candidate.email // ???
      // res.render('index',{name:candidate.name})
      res.json({
        success: true,
        message: 'User in'
      })
    } else {
      res.json({
        success: 'invalid',
        message: 'Invalid User or password'
      })
    }
  } else {
    res.json({
      success: false,
      message: 'User don`t found'
    })
  }
})




// router.post('/signin', async (req, res) => {



//   const { email, password } = req.body
//   console.log(email, password);
//   const candidate = await User.findOne({ email: email })
//   console.log(candidate);
//   if (candidate) {
//     if (bcrypt.compareSync(password, candidate.password)) {

//       res.locals.login = true;
//       req.session.name = candidate.name // ???
//       req.session.email = candidate.email // ???

//       res.render('index',{name:candidate.name})
//       // res.status(200).json({
//       //   success: true,
//       //   message: 'User in'
//       // })
//     } else {
//       /// вывод ошибки (неправильный логин или пароль)
//       res.status(404).json({
//         success: false,
//         message: 'User donot found'
//       })
//     }

//   } else {
//     // вывод ошибки - такого логина не существует
//     res.status(404).json({
//       success: false,
//       message: 'User donot found'
//     })
//   }

// })


module.exports = router
