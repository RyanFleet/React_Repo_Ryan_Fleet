const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {type:String},
    price: {type:Number},
    description: {type:String},
},{timestamps: true})
module.exports = mongoose.model('Product',productSchema)