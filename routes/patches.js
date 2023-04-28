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


router.patch('/', (req, res) => {
    res.send('patches')
})

//patch professor (admin only)
router.patch('/admin/Professor/:id', getFunction.getProfessor , async (req, res) => {

    Object.keys(req.body).forEach((key) => {
        professpr[key] = req.body[key];
      })

    try {
        const updatedProfessor = await res.professor.save()
        res.json(updatedProfessor)
    } catch (err) {
        res.status(400).json({message : err.message})
    }
}) 

//patch student (admin only)
router.patch('/admin/student/:id', getFunction.getStudent , async (req, res) => {

    Object.keys(req.body).forEach((key) => {
        student[key] = req.body[key];
      })

    try {
        const updatedStudent = await res.student.save()
        res.json(updatedStudent)
    } catch (err) {
        res.status(400).json({message : err.message})
    }
}) 

//patch manager (admin only)
router.patch('/admin/manager/:id', getFunction.getManager , async (req, res) => {

    Object.keys(req.body).forEach((key) => {
        manager[key] = req.body[key];
      })

    try {
        const updatedManager = await res.manager.save()
        res.json(updatedManager)
    } catch (err) {
        res.status(400).json({message : err.message})
    }
}) 

//patch course (manager)
router.patch('/course/:id', getFunction.getCourse , async (req, res) => {
    Object.keys(req.body).forEach((key) => {
        course[key] = req.body[key];
      })

    try {
        const updatedCourse = await res.course.save()
        res.json(updatedCourse)
    } catch (err) {
        res.status(400).json({message : err.message})
    }
}) 

module.exports = router