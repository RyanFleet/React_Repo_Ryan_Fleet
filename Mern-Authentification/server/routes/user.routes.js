const UserController = require('../controllers/user.controller')
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    //get all
    app.get('/api/allUsers', authenticate, UserController.allUsers)

    // get one
    app.get('/api/user/:id', authenticate, UserController.getOneUser)

    // logout
    app.get('/api/logout', UserController.logout)

    // create one
    app.post('/api/user', authenticate, UserController.createUser)

    // register
    app.post('/api/register', UserController.registerUser)

    // login
    app.post('/api/login', UserController.login)

    // update one
    app.put('/api/user/:id', authenticate, UserController.updateUser)

    //delete one
    app.delete('/api/user/:id', authenticate, UserController.deleteUser)

}