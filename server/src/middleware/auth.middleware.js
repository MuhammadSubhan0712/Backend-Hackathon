import jwt from "jsonwebtoken";

const authenticateUser = async (res, req, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({
      message: "No token provided",
    });
    return;
  }
  jwt.verify(token, process.env.ACCESS_JWT_SECRET, (error, user) => {
    if (error) {
      res.status(403).json({
        message: " Invlaid token ",
      });
      return;
    }
    req.user = user;
    next();
  });
};

export default authenticateUser;
