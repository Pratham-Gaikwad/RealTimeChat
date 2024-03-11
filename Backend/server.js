const express = require('express')
const dotenv = require('dotenv')
dotenv.config()


const app = express()
const PORT = process.env.PORT

app.get("/" ,(req , res)=>{
    res.send("Your server is working!!!")
})

app.listen(PORT , ()=>{
    console.log('Server is running on the port ${PORT}');
})