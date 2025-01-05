import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});


export default mongoose.model("Users", UsersSchema);

