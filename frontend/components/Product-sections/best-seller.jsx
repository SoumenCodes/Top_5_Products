"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Sample data
const bestSellerProducts = [
  {
    id: "1",
    brand: "NOVASTRIKE",
    name: "Xbox Series XS & PC Pro AF Headset",
    price: 95.0,
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    brand: "VORTEXGLIDE",
    name: "AX6000 Dual Band WiFi 6 Router",
    price: 12.0,
    originalPrice: 56.0,
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg?height=200&width=200",
    onSale: true,
  },
  {
    id: "3",
    brand: "ZENITHQUEST",
    name: "Xbox Series X Controller",
    price: 23.0,
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    brand: "NEXAGAMER",
    name: "Pico Goblin VR Headset",
    price: 45.0,
    originalPrice: 89.0,
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg?height=200&width=200",
    onSale: true,
  },
  {
    id: "5",
    brand: "NOVAGAMING",
    name: "DELL Alienware M15 AMD Ryzen 7",
    price: 59.0,
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "6",
    brand: "INFINITYFORGE",
    name: "Sony PlayStation VR Headset v2",
    price: 65.0,
    rating: 5,
    reviews: 2,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "7",
    brand: "HEXAPLAY",
    name: "MSI Katana 15 B12VGK-089 Gaming Laptop",
    price: 25.0,
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "8",
    brand: "NOVASTRIKE",
    name: "ASUS ROG Strix Ryzen 5 Tower PC",
    price: 45.0,
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg?height=200&width=200",
    onSale: true,
  },
];

export default function BestSeller() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(bestSellerProducts.length / itemsPerPage);

  const visibleProducts = bestSellerProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-8 bg-[#0c0c24] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Best Seller</h2>
          <div className="flex gap-2">
            <button
              onClick={prevPage}
              className="p-1 rounded-full bg-[#1a1a3a] hover:bg-[#2a2a4a] transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextPage}
              className="p-1 rounded-full bg-[#1a1a3a] hover:bg-[#2a2a4a] transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#0f0f2b] rounded-lg overflow-hidden border border-[#1a1a3a] hover:border-[#4c5af7] transition-colors"
            >
              <div className="relative p-4">
                {product.onSale && (
                  <span className="absolute top-2 left-2 bg-[#4c5af7] text-white text-xs px-2 py-1 rounded-md z-10">
                    Sale
                  </span>
                )}
                <div className="flex justify-center items-center h-40 mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="object-contain h-full"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-400">{product.brand}</div>
                  <h3 className="font-medium line-clamp-2 h-12">
                    {product.name}
                  </h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < product.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-500"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#4c5af7] font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-400 text-sm line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
