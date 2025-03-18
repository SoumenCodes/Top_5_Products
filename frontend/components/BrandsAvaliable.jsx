import { Truck, PiggyBank, Clock, DollarSign, Percent } from "lucide-react";

const BrandsAvaliable = () => {
  const features = [
    {
      icon: <Truck />,
      title: "Flipkart",
      text: "Free shipping on all order",
    },
    {
      icon: <PiggyBank />,
      title: "Amazon",
      text: "Save big every order",
    },
    {
      icon: <Clock />,
      title: "Meeso",
      text: "Support online 24 hours a day",
    },
    {
      icon: <DollarSign />,
      title: "Zipto",
      text: "Back guarantee under 7 days",
    },
    {
      icon: <Percent />,
      title: "Snapdeal",
      text: "On every order over $120.00",
    },
  ];

  return (
    <div className="bg-[#0a0a17] text-white py-6 container mx-auto">
      <div className="mx-auto grid grid-cols-5 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 p-4 border border-transparent hover:border-blue-600 transition !border-white"
          >
            <div className="text-blue-500 text-2xl">{feature.icon}</div>
            <h3 className="text-blue-500 font-semibold">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsAvaliable;
