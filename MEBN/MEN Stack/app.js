const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors')
const url = 'mongodb://localhost:27017/Students'

const app = express()

mongoose.connect(url, {useNewURLParser:true})

const con = mongoose.connection

con.on('open', ()=>{
  console.log('Database connected!...');
})

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(Cors())
app.use(express.json())

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", '*')
  res.header("Access-Control-Allow-Headers", 'Origin, X-requested-With, Content-Type, Accept')
  res.header("Access-Control-Allow-Methods", 'GET, POST, PATCH, DELETE')
  next()
})

const studentRouter = require('./routes/students')
app.use('/students', studentRouter)

app.listen(9000, () => {
  console.log('Server Started!....');
})
