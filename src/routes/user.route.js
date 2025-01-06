import express from "express";

import {
  registerUser,
  loginUser,
} from "../controllers/user.controller.js";

const router = express.Router();


// to register the user;
router.post("/auth/register", registerUser);

// to login the user;
router.post("/auth/login", loginUser);

export default router;
