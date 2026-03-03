'use client';
import React, { useState } from 'react';

// Manually add 15 different image paths
const services = [
  '/ClientShowcase/page_6.png',
   '/ClientShowcase/page_5.png',
  

];

export default function ClientServicesCarousel() {
  const [current, setCurrent] = useState(0);

  const prevService = () => {
    setCurrent((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextService = () => {
    setCurrent((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="site-container">
    <div className="w-full flex flex-col items-center justify-center py-6 px-4 bg-white">
      {/* Heading */}
      <div className="flex justify-center mb-8">
        <div className="bg-yellow-300 rounded-[1.5cm] px-6 py-4 sm:px-[1cm] sm:py-[0.6cm] inline-block">
          <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800">
            Our Client Services Showcase
          </h2>
        </div>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative flex items-center justify-center w-full max-w-full sm:max-w-[90%] md:max-w-[70%]">
        {/* Left Button */}
        <button
          onClick={prevService}
          className="absolute left-1 sm:left-2 z-10 bg-black text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-800 transition"
        >
          🡠
        </button>

        {/* Image */}
        <img
          src={services[current]}
          alt=""
          className="w-full sm:w-[90%] max-w-[500px] h-auto object-cover rounded-xl shadow-lg transition duration-300"
        />

        {/* Right Button */}
        <button
          onClick={nextService}
          className="absolute right-1 sm:right-2 z-10 bg-black text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-800 transition"
        >
         🡢
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex flex-wrap justify-center gap-2 mt-5 px-4">
        {services.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${index === current ? 'bg-black' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
    </section>
  );
}
