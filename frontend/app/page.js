"use client";
import BrandsAvaliable from "@/components/BrandsAvaliable";
import HeroSlider from "@/components/HeroSlider";
import BestSeller from "@/components/Product-sections/best-seller";
import DealsOfTheDay from "@/components/Product-sections/deals-of-the-day";
import TopUnder30k from "@/components/Product-sections/top-under-30k";
import ProductCards from "@/components/ProductBanner";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/allproducts`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <main className="min-h-screen">
        <HeroSlider />
        <BrandsAvaliable />
        <ProductCards />
        <BestSeller />
        <DealsOfTheDay />
        <TopUnder30k />

        {/* Your other content goes here */}
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          {/* Featured products content */}
        </section>
      </main>

      <h1>All Products</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
