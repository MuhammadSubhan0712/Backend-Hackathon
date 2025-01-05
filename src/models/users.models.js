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

UsersSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
      return;
    }
    this.password = await bcrypt.hash(this.password, 10);
  });

export default mongoose.model("Users", UsersSchema);

