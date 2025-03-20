import { NextResponse } from "next/server"

export async function GET() {
  // Simulating a delay to mimic real API behavior
  await new Promise((resolve) => setTimeout(resolve, 800))

  const phones = [
    {
      id: "1",
      brand: "Poco",
      name: "Poco X5 Pro 5G",
      price: 19999,
      originalPrice: 22999,
      rating: 4.3,
      reviews: 527,
      image: "/placeholder.svg?height=200&width=200",
      rank: 1,
      specs: ["Snapdragon 778G", "6GB RAM", "128GB Storage", '6.67" AMOLED Display'],
      camera: "108MP + 8MP + 2MP",
      battery: "5000mAh, 67W Fast Charging",
      processor: "Snapdragon 778G",
      display: '6.67" AMOLED, 120Hz',
    },
    {
      id: "2",
      brand: "Motorola",
      name: "Motorola G84 5G",
      price: 17999,
      originalPrice: 19999,
      rating: 4.1,
      reviews: 218,
      image: "/placeholder.svg?height=200&width=200",
      rank: 2,
      specs: ["Snapdragon 695", "8GB RAM", "128GB Storage", '6.55" pOLED Display'],
      camera: "50MP + 8MP",
      battery: "5000mAh, 33W Fast Charging",
      processor: "Snapdragon 695",
      display: '6.55" pOLED, 120Hz',
    },
    // Add more phones as needed
  ]

  return NextResponse.json(phones)
}

