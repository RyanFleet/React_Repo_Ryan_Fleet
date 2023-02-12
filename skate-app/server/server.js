const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')
const cookieParser = require('cookie-parser');
const path = require('path')

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

require('dotenv').config()
require('./routes/user.routes')(app)
require('./routes/video.routes')(app)
require('./config/mongoose.config')

app.listen(port, () => console.log(`Listening on port: ${port}`));