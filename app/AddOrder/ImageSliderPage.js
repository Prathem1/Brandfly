"use client";

import { useState, useEffect, useRef } from "react";

// ✅ Single page with images and slider integrated
export default function ImageSliderPage() {
  const slides = [
    "/images/slide1.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
    "/images/slide5.jpg",
    "/images/slide6.jpg",
  ];

  // --- Slider state & logic ---
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => resetTimeout();
  }, [current, slides.length]);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // --- Render ---
  return (
    <div className="w-full  mx-auto ">
      <div className="relative overflow-hidden w-full rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-full px-2">
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Prev/Next buttons */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
        >
          ›
        </button>
      </div>
    </div>
  );
}
