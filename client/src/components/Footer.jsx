import React from 'react';
import { FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">EdxTrade</h2>
            <p className="mt-2">© 2024 EdxTrade. All rights reserved.</p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left mb-4 md:mb-0">
            <a href="/terms-and-conditions" className="hover:text-gray-400">Terms and Conditions</a>
            <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
            <a href="/how-to-use" className="hover:text-gray-400">How to Use</a>
            <a href="/contact" className="hover:text-gray-400">Contact Us</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://wa.me/1234567890" aria-label="WhatsApp" className="hover:text-gray-400">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
