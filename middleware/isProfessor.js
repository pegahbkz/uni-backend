//fetch libraries
const jwt = require("jsonwebtoken")
const User = require('../models/user')

//check to see if we have a token
const isProfessor = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.userID)
    if(currentUser.role != "professor") {
        //404 not found
        res.status(404).json({message : "you do not have access to this page"})
        return
    }
    next();
  } catch (err) {
    console.error(err);
  }
};

module.exports = isProfessor;


