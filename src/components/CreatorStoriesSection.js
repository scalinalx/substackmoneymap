import React from 'react';

const CreatorStoriesSection = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl font-bold mb-2">Creator Success Stories</h2>
        <p className="text-gray-400">See how our students transformed their newsletters into profitable businesses</p>
      </div>
      <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/25 hover:border-white/40 transition-colors duration-200">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Sarah Johnson"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-white font-semibold">Sarah Johnson</h3>
              <p className="text-gray-400 text-sm">Tech Weekly Insights</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Starting Subscribers</span>
              <span className="text-white font-medium">200</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Current Subscribers</span>
              <span className="text-white font-medium">15,000+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Monthly Revenue</span>
              <span className="text-white font-medium">$5,000+</span>
            </div>
          </div>
          <p className="mt-6 text-gray-300 text-sm leading-relaxed">
            "The Newsletter Money Map gave me the exact framework I needed. I went from struggling to get subscribers to building a thriving community in just 3 months."
          </p>
        </div>

        <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/25 hover:border-white/40 transition-colors duration-200">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Mike Rodriguez"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-white font-semibold">Mike Rodriguez</h3>
              <p className="text-gray-400 text-sm">Marketing Growth Lab</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Starting Subscribers</span>
              <span className="text-white font-medium">0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Current Subscribers</span>
              <span className="text-white font-medium">3,000+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Monthly Revenue</span>
              <span className="text-white font-medium">$2,500+</span>
            </div>
          </div>
          <p className="mt-6 text-gray-300 text-sm leading-relaxed">
            "I launched my newsletter 6 weeks ago and already have 3,000 engaged subscribers. The templates and strategies in this program saved me months of work."
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatorStoriesSection; 