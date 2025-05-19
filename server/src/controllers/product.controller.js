import mongoose from "mongoose";
import Products from "../models/product.model.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// To upload image
const uploadImageToCloudinary = async (localpath) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(localpath, {
      resource_type: "auto",
    });
    if (fs.existsSync(localpath)) {
      fs.unlinkSync(localpath);
    }
    return uploadResult.url;
  } catch (error) {
    console.log("Error Occured", error);
    res.status(400).json({
      message: "Error Occured ==>",
      error,
    });
    if (fs.existsSync(localpath)) {
      fs.unlinkSync(localpath);
    }
    return null;
  }
};

export const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      message: "No image file uploaded",
    });
  }

  try {
    const uploadResult = await uploadImageToCloudinary(req.file.path);

    if (!uploadResult) {
      return res.status(500).json({
        message: "Error occured while uploading image",
      });
    }
    res.json({
      message: "Image Uploaded Successfully",
      url: uploadResult,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Occured while uploading image" });
  }
};

// Add Product
export const addProduct = async (req, res) => {
  const { name, description, price, image } = req.body;

  if (!name || !description || !price) {
    res.status(400).json({
      message: "You must enter all fields",
    });
    return;
  }
  try {
    const product = await Products.create({
      userid: req.user.id,
      name,
      description,
      price,
      image,
    });
    res.status(200).json({
      message: "Product add successfully",
      product,
      User_id: req.user.id,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error adding product" }, error);
  }
};

// Get all Products

export const getAllProducts = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const skip = (page - 1) * limit;

  try {
    const products = await Products.find({}).select("-__v").skip(skip).limit(limit).lean(); //For faster read-only queries
    res.status(200).json({
      message: "All products ==>",
      data: products,
      length: products.length,
    });
  } catch (error) {
    res.json({ message: "Error getting products" }, error);
  }
};

// Get single Product

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
    res.status(200).json({
      message: "Single Product =>",
      product,
    });
  } catch (error) {
    res.json({ message: "Error getting product" }, error);
  }
};

// Edit single Product

export const updateSingleProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }
  const { name, description, price } = req.body;
  try {
    const updateProduct = await Products.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true }
    );
    if (!name || !description || !price) {
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

// Delete single Product

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
