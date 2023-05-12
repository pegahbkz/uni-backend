//fetch libraries
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    prerequisites: [{
        type: Schema.Types.ObjectID,
        ref: 'Course'
    }],
    requisites: [{
        type: Schema.Types.ObjectID,
        ref: 'Course'
    }],
    credits: {
        type: Number,
        required: true
    },
    classDate: {
        type: Date,
        default: Date.now
    },
    classTime: {
        type: String,
        default: '00:00'
    },
    examDate: {
        type: Date,
        default: Date.now
    },
    examTime: {
        type: String,
        default: '00:00'
    },
    examLocation: {
        type: String,
    },
    professor: {
        type: Schema.Types.ObjectID,
        ref: 'Professor'
    },
    capacity: {
        type: Number,

    },
    term: {
        type: String,
    },
    role: {
        type: String,
        enum: ['course', 'availablecourse'],
        default: 'course'
      }
})

module.exports = mongoose.model('Course', courseSchema);