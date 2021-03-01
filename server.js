//Require serec
const express = require('express')
//Require conncted
const connectDB = require('./config/connectDB')

const app = express()
const authRouter = require('./route/auth')
connectDB()
//Middleware
app.use(express.json())
//Port 


const port = process.env.PORT || 5000
app.use('/api/auth/',authRouter)

app.listen(port , (error)=>{
    error
    ? console.log(error)
    :console.log('The server is runnig on port',port,)
     
})