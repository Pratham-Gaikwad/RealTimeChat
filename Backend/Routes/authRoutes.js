import Express from "express"
import { signinUp } from "../Controllers/authController.js"



const router = Express.Router()

// router.post("/login",loginUser)

router.post("/signup",signinUp)

// router.post("/logout",LogoutUser)

export default router