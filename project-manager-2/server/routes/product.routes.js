const ProductController = require('../controllers/product.controller')

module.exports = (app) =>{
    app.get('/api/allProducts', ProductController.allProducts)
    app.get('/api/products/:id',ProductController.getOneProduct)
    app.post('/api/products', ProductController.createProduct)
}