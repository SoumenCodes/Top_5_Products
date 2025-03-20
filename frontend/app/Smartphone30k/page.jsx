"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Star,
  Award,
  Grid,
  List,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";

// Mock API function to simulate fetching data
const fetchTopPhones = async () => {
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  return [
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
    {
      id: "3",
      brand: "OnePlus",
      name: "OnePlus Nord 3",
      price: 25999,
      originalPrice: 28999,
      rating: 4.2,
      reviews: 176,
      image: "/placeholder.svg?height=200&width=200",
      rank: 3,
      specs: [
        "Dimensity 9000",
        "8GB RAM",
        "128GB Storage",
        '6.74" AMOLED Display',
      ],
      camera: "50MP + 8MP + 2MP",
      battery: "5000mAh, 80W Fast Charging",
      processor: "Dimensity 9000",
      display: '6.74" AMOLED, 120Hz',
    },
    {
      id: "4",
      brand: "Motorola",
      name: "Motorola Edge 40",
      price: 24999,
      originalPrice: 29999,
      rating: 4.0,
      reviews: 145,
      image: "/placeholder.svg?height=200&width=200",
      rank: 4,
      specs: [
        "Dimensity 8020",
        "8GB RAM",
        "256GB Storage",
        '6.55" pOLED Display',
      ],
      camera: "50MP + 13MP",
      battery: "4400mAh, 68W Fast Charging",
      processor: "Dimensity 8020",
      display: '6.55" pOLED, 144Hz',
    },
    {
      id: "5",
      brand: "iQOO",
      name: "iQOO Neo 7 Pro",
      price: 28999,
      originalPrice: 31999,
      rating: 4.1,
      reviews: 154,
      image: "/placeholder.svg?height=200&width=200",
      rank: 5,
      specs: [
        "Snapdragon 8+ Gen 1",
        "8GB RAM",
        "128GB Storage",
        '6.78" AMOLED Display',
      ],
      camera: "64MP + 8MP + 2MP",
      battery: "5000mAh, 120W Fast Charging",
      processor: "Snapdragon 8+ Gen 1",
      display: '6.78" AMOLED, 120Hz',
    },
  ];
};

