import Express from "express";
import { sendMessage } from "../Controllers/messageController.js";
import protectedRoute from "../utils/protectedRoute.js";

const router = Express.Router()

router.post("/send/:id",protectedRoute,sendMessage)

export default router