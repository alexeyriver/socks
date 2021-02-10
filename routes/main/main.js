
const router = require('express').Router()

router.get('/',(req,res)=>{
  //res.send('hey its main')
  res.render('index')
})


module.exports= router
