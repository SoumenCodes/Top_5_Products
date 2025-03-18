"use client";
import HeroSlider from "@/components/HeroSlider";
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
