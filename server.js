
//fetch libraries
const express = require("express")
const mongoose = require('mongoose')
require('dotenv').config()

//create app
const app = express()

//connect server to mongoose
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })

//check for error in connecting to database
const dbconnection = mongoose.connection
dbconnection.on('error', (error) => 
  console.error(error))

//log message when we connect to database for the first time
dbconnection.once('open', () =>
  console.log('Connected to database'))

//initialize app
app.use(express.json())

//import routes
const postsRoute = require('./routes/posts')
const getsRoute = require('./routes/gets')
const deletesRoute = require('./routes/deletes')
const patchesRoute = require('./routes/patches')

//middleware
app.use('/post', postsRoute)
app.use('/get', getsRoute)
app.use('/delete', deletesRoute)
app.use('/patch', patchesRoute)


//listen at environment valuable port or 3000
//kill -9 $(lsof -t -i:3000)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
});

