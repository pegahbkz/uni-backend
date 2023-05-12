const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get('/Professors', async (req, res) => {
    try {
        const professors = await User.find()
        res.json(professors)
    }
    catch(err) {
        //error on server and db, not user.
        res.status(500).json({ message : err.message})
    }
})

router.get('/Professor/:id', async (req, res) => {
    try {
        const professor = await User.findById(req.params.id)
        if(professor == null) {
            //404 not found
            return res.status(404)({message: 'Cannot find professor.'})
        }
        return res.send(professor)
    }
    catch (err){
        return res.status(500).json({message : err.message})
    }
})

router.post('/Professor', async (req, res) => {
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
    }
})

router.put('/Professor/:id', async (req, res) => {
    const {name, idnumber, password, email, 
        phonenumber, role, professorObject} = req.body

    try {
        const professor = await User.findByIdAndUpdate(req.params.id, req.body, {new: true} )
        if(professor == null) {
            //404 not found
            return res.status(404)({message: 'Cannot find professor.'})
        }
        return res.send(professor)
    }
    catch (err){
        return res.status(500).json({message : err.message})
    }
})

router.delete('/Professor/:id', async (req, res) => {
    try {
        const professor = await User.findByIdAndDelete(req.params.id)
        if(professor == null) {
            //404 not found
            return res.status(404)({message: 'Cannot find professor.'})
        }
        return res.send(professor)
    }
    catch (err){
        return res.status(500).json({message : err.message})
    }
})


module.exports = router