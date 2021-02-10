
const router = require('express').Router()

router.get('/',(req,res)=>{
  
  ///// проверка на сессию 
  //// если она есть,
  ///// рендерим индекс 
  ///// если сессии нет,
  ////  редирект на (/login/signin)





  res.render('index')
})


module.exports= router
