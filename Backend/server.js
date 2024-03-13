// Packages Import
import express from "express"
import dotenv from "dotenv"

// Routes Import

import authRouts from "./Routes/authRoutes.js"


// mongoDB connection Import
import MongoConnect from "./connectToMongoDB.js"


dotenv.config()
const app = express()


app.use("/api/auth",authRouts)
app.use(express.json()); 


app.listen(process.env.PORT , ()=>{
    MongoConnect()
    console.log('Server is running on the port ${PORT}');
})



// app.get("/" ,(req , res)=>{
//     res.send("Your server is working!!!")
// })
