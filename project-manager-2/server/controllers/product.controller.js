const Product = require('../models/product.model')

module.exports.createProduct = (req,res)=>{
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err=>res.json(err))
}

module.exports.allProducts = (req,res)=>{
    Product.find()
        .then(products=>res.json(products))
        .catch(err=>res.json(err))
}

module.exports.getOneProduct = (req,res)=>{
    Product.findById({_id:req.params.id})
        .then(product=>res.json(product))
        .catch(err=>res.json(err))
}
