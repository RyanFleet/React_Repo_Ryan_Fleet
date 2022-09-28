
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const port = 8000

require('./config/mongoose.config')

app.use(express.json(), express.urlencoded({extended: true}))

const AllMyUserRoutes = require('./routes/joke.routes')
AllMyUserRoutes(app)

app.listen(port, ()=> console.log(`Server up and running on port ${port}`))
