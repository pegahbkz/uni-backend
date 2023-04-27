//fetch libraries
const mongoose = require('mongoose')
const User = require('./user')

const professorSchema = new mongoose.Schema({
    rank: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    }
})

//extend user and add new properties
module.exports = User.discriminator('Professor', professorSchema);