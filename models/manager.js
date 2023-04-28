//fetch libraries
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const User = require('./user')

const managerSchema = new mongoose.Schema({
    department: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'manager'],
        default: 'manager'
      }
})

//extend user and add new properties
module.exports = User.discriminator('Manager', managerSchema);