import mongoose from "mongoose";


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
    default: Date.now
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Orders", orderSchema);
