
const router = require('express').Router()

router.get('/',(req,res)=>{
  res.send('hey its main')
})


module.exports= router
