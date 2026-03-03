"use client";
import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function VisitingCards() {
  const products = [
    {
      title: "Metal Business Card's",
      feature: "Service Rating",
      rating: "9.8",
      badge: "EXTRA 20% OFF",
      image: "/visiting-card/visiting-card1.png",
      link: "/categories/metal-business-cards",
      points: [
        "Matal Cards",
        "All Shapes Available",
        "Premium quality material",
        "Sheet Color – Gold, Silver, SS, Copper",
        "Minimum Qty: 50 Cards",
      ],
    },
    {
      title: "800 GSM Business Card's", feature: "Service Rating", rating: "9.5", badge: "Engraving Available", image: "/visiting-card/visiting-card2.png", link: "/categories/800gsm-business-cards",
      points: [
        "800 GSM + Velvet",
        "800 GSM + Matt",
        "800 GSM + Black Sheet",
        "800 GSM + Craft Paper",
        "800 GSM + Texture",
      ],
    },
    {
      title: "500 GSM Business Card's", feature: "Service Rating", rating: "9.8", badge: "Engraving Available", image: "/visiting-card/visiting-card3.png", link: "/categories/500gsm-business-cards",
      points: [
        "500 GSM + Velvet",
        "500 GSM + Matt",
        "500 GSM + Matallic + Drip-Off",
        "Die Cut Option- Available ( 36 Shape )",
        "",
      ],
    },
    {
      title: "NT/PVC Business Card's", feature: "Service Rating", rating: "9.1", badge: "EXTRA 15% OFF", image: "/visiting-card/visiting-card4.png", link: "/categories/nt-pvc-business-cards",
      points: [
        "800 Micron Fusing",
        "250 Micron Transparent",
        "180 Micron",
        "",
        "",
      ],
    },
    {
      title: "ATM Pouches", feature: "Service Rating", rating: "8.4", badge: "EXTRA 20% OFF", image: "/visiting-card/visiting-card5.png", link: "/categories/atm-pouches",
      points: [
        "ATM Pouch",
        "Lamination Option ( Matt & Gloss )",
        "Minimum Qty: 1000 Pouches",
        "",
        "",
      ],
    },
    {
      title: "Ragular Business Card's", feature: "Service Rating", rating: "9.9", badge: "Engraving Available", image: "/visiting-card/visiting-card6.png", link: "/categories/regular-business-cards",
      points: [
        "Matt Lamination + UV",
        "Matt Lamination",
        "Matt Lamination + Texture",
        "Gloss Coated + Texture",
        "Gloss Lamination",
      ],
    },
    {
      title: "Ragular Business Card's ( 2 )", feature: "Service Rating", rating: "9.9", badge: "Engraving Available", image: "/visiting-card/visiting-card6.png", link: "/categories/regular-business-cards",
      points: [
        "Gloss UV Coated",
        "Without Coated",
        "Gloss UV Coated ( Small )",
        "Without Coated ( Small )",
        "",
      ],
    },
  ];

  return (
    <section className="site-container relative">
      <div className="py-6">
        <h2 className="text-2xl text-black font-semibold mb-4">Select Visiting card according to Your Requirement</h2>

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
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-2 md:px-0">
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
              <ul className="px-3 pb-3 space-y-1 text-sm text-gray-700">
                {product.points?.map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircleIcon className="text-green-600" fontSize="small" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
