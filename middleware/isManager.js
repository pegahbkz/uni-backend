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

        if(currentUser.role != "manager") {
            res.status(403).json({message : "you do not have access to this page"})
            return
        } 
        next()
  } catch (err) {
    console.error(err);
  }
};

module.exports = isManager;


