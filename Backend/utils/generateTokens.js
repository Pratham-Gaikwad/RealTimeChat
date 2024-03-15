import jwt from "jsonwebtoken"

const generateTokenAndSetCokkies = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"15d"
    })

    res.cookie("jwt",token , {
        maxAge: 15 * 24 * 60 * 1000,
        httpOnly:true, //for XSS attacks
        sameSite: "strict", //from CSRF attacks
        secure: process.env.NODE_ENV !== "developement"
    })
}

export default generateTokenAndSetCokkies