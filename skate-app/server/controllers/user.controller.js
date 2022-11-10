const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY

module.exports.registerUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        // console.log(newUser)
        const userToken = jwt.sign({
            _id: user._id,
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword,
        }, SECRET)
        // console.log(SECRET)
        res.status(201).cookie('userToken', userToken, SECRET, { httpOnly: true }).json({ message: 'User Registered', user: user })
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
            // console.log('here')
            return res.sendStatus(400);
        }

        const userToken = jwt.sign({
            id: user._id
        }, SECRET);

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


