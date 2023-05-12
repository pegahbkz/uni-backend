require('dotenv').config()

const bodyParser = require('body-parser')
const express = require("express")
const app = express()

app.use(express.json())
app.use(bodyParser.json())

const mongoose = require('mongoose')

// const dbconnection = async () =>
// {
//   try {
//     const conn = await mongoose.connect(process.env.DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false
//     })
//     console.log('Connected to database')
//   }
//   catch(err){
//     console.log(err)
//   }
// }


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const dbconnection = mongoose.connection

dbconnection.on('error', (error) => 
  console.error(error))

dbconnection.once('open', () =>
  console.log('Connected to database'))



app.use('/api', require('./routes/index.js'))
app.use('/authenticate', require('./routes/login.js'));

const PORT = process.env.port || 3000 

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})

