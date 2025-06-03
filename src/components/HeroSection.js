import React from 'react';

const HeroSection = () => {
  return (
    <div className="text-center py-16">
      {/* Profile Pictures Row */}
      <div className="flex justify-center items-center gap-1 mb-4">
        <div className="flex -space-x-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <span className="text-gray-300 text-sm ml-4">Join 500+ Students including 10 LinkedIn Top Voices</span>
      </div>
      
      <h1 className="text-white text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
        Turn Your Newsletter Into a<br/>
        <span className="text-yellow-400">6-Figure Business</span> in 90 Days
      </h1>
      <p className="text-gray-300 text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
        The complete system that transformed 500+ hobby newsletters into profitable businesses - without spending a penny on ads
      </p>
      
      {/* Video Section */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="relative">
          <div className="aspect-video bg-black rounded-lg overflow-hidden border border-gray-700">
            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative">
              <div className="absolute inset-4 bg-gray-800 rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 h-full">
                  <div className="bg-orange-600 rounded-lg p-3 flex flex-col gap-2">
                    <div className="w-12 h-12 bg-white rounded-full"></div>
                    <div className="text-white text-xs font-bold">LITERALLY ACADEMY</div>
                    <div className="flex flex-col gap-1 mt-4">
                      {['Dashboard', 'Courses', 'Homework', 'Community', 'Team Starter', 'Analytics', 'Live', 'Bookflix', 'Shop/Pro'].map((item) => (
                        <div key={item} className="text-white text-xs py-1">{item}</div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/70 rounded p-2">
                        <div className="text-white text-xs">Welcome Call</div>
                        <div className="text-gray-400 text-xs">This is for our new daily members who joined. This is just the Q&A.</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="bg-gray-700 rounded p-2 flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-600 rounded"></div>
                        <div className="text-white text-xs">Post Boost, Oct {15 + i}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/80 rounded p-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <div className="text-white text-sm">2:57 / 8:15</div>
                  <div className="flex-1 bg-gray-600 h-1 rounded">
                    <div className="bg-white h-1 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button
            onClick={() => {
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-yellow-400 border border-transparent rounded-md hover:bg-yellow-500 transition-colors duration-200"
          >
            JOIN SUBSTACK MONEY MAP TODAY!
          </button>
        </div>
      </div>
      
      {/* Social Proof Section */}
      <div className="mt-16 mb-8">
        <div className="mb-12 overflow-hidden">
          <div className="flex animate-scroll">
            <div className="flex items-center gap-12 min-w-full">
              <div className="text-white font-bold text-2xl opacity-70">Substack</div>
              <div className="text-white font-bold text-2xl italic opacity-70">Forbes</div>
              <div className="text-white font-bold text-xl opacity-70">LinkedIn</div>
              <div className="text-white font-bold text-xl opacity-70">GITEX</div>
              <div className="text-white font-bold text-lg opacity-70">beehiiv</div>
              <div className="text-white font-bold text-lg opacity-70">SEMRUSH</div>
              <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm opacity-70">Top Voice</div>
              <div className="text-white font-bold text-lg opacity-70">LinkedIn News</div>
            </div>
            <div className="flex items-center gap-12 min-w-full">
              <div className="text-white font-bold text-2xl opacity-70">Substack</div>
              <div className="text-white font-bold text-2xl italic opacity-70">Forbes</div>
              <div className="text-white font-bold text-xl opacity-70">LinkedIn</div>
              <div className="text-white font-bold text-xl opacity-70">GITEX</div>
              <div className="text-white font-bold text-lg opacity-70">beehiiv</div>
              <div className="text-white font-bold text-lg opacity-70">SEMRUSH</div>
              <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm opacity-70">Top Voice</div>
              <div className="text-white font-bold text-lg opacity-70">LinkedIn News</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center border-r border-gray-600 last:border-r-0">
            <div className="text-white text-6xl font-bold mb-2">#1</div>
            <div className="text-gray-300 text-lg">Substack Money Map program</div>
          </div>
          
          <div className="text-center border-r border-gray-600 last:border-r-0">
            <div className="text-white text-6xl font-bold mb-2">100K+</div>
            <div className="text-gray-300 text-lg">Followers on SM</div>
          </div>
          
          <div className="text-center">
            <div className="text-white text-6xl font-bold mb-2">250+</div>
            <div className="text-gray-300 text-lg">Successful students</div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="border border-orange-500 rounded-full px-6 py-2">
            <span className="text-white text-sm">250+ Success stories & counting</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 