"use client";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function SoftwareServices() {
  const products = [
    {
      title: "Contact Through Brandfly Team (+91 8427338137)",
      feature: "Service Rating",
      rating: "9.8",
      badge: "EXTRA 20% OFF",
      image: "/service-img/service4.png",
      points: [
        "Custom Software Development",
        "Web Applications Development",
        "Website Development",
        "Maintenance & Support",
      ],
    },
    {
      title: "Contact Directly with Developer Team (+91 9115693179)",
      feature: "Service Rating",
      rating: "9.8",
      badge: "EXTRA 20% OFF",
      image: "/service-img/service4.png",
      points: [
       "Custom Software Development",
        "Web Applications Development",
        "Website Development",
        "Maintenance & Support",
      ],
    },
  ];

  return (
    <section className="site-container relative">
      <div className="py-6">
        <h2 className="text-2xl text-black font-semibold mb-4">
          Our Software Services
        </h2>
        {/* Offer Buttons */} <div className="flex flex-wrap gap-4 mb-6"> <button className="bg-gray-200 text-sm text-black px-4 py-1 rounded-full font-medium"> Extra 10% Off - on all services </button> <button className="text-sm text-gray-600"> Extra 20% Off - on some services </button> <button className="bg-gray-200 text-sm text-black px-4 py-1 rounded-full font-medium"> Pick an Number and - Call Now </button> </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-2 md:px-0">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="relative flex flex-col border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white"
            >
              {/* Badge */}
              {product.badge && (
                <div
                  className={`absolute top-0 left-0 z-10 px-2 py-1 text-xs font-semibold text-white rounded-br-xl ${product.badge.includes("Engraving")
                      ? "bg-black"
                      : "bg-green-600"
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

              {/* Points List with Green Ticks */}
              <ul className="px-3 pb-3 space-y-1 text-sm text-gray-700">
                {product.points?.map(
                  (point, i) =>
                    point && (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircleIcon
                          className="text-green-600"
                          fontSize="small"
                        />
                        <span>{point}</span>
                      </li>
                    )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
