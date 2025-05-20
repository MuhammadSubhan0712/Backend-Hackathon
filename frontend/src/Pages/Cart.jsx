import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-bold mb-8 text-yellow-400">
          Your Cart ({cartItems.length})
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400 mb-4">!Your cart is empty!</p>
            <Link to="/products">
              <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-800 rounded-lg p-4 flex items-center">
                  <img
                    src={item.image}
                    alt={item - title}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div className="ml-4 flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-yellow-400">{item.price}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button variant="outline" size="sm">
                      +
                    </Button>
                  </div>
                  <Button variant="ghost" className="text-red-500 ml-4">
                    Remove
                  </Button>
                </div>
              ))}
            </div>

            {/* Order Summary: */}
            <div className="bg-gray rounded-lg p-6 h-fit sticky top-4">
              <h2 className="text-xl font-bold mb-4">Order Summary:</h2>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$XX.XX</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-700">
                  <span>Total</span>
                  <span className="text-yellow-400">$XX.XX</span>
                </div>
              </div>
              <Button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
