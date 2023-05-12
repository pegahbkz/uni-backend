const express = require('express')
const jwt = require("jsonwebtoken")
const User = require('../models/user')

const router = express.Router()

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    // Check if user exists
      //console.log(name)
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid user'});
    }

    // Check if password is correct

    if (password != user.password) {
      return res.status(401).json({ message: 'Invalid password'});
    }

    // Password is valid, create a JWT token and send it in response
    const token = jwt.sign({id: user.id}, process.env.TOKEN_SECRET, {expiresIn: 86400} );
    return res.status(200).json({ token });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;
