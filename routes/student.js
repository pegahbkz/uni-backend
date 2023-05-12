const express = require('express')
const router = express.Router()
const User = require('../models/user')
const authenticate = require('../middleware/auth.js')

router.get('/all', async (req, res) => {
    try {
        const students = await User.find({role: "student"})
        res.json(students)
    }
    catch(err) {
        //error on server and db, not user.
        return res.status(500).json({ message : err.message})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const student = await User.findById(req.params.id)
        if(student == null) {
            //404 not found
            res.status(404).json({message : "user not found"})
            return
        }
        if(student.role != "student") {
            //404 not found
            res.status(404).json({message : "user is not a student"})
            return
        }
        return res.send(student)
    }
    catch (err){
         res.status(500).json({message : err.message})
         return
    }
})

router.put('/student/:id',  async (req, res) => {
    const {name, idnumber, password, email, 
        phonenumber, role, studentObject} = req.body

    try {
        const student = await User.findByIdAndUpdate(req.params.id, req.body, {new: true} )
        if(student == null || student.role != "student") {
            //404 not found
             res.status(404).json({message : "user not found"})
             return
        }
        return res.send(student)
    }
    catch (err){
         res.status(500).json({message : err.message})
         return
    }
})

module.exports = router