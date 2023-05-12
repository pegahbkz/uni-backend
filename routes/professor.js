const express = require('express')
const router = express.Router()
const User = require('../models/user')
const authenticate = require('../middleware/auth.js')

router.get('/all' ,async (req, res) => {
    try {
        const professors = await User.find({role: "professor"})
        res.json(professors)
    }
    catch(err) {
        //error on server and db, not user.
        return res.status(500).json({ message : err.message})
    }
})

router.get('/:id', async (req, res) => {
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

router.put('/:id',  async (req, res) => {
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

module.exports = router