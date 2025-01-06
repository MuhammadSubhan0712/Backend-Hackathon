import express from "express";

import {
  addProduct,
  getAllProducts,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
  uploadImage,
} from "../controllers/product.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = express.Router();

// To add product
router.post("/product", addProduct);

// To get all products
router.get("/products", getAllProducts);

// To get single product
router.get("/products/:id", getSingleProduct);

// To update single product
router.put("/products/:id", updateSingleProduct);

// To delete single product
router.delete("/products/:id", deleteSingleProduct);

// To upload image
router.post("/uploadimage", upload.single("image", uploadImage));

export default router;
