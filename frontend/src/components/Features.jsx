import React from 'react';

function Features() {
  const features = [
    {
      icon: '🏗️',
      title: 'BIM Integration',
      description: 'Seamless integration with Autodesk Revit, AutoCAD, and other BIM tools.',
    },
    {
      icon: '🗺️',
      title: 'Real-time Visualization',
      description: 'Advanced 3D visualization powered by Three.js for enhanced project views.',
    },
    {
      icon: '🌍',
      title: 'Multi-API Support',
      description: 'Connect weather, maps, translations, and Microsoft Teams APIs effortlessly.',
    },
    {
      icon: '🔐',
      title: 'Enterprise Security',
      description: 'Azure AD authentication and encrypted data protection for your projects.',
    },
    {
      icon: '⚡',
      title: 'High Performance',
      description: 'Optimized caching and efficient API calls for lightning-fast loading.',
    },
    {
      icon: '📊',
      title: 'Analytics & Logging',
      description: 'Track usage, monitor performance, and gain actionable insights.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h3>
          <p className="text-gray-600 text-lg">Everything you need to manage BIM projects efficiently</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
