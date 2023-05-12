const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Course = require('../models/course')
const authenticate = require('../middleware/auth.js')
const isAdmin = require('../middleware/isAdmin.js')
const isStudent = require('../middleware/isStudent.js')
const isManager = require('../middleware/isManager.js')
const isProfessor = require('../middleware/isProfessor.js')
const accessLevel = require('../middleware/accessLevel.js')


router.get('/all', accessLevel ,async (req, res) => {
    try {
        if(req.roleNumber == "1"){
                const course = await Course.find()
                res.json(course)
        }
        else if(req.roleNumber == "3"){
            const currentUser = await User.findById(req.studentID)
            const course = await Course.find({department: currentUser.department})
            res.json(course)
        }
        else if(req.roleNumber == "2"){
            const currentUser = await User.findById(req.professorID)
            const course = await Course.find({department: currentUser.department})
            res.json(course)
        }
    }
    catch(err) {
        //error on server and db, not user.
        return res.status(500).json({ message : err.message})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
        if(course == null) {
            //404 not found
            res.status(404).json({message : "course not found"})
            return
        }
        return res.send(course)
    }
    catch (err){
         res.status(500).json({message : err.message})
         return
    }
})

router.post('/', isManager ,async (req, res) => {
    const {name, department, prerequisites, requisites, credits, 
        role, classDate, classTime, examDate, examTime,examLocation, professor,
        capacity, term} = req.body
    
    const course = new Course(
        {name, department, prerequisites, requisites, credits, 
            role, classDate, classTime, examDate, examTime,examLocation, professor,
            capacity, term}
    ) 

    try {
        await course.save()
        //201: successfully created object
        //res.status(201).json(course)
        return res.send(course)
    }
    catch (err) {
        //400: wrong user input
        res.status(400).json({message : err.message})
        return
    }
})

router.put('/:id', isManager ,  async (req, res) => {
    const {name, department, prerequisites, requisites, credits, 
        role, classDate, classTime, examDate, examTime,examLocation, professor,
        capacity, term} = req.body

    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, {new: true} )
        if(course == null) {
            //404 not found
             res.status(404).json({message : "course not found"})
             return
        }
        return res.send(course)
    }
    catch (err){
         res.status(500).json({message : err.message})
         return
    }
})

router.delete('/:id', isManager  ,async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id)
        if(course == null) {
            //404 not found
             res.status(404).json({message : "course not found"})
             return
        }
        return res.send(course)
    }
    catch (err){
         res.status(500).json({message : err.message})
         return
    }
})

module.exports = router