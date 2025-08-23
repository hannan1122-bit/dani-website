// src/app/HomePage.tsx
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import localFont from "next/font/local";

// ✅ Custom Fonts
const takiTaki = localFont({
  src: "../../public/Fonts/Uncommon Wording font/TakiTaki.otf",
  weight: "500",
  style: "normal",
});

const orbitron = localFont({
  src: "../../public/Fonts/Font For Other/Orbitron-Medium.ttf",
  weight: "500",
  style: "normal",
});

// ✅ Dynamically import the 3D model component
const RotatingModel = dynamic(() => import("./RotatingModel"), {
  ssr: false,
  loading: () => (
    <p className="text-center text-blue-600">Loading 3D Model...</p>
  ),
});

const HomePage = () => {
  const [isAnimating, setIsAnimating] = useState(false); // animations removed

  return (
    <div className={orbitron.className}>
      {/* --- BLUE SECTION START --- */}
      <main className="relative w-full bg-blue-600 p-4 md:p-8 pb-48 overflow-hidden tracking-tight">
        <div className="relative z-10">
          {/* Right aligned intro text */}
          <div className="mt-8 w-full text-right text-yellow-400 font-extrabold italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug md:leading-tight mb-4">
            <p>WE DON&apos;T</p>
            <p>JUST BUILD BRANDS</p>
            <p>WE MAKE THEM</p>
          </div>

          {/* Flex row: UNCOMMON + dog on left, side image on right */}
          <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* LEFT: Heading + dog with yellow bg boxes */}
            <div className="relative w-full lg:w-2/3 flex flex-col items-center pl-4 sm:px-8 md:px-0 lg:-mt-16 sm:-mt-12 md:-mt-10">
              {/* Yellow background boxes */}
              <div className="absolute -z-10 top-10 left-0 right-0 flex justify-center">
                <div className="hidden md:block w-24 h-34 md:w-50 md:h-260 -mt-40 md:-mt-60 bg-yellow-300"></div>
                <div className="hidden md:block w-16 h-16 md:w-68 md:h-180 md:mt-20 bg-yellow-300"></div>
                <div className="hidden md:block w-24 h-34 md:w-80 md:h-260 -mt-15 md:-mt-60 bg-yellow-300"></div>
                <div className="hidden md:block w-20 h-20 md:w-30 md:h-130 md:-mt-60 bg-yellow-300"></div>
                <div className="hidden md:block w-20 h-20 md:w-30 md:h-90 md:-mt-20 bg-yellow-300"></div>
                <div className="hidden md:block w-20 h-20 md:w-30 md:h-220 md:-mt-20 bg-yellow-300"></div>
              </div>

              {/* Title with TakiTaki font */}
              <h1
                className={`${takiTaki.className} relative z-10 text-black text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] 2xl:text-[15rem] font-extrabold leading-tight md:leading-none break-words text-center`}
              >
                UNCOMMON
              </h1>

              {/* Dog image */}
              <div className="w-full flex justify-center lg:-mt-24 sm:-mt-8 relative z-20">
                <Image
                  src="/PICTURES/cute-and-happy-dog-png.webp"
                  alt="A cute and happy dog sticker"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-auto max-w-[300px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1100px]"
                />
              </div>
            </div>

            {/* RIGHT: Extra image */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end relative z-20">
              <Image
                src="/PICTURES/blue section first pic.png"
                alt="Side artwork"
                width={500}
                height={600}
                className="w-full h-auto max-w-[400px] lg:max-w-[500px] object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Text + CTA */}
          <div className="mt-16 flex justify-center">
            <div className="flex flex-col items-start">
              <div className="text-yellow-400 font-semibold text-2xl sm:text-3xl md:text-4xl text-left leading-snug tracking-wide">
                <p>We believe in crafting more than just visuals.</p>
                <p>Our passion lies in creating meaningful connections</p>
                <p>between brands and their audience.</p>
                <p>Let us help you build an uncommon story.</p>
              </div>

              <div className="mt-8 flex items-center ">
                <button className="bg-yellow-300 text-blue-600 px-10 py-4 shadow-lg hover:bg-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105 font-bold tracking-wide">
                  <span className="text-xl">Let&apos;s Go</span>
                  <span className="block text-2xl">UNCOMMON</span>
                </button>

                {/* Yellow box to the right */}
                <div className="w-30 h-15 md:mt-8 md:-ml-5 bg-yellow-300"></div>
              </div>
            </div>
          </div>

          {/* WHO WE ARE Section */}
          <div className="mt-24 flex flex-wrap justify-between items-start w-full">
            <div className="w-full md:w-1/2 md:pl-8 lg:translate-y-36">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-yellow-400 mb-4 text-center font-serif">
                WHO WE ARE
              </h2>
              <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-yellow-400 leading-relaxed text-left font-light italic">
                We are a collective of creators, strategists, and innovators
                driven by a shared passion for the unconventional. Our journey
                began with a simple idea: to challenge the status quo and build
                brands that truly resonate. We thrive on collaboration and
                believe the best ideas emerge when diverse minds come together.
              </p>
              <button className="mt-8 bg-yellow-400 text-blue-600 text-xl font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
                LEARN MORE
              </button>
            </div>

            <div className="w-full mt-8 md:mt-0 md:w-1/3">
              <Image
                src="/PICTURES/head_phone_lady.png"
                alt="A pair of headphones"
                width={400}
                height={400}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Final centered image */}
          <div className="w-full flex justify-center mt-48">
            <div className="w-full md:w-1/2 ">
              <Image
                src="/PICTURES/blue section last image.png"
                alt="Artistic image of a woman"
                width={900}
                height={900}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </main>
      {/* --- BLUE SECTION END --- */}

      {/* --- YELLOW SECTION START --- */}
      <section className="w-full bg-yellow-300 text-blue-600 relative overflow-hidden">
        <div className="py-32 px-8 sm:px-16 md:px-24 lg:px-32">
          {/* Heading */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold">
            WHAT WE DO
          </h2>

          {/* Subheading */}
          <div className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold">
            <p>We build unforgettable brand identities.</p>
            <p>We create experiences that inspire action.</p>
          </div>

          {/* Button */}
          <button className="mt-8 text-yellow-300 text-xl font-bold px-10 py-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex">
            <span className="bg-red-600 px-3 py-2">LEARN</span>
            <span className="bg-red-600 px-3 py-2">MORE</span>
          </button>

          {/* Model with Left/Right Blue Boxes */}
          // ✅ Usage in your file
<div className="mt-24 flex justify-center relative">
  {/* Left Blue Box */}
  <div className="hidden md:block absolute h-140 left-0 top-0 bottom-0 bg-blue-600 w-150 mt-250 -ml-40 z-0"></div>

  {/* 3D Model Canvas */}
  <div className="relative w-full max-w-[900px] flex justify-center z-10 px-4">
    <div className="w-full h-[60vh] sm:h-[500px] md:h-[650px] lg:h-[750px]">
      <RotatingModel />
    </div>
  </div>

  {/* Right Blue Box */}
  <div className="hidden md:block absolute h-140 right-0 top-0 bottom-0 bg-blue-600 w-150 -mt-10 -mr-40 z-0"></div>
</div>


          {/* Optional Add-ons Section */}
          <div className="mt-32 flex flex-col items-center text-center">
            <h2 className="text-blue-600 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight font-serif">
              OPTIONAL <br /> ADD-ONS
            </h2>
            <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-blue-600 max-w-3xl leading-relaxed tracking-wide">
              Enhance your website with premium features and extra design
              layers.
              <br /> Get tailored solutions that go beyond the basics.
            </p>
            <button className="mt-10 bg-blue-600 text-yellow-300 text-xl sm:text-2xl font-bold px-12 py-5 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
      {/* --- YELLOW SECTION END --- */}

      {/* --- PINK SECTION START --- */}
      <section className="w-full bg-pink-500 text-yellow-300">
        {/* Top Section */}
        <div className="pt-24 px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          {/* Left Side */}
          <div className="max-w-xl text-left">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight font-serif">
              WHO WE <br /> WORK WITH
            </h2>
            <p className="mt-6 text-lg sm:text-2xl md:text-3xl font-medium leading-relaxed">
              We collaborate with brands, startups, and innovators <br /> to
              craft experiences that stand out and inspire action.
            </p>
            <button className="mt-10 bg-blue-600 text-yellow-300 text-lg sm:text-2xl font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105">
              KNOW MORE
            </button>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/PICTURES/hen.png"
              alt="Headphones"
              width={650}
              height={650}
              className="rounded-lg shadow-xl object-contain"
            />
          </div>
        </div>

        {/* Bottom Split Section */}
        <div className="mt-32 flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:px-32 gap-12">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/PICTURES/pink section pic2.png"
              alt="Uncommon Creative"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-yellow-300 text-5xl sm:text-6xl md:text-7xl font-extrabold font-serif leading-tight">
              READY <br /> TO <br /> GO UN <br /> COMMON?
            </h2>
            <p className="mt-8 text-lg sm:text-2xl md:text-3xl font-medium max-w-2xl leading-relaxed">
              Let&apos;s bring your boldest ideas to life and create <br />{" "}
              digital experiences that truly set your brand apart. <br />{" "}
              Together, we&apos;ll redefine what&apos;s possible.
            </p>
            <div className="mt-10 bg-yellow-300 text-blue-600 text-lg sm:text-2xl md:text-3xl font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg">
              hello@uncommon.future.com
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 md:mt-48 pb-16 flex justify-center">
          <h2 className="text-yellow-300 text-3xl sm:text-5xl md:text-6xl font-extrabold font-serif">
            UNCOMMON
          </h2>
        </div>
      </section>
      {/* --- PINK SECTION END --- */}

      {/* --- YELLOW EMPTY SECTION START --- */}
      <section
        className="w-full bg-yellow-300 flex flex-col justify-between"
        style={{ minHeight: "50vh" }}
      >
        <div className="pt-12 text-center">
          <p className="text-blue text-lg sm:text-xl font-medium">
            Dubai | Kochi | Portugal | Sweden
          </p>
          <p className="text-blue text-sm sm:text-lg mt-1">
            25.2048° N, 55.2708° E
          </p>
        </div>
        <div className="pb-8 text-center">
          <p className="text-black text-sm sm:text-lg font-semibold">
            uncommon-future © 2025 — All Rights Disrupted
          </p>
        </div>
      </section>
      {/* --- YELLOW EMPTY SECTION END --- */}
    </div>
  );
};

export default HomePage;