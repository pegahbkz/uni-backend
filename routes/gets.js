//fetch libraries
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Gets')
})

router.get('/admin/Professors', (req, res) => {
    res.send('get admin profs')
})

router.get('/admin/students', (req, res) => {
    res.send('get admin students')
})

router.get('/admin/managers', (req, res) => {
    res.send('get admin managers')
})

router.get('/courses', (req, res) => {
    res.send('get courses')
})

router.get('/studenrs', (req, res) => {
    res.send('get students')
})

router.get('/professors', (req, res) => {
    res.send('get profs')
})

module.exports = router