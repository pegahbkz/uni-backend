//fetch libraries
const mongoose = require('mongoose')
const User = require('./user')

const adminSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'admin'
      }
})

//extend user and add new properties
module.exports = User.discriminator('Admin', adminSchema);