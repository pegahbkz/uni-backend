const express = require('express')
const router = express.Router()
const Course = require('../models/course')
const authenticate = require('../middleware/auth.js')

router.get('/all'  ,async (req, res) => {
    try {
        const course = await Course.find()
        res.json(course)
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

router.post('/', async (req, res) => {
    const {name, prerequisites, requisites, credits, 
        role, availableObject} = req.body
    
    const course = new Course(
        {name, prerequisites, requisites, credits, 
        role, availableObject}
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

router.put('/:id',  async (req, res) => {
    const {name, prerequisites, requisites, credits, 
        role, availableObject} = req.body

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

router.delete('/:id' ,async (req, res) => {
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