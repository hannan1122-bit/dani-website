"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import WorkPage from "./components/WorkPage";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";

export default function Page() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "work":
        return <WorkPage />;
      case "blog":
        return <BlogPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* main now takes full height except navbar+footer */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}

