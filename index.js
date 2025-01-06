import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/db/index.js";
import userRouter from "./src/routes/user.route.js"
import productRouter from "./src/routes/product.route.js";
import orderRouter from "./src/routes/order.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
// app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Ready to give (!)HACKATHON(!)");
});



app.use("/api/v1" , userRouter);
app.use("/api/v1" , productRouter);
app.use("/api/v1" , orderRouter);

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`📡  Server is running at the port ${process.env.PORT}  🌐`);
    });
  })
  .catch((error) => {
    console.log("❌  MONGO DB connection failed !!!  ⛔", error);
  });