//fetch libraries
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

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
    },
    role: {
        type: String,
        enum: ['user', 'Professor'],
        default: 'Professor'
      }
})

//extend user and add new properties
module.exports = User.discriminator('Professor', professorSchema);