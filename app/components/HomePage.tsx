"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const textRef = useRef(null);
  const heroSectionRef = useRef(null);
  const sliderSectionRef = useRef(null);
  const imageTrackRef = useRef(null);

  const [isGsapReady, setIsGsapReady] = useState(false);

  // ✅ Static Dog Image Links (easy to update)
  const imageUrls = [
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d", // Dog 1
    "https://images.unsplash.com/photo-1558788353-f76d92427f16", // Dog 2
    "https://images.unsplash.com/photo-1507149833265-60c372daea22", // Dog 3
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b", // Dog 4
    "https://images.unsplash.com/photo-1517841905240-472988babdf9", // Dog 5
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8", // Dog 6
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-O33aSFmYIWfm8JM-cG90IpJbyfXlaPifNQ&s", // Dog 7
    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238", // Dog 8
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5g7-6qbKseKunz4huuCTEhVKOVTiGBC1pw&s", // Dog 9
    "https://images.unsplash.com/photo-1507149833265-60c372daea22", // Dog 10
  ];
   
  // Load GSAP dynamically
  useEffect(() => {
    const loadScript = (src: string) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve(true);
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.head.appendChild(script);
      });

    loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js")
      .then(() =>
        loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        )
      )
      .then(() => setIsGsapReady(true))
      .catch(console.error);
  }, []);

  // Run GSAP animations once GSAP + DOM + images are ready
  useEffect(() => {
    if (!isGsapReady) return;

    const initAnimations = () => {
      if (
        !textRef.current ||
        !heroSectionRef.current ||
        !sliderSectionRef.current ||
        !imageTrackRef.current
      )
        return;

      const gsap = window.gsap;
      gsap.registerPlugin(gsap.ScrollTrigger);

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
        x: () =>
          -(imageTrackRef.current.scrollWidth -
            sliderSectionRef.current.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sliderSectionRef.current,
          start: "top top",
          end: () =>
            "+=" +
            (imageTrackRef.current.scrollWidth -
              sliderSectionRef.current.clientWidth),
          scrub: 2,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    };

    // Wait until images are loaded so scrollWidth is correct
    const imgs = document.querySelectorAll("img");
    let loaded = 0;
    imgs.forEach((img) => {
      if (img.complete) {
        loaded++;
      } else {
        img.onload = () => {
          loaded++;
          if (loaded === imgs.length) requestAnimationFrame(initAnimations);
        };
        img.onerror = () => {
          loaded++;
          if (loaded === imgs.length) requestAnimationFrame(initAnimations);
        };
      }
    });

    if (loaded === imgs.length) {
      requestAnimationFrame(initAnimations);
    }
  }, [isGsapReady]);

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
        <div
          ref={imageTrackRef}
          className="h-full flex items-center gap-10 px-12"
        >
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className={`flex-shrink-0 rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 ${
                index % 2 === 0
                  ? "w-[750px] h-[500px]" // Large image
                  : "w-[400px] h-[300px]" // Small image
              } bg-zinc-800`}
            >
              <img
                src={url}
                alt={`Dog ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://placehold.co/750x500/ff0000/ffffff?text=Error")
                }
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
