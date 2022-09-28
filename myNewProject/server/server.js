const express = require('express');
const personRoutes = require('./routes/product.routes');
const app = express();
const port = 8000;
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

require('./routes/product.routes')(app);
require('./config/mongoose.config');

app.listen(port, () => console.log(`Listening on port: ${port}`) );