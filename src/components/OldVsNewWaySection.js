import React from 'react';
import { X, Check, ArrowRight, Zap } from 'lucide-react';

const OldVsNewWaySection = () => {
  const oldWayItems = [
    "Publishing inconsistently when you feel like it",
    "Writing about random topics with no strategy", 
    "Hoping people will magically find your newsletter",
    "Only talking about yourself in every email",
    "Never asking for the sale or monetizing"
  ];

  const newWayItems = [
    "Follow a proven content calendar & framework",
    "Create value-driven content that converts", 
    "Build strategic partnerships for growth",
    "Master the art of newsletter monetization",
    "Scale to 6-figures with proven systems"
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative">
      {/* 10% opacity overlay */}
      <div className="absolute inset-0 bg-red-500 bg-opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-lg opacity-30" style={{ backgroundColor: '#ffc300' }}></div>
              <span className="relative text-black text-sm font-semibold px-5 py-2 rounded-full border" style={{ backgroundColor: '#ffc300', borderColor: '#ffc300' }}>
                Don't get left behind
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            If you want to make it <span className="text-yellow-400">BIG</span> on Substack in 2025, you have two options.
          </h1>
          
          {/* Subheadline */}
          <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed">
            You can either follow "the old way" or "the new way"
          </p>

          {/* Two Columns Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto relative">
            {/* Old Way Column */}
            <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-red-500/20 shadow-xl hover:border-red-500/40 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/40">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <h3 className="text-white text-xl font-bold">Old way</h3>
              </div>
              
              <div className="space-y-4">
                {oldWayItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30 mt-0.5">
                      <X className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-red-500/20">
                <div className="text-center">
                  <span className="text-red-400 text-xs font-medium">Result: Struggle & inconsistent income</span>
                </div>
              </div>
            </div>

            {/* VS Separator - positioned between columns */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-gray-800 rounded-full p-3 border-2 border-gray-600 shadow-xl">
                <span className="text-gray-300 text-sm font-bold px-1">VS</span>
              </div>
            </div>

            {/* New Way Column */}
            <div className="bg-gradient-to-br from-yellow-400/5 to-yellow-400/10 backdrop-blur-xl rounded-xl p-6 border border-yellow-400/30 shadow-xl hover:border-yellow-400/50 hover:shadow-2xl transition-all duration-300 relative group">
              {/* "Recommended" badge */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  ✨ RECOMMENDED
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 mb-6 mt-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 flex items-center justify-center border border-yellow-400/40">
                  <Check className="w-4 h-4 text-yellow-400" />
                </div>
                <h3 className="text-white text-xl font-bold">New way</h3>
                <Zap className="w-4 h-4 text-yellow-400 opacity-80" />
              </div>
              
              <div className="space-y-4">
                {newWayItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group/item">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-400/20 to-green-500/20 flex items-center justify-center border border-green-400/40 mt-0.5">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-gray-200 text-sm leading-relaxed group-hover/item:text-white transition-colors duration-200 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-yellow-400/20">
                <div className="text-center">
                  <span className="text-yellow-400 text-xs font-medium">Result: $120K+/year revenue machine 🚀</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile VS Separator */}
          <div className="flex lg:hidden items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent to-gray-600 flex-1"></div>
            <div className="bg-gray-800 rounded-full p-2 border border-gray-600">
              <span className="text-gray-400 text-sm font-medium px-2">VS</span>
            </div>
            <div className="h-px bg-gradient-to-l from-transparent to-gray-600 flex-1"></div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-yellow-400/20">
            <p className="text-gray-300 text-sm mb-4">
              Ready to switch to the proven method that actually works?
            </p>
            <button 
              onClick={() => {
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl shadow-lg" 
            >
              <Zap className="w-4 h-4 group-hover:animate-pulse" />
              SHOW ME THE NEW WAY
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <p className="text-gray-500 text-xs mt-3">
              Join 250+ newsletter creators building 6-figure businesses
            </p>
          </div>
        </div>
      </div>
      
      {/* Close the main container and create full-width testimonials section */}
      <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 relative">
        {/* 10% opacity overlay */}
        <div className="absolute inset-0 bg-red-500 bg-opacity-10"></div>
        
        <div className="relative z-10 py-20">
          {/* Testimonials Section */}
          <div className="text-center mb-8 px-6">
            <div className="inline-block">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-lg opacity-30" style={{ backgroundColor: '#ffc300' }}></div>
                <span className="relative text-black text-sm font-semibold px-5 py-2 rounded-full border" style={{ backgroundColor: '#ffc300', borderColor: '#ffc300' }}>
                  250+ Success stories to date
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12 px-6">
            <h2 className="text-white text-3xl font-bold mb-2">Need More Convincing?</h2>
            <p className="text-gray-400">Join hundreds of successful newsletter creators</p>
          </div>
          
          {/* Full-width testimonials container - truly full width */}
          <div className="w-full px-8">
            <div className="grid grid-cols-4 gap-6 max-w-none mx-auto">
              <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/25 hover:border-white/40 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Emma Wilson"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-white font-semibold text-sm">Emma Wilson</h3>
                    <p className="text-gray-400 text-xs">Tech Trends Weekly</p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                  "I was skeptical at first, but this program completely changed my perspective. The step-by-step guidance helped me launch my newsletter and start making money within weeks."
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>

              <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/25 hover:border-white/40 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="David Chen"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-white font-semibold text-sm">David Chen</h3>
                    <p className="text-gray-400 text-xs">Startup Insights</p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                  "The templates and strategies provided in this program are worth their weight in gold. I've been able to scale my newsletter to 10,000 subscribers and generate consistent revenue."
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>

              <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/25 hover:border-white/40 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Sarah Johnson"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-white font-semibold text-sm">Sarah Johnson</h3>
                    <p className="text-gray-400 text-xs">Marketing Insights</p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                  "This program exceeded all my expectations. Within 2 months, I grew from 500 to 8,000 subscribers and launched my first paid newsletter tier successfully."
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>

              <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/25 hover:border-white/40 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Michael Rodriguez"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-white font-semibold text-sm">Michael Rodriguez</h3>
                    <p className="text-gray-400 text-xs">Creator Economy</p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                  "Amazing results! I went from $0 to $4,200/month in newsletter revenue in just 4 months. The community support and Ana's guidance made all the difference."
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldVsNewWaySection; 