const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')
const cookieParser = require('cookie-parser');
const socket = require('socket.io');

app.use(cors());
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded( {extended: true} ));

require('dotenv').config()
// require('./routes/user.routes')(app)
require('./config/mongoose.config')
    
const server = app.listen(port, () => console.log(`Listening on port: ${port}`) );

const io = socket(server,{
    cors:{
        origin:'http://localhost:3000',
        credintials: true,
        methods:['GET','POST'],
        allowHeaders:['*'],
    }
})
io.on('connection',socket=>{
    console.log('Nice to meet you. ' + socket.id)
    socket.on('event_from_client',data=>{
        socket.broadcast.emit('event_to_all_other_clients',data)
    })
})