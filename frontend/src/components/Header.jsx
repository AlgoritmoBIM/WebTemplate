import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">BIM</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">WebTemplate</h1>
        </div>
        <ul className="hidden md:flex gap-8">
          <li>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>
        <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </nav>
    </header>
  );
}

export default Header;
