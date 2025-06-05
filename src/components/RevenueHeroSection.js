import React from 'react';

const RevenueHeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative">
      {/* 10% opacity overlay */}
      <div className="absolute inset-0 bg-red-500 bg-opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Turn Your Newsletter Into a <span className="text-yellow-400">$120K+/Year</span> Revenue Machine & Master the NEW Way to <span className="text-yellow-400">Monetize Content</span>.
          </h1>
          
          {/* Subheadline */}
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            Discover the proven frameworks, monetization strategies and exact systems you'll need to become a top 1% newsletter creator and build a six-figure business with <span className="text-yellow-400 font-semibold">Newsletter Money Map</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevenueHeroSection; 