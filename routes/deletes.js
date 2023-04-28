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
    res.send('deletes')
})

//delete professor (admin only)
router.delete('/admin/Professor/:id', getFunction.getProfessor , async (req, res) => {
    try {
        await res.professor.remove()
        res.json({ message : 'deleted'})
    }
    catch (err) {
        res.status(500).json({message : err.message})
    }
}) 

//delete student (admin only)
router.delete('/admin/student/:id', getFunction.getStudent , async (req, res) => {
    try {
        await res.student.remove()
        res.json({ message : 'deleted'})
    }
    catch (err) {
        res.status(500).json({message : err.message})
    }
}) 

//delete manager (admin only)
router.delete('/admin/manager/:id', getFunction.getManager , async (req, res) => {
    try {
        await res.manager.remove()
        res.json({ message : 'deleted'})
    }
    catch (err) {
        res.status(500).json({message : err.message})
    }
}) 

//delete course (manager)
router.delete('/course/:id', getFunction.getCourse , async (req, res) => {
    try {
        await res.course.remove()
        res.json({ message : 'deleted'})
    }
    catch (err) {
        res.status(500).json({message : err.message})
    }
}) 

module.exports = router