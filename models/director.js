//fetch libraries
const mongoose = require('mongoose')
const User = require('./user')

const directorSchema = new mongoose.Schema({
    department: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'director'],
        default: 'director'
      }
})

//extend user and add new properties
module.exports = User.discriminator('Director', directorSchema);