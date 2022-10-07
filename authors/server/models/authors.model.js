const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
    firstName: {
        type:String,
        required:[true,'First Name is required!'],
        minLength:[2,'First Name must be 2 or more characters.']
    },
    lastName: {
        type:String,
        required:[true,'Last Name is required!'],
        minLength:[2,'Last Name must be 2 or more characters.']
    },
    age: {
        type:Number,
        required:[true,'Age is required!']
    },
    books: {
        type:String,
        required:[true,'One Book is required!'],
        minLength:[3,'Books must be 3 or more characters.']
    },
    rating: {
        type:Number,
        required:[true,'A Rating is required!'],
    }
},{timestamps: true})
module.exports = mongoose.model('Author', authorSchema)