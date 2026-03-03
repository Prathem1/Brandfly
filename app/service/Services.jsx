"use client";
import Link from "next/link";

export default function ServicesButton() {
  const products = [
    { title: "Graphic Designing Services", subtitle: "Creates eye-catching visuals that make your brand look professional and memorable.", feature: "Service Rating", rating: "9.7", badge: "EXTRA 20% OFF", image: "/service-img/service1.png", link: "/categories/graphic-designing" },
    { title: "Flex Printing Services", subtitle: "Helps your business or event stand out with bright, clear, and attractive displays.", feature: "Service Rating", rating: "8.5", badge: "Engraving Available", image: "/service-img/service2.png", link: "/categories/flex-printing" },
    { title: "Visiting Card Services", subtitle: "Gives you high-quality most professional materials that leave a lasting impression.", feature: "Service Rating", rating: "9.4", badge: "EXTRA 18% OFF", image: "/service-img/service3.png", link: "/service/visiting-cards" },
    { title: "Paper Printing Services", subtitle: "Delivering high-quality, professional printed materials that make your brand stand out.", feature: "Service Rating", rating: "9.4", badge: "EXTRA 22% OFF", image: "/service-img/service4.png", link: "/categories/paper-printing" },
    { title: "Software Services", subtitle: "Helps you build a strong online presence and connect with more people.", feature: "Service Rating", rating: "8.3", badge: "EXTRA 20% OFF", image: "/service-img/service5.png", link: "/service/software-services" },
    { title: "Digital Promotions", subtitle: "Expands your reach and connects your brand with the right audience online.", feature: "Service Rating", rating: "8.5", badge: "EXTRA ₹18% OFF", image: "/service-img/service6.png", link: "/categories/digital-promotion" },
    { title: "Wedding Related Services", subtitle: "Adds beauty and uniqueness to your special day with personalized designs.", feature: "Service Rating", rating: "8.8", badge: "EXTRA 15% OFF", image: "/service-img/service7.png", link: "/categories/wedding-services" },
    // { title: "Event Management", subtitle: "Takes away the stress of planning so you can enjoy every moment with ease.", feature: "Service Rating", rating: "9.9", badge: "Engraving Available", image: "/service-img/service8.png", link: "/services/packaging" },
    { title: "Premium Standees", subtitle: "Durable, eye-catching standees designed to promote your brand with style and clarity.", feature: "Service Rating", rating: "9.9", badge: "Engraving Available", image: "/service-img/service9.png", link: "/categories/standee-services" },
  ];

  return (
    <section className="site-container relative">
      <div className="py-6">
        <h2 className="text-2xl text-black font-semibold mb-4">This is Our Services</h2>

        {/* Offer Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="bg-gray-200 text-sm text-black px-4 py-1 rounded-full font-medium">
            Extra 10% Off - on all following services
          </button>
          <button className="text-sm text-gray-600">
            Extra 20% Off - on some services
          </button>
          <button className="bg-gray-200 text-sm text-black px-4 py-1 rounded-full font-medium">
            Click to Order Now
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, idx) => (
            <Link
              href={product.link}
              key={idx}
              className="relative flex flex-col border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white"
            >
              {/* Badge */}
              {product.badge && (
                <div
                  className={`absolute top-0 left-0 z-10 px-2 py-1 text-xs font-semibold text-white rounded-br-xl ${product.badge.includes("Engraving") ? "bg-black" : "bg-green-600"
                    }`}
                >
                  {product.badge}
                </div>
              )}

              {/* Image */}
              <div className="w-full h-[160px] md:h-[200px] overflow-hidden">
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
              <div className="px-2 py-2 text-lg font-semibold text-black">
                {product.title}
              </div>

              {/* Sub Title */}
              <div className="px-2 py-0 md:py-2 text-sm text-black text-justify">
                {product.subtitle}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
