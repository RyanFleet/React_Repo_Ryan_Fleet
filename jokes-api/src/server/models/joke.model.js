const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true, 'Setup is required.'],
        minLength: [4, 'Setup must be at least 4 characters.']
    },
    punchLine:{
        type: String,
        required: [true, 'Punch Line is required.'],
        minLength: [4, 'Punch Line must be atleast 4 character.']
    }
},{timestamps:true})

const joke = mongoose.model('joke', JokeSchema)

module.exports = joke;