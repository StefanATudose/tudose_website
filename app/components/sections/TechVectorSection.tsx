"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CarouselSlide {
  src: string;
  description: string;
}

export function TechVectorSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides: CarouselSlide[] = [
    {
      src: "/images/techvector-1.png",
      description: "The homepage of TechVector, my custom AI research assistant which answers questions based on all Techcrunch articles posted since 2026.",
    },
    {
      src: "/images/techvector-2.png",
      description: "Search directly for the article you need, in plain English. Techvector will find it for you in seconds.",
    },
    {
      src: "/images/techvector-3.png",
      description: "Read through summaries of the latest Techcrunch articles and ask questions for more details.",
    },
    {
      src: "/images/techvector-4.png",
      description: "Ask general questions over the whole dataset, and get a direct answer with links to the articles it used to generate it.",
    }
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Copy Side */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-tight mb-8">
              How I can help: AI integration in your business
            </h2>

            <div className="space-y-6 text-gray-900 font-medium leading-relaxed text-lg md:text-xl">
              <p>
                By {new Date().getFullYear()}, AI isn&apos;t fully replacing businesses, but <strong>it&apos;s becoming part of everyday business operations</strong>.
              </p>
              <p>
                Companies are using AI to answer emails, summarize meetings, route requests, and automate repetitive tasks.
              </p>
              <p>
                The biggest gains often come from <strong>connecting the tools you already use, not replacing them</strong>.
              </p>
              <p>
                Imagine <strong>invoices processed automatically, support tickets categorized instantly, or CRM records updated without manual work.</strong>
              </p>
              <p>
                For organizations with large knowledge bases, <strong>AI can also become an expert on your internal documentation</strong>.
              </p>
              <p>
                Imagine a private search engine that understands your contracts, policies, technical manuals, and PDFs, then answers questions in seconds.
              </p>
              <p>
                That&apos;s the kind of secure, internal AI systems I build.
              </p>
              <p>
                <strong>TechVector</strong> is a live example of this approach: a custom AI research assistant built from the ground up.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="https://techvector.stefantudose.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl text-center"
              >
                <span>Try the live assistant yourself</span>
                <i className="fas fa-arrow-right text-sm"></i>
              </a>
            </div>
          </div>

          {/* Interactive Carousel Side */}
          <div className="lg:col-span-6">
            <div className="bg-gray-50 rounded-3xl p-6 md:p-8 shadow-xl border border-gray-200 flex flex-col items-center">

              {/* Carousel Viewport */}
              <div className="w-full aspect-video bg-gray-900 rounded-xl overflow-hidden relative border border-gray-300 shadow-inner mb-6">
                <Image
                  src={slides[activeSlide].src}
                  alt={`TechVector feature ${activeSlide + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Description */}
              <div className="h-20 flex items-center justify-center text-center w-full px-2 mb-4">
                <p className="text-gray-800 font-medium text-sm md:text-base leading-relaxed">
                  {slides[activeSlide].description}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-6 mt-2">
                <button
                  onClick={handlePrevSlide}
                  className="w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-800 transition-all shadow-sm"
                  aria-label="Previous image"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>

                <div className="flex gap-2.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2.5 rounded-full transition-all ${idx === activeSlide ? 'bg-black w-8' : 'bg-gray-300 w-2.5 hover:bg-gray-400'}`}
                      aria-label={`Go to image ${idx + 1}`}
                    ></button>
                  ))}
                </div>

                <button
                  onClick={handleNextSlide}
                  className="w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-800 transition-all shadow-sm"
                  aria-label="Next image"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
