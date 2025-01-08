import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-400">XD Shop</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Call-to-Action Button */}
        <Button className="hidden md:block bg-yellow-400 text-gray-900 hover:bg-yellow-500">
          Sign Up
        </Button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            className="text-yellow-400 hover:text-yellow-500 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
