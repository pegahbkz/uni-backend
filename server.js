require('dotenv').config()


const express = require("express")
const app = express()

app.use(express.json())


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





app.use('/', require('./routes/index.js'));




//listen at environment valuable port or 3000
//kill -9 $(lsof -t -i:8080)

const PORT = process.env.port || 8080 

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})

