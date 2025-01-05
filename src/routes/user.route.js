import express from "express"

import { registerUser , loginUser , logoutUser , refreshToken} from "../controllers/user.controller.js"


const router = express.Router();

// to register the user;
router.post("/register" , registerUser);

// to login the user;
router.post("/login" , loginUser);