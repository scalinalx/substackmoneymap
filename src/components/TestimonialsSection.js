import React from 'react';

const TestimonialsSection = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl font-bold mb-2">What Our Students Say</h2>
      </div>
      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/25 hover:border-white/40 transition-colors duration-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-medium">
              SJ
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
          </div>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            "The Newsletter Money Map completely transformed my approach. I went from 200 subscribers to 15K in just 3 months and made my first $5K from my newsletter!"
          </p>
          <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
            Tech Weekly Insights
          </a>
        </div>

        <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/25 hover:border-white/40 transition-colors duration-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-medium">
              MR
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
          </div>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            "Ana's framework is pure gold. I launched my newsletter 6 weeks ago and already have 3,000 engaged subscribers. The templates saved me months of work."
          </p>
          <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
            Marketing Growth Lab
          </a>
        </div>

        <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/25 hover:border-white/40 transition-colors duration-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-medium">
              KL
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
          </div>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            "Best investment I made this year. The community alone is worth the price. I'm now making $2,500/month from my newsletter thanks to this program."
          </p>
          <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
            Creator Economy Weekly
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection; 