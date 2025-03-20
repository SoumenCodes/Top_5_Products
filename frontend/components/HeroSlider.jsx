"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Slider1img from "@/public/Slides/slider-01.jpg";
import Slider2img from "@/public/Slides/slider-02.jpg";
const slides = [
  {
    image: Slider1img, // Replace with your actual image path
    badge: "DISCOUNTS ALERT",
    title: "MAKING TECHNOLOGY EASY",
    subtitle: " VALUE FOR YOUR MONEY",
    price: "999",
    buttonText: "SHOP NOW",
    buttonLink: "/products/astro-a40",
  },
  {
    image: Slider2img, // Replace with your actual image path
    badge: "NEW ARRIVAL",
    title: "GAMING KEYBOARD",
    subtitle: "RAZER HUNTSMAN V2",
    price: "$199.99",
    buttonText: "LEARN MORE",
    buttonLink: "/products/razer-huntsman",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayTimerRef = useRef(null);

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === activeIndex) return;

    setIsTransitioning(true);
    setActiveIndex(index);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Setup autoplay
  useEffect(() => {
    const startAutoplay = () => {
      autoplayTimerRef.current = setInterval(() => {
        nextSlide();
      }, 2000); // Change slide every 5 seconds
    };

    startAutoplay();

    // Cleanup on unmount
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, []);

  // Pause autoplay on hover
  const pauseAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  };

  // Resume autoplay when mouse leaves
  const resumeAutoplay = () => {
    if (!autoplayTimerRef.current) {
      autoplayTimerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  };

  return (
    <div
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-bgBlue px-20 py-10 max-h-[60vh]"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 w-full h-full flex items-center transition-opacity duration-500 ease-in-out",
              activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full rounded-lg">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                sizes="100vw"
                priority={index === 0}
                className="object-cover rounded-xl"
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full flex items-center">
              <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
                {/* Left Section */}
                {activeIndex === 1 && <div className="md:w-1/2"></div>}
                {activeIndex === 0 && (
                  <ContentBlock slide={slide} alignment="left" />
                )}

                {/* Right Section */}
                {activeIndex === 0 && <div className="md:w-1/2"></div>}
                {activeIndex === 1 && (
                  <ContentBlock slide={slide} alignment="right" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/20 hover:bg-background/40 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
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
          className="lucide lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/20 hover:bg-background/40 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
        aria-label="Next slide"
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
          className="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              activeIndex === index
                ? "bg-primary w-6"
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const ContentBlock = ({ slide, alignment }) => (
  <div
    className={`md:w-1/2 space-y-4 bg-background/10 backdrop-blur-sm p-6 rounded-lg ${
      alignment === "right" ? "text-right" : "text-left"
    }`}
  >
    {slide.badge && (
      <span className="inline-block bg-primary text-primary-foreground px-1 py-1 rounded-md text-sm font-medium">
        {slide.badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
      {slide.title}
    </h2>
    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
      {slide.subtitle}
    </h3>
    <p className="text-lg md:text-xl text-white">
      FROM Rs{" "}
      <span className="text-2xl md:text-3xl font-bold">{slide.price}</span>
    </p>
    <Link
      href={slide.buttonLink}
      className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-md font-medium transition-colors"
    >
      {slide.buttonText}
    </Link>
  </div>
);
