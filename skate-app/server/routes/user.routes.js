const UserController = require('../controllers/user.controller')

module.exports = (app) => {
    // logout
    app.get('/api/logout', UserController.logout)

    // register
    app.post('/api/register', UserController.registerUser)

    // login
    app.post('/api/login', UserController.login)
}