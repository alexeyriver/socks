const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user') 

router.get('/signin',(req,res)=>{
  
  /////  вход  пользователя
  //// если такого пользователя нет, выводим ошибку
  ///// 
 





  res.render('signin')
})


router.post('/signin', (req, res) => {
  const { email, password } = req.body

  const candidate = await User.findOne({email})
  if(candidate) {
    if(bcrypt.compareSync(password, candidate.password)) {
        req.session.user = candidate.name // ???
        res.status(200).json({
            success: true,
            message: 'User in'
        })
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



module.exports= router
