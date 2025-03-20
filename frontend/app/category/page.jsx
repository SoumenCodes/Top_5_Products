"use client";
import { useState } from "react";
import ProductListing from "./components/product-listing";

// Mock data for initial load (optional)
const under30kPhones = [
  {
    id: "1",
    brand: "Samsung",
    name: "Samsung Galaxy S23 FE",
    price: 29999,
    originalPrice: 34999,
    rating: 4.5,
    reviews: 327,
    image: "/placeholder.svg?height=200&width=200",
    rank: 1,
    specs: ["Exynos 2200", "8GB RAM", "128GB Storage", '6.4" AMOLED Display'],
    camera: "50MP + 12MP + 8MP",
    battery: "4500mAh",
    processor: "Exynos 2200",
    display: '6.4" AMOLED, 120Hz',
  },
  {
    id: "2",
    brand: "Xiaomi",
    name: "Xiaomi 13i HyperCharge",
    price: 27999,
    originalPrice: 32999,
    rating: 4.3,
    reviews: 218,
    image: "/placeholder.svg?height=200&width=200",
    rank: 2,
    specs: [
      "Dimensity 8200",
      "8GB RAM",
      "256GB Storage",
      '6.67" AMOLED Display',
    ],
    camera: "108MP + 8MP + 2MP",
    battery: "5000mAh, 120W Fast Charging",
    processor: "Dimensity 8200",
    display: '6.67" AMOLED, 120Hz',
  },
  // More phones...
];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("under30k");
  const fetchProducts = async () => {
    try {
      const response = await fetch("/category/api/smartphones/under-10k", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store", // Prevents caching issues in Next.js
      });
      alert(response);
      if (!response.ok) {
        console.log(response);

        throw new Error(`Failed to fetch: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };

  return (
    <div className="bg-[#0c0c24] min-h-screen">
      {/* Category selector */}
      <div className="container mx-auto pt-6 px-4">
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === "under10k"
                ? "bg-[#4c5af7] text-white"
                : "bg-[#1a1a3a] text-gray-300 hover:bg-[#252550]"
            }`}
            onClick={() => setSelectedCategory("under10k")}
          >
            Under ₹10,000
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === "under20k"
                ? "bg-[#4c5af7] text-white"
                : "bg-[#1a1a3a] text-gray-300 hover:bg-[#252550]"
            }`}
            onClick={() => setSelectedCategory("under20k")}
          >
            Under ₹20,000
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === "under30k"
                ? "bg-[#4c5af7] text-white"
                : "bg-[#1a1a3a] text-gray-300 hover:bg-[#252550]"
            }`}
            onClick={() => setSelectedCategory("under30k")}
          >
            Under ₹30,000
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === "under50k"
                ? "bg-[#4c5af7] text-white"
                : "bg-[#1a1a3a] text-gray-300 hover:bg-[#252550]"
            }`}
            onClick={() => setSelectedCategory("under50k")}
          >
            Under ₹50,000
          </button>
        </div>
      </div>

      {/* Render the appropriate product listing based on selection */}
      {selectedCategory === "under10k" && (
        <ProductListing
          title="Top Smartphones Under ₹10,000"
          apiEndpoint="category/api/smartphones/under-10k"
          fetchProducts={fetchProducts}
        />
      )}

      {selectedCategory === "under20k" && (
        <ProductListing
          title="Top Smartphones Under ₹20,000"
          apiEndpoint="category/api/smartphones/under-20k"
        />
      )}

      {selectedCategory === "under30k" && (
        <ProductListing
          title="Top Smartphones Under ₹30,000"
          apiEndpoint="/api/smartphones/under-30k"
          initialData={under30kPhones} // Optional: Use initial data to avoid loading state
        />
      )}

      {selectedCategory === "under50k" && (
        <ProductListing
          title="Top Smartphones Under ₹50,000"
          apiEndpoint="category/api/smartphones/under-50k"
        />
      )}
    </div>
  );
}
