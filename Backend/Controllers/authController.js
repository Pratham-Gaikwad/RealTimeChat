import User from "../models/UserModel.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCokkies from "../utils/generateTokens.js";

export const singnUp = async (req, res) => {
    try {
        const {fullname, userName, password, confirmPassword, gender} = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({error: "Password does not match."});
        }

        const user = await User.findOne({userName});
        if (user) {
            return res.status(400).json({error: "User already exists"});
        }

        const salt = await bcrypt.genSalt(11)
        const hashPassword = await bcrypt.hash(password,salt)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = new User({
            fullName: fullname,
            userName: userName,
            password: hashPassword,
            Usergender: gender,
            profilePicture: gender === "male" ? boyProfilePic : girlProfilePic
        });
        if (newUser) {
			await generateTokenAndSetCokkies(newUser._id, res);

			await newUser.save();

			res.status(201).json({
            _id: newUser.id,
            username: newUser.userName,
            profilePicture: newUser.profilePicture
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
// {
//     "fullname": "Praham Gaikwad",
//     "userName": "Pratham Gaikwad",
//     "password": "1234567",
//     "confirmPassword": "1234567",
//     "gender":"male"
// }

export const login = async(req , res)=>{
    try {
        const {userName , password } = req.body;
        const user = await User.findOne({userName})
        const isPasswordCorrect = await bcrypt.compare(password , user?.password|| "")

        if (!user || !isPasswordCorrect) {
            res.status(400).json({error:"Invalid Username or Password"})
        }

        generateTokenAndSetCokkies(user._id,res)

        res.status(200).json({
            _id: user.id,
            username: user.userName,
            profilePicture: user.profilePicture
        })
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
// {
//     "userName": "Prashant Gaikwad",
//     "password": "Hello123"

// }

export const logout = async(req , res )=>{
    try {
        res.cookie("jwt", "",{maxAge: 0})
        res.status(200).json({message:"User Logged Out successfully. "})
    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
}