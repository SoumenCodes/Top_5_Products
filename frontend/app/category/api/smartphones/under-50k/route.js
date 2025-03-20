import { NextResponse } from "next/server"

export async function GET() {
  // Simulating a delay to mimic real API behavior
  await new Promise((resolve) => setTimeout(resolve, 800))

  const phones = [
    {
      id: "1",
      brand: "OnePlus",
      name: "OnePlus 12R",
      price: 42999,
      originalPrice: 45999,
      rating: 4.6,
      reviews: 827,
      image: "/placeholder.svg?height=200&width=200",
      rank: 1,
      specs: ["Snapdragon 8 Gen 2", "12GB RAM", "256GB Storage", '6.78" AMOLED Display'],
      camera: "50MP + 8MP + 2MP",
      battery: "5500mAh, 100W Fast Charging",
      processor: "Snapdragon 8 Gen 2",
      display: '6.78" AMOLED, 120Hz',
    },
    {
      id: "2",
      brand: "Nothing",
      name: "Nothing Phone (2)",
      price: 44999,
      originalPrice: 49999,
      rating: 4.4,
      reviews: 618,
      image: "/placeholder.svg?height=200&width=200",
      rank: 2,
      specs: ["Snapdragon 8+ Gen 1", "12GB RAM", "256GB Storage", '6.7" OLED Display'],
      camera: "50MP + 50MP",
      battery: "4700mAh, 45W Fast Charging",
      processor: "Snapdragon 8+ Gen 1",
      display: '6.7" OLED, 120Hz',
    },
    // Add more phones as needed
  ]

  return NextResponse.json(phones)
}

