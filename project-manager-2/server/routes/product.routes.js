const ProductController = require('../controllers/product.controller')

module.exports = (app) =>{
    //get all
    app.get('/api/allProducts', ProductController.allProducts)

    // get one
    app.get('/api/products/:id',ProductController.getOneProduct)

    // create one
    app.post('/api/products', ProductController.createProduct)
}