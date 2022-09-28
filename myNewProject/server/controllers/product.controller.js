const Product = require('../models/product.model')

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    })
}
module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.allProducts = (req,res)=>{
    Product.find()
        .then(products=>{res.json(products)})
        .catch(err=>res.json(err))
}