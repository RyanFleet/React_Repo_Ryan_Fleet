const mongoose = require('mongoose')


const videoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [2, 'Title must be 2 or more characters.']
    },
    description: {
        type: String
    },
    link: {
        type: String,
        required: [true, 'Video Link is required!'],
    },
    company: {
        type: String,
        required: [true, 'User / Company is required!'],
        enum:[
            'User',
            'Almost',
            'Baker',
            'Palace',
            'Converse-Cons',
            'Welcome',
            'Creature',
            'Santa Cruz',
            'Independent',
            'Bronze 56k',
        ]
    },
    date:{
        type: Date
    },
    creator:{
        type:String,
        required:[true,'Created By is required!']
    }
}, { timestamps: true })

module.exports = mongoose.model('Video', videoSchema)