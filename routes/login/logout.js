const router = require('express').Router()

router.get('/logout',async(req,res)=>{
  
  /////  выход пользователяя 
  //// удаление куков и сесиии
  ///// редирект на мэйн
 
  await req.session.destroy();
  res.clearCookie("user_sid");
  res.redirect('/')


})


module.exports= router
