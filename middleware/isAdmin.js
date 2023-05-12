//fetch libraries
const jwt = require("jsonwebtoken")
const User = require('../models/user')

//check to see if we have a token
const isAdmin = async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.userID)
    if(currentUser.role != "admin") {
        //404 not found
        res.status(403).json({message : "access denied"})
        return
    }
    next();
  } catch (err) {
    console.error(err);
  }
};

module.exports = isAdmin;


