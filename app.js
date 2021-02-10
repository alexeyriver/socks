const express = require('express')
const middleware = require('./middleware')
const mainRouter = require('./routes/main/main')


const app = express()
middleware(app)
app.use('/',mainRouter)


module.exports= app
