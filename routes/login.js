const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const User = require('./models/user.js')

const router = express.Router()

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Password is valid, create a JWT token and send it in response
    const token = jwt.sign({id: user.id}, process.env.TOKEN_SECRET, {expiresIn: 86400} );
    return res.status(200).json({ token });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

function createToken(userId) {
  // implement your own token creation logic here, using a library like jsonwebtoken
}

module.exports = router;
