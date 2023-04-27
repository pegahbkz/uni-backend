//fetch libraries
const express = require('express')
const router = express.Router()

//fetch models
const User = require('../models/user')
const Admin = require('../models/admin')
const Director = require('../models/manager')
const Professor = require('../models/Professor')


router.post('/', (req, res) => {
    res.send('Posts')
})

router.post('/login', (req, res) => {
    res.send('Post login')
})

router.post('/admin/Professor', async (req, res) => {
    const professor = new Professor({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        id: req.body.id,
        password: req.body.password,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        rank: req.body.rank,
        department: req.body.department,
        major: req.body.major
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

router.post('/admin/student', (req, res) => {
    res.send('post admin student')
})

router.post('/admin/manager', (req, res) => {
    res.send('post admin manager')
})

router.post('/course', (req, res) => {
    res.send('post course')
})

module.exports = router