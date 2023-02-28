const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

mongoose.connect('mongodb+srv://RyanFleet:1993Flee@cluster0.v5yyg8t.mongodb.net/?retryWrites=true&w=majority' || MONGO_URI,{dbName: 'Skate-Vault'},{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(()=> console.log('Established connection to db'))
.catch(err=>console.log('Something went wrong.',err))