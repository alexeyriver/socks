
const router = require('express').Router()

router.get('/',(req,res)=>{
  if (req.session.name) {
    res.render('index')
  }
  else 
  res.redirect('/login/signin')

  ///// проверка на сессию 
  //// если она есть,
  ///// рендерим индекс 
  ///// если сессии нет,
  ////  редирект на (/login/signin)

})


module.exports= router
