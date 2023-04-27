//fetch libraries
const mongoose = require('mongoose')
const Course = require('./course')

const availablecourseSchema = new mongoose.Schema({
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
        required: true
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
        required: true
    },
    role: {
        type: String,
        enum: ['course', 'availablecourse'],
        default: 'availablecourse'
      }
})

//extend user and add new properties
module.exports = Course.discriminator('AvailableCourse', availablecourseSchema);