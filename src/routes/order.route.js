import express from "express";

import {
  addOrder,
  getAllOrders,
  getSingleOrder,
} from "../controllers/order.controller.js";

const router = express.Router();

// To add order
router.post("/orders", addOrder);

// To get all orders
router.get("/orders", getAllOrders);

// To get single order
router.get("/orders/:id", getSingleOrder);

export default router;
