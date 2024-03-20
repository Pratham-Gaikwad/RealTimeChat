import Jwt from "jsonwebtoken";
import User from "../models/UserModel.js"

const protectedRoute = async (req,res,next)=>{
    try {
        const token = req.cookies.Jwt

        if (!token) {
            res.status(401).json({erroe:"No Token provided"})    
        }
        
        const decoded = Jwt.verify(token , process.env. JWT_SECRET)
        
        if (!decoded) {
            res.status(401).json({erroe:"No Token provided"})            
        }

        const user = await User.findById(decoded.userId).select("-password")

        if (!user) {
            res.status(401).json({erroe:"User Not found,"})            
        }

        req.user = user
        next()
    } catch (error) {
        console.log(error.message);
        response.status(500).json({error:"INternal server error."})
    }
}

export default protectedRoute