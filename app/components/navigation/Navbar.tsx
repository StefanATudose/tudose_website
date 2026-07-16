"use client";

import React, { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-8 transition-all duration-300 bg-transparent backdrop-blur-sm border-b border-white/5">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          Stefan Tudose
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Services</a>
          <a href="#techvector" className="text-sm font-medium text-white/70 hover:text-white transition-colors">AI Solutions</a>
          <a href="#gym" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Case Study</a>
          <a href="#kaizen" className="text-sm font-medium text-white/70 hover:text-white transition-colors">My startup</a>
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-semibold text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white/70 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a1628]/95 backdrop-blur-lg border-b border-white/5 py-4 px-6 flex flex-col gap-4">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors py-2 border-b border-white/5"
          >
            Services
          </a>
          <a
            href="#techvector"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors py-2 border-b border-white/5"
          >
            AI Solutions
          </a>
          <a
            href="#gym"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors py-2 border-b border-white/5"
          >
            Case Study
          </a>
          <a
            href="#kaizen"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors py-2 border-b border-white/5"
          >
            My startup
          </a>
          <a
            href="#footer"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors py-2"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
