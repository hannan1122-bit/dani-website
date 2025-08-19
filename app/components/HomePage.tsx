"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomePage() {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const sliderSectionRef = useRef<HTMLElement | null>(null);
  const imageTrackRef = useRef<HTMLDivElement | null>(null);

  const imageUrls = [
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
    "https://images.unsplash.com/photo-1558788353-f76d92427f16",
    "https://images.unsplash.com/photo-1507149833265-60c372daea22",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-O33aSFmYIWfm8JM-cG90IpJbyfXlaPifNQ&s",
    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5g7-6qbKseKunz4huuCTEhVKOVTiGBC1pw&s",
    "https://images.unsplash.com/photo-1507149833265-60c372daea22",
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Using a timeout ensures the DOM is fully painted, which can help with calculations.
    const timer = setTimeout(() => {
      if (
        !textRef.current ||
        !heroSectionRef.current ||
        !sliderSectionRef.current ||
        !imageTrackRef.current
      )
        return;

      const ctx = gsap.context(() => {
        // Hero text animation
        gsap.to(textRef.current, {
          scale: 50,
          opacity: 0,
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top top",
            end: "+=2000",
            scrub: 3,
            pin: true,
          },
        });

        // Slider Animation Logic
        const startSliderAnim = () => {
          const amountToScroll =
            imageTrackRef.current!.scrollWidth -
            sliderSectionRef.current!.clientWidth;

          // Guard against negative scroll values if content is smaller than viewport
          if (amountToScroll <= 0) return;

          gsap.to(imageTrackRef.current, {
            x: -amountToScroll,
            ease: "none",
            scrollTrigger: {
              trigger: sliderSectionRef.current,
              start: "top top",
              end: `+=${amountToScroll}`,
              scrub: 2,
              pin: true,
              invalidateOnRefresh: true,
            },
          });
        };

        // All previous image loading logic is good, but often this simpler check is enough
        // because ScrollTrigger's refresh handles a lot of it.
        // We call refresh() to ensure all values are up-to-date before we create the animation.
        ScrollTrigger.refresh();
        startSliderAnim();
      });

      return () => ctx.revert();
    }, 100); // A small delay of 100ms can be a robust way to ensure all content is ready.

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-black">
      {/* Hero Section */}
      <section
        ref={heroSectionRef}
        className="h-screen flex items-center justify-center bg-white"
      >
        <h1
          ref={textRef}
          className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-center text-black"
        >
          OUR CLUB
        </h1>
      </section>

      {/* Paragraph Section */}
      <section className="h-screen flex items-center justify-center px-6 bg-black">
        <p className="text-lg md:text-2xl text-white max-w-3xl text-center leading-relaxed">
          Welcome to our club! We focus on creativity, innovation, and building
          experiences that matter. Scroll animations bring life to design, but
          only when used with purpose. Here, performance meets aesthetics.
        </p>
      </section>

      {/* Horizontal Image Slider Section */}
      <section
        ref={sliderSectionRef}
        className="h-[120vh] w-full overflow-hidden bg-black"
      >
        {/* ✅ THE FIX IS HERE: `w-max` */}
        <div
          ref={imageTrackRef}
          className="h-full w-max flex items-center gap-10 px-12"
        >
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className={`flex-shrink-0 rounded-xl overflow-hidden shadow-2xl ${
                index % 2 === 0
                  ? "w-[750px] h-[500px]"
                  : "w-[400px] h-[300px]"
              } bg-zinc-800`}
            >
              <Image
                src={url}
                alt={`Dog ${index + 1}`}
                width={index % 2 === 0 ? 750 : 400}
                height={index % 2 === 0 ? 500 : 300}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      </section>

      {/* Ending Section */}
      <section className="h-screen flex items-center justify-center bg-black">
        <h2 className="text-4xl text-white">The End</h2>
      </section>
    </div>
  );
}