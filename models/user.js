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
    role: {
        type: String,
        enum: ['student', 'professor', 'manager', 'admin'],
        required: true
    },
    studentObject: {
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
        department: {
            type: String,
        },
        major: {
            type: String,
        }
    },
    professorObject: {
        rank: {
            type: String,
        },
        department: {
            type: String,
        },
        major: {
            type: String,
        }
    },
    managerObject: {
        department: {
            type: String,
        }
    }
})

module.exports = mongoose.model('User', userSchema);