// src/app/HomePage.tsx
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
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

// --- SHAPE-BASED ANIMATION COMPONENT ---
const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const Shape = ({ color }: { color: string }) => (
    <svg
      viewBox="0 0 400 1000"
      preserveAspectRatio="none"
      className="absolute top-0 left-0 w-full h-full"
    >
      <path d="M 0 0 L 400 0 L 200 1000 L 0 1000 Z" fill={color} />
    </svg>
  );

  const transitions = {
    layer1: {
      duration: 1.8,
      ease: [0.6, 0.01, -0.05, 0.9] as [number, number, number, number],
      delay: 0,
    },
    layer2: {
      duration: 1.8,
      ease: [0.6, 0.01, -0.05, 0.9] as [number, number, number, number],
      delay: 0.2,
    },
    layer3: {
      duration: 1.8,
      ease: [0.6, 0.01, -0.05, 0.9] as [number, number, number, number],
      delay: 0.4,
    },
  };

  return (
    <div className="absolute inset-0 z-0">
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={transitions.layer1}
      >
        <Shape color="#FBBF24" />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={transitions.layer2}
      >
        <Shape color="#EC4899" />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={transitions.layer3}
        onAnimationComplete={onComplete}
      >
        <Shape color="#60A5FA" />
      </motion.div>
    </div>
  );
};

const HomePage = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <div className={orbitron.className}>
      {/* --- BLUE SECTION START --- */}
      <main className="relative w-full bg-blue-600 p-4 md:p-8 pb-48 overflow-hidden tracking-tight">
        {isAnimating && (
          <IntroAnimation onComplete={() => setIsAnimating(false)} />
        )}

        <div className="relative z-10">
          {/* Right aligned intro text */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mt-8 w-full text-right text-yellow-400 font-extrabold italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug md:leading-tight mb-4"
          >
            <p>WE DON&apos;T</p>
            <p>JUST BUILD BRANDS</p>
            <p>WE MAKE THEM</p>
          </motion.div>

          {/* Container for heading + dog */}
          <div className="w-full md:w-2/3 flex flex-col items-center px-4 sm:px-8 md:px-0 lg:-mt-16 sm:-mt-12 md:-mt-10">
            {/* Title with TakiTaki font */}
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.3 }}
              className={`${takiTaki.className} text-black text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] 2xl:text-[15rem] font-extrabold leading-tight md:leading-none break-words text-center`}
            >
              UNCOMMON
            </motion.h1>

            {/* Dog image */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 60 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="w-full flex justify-center mt-4 sm:mt-6 md:mt-8"
            >
              <Image
                src="/PICTURES/cute-and-happy-dog-png.webp"
                alt="A cute and happy dog sticker"
                width={800}
                height={600}
                priority
                className="w-full h-auto max-w-[300px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1100px]"
              />
            </motion.div>
          </div>


          {/* Text + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-16 flex justify-center"
          >
            <div className="flex flex-col items-start">
              <div className="text-yellow-400 font-semibold text-2xl sm:text-3xl md:text-4xl text-left leading-snug tracking-wide">
                <p>We believe in crafting more than just visuals.</p>
                <p>Our passion lies in creating meaningful connections</p>
                <p>between brands and their audience.</p>
                <p>Let us help you build an uncommon story.</p>
              </div>

              <button className="mt-8 bg-yellow-400 text-blue-600 px-10 py-4 rounded-xl shadow-lg hover:bg-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105 font-bold tracking-wide">
                <span className="text-xl">Let&apos;s Go</span>
                <span className="block text-2xl">UNCOMMON</span>
              </button>
            </div>
          </motion.div>

          {/* WHO WE ARE Section */}
          <div className="mt-24 flex flex-wrap justify-between items-start w-full">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/2 md:pl-8 lg:translate-y-36"
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full mt-8 md:mt-0 md:w-1/3"
            >
              <Image
                src="/PICTURES/head_phone_image.jpeg"
                alt="A pair of headphones"
                width={400}
                height={400}
                className="w-full h-auto object-contain rounded-lg"
              />
            </motion.div>
          </div>

          {/* Final centered image */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full flex justify-center mt-48"
          >
            <div className="w-full md:w-1/3">
              <Image
                src="/PICTURES/woman_art.jpeg"
                alt="Artistic image of a woman"
                width={800}
                height={800}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </main>
      {/* --- BLUE SECTION END --- */}

      {/* --- YELLOW SECTION START --- */}
      <section className="w-full bg-yellow-300 text-blue-600">
        <div className="py-32 px-8 sm:px-16 md:px-24 lg:px-32">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold">
            WHAT WE DO
          </h2>
          <div className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold">
            <p>We build unforgettable brand identities.</p>
            <p>We create experiences that inspire action.</p>
          </div>

          <button className="mt-8 bg-red-600 text-yellow-300 text-xl font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105">
            LEARN MORE
          </button>

          {/* 3D Model */}
          <div className="mt-24 flex justify-center">
            <div className="relative w-full max-w-[900px] aspect-square overflow-visible">
              <RotatingModel />
            </div>
          </div>

          {/* Optional Add-ons Section */}
          <div className="mt-32 flex flex-col items-center text-center">
            <h2 className="text-blue-600 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight font-serif">
              OPTIONAL <br /> ADD-ONS
            </h2>
            <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-blue-600 max-w-3xl leading-relaxed tracking-wide">
              Enhance your website with premium features and extra design
              layers. <br /> Get tailored solutions that go beyond the basics.
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
        <div className="pt-48 px-8 sm:px-16 md:px-24 lg:px-32 flex flex-wrap justify-between items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-xl text-left mx-auto md:mx-0 md:ml-32"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight font-serif">
              WHO WE <br /> WORK WITH
            </h2>
            <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed">
              We collaborate with brands, startups, and innovators <br /> to
              craft experiences that stand out and inspire action.
            </p>
            <button className="mt-10 bg-blue-600 text-yellow-300 text-xl sm:text-2xl font-bold px-12 py-5 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105">
              KNOW MORE
            </button>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 mt-32 flex justify-center"
          >
            <Image
              src="/PICTURES/head_phone_image.jpeg"
              alt="Headphones"
              width={550}
              height={550}
              className="rounded-lg shadow-xl object-contain"
            />
          </motion.div>
        </div>

        {/* Bottom Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-40 flex flex-col items-center text-center px-6"
        >
          <h2 className="text-yellow-300 text-5xl sm:text-6xl md:text-7xl font-extrabold font-serif leading-tight">
            READY <br /> TO <br /> GO UN <br /> COMMON?
          </h2>
          <p className="mt-8 text-lg sm:text-2xl md:text-3xl font-medium max-w-3xl leading-relaxed">
            Let&apos;s bring your boldest ideas to life and create <br /> digital
            experiences that truly set your brand apart. <br /> Together,
            we&apos;ll redefine what&apos;s possible.
          </p>
          <div className="mt-10 bg-yellow-300 text-blue-600 text-xl sm:text-2xl md:text-3xl font-bold px-8 py-4 rounded-lg shadow-lg">
            hello@uncommon.future.com
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-48 pb-20 flex justify-center">
          <h2 className="text-yellow-300 text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif">
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
