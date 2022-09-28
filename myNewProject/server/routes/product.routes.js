const ProductController = require('../controllers/product.controller')

module.exports = (app) =>{
    app.get('/api', ProductController.index)
    app.get('/api/allProducts', ProductController.allProducts)
    app.post('/api/products', ProductController.createProduct)
}