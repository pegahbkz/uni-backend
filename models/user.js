//fetch libraries
const mongoose = require('mongoose')

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


const managerSchema = new mongoose.Schema({
    department: {
        type: String,
        required: true
    }
})

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
    student: studentSchema,
    professor: professorSchema,
    manager: managerSchema
})

module.exports = mongoose.model('User', userSchema);