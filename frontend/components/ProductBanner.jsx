import Banner1 from "@/public/ProductBanner/banner-01-1.jpg";
import Banner2 from "@/public/ProductBanner/banner-02-1.jpg";
import Banner3 from "@/public/ProductBanner/banner-03-1.jpg";
import Image from "next/image";
const ProductCards = () => {
  const products = [
    {
      image: Banner1, // Replace with your actual image path
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

  return (
    <div className="bg-[#0a0a17] py-4 container mx-auto ">
      <div className="w-full px-8 mx-auto flex gap-10 h-[30vh]">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-r from-[#1d1b38] to-[#0a0a17] rounded-xl p-6 w-1/3 w-300 shadow-lg overflow-hidden"
          >
            <span className="relative  z-20  bg-purple-600 text-white text-xs px-3 py-1 rounded-full uppercase">
              {product.label}
            </span>
            <div className="relative z-10 my-8">
              <h3 className="text-white text-lg">{product.title}</h3>
              <h2 className="text-white font-bold text-xl">{product.brand}</h2>
              <p className="text-gray-400 text-sm mt-8">
                FROM{" "}
                <span className="text-white font-bold">{product.price}</span>
              </p>
            </div>

            <Image
              src={product.image}
              alt={product.title}
              fill
              className="!z-0  object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
