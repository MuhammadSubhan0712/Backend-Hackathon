import Orders from "../models/order.model.js";
import Products from "../models/product.model.js"


export const addOrder = async (req , res) => {
    const { products , price  } = req.body;

    if (!products || !price) {
      res.status(400).json({
        message: "product and price is required",
      });
      return;
    }
    const order = await Orders.create({
        products,
        price,
      });
    
      const product = await Products.findByIdAndUpdate(name, {
        $push: { name: order._id },
      });
    
      res.status(200).json({
        message: "order added successfully",
      });
    };

export const getAllOrders = async (req , res ) => {

     try {
        const orders = await Orders.find({})
        res.status(200).json({
          message: "All Orders ==>",
          data: orders,
        });
      } catch (error) {
        res.json({ message: "Error getting orders" }, error);
      }
}

export const getSingleOrder = async ( req , res ) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }
  
    try {
      const singleOrder = await Orders.findbyId(id);
      if (!singleOrder) {
        res.status(400).json({
          message: "No order found",
        });
        return;
      }
      res.status(200).json({
        message: "Your single order =>",
        singleOrder,
      });
    } catch (error) {
      res.status(400).json({
        message: "Error getting single order =>",
        error,
      });
}
}