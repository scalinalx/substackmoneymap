import React from 'react';

const TransitionSection = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl font-bold mb-2">From Zero to Newsletter Hero</h2>
        <p className="text-gray-400">Your journey to building a profitable newsletter business</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            <div className="relative">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-white font-semibold mb-2">Week 1-2: Foundation</h3>
                  <p className="text-gray-400 text-sm">
                    Learn the fundamentals of newsletter creation, audience building, and monetization strategies.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-black/20 backdrop-blur-xl rounded-xl p-4 border border-white/25">
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Newsletter setup and optimization</li>
                      <li>• Audience research and targeting</li>
                      <li>• Content strategy development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-black/20 backdrop-blur-xl rounded-xl p-4 border border-white/25">
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Growth hacking techniques</li>
                      <li>• Social media promotion</li>
                      <li>• Email marketing automation</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-white font-semibold mb-2">Week 3-4: Growth</h3>
                  <p className="text-gray-400 text-sm">
                    Implement proven strategies to grow your subscriber base and increase engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-white font-semibold mb-2">Week 5-6: Monetization</h3>
                  <p className="text-gray-400 text-sm">
                    Turn your newsletter into a revenue-generating business with multiple income streams.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-black/20 backdrop-blur-xl rounded-xl p-4 border border-white/25">
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Sponsorship strategies</li>
                      <li>• Premium content creation</li>
                      <li>• Community building</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransitionSection; 