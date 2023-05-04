//fetch libraries
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const User = require('./user')

const studentSchema = new mongoose.Schema({
    degree: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    term: {
        type: String,
        required: true
    },
    average: {
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
        enum: ['user', 'student'],
        default: 'student'
      }
})

//extend user and add new properties
module.exports = User.discriminator('Student', studentSchema);