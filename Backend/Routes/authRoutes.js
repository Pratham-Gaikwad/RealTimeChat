import Express from "express"
import { singnUp ,login ,logout} from "../Controllers/authController.js"



const router = Express.Router()


router.post("/signup",singnUp)
router.post("/login",login)
router.post("/logout",logout)

export default router