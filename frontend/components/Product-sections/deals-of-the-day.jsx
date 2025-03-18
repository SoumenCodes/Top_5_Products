"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Sample data
const dealProducts = [
  {
    id: "1",
    brand: "INFINITYFORGE",
    name: "Sony PlayStation VR Headset v2",
    price: 65.0,
    rating: 5,
    reviews: 2,
    image: "/placeholder.svg?height=300&width=300",
    stockLeft: 15,
    totalStock: 30,
  },
  {
    id: "2",
    brand: "NOVAGAMING",
    name: "DELL Alienware M15 AMD Ryzen 7",
    price: 59.0,
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg?height=300&width=300",
    stockLeft: 10,
    totalStock: 25,
  },
  {
    id: "3",
    brand: "HEXAPLAY",
    name: "MSI Katana 15 B12VGK-089 Gaming Laptop",
    price: 25.0,
    rating: 4,
    reviews: 7,
    image: "/placeholder.svg?height=300&width=300",
    stockLeft: 5,
    totalStock: 20,
  },
  {
    id: "4",
    brand: "ZENITHQUEST",
    name: "Xbox Series X Console Bundle",
    price: 499.0,
    originalPrice: 549.0,
    rating: 5,
    reviews: 12,
    image: "/placeholder.svg?height=300&width=300",
    stockLeft: 3,
    totalStock: 15,
  },
];

export default function DealsOfTheDay() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(dealProducts.length / itemsPerPage);

  const visibleProducts = dealProducts.slice(
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
          <h2 className="text-2xl font-bold">Deals of the Day</h2>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#0f0f2b] rounded-lg overflow-hidden border border-[#1a1a3a] hover:border-[#4c5af7] transition-colors"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-6 flex justify-center items-center bg-[#0a0a20]">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="object-contain max-h-[250px]"
                  />
                </div>
                <div className="md:w-1/2 p-6 space-y-4">
                  <div className="text-sm text-gray-400">{product.brand}</div>
                  <h3 className="text-xl font-medium">{product.name}</h3>
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
                    <span className="text-[#4c5af7] text-xl font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-400 text-sm line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm">
                      Only{" "}
                      <span className="font-bold">{product.stockLeft}</span>{" "}
                      item(s) left in stock!
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{
                          width: `${
                            (product.stockLeft / product.totalStock) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <button className="w-full bg-[#4c5af7] hover:bg-[#3a48e3] text-white py-2 rounded-md transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
