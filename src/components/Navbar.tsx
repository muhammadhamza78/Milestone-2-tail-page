"use client"
import React, { useState } from 'react';
import { CiMenuKebab } from "react-icons/ci"; 
import { GiTireIronCross } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-blue-600">MyWebsite</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <GiTireIronCross /> : <CiMenuKebab />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2">
            <a href="/" className="block py-2 text-gray-600 hover:text-blue-600">Home</a>
            <a href="/about" className="block py-2 text-gray-600 hover:text-blue-600">About</a>
            <a href="/contact" className="block py-2 text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
