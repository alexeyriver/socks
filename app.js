const express = require('express')
const middleware = require('./middleware')
const mainRouter = require('./routes/main/main')
const generatorRouter = require('./routes/generator/generator')
const favouritesRouter = require('./routes/favourites/favourites')
const boxRouter = require('./routes/box/box')

const app = express()
middleware(app)

app.use('/',mainRouter)
app.use('/generator',generatorRouter)
app.use('/favourites',favouritesRouter)
app.use('/box',boxRouter)


module.exports= app
