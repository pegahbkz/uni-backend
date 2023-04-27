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
    res.send('post admin prof')
})

router.get('/admin/student', (req, res) => {
    res.send('post admin student')
})

router.get('/admin/manager', (req, res) => {
    res.send('post admin manager')
})

router.get('/course', (req, res) => {
    res.send('post course')
})

module.exports = router