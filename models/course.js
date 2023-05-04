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
        match: /^([01]\d|2[0-3]):([0-5]\d)(?::([0-5]\d))?$/,
        default: '00:00'
    },
    examDate: {
        type: Date,
        default: Date.now
    },
    examTime: {
        type: String,
        match: /^([01]\d|2[0-3]):([0-5]\d)(?::([0-5]\d))?$/,
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
        required: true
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