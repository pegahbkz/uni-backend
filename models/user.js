//fetch libraries
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    idnumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    department: {
        type: String,
    },
    role: {
        type: String,
        enum: ['student', 'professor', 'manager', 'admin'],
        required: true
    },
    degree: {
        type: String,
    },
    year: {
            type: String,
    },
    term: {
        type: String,
    },
    average: {
        type: String,
    },
    rank: {
        type: String,
    },
    major: {
        type: String,
    }
})

module.exports = mongoose.model('User', userSchema);