const express = require('express')
const router = express.Router()
const User = require('../models/user')
const authenticate = require('../middleware/auth.js')

router.get('/professor/all'  ,async (req, res) => {
    try {
        const professors = await User.find({role: "professor"})
        res.json(professors)
    }
    catch(err) {
        //error on server and db, not user.
        return res.status(500).json({ message : err.message})
    }
})

router.get('/student/all', async (req, res) => {
    try {
        const students = await User.find({role: "student"})
        res.json(students)
    }
    catch(err) {
        //error on server and db, not user.
        return res.status(500).json({ message : err.message})
    }
})

router.get('/manager/all', async (req, res) => {
    try {
        const managers = await User.find({role: "managers"})
        res.json(managers)
    }
    catch(err) {
        //error on server and db, not user.
        return res.status(500).json({ message : err.message})
    }
})

router.get('/professor/:id', async (req, res) => {
    try {
        const professor = await User.findById(req.params.id)
        if(professor == null) {
            //404 not found
            res.status(404).json({message : "user not found"})
            return
        }
        if(professor.role != "professor") {
            //404 not found
            res.status(404).json({message : "user is not a professor"})
            return
        }
        return res.send(professor)
    }
    catch (err){
         res.status(500).json({message : err.message})
         return
    }
})

router.get('/student/:id', async (req, res) => {
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

router.get('/manager/:id', async (req, res) => {
    try {
        const manager = await User.findById(req.params.id)
        if(manager == null) {
            //404 not found
            res.status(404).json({message : "user not found"})
            return
        }
        if(student.role != "manager") {
            //404 not found
            res.status(404).json({message : "user is not a manager"})
            return
        }
        return res.send(manager)
    }
    catch (err){
         res.status(500).json({message : err.message})
         return
    }
})

router.post('/professor', async (req, res) => {
    const {name, idnumber, password, email, 
        phonenumber, role, professorObject} = req.body
    
    const professor = new User({
        name, idnumber, password, email, 
            phonenumber, role, professorObject}
    ) 

    try {
        await professor.save()
        //201: successfully created object
        //res.status(201).json(professor)
        return res.send(professor)
    }
    catch (err) {
        //400: wrong user input
        res.status(400).json({message : err.message})
        return
    }
})

router.post('/student', async (req, res) => {
    const {name, idnumber, password, email, 
        phonenumber, role, studentObject} = req.body
    
    const student = new User({
        name, idnumber, password, email, 
            phonenumber, role, studentObject}
    ) 

    try {
        await student.save()
        //201: successfully created object
        //res.status(201).json(professor)
        return res.send(student)
    }
    catch (err) {
        //400: wrong user input
        res.status(400).json({message : err.message})
        return
    }
})

router.post('/manager', async (req, res) => {
    const {name, idnumber, password, email, 
        phonenumber, role, managerObject} = req.body
    
    const manager = new User({
        name, idnumber, password, email, 
            phonenumber, role, managerObject}
    ) 

    try {
        await manager.save()
        //201: successfully created object
        //res.status(201).json(professor)
        return res.send(manager)
    }
    catch (err) {
        //400: wrong user input
        res.status(400).json({message : err.message})
        return
    }
})

router.put('/professor/:id',  async (req, res) => {
    const {name, idnumber, password, email, 
        phonenumber, role, professorObject} = req.body

    try {
        const professor = await User.findByIdAndUpdate(req.params.id, req.body, {new: true} )
        if(professor == null || professor.role != "professor") {
            //404 not found
             res.status(404).json({message : "user not found"})
             return
        }
        return res.send(professor)
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

router.put('/manager/:id',  async (req, res) => {
    const {name, idnumber, password, email, 
        phonenumber, role, managerObject} = req.body

    try {
        const manager = await User.findByIdAndUpdate(req.params.id, req.body, {new: true} )
        if(manager == null || student.role != "manager") {
            //404 not found
             res.status(404).json({message : "user not found"})
             return
        }
        return res.send(manager)
    }
    catch (err){
         res.status(500).json({message : err.message})
         return
    }
})

router.delete('/professor/:id' ,async (req, res) => {
    try {
        const professor = await User.findByIdAndDelete(req.params.id)
        if(professor == null || professor.role != "professor") {
            //404 not found
             res.status(404).json({message : "user not found"})
             return
        }
        return res.send(professor)
    }
    catch (err){
         res.status(500).json({message : err.message})
         return
    }
})

router.delete('/student/:id' ,async (req, res) => {
    try {
        const student = await User.findByIdAndDelete(req.params.id)
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

router.delete('/manager/:id' ,async (req, res) => {
    try {
        const manager = await User.findByIdAndDelete(req.params.id)
        if(manager == null || manager.role != "manager") {
            //404 not found
             res.status(404).json({message : "user not found"})
             return
        }
        return res.send(manager)
    }
    catch (err){
         res.status(500).json({message : err.message})
         return
    }
})

module.exports = router