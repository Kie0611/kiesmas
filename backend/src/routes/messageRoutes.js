import express from "express"
import {createMessage, getMessageByName} from "../controllers/messageController.js"
 
const router = express.Router()

router.get("/:name", getMessageByName)
router.post("/", createMessage)

export default router