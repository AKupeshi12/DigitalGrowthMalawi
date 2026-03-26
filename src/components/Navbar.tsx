import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b-2 border-gray-200">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo-container rounded-full">
          {/* Logo image placeholder */}
          <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-700">Home</Link>
          <Link to="/about" className="text-gray-700">About</Link>
          <Link to="/services" className="text-gray-700">Services</Link>
          <Link to="/contact" className="text-gray-700">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;