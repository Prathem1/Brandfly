"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
 
const CATEGORY_LABELS = {
  "metal-business-cards": "Metal Business Cards",
  "800gsm-business-cards": "800 GSM Business Cards",
  "500gsm-business-cards": "500 GSM Business Cards",
  "nt-pvc-business-cards": "NT PVC Business Cards",
  "flex-printing": "Flex Printing",
  "paper-printing": "Paper Printing",
  // add all other categories here
};

export default function CategoryClient({ title, products }) {
  const router = useRouter();
  const { data: session, status } = useSession(); // ✅ get session
  const [selected, setSelected] = useState(null);

  const handleSelect = (product, subitem) => {
    setSelected({ product, subitem });
  };

  const handleConfirm = () => {
    if (!selected) return;
    const { product, subitem } = selected;

    // ✅ User must be logged in and verified
    if (!session || !session.user.isVerified) {
      router.push("/login"); // redirect if not logged in or inactive
      return;
    }

    // ✅ Redirect to AddOrder page with query params
    router.push(
      `/AddOrder?category=${encodeURIComponent(title)}&product=${encodeURIComponent(
        product.name
      )}&subitemName=${encodeURIComponent(subitem.name)}&subitemInfo=${encodeURIComponent(
        subitem.info
      )}&price=${encodeURIComponent(subitem.price)}&minQty=${encodeURIComponent(
        product.minQty
      )}`
    );
  };

  if (status === "loading")
    return <p className="text-center text-black mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-white p-2 md:p-10">
      <div className="max-w-9xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-left text-black">
  {CATEGORY_LABELS[title] || title}
</h1>


        {/* Offer Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="bg-gray-200 text-sm text-black px-4 py-1 rounded-full font-medium">
            Choose Your Order Based on Your Requirement
          </button>
          <button className="text-sm text-gray-600">
            Premium Quality at Affordable Prices
          </button>
          <button className="bg-gray-200 text-sm text-black px-4 py-1 rounded-full font-medium">
            Click to Order Now
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-2xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)] transition-shadow overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-[160px] md:h-[200px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="bg-yellow-400 px-3 py-2 flex justify-between items-center text-xs font-medium text-black">
                Minimum Qty: {product.minQty}
              </p>

             <h2 className="text-xl font-semibold mb-3 mt-3 px-3 text-black">
  {CATEGORY_LABELS[product.name] || product.name}
</h2>


              {/* Details */}
              <ul className="px-3 pb-3 space-y-1 text-sm text-gray-700">
                {Array.isArray(product.details)
                  ? product.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircleIcon
                          className="text-green-600"
                          fontSize="small"
                        />
                        <span>{detail}</span>
                      </li>
                    ))
                  : product.details
                      ?.split("\n")
                      .map((detail, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircleIcon
                            className="text-green-600"
                            fontSize="small"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
              </ul>

              {/* Subitems */}
              <div className="space-y-2 px-3 py-3">
                {product.subitems?.map((subitem, i) => {
                  const isSelected =
                    selected?.product?.name === product.name &&
                    selected?.subitem?.info === subitem.info &&
                    selected?.subitem?.price === subitem.price;

                  return (
                    <div
                      key={i}
                      onClick={() => handleSelect(product, subitem)}
                      className={`p-3 border rounded-sm cursor-pointer flex justify-between items-center ${
                        isSelected
                          ? "border-blue-300 bg-blue-300"
                          : "shadow-md hover:border-blue-300 bg-white hover:bg-blue-200"
                      }`}
                    >
                      <div>
                        <p className="font-medium text-black">
                          {subitem.name} – {subitem.info}
                        </p>
                        <p className="text-sm text-gray-500">
                          Rs. {subitem.price}/-
                        </p>
                      </div>
                      {isSelected && (
                        <span className="text-black font-bold">✓</span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Confirm button */}
              {selected?.product?.name === product.name && (
                <button
                  onClick={handleConfirm}
                  className="mt-4 mb-8 mx-6 w-[calc(100%-3rem)] bg-blue-600 text-white border-1 border-white py-2 rounded-3xl font-semibold hover:bg-blue-700 transition"
                >
                  Add Order
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
