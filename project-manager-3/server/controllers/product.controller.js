const Product = require('../models/product.model')

//create
module.exports.createProduct = (req,res)=>{
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err=>res.json(err))
}

// get all
module.exports.allProducts = (req,res)=>{
    Product.find()
        .then(products=>res.json(products))
        .catch(err=>res.json(err))
}

// get one
module.exports.getOneProduct = (req,res)=>{
    Product.findById({_id:req.params.id})
        .then(product=>res.json(product))
        .catch(err=>res.json(err))
}

// update one
module.exports.updateProduct = (req,res)=>{
    Product.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updatedProduct=>res.json(updatedProduct))
        .catch(err=>console.log(err))
}

// delete one
module.exports.deleteProduct=(req,res)=>{
    Product.deleteOne({_id:req.params.id})
    .then(deletedProduct=>res.json(deletedProduct))
    .catch(err=>console.log(err))
}