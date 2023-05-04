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




router.get('/', (req, res) => {
    res.send('Gets')



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

//get all professors (manager)
router.get('/Professors', async (req, res) => {
    try {
        const professors = await Professor.find()
        res.json(professors)
    }
    catch(err) {
        //error on server and db, not user.
        res.status(500).json({ message : err.message})
    }
})

//get one professor (admin only)
router.get('/admin/Professor/:id', getFunction.getProfessor, (req, res) => {
    res.json(res.professor)
})

//get one professor (manager)
router.get('/Professor/:id', getFunction.getProfessor, (req, res) => {
    res.json(res.professor)
})

//get all students (admin only)
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

//get all students (manager)
router.get('/students', async (req, res) => {
    try {
        const students = await Student.find()
        res.json(students)
    }
    catch(err) {
        //error on server and db, not user.
        res.status(500).json({ message : err.message})
    }
})

//get one student (admin only)
router.get('/admin/student/:id', getFunction.getStudent, (req, res) => {
    res.json(res.student)
})

//get one student (manager)
router.get('/student/:id', getFunction.getStudent, (req, res) => {
    res.json(res.student)
})

//get all managers (admin only)
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

//get one manager (admin only)
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

//get one course
router.get('/course/:id', getFunction.getCourse, (req, res) => {
    res.json(res.course)
})


module.exports = router