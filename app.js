const express = require('express')
const middleware = require('./middleware/index')
const mainRouter = require('./routes/main/main')
const generatorRouter = require('./routes/generator/generator')
const favouritesRouter = require('./routes/favourites/favourites')
const boxRouter = require('./routes/box/box')
const signinRouter = require('./routes/login/signin')
const signupRouter = require('./routes/login/signup')
const logoutRouter = require('./routes/login/logout')

const session = require('./middleware/session')

const app = express()

middleware(app)
app.use(session.sessionVariables)
app.use('/',mainRouter)
app.use('/generator',generatorRouter)
app.use('/favourites',favouritesRouter)
app.use('/box',boxRouter)
app.use('/login',signinRouter,signupRouter,logoutRouter) ///// возможно разнести по каждому


module.exports= app
