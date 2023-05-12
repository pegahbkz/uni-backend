//fetch libraries
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    prerequisites: {
        type: String
    },
    requisites: {
        type: String
    },
    credits: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['course', 'availablecourse'],
        requires: true
      },
    classDate: {
            type: String
    },
    classTime: {
        type: String
    },
    examDate: {
        type: String
    },
    examTime: {
        type: String
    },
    examLocation: {
        type: String
    },
    professor: {
        type: String
    },
    capacity: {
        type: String
    },
    term: {
        type: String
    }
})

module.exports = mongoose.model('Course', courseSchema);