"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import localFont from "next/font/local";

// ✅ Import custom font
const orbitron = localFont({
  src: "../../public/Fonts/Font For Other/Orbitron-Medium.ttf",
  variable: "--font-orbitron",
});
export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "work", label: "Work" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`${orbitron.className} bg-blue-600 shadow-md top-0 z-50`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-yellow-400">UNCOMMON</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => setActivePage(link.id)}
                className={`${
                  activePage === link.id
                    ? "text-yellow-400 underline underline-offset-4"
                    : "text-yellow-300 hover:text-yellow-400 hover:underline underline-offset-4"
                } font-medium transition-colors`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 shadow-md">
          <ul className="flex flex-col space-y-4 p-4">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    setActivePage(link.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left ${
                    activePage === link.id
                      ? "text-yellow-400 font-semibold underline underline-offset-4"
                      : "text-yellow-300 hover:text-yellow-400 hover:underline underline-offset-4"
                  } transition-colors`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
