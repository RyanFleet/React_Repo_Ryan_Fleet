const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')
const cookieParser = require('cookie-parser');

app.use(cors({ credentials: true, origin: 'http://127.0.0.1:3000' }));
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

require('dotenv').config()
require('./routes/user.routes')(app)
require('./routes/video.routes')(app)
require('./config/mongoose.config')

app.listen(port, () => console.log(`Listening on port: ${port}`));