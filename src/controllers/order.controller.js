import Orders from "../models/order.model.js";
import Products from "../models/product.model.js";

export const addOrder = async (req, res) => {
  const { products } = req.body;

  if (!products || products.length === 0) {
    res.status(400).json({
      message: "product array is required",
    });
    return;
  }
  try {
    const productDetails = await Products.find({ _id: { $in: products } });

    if (productDetails.length !== products.length) {
      res.status(404).json({
        message: "One or more products not found.",
      });
      return;
    }

    //  calculating total price
    const totalPrice = productDetails.reduce(
      (sum, product) => sum + product.price,
      0
    );

    const order = await Orders.create({
      products,
      price: totalPrice,
      user: req.user.id,
    });
    res.status(200).json({
      message: "order added successfully",
      order,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error adding order",
      error,
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Orders.find({});
    res.status(200).json({
      message: "All Orders ==>",
      data: orders,
    });
  } catch (error) {
    res.json({ message: "Error getting orders" }, error);
  }
};

export const getSingleOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  try {
    const singleOrder = await Orders.findbyId(id).populate(
      "product",
      "name",
      "price"
    );
    if (!singleOrder) {
      res.status(404).json({
        message: "No order found",
      });
      return;
    }
    res.status(200).json({
      message: "Your single order =>",
      data: singleOrder,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error getting single order =>",
      error,
    });
  }
};
