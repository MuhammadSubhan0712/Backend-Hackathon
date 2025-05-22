import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 border-t border-gray-700">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">XD Shop</h3>
            <p className="text-gray-400 mb-4">
              Your premier destination for quality tech products and accessories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {['FAQs', 'Shipping Policy', 'Return Policy', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new products and special offers!
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
              />
              <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r hover:bg-yellow-500 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex justify-center space-x-4 mb-6">
          <FaCcVisa className="text-gray-400 text-2xl" />
          <FaCcMastercard className="text-gray-400 text-2xl" />
          <FaCcPaypal className="text-gray-400 text-2xl" />
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} XD Shop by <abbr className='font-bold' title="Muhammad Subhan Khan">MSK</abbr>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;