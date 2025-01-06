import express from "express"

import { sendEmail } from "../controllers/node.controller.js";



const router = express.Router();

router.get("/sendemail" ,sendEmail);

export default router;