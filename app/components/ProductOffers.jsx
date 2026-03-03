"use client";
import { useState } from "react";

export default function ProductOffers() {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    { title: "Logo", feature: "Service Rating", rating: "9.7", badge: "EXTRA 20% OFF", image: "/images/Rockerz1.png" },
    { title: "Brochure", feature: "Service Rating", rating: "8.5", badge: "Engraving Available", image: "/images/Rockerz2.png" },
    { title: "Poster", feature: "Service Rating", rating: "9.4", badge: "Engraving Available", image: "/images/Rockerz3.png" },
    { title: "Catalogue", feature: "Service Rating", rating: "8.8", badge: "EXTRA 15% OFF", image: "/images/Rockerz4.png" },
    { title: "Flyer", feature: "Service Rating", rating: "8.3", badge: "EXTRA 20% OFF", image: "/images/Rockerz5.png" },
    { title: "Packaging", feature: "Service Rating", rating: "9.9", badge: "Engraving Available", image: "/images/Rockerz6.png" },
    { title: "Invitation video", feature: "Service Rating", rating: "8.5", badge: "EXTRA ₹18% OFF", image: "/images/Rockerz7.png" },
    { title: "Wedding card", feature: "Service Rating", rating: "9.9", badge: "Engraving Available", image: "/images/Rockerz8.png" },
    { title: "Business card", feature: "Service Rating", rating: "9.9", badge: "EXTRA 10% OFF", image: "/images/Rockerz9.png" },
    { title: "Social Designs", feature: "Service Rating", rating: "8.9", badge: "EXTRA 14% OFF", image: "/images/Rockerz10.png" },
    { title: "Digital Stationery", feature: "Service Rating", rating: "9.1", badge: "EXTRA 10% OFF", image: "/images/Rockerz11.png" },
    { title: "Menu Cards", feature: "Service Rating", rating: "9.9", badge: "Engraving Available", image: "/images/Rockerz12.png" },
  ];

  return (
    <section className="site-container relative">
      <div className="py-6">
        <h2 className="text-2xl text-black font-semibold mb-4">Our Services</h2>

        {/* Offer Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="bg-gray-200 text-sm text-black px-4 py-1 rounded-full font-medium">
            Extra 10% Off - on all design & branding services
          </button>
          <button className="text-sm text-gray-600">
            Extra 20% Off - on some services
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="relative flex flex-col border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white"
            >
              {/* Badge */}
              {product.badge && (
                <div
                  className={`absolute top-0 left-0 z-10 px-2 py-1 text-xs font-semibold text-white rounded-br-xl ${
                    product.badge.includes("Engraving") ? "bg-black" : "bg-green-600"
                  }`}
                >
                  {product.badge}
                </div>
              )}

              {/* IMAGE: clickable for zoom */}
              <div
                className="w-full h-[160px] md:h-[200px] overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(product.image)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Feature & Rating */}
              <div className="mt-auto bg-yellow-400 px-3 py-2 flex justify-between items-center text-xs font-medium text-black">
                <span className="truncate">{product.feature}</span>
                <div className="px-2 py-0.5 text-[10px] font-semibold text-black bg-white rounded">
                  ⭐ {product.rating}
                </div>
              </div>

              {/* Title */}
              <div className="px-2 py-2 text-center text-sm font-semibold text-black">
                {product.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zoomed Image (Centered, White Blur) */}
      {selectedImage && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          {/* White blur overlay */}
          <div
            className="absolute inset-0 bg-white/60 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          />
          {/* Zoomed image */}
          <img
            src={selectedImage}
            alt="Zoomed"
            className="relative max-w-[90%] max-h-[80%] rounded-xl shadow-xl transition-transform duration-300 scale-100"
          />
        </div>
      )}
    </section>
  );
}
