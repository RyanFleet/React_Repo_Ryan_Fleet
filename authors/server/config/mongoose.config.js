const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/authors',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(()=> console.log('Established connection to db'))
.catch(err=>console.log('Something went wrong.',err))