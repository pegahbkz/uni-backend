//fetch libraries
const express = require('express')
const router = express.Router()

//fetch models
const User = require('../models/user')
const Admin = require('../models/admin')
const Manager = require('../models/manager')
const Professor = require('../models/Professor')
const Course = require('../models/course')



async function getProfessor(req, res, next) {
    let professor
    try {
        professor = await Professor.findById(req.params.id)
        if(professor == null) {
            //404 not found
            return res.status(404)({message: 'Cannot find professor.'})
        }
    }
    catch (err){
        return res.status(500).json({message : err.message})
    }
    res.professor = professor
    next()
}

async function getStudent(req, res, next) {
    let student
    try {
        student = await Student.findById(req.params.id)
        if(student == null) {
            //404 not found
            return res.status(404)({message: 'Cannot find student.'})
        }
    }
    catch (err){
        return res.status(500).json({message : err.message})
    }
    res.student = student
    next()
}

async function getManager(req, res, next) {
    let manager
    try {
        manager = await Manager.findById(req.params.id)
        if(manager == null) {
            //404 not found
            return res.status(404)({message: 'Cannot find manager.'})
        }
    }
    catch (err){
        return res.status(500).json({message : err.message})
    }
    res.manager = manager
    next()
}

async function getCourse(req, res, next) {
    let course
    try {
        course = await Course.findById(req.params.id)
        if(course == null) {
            //404 not found
            return res.status(404)({message: 'Cannot find course.'})
        }
    }
    catch (err){
        return res.status(500).json({message : err.message})
    }
    res.course = course
    next()
}
