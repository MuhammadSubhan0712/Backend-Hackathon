import mongoose from "mongoose";
import Products from "../models/product.model.js";

export const addProduct = async (req, res) => {
  const { name, description, price, image } = req.body;

  if (!name || !description || !price || !image) {
    res.status(400).json({
      message: "You must enter all fields",
    });
    return;
  }
  try {
    const product = await Products.create({ name, description, price, image });
    res.status(200).json({
      message: "Product add successfully",
      product,
    });
  } catch (error) {
    res.json({ message: "Error adding product" }, error);
  }
};

export const getAllProducts = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const skip = (page - 1) * limit;

  try {
    const products = await Products.find({}).skip(skip).limit(limit);
    res.status(200).json({
      message: "All products ==>",
      data: products,
      length: products.length,
    });
  } catch (error) {
    res.json({ message: "Error getting products" }, error);
  }
};
export const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }
  try {
    const product = await Products.findById(id);
    if (!product) {
      res.status(400).json({ message: "No such Product found" });
      return;
    }
    res.json(200).json({
      message: "Single Product =>",
      product,
    });
  } catch (error) {
    res.json({ message: "Error getting product" }, error);
  }
};

export const updateSingleProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }

  try {
    const updateProduct = await Products.findByIdAndUpdate(
      id,
      { name, description, price, image },
      { new: true }
    );
    if (!name || !description || !price || !image) {
      res.status(400).json({
        message: "You must enter all fields",
      });
      return;
    }

    res.status(200).json({
      message: "Product updated successfully",
      data: Products,
    });
  } catch (error) {
    res.json({ message: "Error updating product" }, error);
  }
};

export const deleteSingleProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }
  try {
    const deleteProduct = await Products.findByIdAndDelete(id);
    if (!deleteProduct) {
      res.status(400).json({
        message: "No product found",
      });
      return;
    }
    res.status(200).json({
      message: "Product deleted successsfully",
      data: Products,
    });
  } catch (error) {
    res.json({ message: "Error deleting product" }, error);
  }
};
