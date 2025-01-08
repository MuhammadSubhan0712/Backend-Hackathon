import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Carousel Section */}
      <div className="relative w-full h-[50vh] bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-yellow-500">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to XD Shop!</h1>
        </div>
        {/* Carousel Buttons */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
          <Button variant="outline" className="bg-gray-800 text-yellow-400">
            {"<"}
          </Button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
          <Button variant="outline" className="bg-gray-800 text-yellow-400">
            {">"}
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-10 px-4 text-center">
        <h2 className="text-3xl font-semibold text-yellow-400">
          Why Shop with Us?
        </h2>
        <p className="text-gray-400 mt-4">
          At XD Shop, we offer a wide variety of high-quality products at the
          best prices. Enjoy seamless shopping, secure payments, and fast
          delivery.
        </p>
      </div>

      {/* Product Cards Section */}
      <div className="py-10 px-4">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card */}
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-transform"
            >
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg h-40 w-full object-cover mb-4"
              />
              <h4 className="text-xl font-semibold">{product.title}</h4>
              <p className="text-yellow-400 font-bold">${product.price}</p>
              <Button
                variant="outline"
                className="mt-4 w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500"
              >
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Sample Products Array
const products = [
  {
    title: "Wireless Bluetooth Headphones",
    price: 59.99,
    image:
      "https://images.pexels.com/photos/14541034/pexels-photo-14541034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Smartphone 128GB",
    price: 699.99,
    image:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Gaming Laptop",
    price: 1199.99,
    image:
      "https://images.pexels.com/photos/19012051/pexels-photo-19012051/free-photo-of-modern-gaming-laptop-and-headphones-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default Home;
