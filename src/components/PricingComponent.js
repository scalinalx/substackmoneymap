import React, { useState, useEffect } from 'react';
import { Check, Shield, Zap, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, ArrowDown } from 'lucide-react';
import AccordionSection from './AccordionSection';
import ResultsGallery from './ResultsGallery';
import Testimonials2 from './Testimonials2';
import Animated10KGrowth from './Animated10KGrowth';

const PricingComponent = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 27,
    seconds: 43
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
      
      {/* 5% opacity overlay */}
      <div className="absolute inset-0 bg-red-500 bg-opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Hero Section */}
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
            <span className="text-gray-300 text-sm ml-4">Join 250+ Students including 12 Substack Bestsellers</span>
          </div>
          
          <h1 className="text-white text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            Turn Your Newsletter Into a<br/>
            <span className="text-yellow-400">6-Figure Business</span> in 90 Days
          </h1>
          <p className="text-gray-300 text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
            The complete system that transformed 250+ hobby newsletters into profitable businesses - without spending a penny on ads
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

        {/* Testimonials Section */}
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

        {/* Countdown Timer */}
        <div className="text-center mb-12">
          <div className="bg-yellow-400 rounded-xl p-4 max-w-3xl mx-auto">
            <h3 className="text-black text-xl font-bold mb-1">⚡ LIMITED TIME OFFER</h3>
            <p className="text-black/80 text-sm mb-3">Early Bird Pricing Ends Soon!</p>
            
            <div className="flex justify-center gap-3">
              <div className="bg-black rounded-lg p-2 min-w-[70px]">
                <div className="text-white text-3xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-gray-300 text-sm">DAYS</div>
              </div>
              <div className="bg-black rounded-lg p-2 min-w-[70px]">
                <div className="text-white text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-gray-300 text-sm">HOURS</div>
              </div>
              <div className="bg-black rounded-lg p-2 min-w-[70px]">
                <div className="text-white text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-gray-300 text-sm">MINS</div>
              </div>
              <div className="bg-black rounded-lg p-2 min-w-[70px]">
                <div className="text-white text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-gray-300 text-sm">SECS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Creator Stories Section */}
        <div className="mb-16">
          <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg">
                  EC
                </div>
              </div>
              <div className="p-6">
                <div className="text-gray-500 text-xs font-medium mb-2 tracking-wide">CREATOR RESULTS</div>
                <h3 className="text-black text-xl font-bold mb-3">Em Connors ▶</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Newsletter creator Em Connors built an audience and earned five figures in a week with her first online course.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-300 to-blue-400 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg">
                  MH
                </div>
              </div>
              <div className="p-6">
                <div className="text-gray-500 text-xs font-medium mb-2 tracking-wide">CREATOR RESULTS</div>
                <h3 className="text-black text-xl font-bold mb-3">Myisha T. Hill ▶</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Myisha shares how she's building her business online through newsletter content and community building.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-300 to-purple-400 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg">
                  JM
                </div>
              </div>
              <div className="p-6">
                <div className="text-gray-500 text-xs font-medium mb-2 tracking-wide">CREATOR RESULTS</div>
                <h3 className="text-black text-xl font-bold mb-3">Juan Muñoz ▶</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Juan published his email newsletter for 162 weeks straight and built a fulfilling online business.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg">
                  KH
                </div>
              </div>
              <div className="p-6">
                <div className="text-gray-500 text-xs font-medium mb-2 tracking-wide">CREATOR RESULTS</div>
                <h3 className="text-black text-xl font-bold mb-3">Khe Hy ▶</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Khe left Wall Street and turned a 36-person email list into a $500k creator business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Transition Section */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">Real Creators, Proven Results</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-12">
            Get personal guidance from me PLUS all the tools and strategies you need to achieve breakthrough growth like these success stories
          </p>
          
          {/* Results Gallery */}
          <ResultsGallery />
        </div>

        {/* What We Cover Section */}
        <div className="pb-16">
          <AccordionSection />
        </div>
        
        <Testimonials2 />

        {/* Pricing Section */}
        
      </div>
    </div>
  );
};

export default PricingComponent; 