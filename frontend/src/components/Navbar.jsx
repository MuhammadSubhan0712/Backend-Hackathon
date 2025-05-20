import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [mobileMenuOpen , setMobileMenuOpen ] = useState(false);
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-400">XD Shop</div>

        {/* Navigation Links */}
         <div className="hidden md:flex space-x-8">
          {['Home', 'Shop', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2 px-1 border-b-2 border-transparent hover:border-yellow-400"
            >
              {item}
            </Link>
          ))}
        </div>

           {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <Button variant="outline" className="text-yellow-400 border-yellow-400 hover:bg-yellow-400/10">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
              Sign Up
            </Button>
          </Link>
        </div>


        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            className="text-yellow-400 hover:text-yellow-500 focus:outline-none"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
              {/* Mobile Menu: */}
              {mobileMenuOpen && (
                  <div className="md:hidden bg-gray-800 px-4 py-2 space-y-2">
          {/* Mobile menu items */}
            <div className="flex flex-col justify-center items-center">
          {['Home', 'Shop', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2 px-1 border-b-2 border-transparent hover:border-yellow-400"
            >
              {item}
            </Link>
          ))}
        </div>
        </div>
              )}
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
