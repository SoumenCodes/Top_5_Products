"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Headphones, ArrowUp } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your API
      console.log("Subscribing email:", email);
      setIsSubscribed(true);
      setEmail("");
      // Reset subscription status after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0c0c24] text-white">
      {/* Top section with newsletter, social, and app download */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-800">
        {/* Newsletter signup */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <h3 className="text-xl font-semibold">Sign up to our Newsletter</h3>
          </div>
          <p className="text-gray-300">
            Give your inbox some love with new products, tips, & more.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your e-mail address"
              className="px-4 py-2 bg-[#1a1a3a] rounded text-white flex-grow"
              required
            />
            <button
              type="submit"
              className="bg-[#4c5af7] hover:bg-[#3a48e3] text-white px-6 py-2 rounded transition-colors"
            >
              Subscribe
            </button>
          </form>
          {isSubscribed && (
            <p className="text-green-400 text-sm">Thanks for subscribing!</p>
          )}
        </div>

        {/* Follow Us */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <p className="text-gray-300">
            We make consolidating, marketing and tracking your social media
            website easy.
          </p>
          <div className="flex gap-2">
            <Link
              href="#"
              className="bg-[#3b5998] p-2 rounded hover:opacity-90 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="bg-[#1DA1F2] p-2 rounded hover:opacity-90 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="bg-[#E1306C] p-2 rounded hover:opacity-90 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            <Link
              href="#"
              className="bg-[#1ab7ea] p-2 rounded hover:opacity-90 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </Link>
            <Link
              href="#"
              className="bg-[#0077B5] p-2 rounded hover:opacity-90 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
          </div>
        </div>

        {/* Download App */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Download App</h3>
          <p className="text-gray-300">
            App is now available on App Store & Google Play. Get it now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="#" className="inline-block">
              <Image
                src="/placeholder.svg?height=50&width=150"
                alt="Google Play"
                width={150}
                height={50}
                className="rounded"
              />
            </Link>
            <Link href="#" className="inline-block">
              <Image
                src="/placeholder.svg?height=50&width=150"
                alt="App Store"
                width={150}
                height={50}
                className="rounded"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Middle section with contact info and links */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Headphones className="h-8 w-8 text-[#4c5af7]" />
            <div>
              <p className="text-sm">Call On Order ? Call us 24/7</p>
              <Link
                href="tel:+919113303849"
                className="text-[#4c5af7] font-semibold"
              >
                (+91) 911-3303-849
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-1 text-gray-400" />
              <p className="text-gray-300">Jamshedpur, INDIA</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <Link
                href="mailto:soumen19j@gmail.com"
                className="text-gray-300 hover:text-white"
              >
                soumen19j@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Quick View */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick View</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                Service
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                Find a Store
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                FAQ's
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Information</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                Wishlist
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                My account
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                Checkout
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Popular tags */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Popular tag</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "NexaGamer",
              "HexaPlay",
              "VortexGlide",
              "ZenithQuest",
              "NovaStrike",
              "NovaGaming",
              "EpicRealm",
              "QuantumQuest",
              "PixelPulse",
              "InfinityForge",
            ].map((tag) => (
              <Link
                key={tag}
                href="#"
                className="bg-[#1a1a3a] hover:bg-[#2a2a4a] px-3 py-1 rounded text-sm transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#4c5af7] hover:bg-[#3a48e3] p-3 rounded-md shadow-lg transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
