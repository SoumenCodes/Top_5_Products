import { NextResponse } from "next/server"

// This is a mock API route that would typically fetch data from a database or external API
export async function GET() {
  // Simulating a delay to mimic real API behavior
  await new Promise((resolve) => setTimeout(resolve, 800))

  const topPhones = [
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
      specs: ["Dimensity 8200", "8GB RAM", "256GB Storage", '6.67" AMOLED Display'],
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
      specs: ["Dimensity 9000", "8GB RAM", "128GB Storage", '6.74" AMOLED Display'],
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
      specs: ["Dimensity 8020", "8GB RAM", "256GB Storage", '6.55" pOLED Display'],
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
      specs: ["Snapdragon 8+ Gen 1", "8GB RAM", "128GB Storage", '6.78" AMOLED Display'],
      camera: "64MP + 8MP + 2MP",
      battery: "5000mAh, 120W Fast Charging",
      processor: "Snapdragon 8+ Gen 1",
      display: '6.78" AMOLED, 120Hz',
    },
  ]

  return NextResponse.json(topPhones)
}

