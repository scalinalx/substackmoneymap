import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const endDate = new Date('2024-03-31T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-white text-3xl font-bold mb-2">Early Bird Offer Ends In</h2>
        <p className="text-gray-400">Get 50% off when you enroll before March 31st</p>
      </div>
      <div className="flex justify-center gap-4">
        <div className="bg-black/20 backdrop-blur-xl rounded-xl p-4 w-24 text-center border border-white/25">
          <div className="text-3xl font-bold text-white mb-1">{timeLeft.days}</div>
          <div className="text-sm text-gray-400">Days</div>
        </div>
        <div className="bg-black/20 backdrop-blur-xl rounded-xl p-4 w-24 text-center border border-white/25">
          <div className="text-3xl font-bold text-white mb-1">{timeLeft.hours}</div>
          <div className="text-sm text-gray-400">Hours</div>
        </div>
        <div className="bg-black/20 backdrop-blur-xl rounded-xl p-4 w-24 text-center border border-white/25">
          <div className="text-3xl font-bold text-white mb-1">{timeLeft.minutes}</div>
          <div className="text-sm text-gray-400">Minutes</div>
        </div>
        <div className="bg-black/20 backdrop-blur-xl rounded-xl p-4 w-24 text-center border border-white/25">
          <div className="text-3xl font-bold text-white mb-1">{timeLeft.seconds}</div>
          <div className="text-sm text-gray-400">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer; 