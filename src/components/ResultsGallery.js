import React from 'react';

const ResultsGallery = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl font-bold mb-2">Real Results from Our Students</h2>
        <p className="text-gray-400">See the actual growth and revenue numbers from our community</p>
      </div>
      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/25 hover:border-white/40 transition-colors duration-200">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Growth Chart"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <h3 className="text-white font-semibold mb-2">Tech Weekly Insights</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Subscriber Growth</span>
              <span className="text-green-400">+14,800</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Time Period</span>
              <span className="text-white">3 months</span>
            </div>
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/25 hover:border-white/40 transition-colors duration-200">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Revenue Chart"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <h3 className="text-white font-semibold mb-2">Marketing Growth Lab</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Monthly Revenue</span>
              <span className="text-green-400">$2,500+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Time Period</span>
              <span className="text-white">6 weeks</span>
            </div>
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/25 hover:border-white/40 transition-colors duration-200">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Engagement Chart"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <h3 className="text-white font-semibold mb-2">Creator Economy Weekly</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Open Rate</span>
              <span className="text-green-400">68%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Time Period</span>
              <span className="text-white">2 months</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsGallery; 