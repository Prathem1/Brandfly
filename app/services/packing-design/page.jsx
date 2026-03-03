'use client';
import React, { useState } from 'react';

const logos = [
    '/services/packing/packing1.png',
    '/services/packing/packing2.png',
    '/services/packing/packing3.png',

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
        <div className="w-full px-4 py-10 bg-white">
            {/* Heading Section */}
            <div className="w-full text-left px-4 sm:px-6 md:px-[1cm]">
                <div className="py-3 sm:py-4 mb-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                        Premium Packaging Design That Sells and Speaks for Your Brand
                    </h1>
                </div>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-full sm:max-w-[90%] md:max-w-[70%]">
                    We design packaging that not only protects your product but also enhances its shelf appeal.
                    Every element is thoughtfully crafted to reflect your brand’s personality, influence purchase decisions,
                    and leave a lasting impression.
                </p>
            </div>


            {/* Carousel Section */}
            <div className="w-full flex flex-col items-center justify-center mt-12">

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
