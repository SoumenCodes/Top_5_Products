"use client";
import Image from "next/image";
import { Star, Award } from "lucide-react";

// Sample data
const topProducts = [
  {
    id: "1",
    brand: "NOVAGAMING",
    name: "DELL Inspiron 15 3000 Intel i5-1135G7",
    price: 28999,
    originalPrice: 32999,
    rating: 4,
    reviews: 127,
    image: "/placeholder.svg?height=200&width=200",
    rank: 1,
    specs: ["Intel i5-1135G7", "8GB RAM", "512GB SSD", '15.6" FHD Display'],
  },
  {
    id: "2",
    brand: "HEXAPLAY",
    name: "Lenovo IdeaPad Slim 3 AMD Ryzen 5",
    price: 26499,
    originalPrice: 29999,
    rating: 4,
    reviews: 98,
    image: "/placeholder.svg?height=200&width=200",
    rank: 2,
    specs: ["AMD Ryzen 5 5500U", "8GB RAM", "512GB SSD", '15.6" FHD Display'],
  },
  {
    id: "3",
    brand: "ZENITHQUEST",
    name: "HP Pavilion 14 Intel i3-1215U",
    price: 24999,
    originalPrice: 27999,
    rating: 3,
    reviews: 76,
    image: "/placeholder.svg?height=200&width=200",
    rank: 3,
    specs: ["Intel i3-1215U", "8GB RAM", "256GB SSD", '14" FHD Display'],
  },
  {
    id: "4",
    brand: "NEXAGAMER",
    name: "ASUS VivoBook 15 Intel i3-1115G4",
    price: 23499,
    originalPrice: 25999,
    rating: 4,
    reviews: 65,
    image: "/placeholder.svg?height=200&width=200",
    rank: 4,
    specs: ["Intel i3-1115G4", "4GB RAM", "256GB SSD", '15.6" FHD Display'],
  },
  {
    id: "5",
    brand: "VORTEXGLIDE",
    name: "Acer Aspire 3 AMD Ryzen 3",
    price: 21999,
    originalPrice: 24999,
    rating: 3,
    reviews: 54,
    image: "/placeholder.svg?height=200&width=200",
    rank: 5,
    specs: ["AMD Ryzen 3 3250U", "4GB RAM", "256GB SSD", '15.6" HD Display'],
  },
];

function page() {
  return (
    <div className="container mx-auto">
      <section className="py-8 bg-[#0c0c24] text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Top 5 Smartphones Under 30k</h2>
          </div>

          <div className="space-y-4">
            {topProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#0f0f2b] rounded-lg overflow-hidden border border-[#1a1a3a] hover:border-[#4c5af7] transition-colors"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/4 md:w-1/5 p-4 flex justify-center items-center bg-[#0a0a20] relative">
                    <div className="absolute top-2 left-2 bg-[#4c5af7] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      <span>#{product.rank}</span>
                    </div>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={150}
                      height={150}
                      className="object-contain max-h-[150px]"
                    />
                  </div>
                  <div className="sm:w-3/4 md:w-4/5 p-4 md:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-2 space-y-2">
                        <div className="text-sm text-gray-400">
                          {product.brand}
                        </div>
                        <h3 className="text-lg font-medium">{product.name}</h3>
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
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mt-2">
                          {product.specs.map((spec, index) => (
                            <li
                              key={index}
                              className="text-sm text-gray-300 flex items-center"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[#4c5af7] mr-2"></span>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[#4c5af7] text-xl font-bold">
                              ₹{product.price.toLocaleString()}
                            </span>
                            {product.originalPrice && (
                              <span className="text-gray-400 text-sm line-through">
                                ₹{product.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-green-500">
                            {product.originalPrice && (
                              <>
                                Save ₹
                                {(
                                  product.originalPrice - product.price
                                ).toLocaleString()}{" "}
                                (
                                {Math.round(
                                  ((product.originalPrice - product.price) /
                                    product.originalPrice) *
                                    100
                                )}
                                % off)
                              </>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <button className="w-full bg-[#4c5af7] hover:bg-[#3a48e3] text-white py-2 rounded-md transition-colors">
                            Add to Cart
                          </button>
                          <button className="w-full border border-[#4c5af7] text-[#4c5af7] hover:bg-[#1a1a3a] py-2 rounded-md transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
