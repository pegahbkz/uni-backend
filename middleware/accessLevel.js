//fetch libraries
const jwt = require("jsonwebtoken")
const User = require('../models/user')

//check to see if we have a token
const isManager = async (req, res, next) => {
    const token = req.header('Authorization');
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.userID = decoded.id;

        const currentUser = await User.findById(req.userID)

        if(currentUser.role == "manager") {
            req.roleNumber = "1"
            req.managerID = currentUser.id
            next()
        } 
        if(currentUser.role == "professor") {
            req.roleNumber = "2"
            req.professorID = currentUser.id
            next()
        } 
        if(currentUser.role == "student") {
            req.roleNumber = "3"
            req.studentID = currentUser.id
            next()
        } 

  } catch (err) {
    console.error(err);
  }
};

module.exports = isManager;


