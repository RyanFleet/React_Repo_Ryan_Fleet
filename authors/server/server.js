const express = require('express');
const app = express();
const authorRoutes = require('./routes/authors.routes')
const port = 8000;
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( {extended: true} ));

require('./routes/authors.routes')(app)
require('./config/mongoose.config')
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );