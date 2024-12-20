//fetch libraries
const jwt = require("jsonwebtoken")
const User = require('../models/user')

//check to see if we have a token
const auth = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send('No token, authorization denied');
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userID = decoded.id;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).send('Invalid token');
  }
};

module.exports = auth;


