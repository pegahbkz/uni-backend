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


router.get('/', async (req, res) => {

})

//get all professors (admin only)
router.get('/admin/Professors', async (req, res) => {
    try {
        const professors = await Professor.find()
        res.json(professors)
    }
    catch(err) {
        //error on server and db, not user.
        res.status(500).json({ message : err.message})
    }
})

//get one professor
router.get('/admin/Professor/:id', getFunction.getProfessor, (req, res) => {
    res.json(res.professor)
})

//get all students
router.get('/admin/students', async (req, res) => {
    try {
        const students = await Student.find()
        res.json(students)
    }
    catch(err) {
        //error on server and db, not user.
        res.status(500).json({ message : err.message})
    }
})

//get one student
router.get('/admin/student/:id', getFunction.getStudent, (req, res) => {
    res.json(res.student)
})

//get all managers
router.get('/admin/managers', async (req, res) => {
    try {
        const managers = await Manager.find()
        res.json(managers)
    }
    catch(err) {
        //error on server and db, not user.
        res.status(500).json({ message : err.message})
    }
})

//get one manager
router.get('/admin/manager/:id', getFunction.getManager, (req, res) => {
    res.json(res.manager)
})

//get all courses
router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find()
        res.json(courses)
    }
    catch(err) {
        //error on server and db, not user.
        res.status(500).json({ message : err.message})
    }
})


module.exports = router