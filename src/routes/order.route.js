import express from "express";

import {
  addOrder,
  getAllOrders,
  getSingleOrder,
} from "../controllers/order.controller.js";

const router = express.Router();

// To add order
router.post("/addorder", addOrder);

// To get all orders
router.get("/allorders", getAllOrders);

// To get single order
router.get("/singleorder/:id", getSingleOrder);

export default router;
