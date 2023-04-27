//fetch libraries
const express = require('express')
const router = express.Router()
const getFunction = require('./getFunctions')


//fetch models
const User = require('../models/user')
const Admin = require('../models/admin')
const Manager = require('../models/manager')
const Professor = require('../models/Professor')
const Course = require('../models/course')


router.delete('/', (req, res) => {
    res.send('Posts')
})


router.delete('/admin/Professor/:id', getFunction.getProfessor , async (req, res) => {
    try {
        await res.professor.remove()
        res.json({ message : 'deleted'})
    }
    catch (err) {
        res.status(500).json({message : err.message})
    }
}) 

router.delete('/admin/manager/:id', getFunction.getManager , async (req, res) => {
    try {
        await res.manager.remove()
        res.json({ message : 'deleted'})
    }
    catch (err) {
        res.status(500).json({message : err.message})
    }
}) 

module.exports = router