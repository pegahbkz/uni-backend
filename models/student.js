const mongoose = require('mongoose')
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
    }
})

module.exports = User.discriminator('Student', studentSchema);