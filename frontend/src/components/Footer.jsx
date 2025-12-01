import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h5 className="text-lg font-semibold mb-4">About</h5>
          <p className="text-gray-400">
            A comprehensive BIM platform integrating modern web technologies with enterprise-grade features.
          </p>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition">API Reference</a></li>
            <li><a href="#" className="hover:text-white transition">Support</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-4">Connect</h5>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">GitHub</a></li>
            <li><a href="#" className="hover:text-white transition">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8">
        <p className="text-center text-gray-400">
          &copy; 2024 BIM WebTemplate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
