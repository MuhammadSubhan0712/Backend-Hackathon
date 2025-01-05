import { error } from "console";
import jwt from "jsonwebtoken";

const authenticateUser = async (res, req, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    res.status(404).json({
      message: "No token Found",
    });
    return;
  }
  jwt.verify(token, process.env.ACCESS_JWT_SECRET, (error, user) => {
    if (error) {
      res.status(403).json({
        message: " Invlaid Token ",
      });
      return;
    }
    req.user = user;
    next();
  });
};

export default authenticateUser;
