"use client";
import Banner1 from "@/public/ProductBanner/banner-01-1.jpg";
import Banner2 from "@/public/ProductBanner/banner-02-1.jpg";
import Banner3 from "@/public/ProductBanner/banner-03-1.jpg";
import Image from "next/image";
import Link from "next/link";

// Sample data
const products = [
  {
    image: Banner1,
    label: "NEW SALE!",
    title: "Gaming Laptops",
    brand: "Gigabyte G5",
    price: "$1299.99/-",
  },
  {
    image: Banner2,
    label: "WITH MICROPHONE",
    title: "Headphone",
    brand: "Bengoo G9000",
    price: "$114.99/-",
  },
  {
    image: Banner3,
    label: "BIG DEALS",
    title: "Mega Modz",
    brand: "PS5 Pro Controller",
    price: "$189.99/-",
  },
];

export default function ProductBanner() {
  return (
    <section className="bg-[#0a0a17] py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Link href="#" key={index} className="block group">
              <div className="relative bg-gradient-to-r from-[#1d1b38] to-[#0a0a17] rounded-xl p-6 h-[280px] shadow-lg overflow-hidden border border-[#1a1a3a] hover:border-[#4c5af7] transition-colors">
                <span className="absolute top-4 left-4 z-20 bg-[#4c5af7] text-white text-xs px-3 py-1 rounded-full uppercase">
                  {product.label}
                </span>

                <div className="relative z-10 mt-12">
                  <h3 className="text-white text-lg">{product.title}</h3>
                  <h2 className="text-white font-bold text-xl">
                    {product.brand}
                  </h2>
                  <p className="text-gray-400 text-sm mt-8">
                    FROM{" "}
                    <span className="text-white font-bold">
                      {product.price}
                    </span>
                  </p>
                </div>

                <div className="absolute inset-0 flex items-center justify-end overflow-hidden">
                  <div className="relative w-3/5 h-full transform transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
