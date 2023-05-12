const express = require('express')
const bcrypt = require('bcrypt')
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
            res.status(404).json({message : "user not found"})
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
        name, idnumber, hashedPassword, email, 
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
            return res.status(404).json({message : "user not found"})
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
            return res.status(404).json({message : "user not found"})
        }
        return res.send(professor)
    }
    catch (err){
        return res.status(500).json({message : err.message})
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body
  
    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid e credentials' });
      }
  
      // Check if password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid p credentials' });
      }
  
      // Password is valid, create a JWT token and send it in response
      const token = jwt.sign({id: user.id}, process.env.TOKEN_SECRET, {expiresIn: 86400} );
      return res.status(200).json({ token });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router