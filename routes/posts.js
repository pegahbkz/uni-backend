//fetch libraries
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Posts')
})

router.get('/login', (req, res) => {
    res.send('Post login')
})

router.get('/admin/Professor', (req, res) => {
    res.send('admin prof')
})

router.get('/admin/student', (req, res) => {
    res.send('admin student')
})

router.get('/admin/manager', (req, res) => {
    res.send('admin manager')
})

router.get('/course', (req, res) => {
    res.send('course')
})

module.exports = router