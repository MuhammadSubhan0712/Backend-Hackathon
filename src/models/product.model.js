import { timeStamp } from "console";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
      },
    ],
    orderItems: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orders",
      required: true,
    },
  },
  { timeStamps: true }
);

export default mongoose.model("Products", productSchema);
