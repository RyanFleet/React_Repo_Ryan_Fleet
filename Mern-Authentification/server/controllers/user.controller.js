const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY

// create pet
module.exports.createUser = (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ err }))
}

// get all
module.exports.allUsers = (req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ err }))
}

// get one
module.exports.getOneUser = (req, res) => {
    User.findById({ _id: req.params.id })
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ err }))
}

// update one
module.exports.updateUser = (req, res) => { // runValidators below is very important!!!!
    User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.status(400).json({ err }))
}

// delete one
module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(deletedUser => res.json(deletedUser))
        .catch(err => res.status(400).json({ err }))
}


module.exports.registerUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        // console.log(newUser)
        const userToken = jwt.sign({
            _id: newUser._id,
            email: newUser.email,
            password: newUser.password,
            confirmPassword: newUser.confirmPassword,
        }, SECRET)
        // console.log(SECRET)
        res.status(201).cookie('userToken', userToken, SECRET, { httpOnly: true }).json({ message: 'User Registered', user: newUser })
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user === null) {
            return res.sendStatus(400);
        }

        const correctPassword = await bcrypt.compare(req.body.password, user.password);

        if (!correctPassword) {
            return res.sendStatus(400);
        }

        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);

        res.cookie("userToken", userToken, SECRET, {
            httpOnly: true
        })
            .json({ msg: "success!" });
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports.logout = (req,res)=>{
    res.clearCookie('userToken');
    res.sendStatus(200);
}

