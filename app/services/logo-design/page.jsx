'use client';
import React, { useState } from 'react';

const logos = [
  '/services/logo/logo1.png',
  '/services/logo/logo2.png',
  '/services/logo/logo3.png',
  '/services/logo/logo4.png',
  '/services/logo/logo5.png',
  '/services/logo/logo6.png',
  '/services/logo/logo7.png',
  '/services/logo/logo8.png',
  '/services/logo/logo9.png',
  '/services/logo/logo10.png',
  '/services/logo/logo11.png',
  '/services/logo/logo12.png',
  // Add more images if needed (up to 15)
];

export default function LogoDesignShowcase() {
  const [currentLogo, setCurrentLogo] = useState(0);

  const prevLogo = () => {
    setCurrentLogo((prev) => (prev === 0 ? logos.length - 1 : prev - 1));
  };

  const nextLogo = () => {
    setCurrentLogo((prev) => (prev === logos.length - 1 ? 0 : prev + 1));
  };

  return (
        <section className="site-container">
    <div className="w-full  py-10 bg-white">
      {/* Heading Section */}
     <div className="w-full text-left px-4 sm:px-6 md:px-[1cm]">
                <div className="py-3 sm:py-4 mb-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Strategic Logo Design That Defines Your Brand Identity
          </h1>
        </div>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-full sm:max-w-[90%] md:max-w-[70%]">
          We design logos that go beyond visuals — they communicate your brand’s essence with clarity and confidence.
          By aligning creativity with strategy, we craft logos that are timeless, versatile, and built to strengthen
          recognition across all platforms.
        </p>
      </div>


      {/* Carousel Section */}
      <div className="w-full flex flex-col items-center justify-center mt-12">


        {/* Carousel Wrapper */}
        <div className="relative flex items-center justify-center w-full max-w-full sm:max-w-[90%] md:max-w-[70%]">
          {/* Left Button */}
          <button
            onClick={prevLogo}
            className="absolute left-1 sm:left-2 z-10 bg-black text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-800 transition"
          >
            🡠
          </button>

          {/* Image */}
          <img
            src={logos[currentLogo]}
            alt={`Logo ${currentLogo + 1}`}
            className="w-full sm:w-[90%] max-w-[500px] h-auto object-cover rounded-xl shadow-lg transition duration-300"
          />

          {/* Right Button */}
          <button
            onClick={nextLogo}
            className="absolute right-1 sm:right-2 z-10 bg-black text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-800 transition"
          >
            🡢
          </button>
        </div>

        {/* Dots */}
        <div className="flex flex-wrap justify-center gap-2 mt-5 px-4">
          {logos.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${index === currentLogo ? 'bg-black' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
