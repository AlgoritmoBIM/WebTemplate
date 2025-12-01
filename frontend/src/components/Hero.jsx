import React from 'react';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Building Information Modeling Platform
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Connect, integrate, and manage BIM workflows with advanced 3D visualization,
          real-time collaboration, and third-party API integration.
        </p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
