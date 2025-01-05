import express from "express";

import {
  registerUser,
  loginUser,
  logoutUser,
  refreshToken,
  uploadImage
} from "../controllers/user.controller.js";

import { upload } from "../middleware/multer.middleware.js"

const router = express.Router();

// to register the user;
router.post("/register", registerUser);

// to login the user;
router.post("/login", loginUser);

// to logout the user;
router.get("/logout", logoutUser);

// to refresh token;
router.post("/refreshToken", refreshToken);


// To upload image
router.post("/uploadimage" , upload.single("image" , uploadImage));


export default router;
