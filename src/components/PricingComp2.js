import React, { useState, useEffect } from 'react';
import { Check, Shield, Zap, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, ArrowDown } from 'lucide-react';
import AccordionSection from './AccordionSection';
import ResultsGallery from './ResultsGallery';
import Testimonials2 from './Testimonials2';
import Animated10KGrowth from './Animated10KGrowth';

const PricingComp2 = () => {
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
        
        

        {/* Testimonials Section */}
        

        {/* Countdown Timer */}
        

        {/* Creator Stories Section */}
        

        {/* Transition Section */}
        

        {/* What We Cover Section */}
       

        {/* Pricing Section */}
        <div id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-white text-4xl font-bold mb-4">Becoming a Substack Bestseller is now easier than ever</h2>
            <h2 className="text-yellow-400 text-4xl font-bold mb-4">With Substack Money Map</h2>
            <h2 className="text-white text-4xl font-bold mb-4">Choose Your Path to Success</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Select the plan that best fits your goals and start your journey to newsletter success
            </p>
          </div>
          
          <div className="flex gap-8 max-w-4xl mx-auto">
            <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 flex-1 border border-white/25 shadow-2xl">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="text-white font-bold text-xl">SM</div>
                  <div className="text-white text-sm font-medium">SUBSTACK<br/>MONEY MAP</div>
                </div>
                
                <h3 className="text-white text-2xl font-semibold mb-4">Newsletter Money Map Academy</h3>
                
                <div className="mb-4">
                  <span className="text-white text-5xl font-bold">$247</span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
                
                <p className="text-gray-400 text-sm mb-8">
                  Monthly subscription of $247. Cancel anytime.
                </p>
                
                <div className="text-center mt-8">
                  <button
                    onClick={() => {
                      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-yellow-400 border border-transparent rounded-md hover:bg-yellow-500 transition-colors duration-200"
                  >
                    GET ACCESS
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Complete 6-module course with proven frameworks</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">50+ templates & proprietary tools</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Private community with expert support</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Monthly workshops & fresh resources</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Growth network for cross-promotion</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/25">
                <div className="flex items-center gap-2">
                  <Shield className="text-gray-400 w-4 h-4" />
                  <div>
                    <div className="text-white text-xs font-medium">100% Safe Purchase</div>
                    <div className="text-gray-400 text-xs">Your data is protected</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Zap className="text-gray-400 w-4 h-4" />
                  <div>
                    <div className="text-white text-xs font-medium">Instant Access</div>
                    <div className="text-gray-400 text-xs">To your program</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 flex-1 border border-white/25 shadow-2xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                  BEST VALUE
                </span>
              </div>
              
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="text-white font-bold text-xl">SM</div>
                  <div className="text-white text-sm font-medium">SUBSTACK<br/>MONEY MAP</div>
                </div>
                
                <h3 className="text-white text-2xl font-semibold mb-4">Newsletter Money Map VIP</h3>
                
                <div className="mb-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-white text-5xl font-bold">$997</span>
                    <span className="text-gray-400 text-lg">/year</span>
                  </div>
                  <div className="text-yellow-400 text-xl font-bold mt-2">Save $1,967</div>
                </div>
                
                <p className="text-gray-400 text-sm mb-8">
                  One-time payment for full year access.
                </p>
                
                <div className="text-center mt-8">
                  <button
                    onClick={() => {
                      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-yellow-400 border border-transparent rounded-md hover:bg-yellow-500 transition-colors duration-200"
                  >
                    GET ACCESS
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-md font-bold">Everything in Newsletter Money Map Academy</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Monthly live group calls with Ana</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Priority support & early access</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">VIP resource library & case studies</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Monthly revenue review sessions</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/25">
                <div className="flex items-center gap-2">
                  <Shield className="text-gray-400 w-4 h-4" />
                  <div>
                    <div className="text-white text-xs font-medium">100% Safe Purchase</div>
                    <div className="text-gray-400 text-xs">Your data is protected</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Zap className="text-gray-400 w-4 h-4" />
                  <div>
                    <div className="text-white text-xs font-medium">Instant Access</div>
                    <div className="text-gray-400 text-xs">To your program</div>
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

export default PricingComp2; 