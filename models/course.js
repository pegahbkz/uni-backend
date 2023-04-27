//fetch libraries
const mongoose = require('mongoose')

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
    role: {
        type: String,
        enum: ['course', 'availablecourse'],
        default: 'course'
      }
})

module.exports = mongoose.model('Course', courseSchema);