//fetch libraries
const express = require('express')
const router = express.Router()

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
router.get('/admin/Professor/:id', getProfessor, (req, res) => {
    res.send(res.professor.firstname)
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
router.get('/admin/student/:id', getStudent, (req, res) => {
    res.send(res.student.firstname)
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
router.get('/admin/manager/:id', getManager, (req, res) => {
    res.send(res.manager.firstname)
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

async function getProfessor(req, res, next) {
    let pofessor
    try {
        professor = await Professor.findById(req.params.id)
        if(professor == null) {
            //404 not found
            return res.status(404)({message: 'Cannot find professor.'})
        }
    }
    catch (err){
        return res.status(500).json({message : err.message})
    }
    res.professor = professor
    next()
}

async function getStudent(req, res, next) {
    let student
    try {
        student = await Student.findById(req.params.id)
        if(student == null) {
            //404 not found
            return res.status(404)({message: 'Cannot find student.'})
        }
    }
    catch (err){
        return res.status(500).json({message : err.message})
    }
    res.student = student
    next()
}

async function getManager(req, res, next) {
    let manager
    try {
        manager = await Manager.findById(req.params.id)
        if(manager == null) {
            //404 not found
            return res.status(404)({message: 'Cannot find manager.'})
        }
    }
    catch (err){
        return res.status(500).json({message : err.message})
    }
    res.manager = manager
    next()
}


module.exports = router