export default function Page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("list"); // "list" or "grid"
  const [sortBy, setSortBy] = useState("rank");
  const [showSortMenu, setShowSortMenu] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchTopPhones();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleSort = (criteria) => {
    const sortedProducts = [...products];

    switch (criteria) {
      case "price-low":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "display":
        // Sort by display refresh rate (extracted from the display spec)
        sortedProducts.sort((a, b) => {
          const getRefreshRate = (str) => {
            const match = str.match(/(\d+)Hz/);
            return match ? Number.parseInt(match[1]) : 0;
          };
          return getRefreshRate(b.display) - getRefreshRate(a.display);
        });
        break;
      case "camera":
        // Sort by main camera MP (extracted from the camera spec)
        sortedProducts.sort((a, b) => {
          const getMainCamera = (str) => {
            const match = str.match(/(\d+)MP/);
            return match ? Number.parseInt(match[1]) : 0;
          };
          return getMainCamera(b.camera) - getMainCamera(a.camera);
        });
        break;
      default:
        // Default sort by rank
        sortedProducts.sort((a, b) => a.rank - b.rank);
    }

    setProducts(sortedProducts);
    setSortBy(criteria);
    setShowSortMenu(false);
  };

  if (loading) {
    return (
      <div className="container mx-auto flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#4c5af7]"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <section className="py-8 bg-[#0c0c24] text-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold">Top 5 Smartphones Under 30k</h2>

            <div className="flex items-center gap-3 self-end sm:self-auto">
              <div className="relative">
                <button
                  className="flex items-center gap-2 bg-[#1a1a3a] hover:bg-[#252550] px-4 py-2 rounded-lg text-sm"
                  onClick={() => setShowSortMenu(!showSortMenu)}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Sort by:{" "}
                  {sortBy === "rank"
                    ? "Featured"
                    : sortBy === "price-low"
                    ? "Price: Low to High"
                    : sortBy === "price-high"
                    ? "Price: High to Low"
                    : sortBy === "rating"
                    ? "Rating"
                    : sortBy === "display"
                    ? "Display"
                    : sortBy === "camera"
                    ? "Camera"
                    : "Featured"}
                  <ChevronDown className="h-4 w-4" />
                </button>

                {showSortMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-[#1a1a3a] rounded-lg shadow-lg z-10">
                    <ul className="py-2">
                      <li
                        className="px-4 py-2 hover:bg-[#252550] cursor-pointer"
                        onClick={() => handleSort("rank")}
                      >
                        Featured
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-[#252550] cursor-pointer"
                        onClick={() => handleSort("price-low")}
                      >
                        Price: Low to High
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-[#252550] cursor-pointer"
                        onClick={() => handleSort("price-high")}
                      >
                        Price: High to Low
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-[#252550] cursor-pointer"
                        onClick={() => handleSort("rating")}
                      >
                        Rating
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-[#252550] cursor-pointer"
                        onClick={() => handleSort("display")}
                      >
                        Display
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-[#252550] cursor-pointer"
                        onClick={() => handleSort("camera")}
                      >
                        Camera
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex bg-[#1a1a3a] rounded-lg overflow-hidden">
                <button
                  className={`p-2 ${
                    viewMode === "list" ? "bg-[#4c5af7]" : "hover:bg-[#252550]"
                  }`}
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                >
                  <List className="h-5 w-5" />
                </button>
                <button
                  className={`p-2 ${
                    viewMode === "grid" ? "bg-[#4c5af7]" : "hover:bg-[#252550]"
                  }`}
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                >
                  <Grid className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {viewMode === "list" ? (
            <div className="space-y-4">
              {products.map((product) => (
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
                          <h3 className="text-lg font-medium">
                            {product.name}
                          </h3>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(product.rating)
                                    ? "text-yellow-400 fill-yellow-400"
                                    : i < product.rating
                                    ? "text-yellow-400 fill-yellow-400 opacity-50"
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
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-[#0f0f2b] rounded-lg overflow-hidden border border-[#1a1a3a] hover:border-[#4c5af7] transition-colors flex flex-col h-full"
                >
                  <div className="p-3 bg-[#0a0a20] relative">
                    <div className="absolute top-2 left-2 bg-[#4c5af7] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      <span>#{product.rank}</span>
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={150}
                        height={150}
                        className="object-contain h-[180px]"
                      />
                    </div>
                  </div>

                  <div className="p-4 flex-grow flex flex-col">
                    <div className="text-sm text-gray-400 mb-1">
                      {product.brand}
                    </div>
                    <h3 className="text-lg font-medium mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : i < product.rating
                              ? "text-yellow-400 fill-yellow-400 opacity-50"
                              : "text-gray-500"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-400 ml-1">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="space-y-1 mb-4 flex-grow">
                      <div className="text-sm text-gray-300 flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4c5af7] mr-2"></span>
                        {product.processor}
                      </div>
                      <div className="text-sm text-gray-300 flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4c5af7] mr-2"></span>
                        {product.camera}
                      </div>
                      <div className="text-sm text-gray-300 flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4c5af7] mr-2"></span>
                        {product.display}
                      </div>
                      <div className="text-sm text-gray-300 flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4c5af7] mr-2"></span>
                        {product.battery}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[#4c5af7] text-xl font-bold">
                          ₹{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-gray-400 text-sm line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <div className="text-xs text-green-500 mb-3">
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

                      <div className="flex gap-2">
                        <button className="flex-1 bg-[#4c5af7] hover:bg-[#3a48e3] text-white py-2 rounded-md transition-colors text-sm">
                          Add to Cart
                        </button>
                        <button className="flex-1 border border-[#4c5af7] text-[#4c5af7] hover:bg-[#1a1a3a] py-2 rounded-md transition-colors text-sm">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
