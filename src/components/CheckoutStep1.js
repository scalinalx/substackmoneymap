import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const CheckoutStep1 = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Get package from URL params
  const selectedPackage = searchParams.get('package') || 'monthly';
  
  // Package details for display
  const packageDetails = {
    monthly: {
      name: 'Newsletter Money Map Academy',
      price: '$247/month',
      description: 'Monthly subscription'
    },
    yearly: {
      name: 'Newsletter Money Map VIP',
      price: '$997/year',
      description: 'Annual subscription (Save $1,967)'
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Save to Supabase
      const { data, error } = await supabase
        .from('leads')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            package: selectedPackage,
            checkout_status: 'lead_captured'
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        setSubmitError('Something went wrong. Please try again.');
        return;
      }

      console.log('Lead saved successfully:', data);
      
      // TODO: Redirect to Stripe checkout (Step 5)
      alert('Form submitted successfully! (Next: Stripe integration)');
      
    } catch (error) {
      console.error('Error saving lead:', error);
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-black w-full max-w-md mx-auto rounded-lg relative">
        <div className="p-8 text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded flex items-center justify-center">
                <span className="text-black font-bold text-sm">SM</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">SUBSTACK</div>
                <div className="text-white font-bold text-lg -mt-1">MONEY MAP</div>
              </div>
            </div>
          </div>

          {/* Selected Package Display */}
          <div className="mb-6 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
            <div className="text-yellow-400 text-sm font-medium">Selected Plan</div>
            <div className="text-white text-lg font-semibold">{packageDetails[selectedPackage].name}</div>
            <div className="text-yellow-400 text-xl font-bold">{packageDetails[selectedPackage].price}</div>
            <div className="text-gray-400 text-sm">{packageDetails[selectedPackage].description}</div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              {/* Step 1 - Active */}
              <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-yellow-400"></div>
              {/* Progress Line */}
              <div className="w-16 h-0.5 bg-gray-600"></div>
              {/* Step 2 - Inactive */}
              <div className="w-4 h-4 bg-transparent rounded-full border-2 border-gray-600"></div>
            </div>
          </div>

          {/* Headlines */}
          <h1 className="text-white text-2xl font-semibold mb-2">Let's get started</h1>
          <p className="text-gray-400 text-sm mb-8">Just a few details</p>

          {/* Error Message */}
          {submitError && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-400 text-sm">{submitError}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Field */}
            <div className="text-left">
              <label className="text-white text-sm font-medium block mb-2">
                Full Name*
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 disabled:opacity-50"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div className="text-left">
              <label className="text-white text-sm font-medium block mb-2">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 disabled:opacity-50"
                placeholder="Enter your email address"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Processing...' : 'Next'}
            </button>
          </form>

          {/* Support Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-2">
              Facing any issues or any other questions?
            </p>
            <a 
              href="#" 
              className="text-gray-300 text-sm underline hover:text-white transition-colors duration-200"
            >
              Contact Support
            </a>
          </div>

          {/* Powered By */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-xs">
              POWERED BY
            </p>
            <a 
              href="https://substack.com/@howwegrowtoday"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-xs font-semibold mt-1 hover:text-white transition-colors duration-200"
            >
              HOW WE GROW
            </a>
            <p className="text-gray-400 text-[10px] mt-3 opacity-30 whitespace-nowrap">
              <br/>
              By entering your data here you agree to subscribe to How We Grow on Substack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStep1; 