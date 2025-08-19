"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const sliderSectionRef = useRef<HTMLElement | null>(null);
  const imageTrackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      !textRef.current ||
      !heroSectionRef.current ||
      !sliderSectionRef.current ||
      !imageTrackRef.current
    ) return;

    // Hero text zoom animation
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

    // Horizontal slider animation
    gsap.to(imageTrackRef.current, {
      x: () => -(imageTrackRef.current!.scrollWidth - sliderSectionRef.current!.clientWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sliderSectionRef.current,
        start: "top top",
        end: () => "+=" + (imageTrackRef.current!.scrollWidth - sliderSectionRef.current!.clientWidth),
        scrub: 2,
        pin: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-black">
      {/* Hero */}
      <section ref={heroSectionRef} className="h-screen flex items-center justify-center bg-white">
        <h1 ref={textRef} className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-center text-black">
          OUR CLUB
        </h1>
      </section>

      {/* Paragraph */}
      <section className="h-screen flex items-center justify-center px-6 bg-black">
        <p className="text-lg md:text-2xl text-white max-w-3xl text-center leading-relaxed">
          Welcome to our club! We focus on creativity, innovation, and building experiences that matter.
        </p>
      </section>

      {/* Slider */}
      <section ref={sliderSectionRef} className="h-[120vh] w-full overflow-hidden bg-black">
        <div ref={imageTrackRef} className="h-full flex items-center gap-10 px-12">
          {/* your images */}
        </div>
      </section>

      {/* Ending */}
      <section className="h-screen flex items-center justify-center bg-black">
        <h2 className="text-4xl text-white">The End</h2>
      </section>
    </div>
  );
}
