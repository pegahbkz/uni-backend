//fetch libraries
const express = require('express')
const router = express.Router()

//fetch models
const User = require('../models/user')
const Admin = require('../models/admin')
const Manager = require('../models/manager')
const Professor = require('../models/Professor')


router.post('/', (req, res) => {
    res.send('Posts')
})

router.post('/login', (req, res) => {
    res.send('Post login')
})

router.post('/admin/Professor', async (req, res) => {
    const {firstname, lastname, id, password, email, 
        phonenumber, rank, department, major} = req.body

    const professor = new Professor({
        firstname, lastname, id, password, email, 
        phonenumber, rank, department, major
    }) 

    try {
        const newProfessor = await professor.save()
        //201: successfully created object
        res.status(201).json(newProfessor)
    }
    catch (err) {
        //400: wrong user input
        res.status(400).json({message : err.message})
    }
})

router.post('/admin/student',async (req, res) => {
    const {firstname, lastname, id, password, email, 
        phonenumber, degree, year, term, average, 
        department, major} = req.body

    const student = new Student({
        firstname, lastname, id, password, email, 
        phonenumber, degree, year, term, average, 
        department, major}) 

    try {
        const newStudent = await student.save()
        //201: successfully created object
        res.status(201).json(newStudent)
    }
    catch (err) {
        //400: wrong user input
        res.status(400).json({message : err.message})
    }
})

router.post('/admin/manager', async (req, res) => {
    const {firstname, lastname, id, password, email, 
        phonenumber, department} = req.body

    const manager = new Manager({
        firstname, lastname, id, password, email, 
        phonenumber, department}) 

    try {
        const newManager = await manager.save()
        //201: successfully created object
        res.status(201).json(newManager)
    }
    catch (err) {
        //400: wrong user input
        res.status(400).json({message : err.message})
    }
})

router.post('/course',async (req, res) => {
    const {name, prerequisites, requisites, credits} = req.body

    const course = new Course(
        {name, prerequisites, requisites, credits}) 
        
    try {
        const newCourse = await course.save()
        //201: successfully created object
        res.status(201).json(newCourse)
    }
    catch (err) {
        //400: wrong user input
        res.status(400).json({message : err.message})
    }
})

module.exports = router