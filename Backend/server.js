import express from "express"
import dotenv from "dotenv"
import authRouts from "./Routes/authRoutes.js"
dotenv.config()


const app = express()



app.listen(process.env.PORT , ()=>{
    console.log('Server is running on the port ${PORT}');
})

app.use("/api/auth",authRouts)


app.get("/" ,(req , res)=>{
    res.send("Your server is working!!!")
})
