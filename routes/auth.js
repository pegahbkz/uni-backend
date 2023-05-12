const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const User = require('./models/user.js')



const auth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send('No token, authorization denied');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).send('Invalid token');
  }
};

module.exports = auth;


