import Express from "express"
import { loginUser , signinUser , LogoutUser} from "../Controllers/authController.js"



const router = Express.Router()

router.get("/login",loginUser)

router.get("/signin",signinUser)

router.get("/logout",LogoutUser)

export default router