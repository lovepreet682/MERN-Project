const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserRegisterSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user_register', UserRegisterSchema)