const mongoose = require('mongoose')

const bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [3, 'Name must be 3 or more characters.']
    },
    email: {
        type: String,
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email",
        required: [true, 'Email is required!'],
        minLength: [3, 'Email must be 3 or more characters.']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [8, 'Password must be 8 or more characters.']
    },
    job: {
        type: String,
        required: [true, 'Job is required!'],
        minLength: [3, 'Job must be 3 or more characters.']
    }
}, { timestamps: true })


userSchema.virtual('confirmPassword')
.get(() => this._confirmPassword)
.set(value => this._confirmPassword = value);

// check confirm with password
userSchema.pre('validate', function (next) {
    if (this.confirmPassword != this.password) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next()
})

/////////// bcrypt
userSchema.pre('save', async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password,10)
        console.log(hashedPassword)
        this.password = hashedPassword
        next()
    } catch{
        console.log('errors', error)
    }
})

// both work (bcrypt)

// userSchema.pre('save', function (next) {
//     bcrypt.hash(this.password, 10)
//     .then(hash => {
//         this.password = hash
//         next()
//     })
// })
////////

module.exports = mongoose.model('User', userSchema)