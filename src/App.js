import React from 'react';
import HeroSection from './components/HeroSection';
import TestimonialsSection from './components/TestimonialsSection';
import CountdownTimer from './components/CountdownTimer';
import CreatorStoriesSection from './components/CreatorStoriesSection';
import TransitionSection from './components/TransitionSection';
import ResultsGallery from './components/ResultsGallery';
import AccordionSection from './components/AccordionSection';
import Testimonials2 from './components/Testimonials2';
import NewsletterValueSection from './components/NewsletterValueSection';
import PricingComponent from './components/PricingComponent';
import PricingComp2 from './components/PricingComp2';
import BannerText1 from './components/bannertext1';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <PricingComponent />
      <BannerText1/>
      <NewsletterValueSection />
      <PricingComp2/>
    </div>
  );
}

export default App;
