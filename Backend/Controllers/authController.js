import User from "../models/UserModel.js";

export const signinUp = async (req , res ) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password does not match" });
        }

        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName:fullName, 
            username:username,
            password:password,
            gender:gender,
            profilePicture: gender === "male" ? boyProfilePic : girlProfilePic
        });

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName : newUser.fullName,
            username: newUser.username,
            profilePicture: newUser.profilePicture
        });
    } catch (error) {
        res.status(500).json({ error: error.message }); // Sending the actual error message
    }
}
