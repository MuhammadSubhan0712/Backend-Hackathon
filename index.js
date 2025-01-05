import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/db/index.js";


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Ready to give (!)HACKATHON(!)");
});



connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`📡  Server is running at the port ${process.env.PORT}  🌐`);
    });
  })
  .catch((error) => {
    console.log("❌  MONGO DB connection failed !!!  ⛔", error);
  });