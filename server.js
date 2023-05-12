//fetch libraries
require('dotenv').config()

const bodyParser = require('body-parser')
const express = require("express")
const app = express()
app.use(express.json())
app.use(bodyParser.json())

//connect to database
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const dbconnection = mongoose.connection

dbconnection.on('error', (error) => 
  console.error(error))

dbconnection.once('open', () =>
  console.log('Connected to database'))

//routing
app.use('/authenticate', require('./routes/login.js'));
app.use('/api/admin', require('./routes/admin.js'))
app.use('/api/student', require('./routes/student.js'))
app.use('/api/professor', require('./routes/professor.js'))
app.use('/api/course', require('./routes/course.js'))

//listen at port 3000
const PORT = process.env.port || 3000 

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})

