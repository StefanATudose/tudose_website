"use client";

import React, { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let overlapsLight = false;
      const navbarHeight = 80;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.classList.contains("bg-white")) {
          const rect = section.getBoundingClientRect();
          // If the section overlaps the navbar area (y=0 to y=80)
          if (rect.top <= navbarHeight && rect.bottom >= 0) {
            overlapsLight = true;
            break;
          }
        }
      }
      setIsLight(overlapsLight);
    };

    window.addEventListener("scroll", handleScroll);
    // Run initially
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-8 transition-all duration-300 ${isLight ? 'bg-white/10 backdrop-blur-md border-b border-black/5' : 'bg-transparent backdrop-blur-sm border-b border-white/5'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isLight ? 'text-black' : 'text-white'}`}>
          TUDOSE
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className={`text-sm font-medium transition-colors duration-300 ${isLight ? 'text-black/70 hover:text-black' : 'text-white/70 hover:text-white'}`}>Services</a>
          <a href="#techvector" className={`text-sm font-medium transition-colors duration-300 ${isLight ? 'text-black/70 hover:text-black' : 'text-white/70 hover:text-white'}`}>AI Solutions</a>
          <a href="#gym" className={`text-sm font-medium transition-colors duration-300 ${isLight ? 'text-black/70 hover:text-black' : 'text-white/70 hover:text-white'}`}>Case Study</a>
          <a href="#kaizen" className={`text-sm font-medium transition-colors duration-300 ${isLight ? 'text-black/70 hover:text-black' : 'text-white/70 hover:text-white'}`}>My startup</a>
          <a
            href="#contact"
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 backdrop-blur-md border ${isLight ? 'text-black bg-black/10 hover:bg-black/20 border-black/10' : 'text-white bg-white/10 hover:bg-white/20 border-white/10'}`}
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden focus:outline-none transition-colors duration-300 ${isLight ? 'text-black/70 hover:text-black' : 'text-white/70 hover:text-white'}`}
          aria-label="Toggle Menu"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-lg border-b py-4 px-6 flex flex-col gap-4 transition-all duration-300 ${isLight ? 'bg-white/95 border-black/5' : 'bg-[#0a1628]/95 border-white/5'}`}>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className={`text-sm font-medium transition-colors py-2 border-b duration-300 ${isLight ? 'text-black/70 hover:text-black border-black/5' : 'text-white/70 hover:text-white border-white/5'}`}
          >
            Services
          </a>
          <a
            href="#techvector"
            onClick={() => setIsOpen(false)}
            className={`text-sm font-medium transition-colors py-2 border-b duration-300 ${isLight ? 'text-black/70 hover:text-black border-black/5' : 'text-white/70 hover:text-white border-white/5'}`}
          >
            AI Solutions
          </a>
          <a
            href="#gym"
            onClick={() => setIsOpen(false)}
            className={`text-sm font-medium transition-colors py-2 border-b duration-300 ${isLight ? 'text-black/70 hover:text-black border-black/5' : 'text-white/70 hover:text-white border-white/5'}`}
          >
            Case Study
          </a>
          <a
            href="#kaizen"
            onClick={() => setIsOpen(false)}
            className={`text-sm font-medium transition-colors py-2 border-b duration-300 ${isLight ? 'text-black/70 hover:text-black border-black/5' : 'text-white/70 hover:text-white border-white/5'}`}
          >
            My startup
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={`text-sm font-medium transition-colors py-2 duration-300 ${isLight ? 'text-black/70 hover:text-black' : 'text-white/70 hover:text-white'}`}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
