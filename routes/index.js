const express = require('express')
const router = express.Router()

const User = require('../models/user')
const Admin = require('../models/admin')
const Manager = require('../models/manager')
const Professor = require('../models/Professor')
const Course = require('../models/course')

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

router.post('/Professor', async (req, res) => {
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

module.exports = router