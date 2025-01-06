import { timeStamp } from "console";
import mongoose from "mongoose";
import { type } from "os";

const orderSchema = new mongoose.Schema({
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  ],

  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
  ],

  totalPrice: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  orderDate: {
    type:Date,
    createdAt: Date.now()
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Orders", orderSchema);
