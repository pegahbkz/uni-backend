//fetch libraries
const express = require('express')
const router = express.Router()

//fetch models
const User = require('../models/user')
const Admin = require('../models/admin')
const Director = require('../models/manager')
const Professor = require('../models/Professor')
const Course = require('../models/course')


router.delete('/', (req, res) => {
    res.send('Posts')
})


router.delete('/admin/Professor/:id', async (req, res) => {

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

router.delete('/admin/manager/:id', async (req, res) => {

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

router.delete('/course/:id', async (req, res) => {

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


async function getProfessor(req, res, next) {
    let rpofessor
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

module.exports = router