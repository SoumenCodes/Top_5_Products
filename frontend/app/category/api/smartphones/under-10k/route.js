import { NextResponse } from "next/server";

export async function GET() {
  // Simulating a delay to mimic real API behavior
  await new Promise((resolve) => setTimeout(resolve, 800));

  const phones = [
    {
      id: "1",
      brand: "Redmi",
      name: "Redmi 12 5G",
      price: 9999,
      originalPrice: 11999,
      rating: 4.2,
      reviews: 427,
      image: "/placeholder.svg?height=200&width=200",
      rank: 1,
      specs: [
        "Snapdragon 4 Gen 2",
        "4GB RAM",
        "128GB Storage",
        '6.79" LCD Display',
      ],
      camera: "50MP + 2MP",
      battery: "5000mAh",
      processor: "Snapdragon 4 Gen 2",
      display: '6.79" LCD, 90Hz',
    },
    {
      id: "2",
      brand: "Realme",
      name: "Realme Narzo N53",
      price: 7999,
      originalPrice: 9999,
      rating: 4.0,
      reviews: 318,
      image: "/placeholder.svg?height=200&width=200",
      rank: 2,
      specs: ["Unisoc T612", "4GB RAM", "64GB Storage", '6.74" LCD Display'],
      camera: "50MP",
      battery: "5000mAh, 33W Fast Charging",
      processor: "Unisoc T612",
      display: '6.74" LCD, 90Hz',
    },
    // Add more phones as needed
  ];

  return NextResponse.json(phones);
}
