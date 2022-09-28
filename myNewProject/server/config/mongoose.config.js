const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/product", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log("Established a connection to db"))
    .catch(err => console.log("something went wrong when connecting to db",err))