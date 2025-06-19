import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">ShopLoop</h3>
          <p className="flex items-start mb-2">
            <FaMapMarkerAlt className="mr-2 mt-1 text-primary" />
            <span>123 Market Road, Kollam, Kerala, India 691001</span>
          </p>
          <p className="flex items-center mb-2">
            <FaPhone className="mr-2 text-primary" />
            <span>+91‑12345‑67890</span>
          </p>
          <p className="flex items-center">
            <FaEnvelope className="mr-2 text-primary" />
            <span>support@shoploop.com</span>
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/shop/listing" className="hover:text-white">Shop</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/returns" className="hover:text-white">Returns & Shipping</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ShopLoop. All rights reserved.
      </div>
    </footer>
  );
}
