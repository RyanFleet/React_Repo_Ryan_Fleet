const AuthorController = require('../controllers/authors.controller')

module.exports = (app) =>{
    //get all
    app.get('/api/allAuthors', AuthorController.allAuthors)

    // get one
    app.get('/api/authors/:id',AuthorController.getOneAuthor)

    // create one
    app.post('/api/authors', AuthorController.createAuthor)

    // update one
    app.put('/api/authors/:id', AuthorController.updateAuthor)

    //delete one
    app.delete('/api/authors/:id',AuthorController.deleteAuthor)
}