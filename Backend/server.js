// Packages Import
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

// Routes Import

import authRoutes from "./Routes/authRoutes.js"
import messageRoutes from "./Routes/messageRoutes.js"


// mongoDB connection Import
import MongoConnect from "./connectToMongoDB.js"


dotenv.config()
const app = express()

app.use(express.json()); 
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)


app.listen(process.env.PORT , ()=>{
    MongoConnect()
    console.log('Server is running on the port ${PORT}');
})
