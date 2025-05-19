import User from "../models/user.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

// To generate access token
const generateAccessToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.ACCESS_JWT_SECRET, {
    expiresIn: "6h",
  });
};

// To generate refresh token

const generateRefreshToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.REFRESH_JWT_SECRET, {
    expiresIn: "7d",
  });
};

// To register the User
const registerUser = async (req, res) => {
  const { username , email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({
      message: "You must enter username email & password",
    });
    return;
  }

  const user = await User.findOne({ email: email });
  if (user) {
    res.status(401).json({
      message: "User Already Exist",
    });
  }

  try {
    const createUser = await User.create({
      username,
      email,
      password,
    });
    res.json({
      message: "User Registered Successfully",
      data: createUser,
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth:{
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
      
          const info = transporter.sendMail({
            from: '"😊 Kyra Robel " <kyra.robel79@ethereal.email>',
            to: "muhammadsubhan0712@gmail.com", 
            subject: "Welcome",
            text: "Welcome to the HACKATHON",
            html: "<b>Hello Hackathon</b>", 
          });
        
          console.log("Message sent: %s", info.messageId);
          res.send("email sent" , info);
        
  } catch (error) {
    res.json({message:"Error creating user"},error);
  } 
};

// To Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      message: "You must enter email & password",
    });
    return;
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json({
      message: "!No user found!",
    });
    return;
  }

  // Password Validation

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    res.status(400).json({
      message: "Incorrect Password",
    });
    return;
  }
  const refreshToken = generateRefreshToken(user);

  try {
  // Cookies
  res.cookie("refreshToken", refreshToken, { http: true, secure: process.env.NODE_ENV === "production" });
  res.status(200).json({
    message: "User LoggedIn Successfully",
    accessToken: generateAccessToken(user),
    refreshToken: generateRefreshToken(user),
    data: user,
  });
  } catch (error) {
    res.json({message:"Error logging user"},error);
  }


};

// To logout user
const logoutUser = async (req, res) => {
  res.clearCookie("refreshToken");
  res.json({
    message: "User Logout Successfully",
  });
};

// To refresh token
const refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken || req.body.refreshToken;
  if (!refreshToken) {
    res.status(401).json({
      message: "!No Refresh Token Found!",
    });
    return;
  }

  try {
    const decodedToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_JWT_SECRET
    );

    const user = await User.findOne({ email: decodedToken.email });

    if (!user) {
      res.status(404).json({
        message: "Invalid Token",
      });
      return;
    }

    const generateToken = generateAccessToken(user);
    res.json({
      message: "Access Token Generated",
      accessToken: generateToken,
    });
    res.json({ decodedToken });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server erorr", error: error.message });
    console.log("Error generate access token", error);
  }
};

export { registerUser, refreshToken, loginUser, logoutUser };
