"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Screenshot {
  title: string;
  desc: string;
  icon: string;
  color: string;
  screenContent: React.ReactNode;
}

export default function FlorinGoldGymCaseStudy() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Screenshots data for the carousel
  const screenshots: Screenshot[] = [
    {
      title: "Mobile App: Check-in QR & Capacity",
      desc: "Members scan their dynamic QR code at the reception turnstile. Includes estimated occupancy and duration prompt.",
      icon: "fa-qrcode",
      color: "from-orange-500/20 to-transparent",
      screenContent: (
        <div className="w-full h-full bg-[#191A1F] text-white p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs text-white/40">
            <span>FLORIN GOLD</span>
            <span className="flex items-center gap-1">
              <i className="fas fa-signal"></i>
              <i className="fas fa-battery-three-quarters"></i>
            </span>
          </div>

          <div className="flex-grow flex flex-col justify-center items-center my-4">
            <p className="text-sm font-light text-white/60 mb-1">Aproximativ în sală</p>
            <p className="text-2xl font-bold text-[#DB5F32] mb-6">34 persoane</p>

            {/* Simulated QR Code */}
            <div className="bg-white p-4 rounded-2xl shadow-lg mb-6 border-4 border-[#DB5F32]/50 animate-pulse">
              <div className="w-36 h-36 bg-[#191A1F] flex items-center justify-center relative rounded-lg">
                <i className="fas fa-qrcode text-white text-7xl"></i>
                <div className="absolute inset-0 bg-[#DB5F32]/10 flex items-center justify-center">
                  <div className="w-12 h-1 bg-[#DB5F32] animate-bounce"></div>
                </div>
              </div>
            </div>

            <p className="text-xs text-white/50 text-center px-4">
              Codul este valid 30 de secunde. Scanați pentru acces.
            </p>
          </div>

          {/* Prompt Mock */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
            <p className="text-xs text-white/70 mb-2">Cât timp plănuiești să stai?</p>
            <div className="flex gap-2 justify-center">
              <span className="px-2 py-1 bg-[#DB5F32] text-[10px] rounded font-semibold">90m</span>
              <span className="px-2 py-1 bg-white/10 text-[10px] rounded">120m</span>
              <span className="px-2 py-1 bg-white/10 text-[10px] rounded">180m+</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Mobile App: Class Scheduling & Bookings",
      desc: "Interactive schedule navigation for Aerobic and Kickboxing classes with real-time capacity and credit verification.",
      icon: "fa-calendar-alt",
      color: "from-purple-500/20 to-transparent",
      screenContent: (
        <div className="w-full h-full bg-[#191A1F] text-white p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs text-white/40 mb-3">
            <span>Program Clasa</span>
            <span>Sâmbătă</span>
          </div>

          {/* Romanian Week Ribbon */}
          <div className="flex justify-between gap-1 mb-4">
            {["Lun", "Mar", "Mie", "Joi", "Vin", "Sâm", "Dum"].map((day, idx) => (
              <div key={day} className={`flex-1 text-center py-1 rounded ${idx === 5 ? 'bg-[#DB5F32] text-white font-bold' : 'bg-white/5 text-white/60'}`}>
                <p className="text-[9px] uppercase">{day}</p>
                <p className="text-xs">11</p>
              </div>
            ))}
          </div>

          {/* Classes list */}
          <div className="flex-grow space-y-3 overflow-y-auto mb-2">
            <div className="bg-white/5 border-l-4 border-[#DB5F32] rounded-r-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xs font-bold">KICKBOXING CLASS</h4>
                  <p className="text-[10px] text-white/50">17:00 - 18:30 · Antrenor Gabi</p>
                </div>
                <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-semibold">12 / 20 Locuri</span>
              </div>
              <button className="mt-2 w-full py-1 bg-[#DB5F32] text-[10px] font-bold rounded hover:bg-[#c25026] transition-colors">
                REZERVEAZĂ ȘEDINȚĂ
              </button>
            </div>

            <div className="bg-white/5 border-l-4 border-purple-500 rounded-r-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xs font-bold">AEROBIC DANCE</h4>
                  <p className="text-[10px] text-white/50">19:00 - 20:00 · Antrenoare Daria</p>
                </div>
                <span className="text-[9px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded font-semibold">COMPLET</span>
              </div>
              <button disabled className="mt-2 w-full py-1 bg-white/5 text-white/40 text-[10px] font-bold rounded cursor-not-allowed">
                LISTĂ DE AȘTEPTARE
              </button>
            </div>
          </div>

          <div className="text-center text-[10px] text-white/40 border-t border-white/5 pt-2">
            Politica de anulare: Minim 2 ore înainte
          </div>
        </div>
      )
    },
    {
      title: "Admin Dashboard: Operations Center",
      desc: "Web management interface for receptionist scans, member rosters, subscription plans, and Netopia cashflow audit logs.",
      icon: "fa-chart-line",
      color: "from-blue-500/20 to-transparent",
      screenContent: (
        <div className="w-full h-full bg-[#0F1115] text-white p-6 flex flex-col justify-between text-xs">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#DB5F32] rounded flex items-center justify-center text-xs font-bold">FG</div>
              <span className="font-bold">Florin Gold Admin</span>
            </div>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-semibold">
              Live Connection OK
            </span>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-white/5 rounded p-2 text-center border border-white/5">
              <p className="text-[9px] text-white/40 uppercase">Membri Activi</p>
              <p className="text-base font-bold">542</p>
            </div>
            <div className="bg-white/5 rounded p-2 text-center border border-white/5">
              <p className="text-[9px] text-white/40 uppercase">Check-ins Azi</p>
              <p className="text-base font-bold">186</p>
            </div>
            <div className="bg-white/5 rounded p-2 text-center border border-white/5">
              <p className="text-[9px] text-white/40 uppercase">Venit Netopia</p>
              <p className="text-base font-bold text-emerald-400">9.4k RON</p>
            </div>
          </div>

          {/* Checkin Log */}
          <div className="flex-grow">
            <p className="text-[10px] text-white/50 mb-2 font-bold uppercase tracking-wider">Ultimele Intrări</p>
            <div className="space-y-1.5 overflow-y-auto max-h-24">
              <div className="flex justify-between items-center bg-white/5 p-1.5 rounded">
                <span className="font-medium">Andrei Popescu</span>
                <span className="text-[9px] text-white/40">10:54:12 · QR Confirmat</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-1.5 rounded">
                <span className="font-medium">Elena Dumitru</span>
                <span className="text-[9px] text-white/40">10:51:05 · Kickbox clasa</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-1.5 rounded">
                <span className="font-medium">Mihai Ionescu</span>
                <span className="text-[9px] text-white/40">10:48:30 · Abonament anual</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#121318] text-white font-sans selection:bg-[#DB5F32]/30 selection:text-white">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#DB5F32]/10 to-transparent pointer-events-none"></div>

      {/* Navigation Header */}
      <header className="relative z-10 border-b border-white/5 bg-[#121318]/50 backdrop-blur-md sticky top-0">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium group"
          >
            <i className="fas fa-arrow-left text-xs group-hover:-translate-x-1 transition-transform"></i>
            <span>Back to Portfolio</span>
          </Link>
          <div className="text-right">
            <span className="text-xs font-semibold text-[#DB5F32] uppercase tracking-widest">Case Study</span>
          </div>
        </div>
      </header>

      {/* Case Study Content */}
      <main className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Title / Hero */}
        <section className="mb-20">
          <span className="inline-block px-3 py-1 bg-[#DB5F32]/20 border border-[#DB5F32]/30 rounded-full text-[#DB5F32] text-xs font-semibold uppercase tracking-wider mb-6">
            Operational Backbone System
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Florin Gold Gym: Building a System an Entire Business Bets Its Life On.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl font-light leading-relaxed">
            A Next.js admin dashboard and Flutter mobile app suite managing check-ins, automated turnstiles, 
            subscription purchases, and schedules for a high-traffic gym of over 500 active members.
          </p>
        </section>

        {/* Challenge & Overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 border-t border-white/5 pt-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <i className="fas fa-exclamation-triangle text-[#DB5F32] text-xl"></i>
              The Stakes: Real-World Dependency
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed font-light">
              <p>
                Florin Gold Gym is a fitness center in Botoșani, Romania. With 500+ active members checking in 
                daily for personal workouts, aerobics classes, and kickboxing sessions, management was drowning 
                in manual validation, paper cards, and cash-based bookings.
              </p>
              <p>
                They needed a fully integrated software solution. I built a Next.js admin portal and custom 
                Flutter applications for Android and iOS that act as the physical front door of the gym.
              </p>
              <p className="border-l-2 border-[#DB5F32] pl-4 text-white font-medium italic bg-white/5 py-3 rounded-r-lg">
                Because turnstiles and class lists are linked directly to database state, this software is mission-critical. 
                If the server goes down, the physical entry code fails, checking in halts, and the entire business stalls. 
                Designing for 100% uptime was a foundational requirement, not an afterthought.
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-fit">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60 mb-4">Project Highlights</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <i className="fas fa-check text-emerald-400 mt-1"></i>
                <div>
                  <p className="text-sm font-bold">500+ Active Members</p>
                  <p className="text-xs text-white/50">Daily check-ins & bookings</p>
                </div>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-check text-emerald-400 mt-1"></i>
                <div>
                  <p className="text-sm font-bold">Zero-Downtime Design</p>
                  <p className="text-xs text-white/50">Fully idempotent API checkouts</p>
                </div>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-check text-emerald-400 mt-1"></i>
                <div>
                  <p className="text-sm font-bold">100% Automated Access</p>
                  <p className="text-xs text-white/50">Turnstile trigger via dynamic QR</p>
                </div>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-check text-emerald-400 mt-1"></i>
                <div>
                  <p className="text-sm font-bold">Netopia MobilPay</p>
                  <p className="text-xs text-white/50">Secure subscription processing</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Interactive Screenshots Carousel */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Software Screenshots & Interface</h2>
            <p className="text-sm text-white/60">Explore the interface designs built to handle mobile memberships and administrative flows.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Carousel navigation & details */}
            <div className="flex-1 max-w-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#DB5F32]/10 border border-[#DB5F32]/30 flex items-center justify-center text-[#DB5F32]">
                  <i className={`fas ${screenshots[activeSlide].icon} text-lg`}></i>
                </div>
                <span className="text-xs font-bold text-white/50 uppercase tracking-widest">
                  Screen {activeSlide + 1} of {screenshots.length}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {screenshots[activeSlide].title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-light mb-8">
                {screenshots[activeSlide].desc}
              </p>

              {/* Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrevSlide}
                  className="w-12 h-12 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 flex items-center justify-center text-white transition-all"
                  aria-label="Previous slide"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={handleNextSlide}
                  className="w-12 h-12 rounded-full bg-[#DB5F32] hover:bg-[#c25026] flex items-center justify-center text-white transition-all shadow-lg"
                  aria-label="Next slide"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
                <div className="flex gap-1.5 ml-4">
                  {screenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${idx === activeSlide ? 'bg-[#DB5F32] w-6' : 'bg-white/20'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated UI Screen Render */}
            <div className="shrink-0 relative w-72 h-[560px] max-w-full bg-[#0F1115] rounded-[2.5rem] p-3 shadow-2xl border-4 border-white/10 flex items-center justify-center">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-[#191A1F]">
                {/* Active slide view */}
                {screenshots[activeSlide].screenContent}
              </div>
              {/* Device camera cutout */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20"></div>
            </div>
          </div>
        </section>

        {/* Engineering Highlights */}
        <section className="mb-24 border-t border-white/5 pt-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Behind the Scenes: The Technical Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#DB5F32] mb-4">
                <i className="fas fa-sync"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Real-time Check-ins & Occupancy</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Reception scanning triggers Firebase listener updates in milliseconds. Check-in prompts collect stay duration (&quot;Cât timp stai?&quot;), giving the mobile app a running capacity estimate so members can avoid busy peak hours.
              </p>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#DB5F32] mb-4">
                <i className="fas fa-credit-card"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Idempotent Webhook Payments</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Netopia MobilPay confirmation endpoints are built to be completely idempotent. The backend handles duplicate payment notifications gracefully under high checkout volume, preventing credit duplicates and database corruption.
              </p>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#DB5F32] mb-4">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">2-Hour Booking Constraints</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                A rigid cancellation engine enforces a 2-hour minimum window. Attempting to withdraw from a class or trainer slot within 2 hours of its start blocks actions on both the frontend and database levels, ensuring gym scheduling remains stable.
              </p>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#DB5F32] mb-4">
                <i className="fas fa-user-shield"></i>
              </div>
              <h3 className="text-lg font-bold mb-2">Trainer-Specific Permissions</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Trainers can manage and edit their own personal sessions, but security policies restrict them from booking client slots or making billing purchases. This keeps operational boundaries clean and secure.
              </p>
            </div>
          </div>
        </section>

        {/* Video Testimonial Section */}
        <section className="mb-24 border-t border-white/5 pt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Client Testimonial Video</h2>
            <p className="text-sm text-white/60">Hear directly from Florin, the owner, on how this custom system automated and runs their gym operations.</p>
          </div>

          <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8 flex flex-col items-center">
            {/* Video Container Mockup */}
            <div className="w-full aspect-video bg-[#191A1F] rounded-2xl overflow-hidden relative flex flex-col items-center justify-center border border-white/10 group">
              {/* Video placeholder display */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 z-10">
                <h4 className="text-lg font-bold text-white mb-1">Florin Gold Gym Testimonial</h4>
                <p className="text-xs text-white/60 font-light flex items-center gap-1.5">
                  <i className="fas fa-user text-[#DB5F32]"></i>
                  <span>Florin, Owner & Founder of Florin Gold Gym</span>
                </p>
              </div>

              {/* Play symbol mockup */}
              <div className="w-16 h-16 rounded-full bg-[#DB5F32] hover:scale-110 transition-transform flex items-center justify-center text-white text-xl cursor-pointer shadow-lg z-20">
                <i className="fas fa-play ml-1"></i>
              </div>

              {/* Text note to developer / user */}
              <div className="absolute top-4 left-4 bg-white/10 border border-white/10 px-3 py-1 rounded-full text-[10px] text-white/80 z-20">
                <i className="fas fa-video mr-1.5 text-orange-400 animate-pulse"></i>
                Video Section Placeholder
              </div>

              <div className="absolute top-4 right-4 text-xs text-white/40 z-20">
                16:9 Player Layout
              </div>
            </div>

            <div className="mt-8 text-center max-w-2xl">
              <p className="text-white/80 italic font-light leading-relaxed text-sm">
                &quot;Our entire business runs on Stefan&apos;s platform. Check-ins, class schedules, subscription payments, trainer calendars—if it goes down, we are dead in the water. But it runs flawlessly. He didn&apos;t just build an app; he automated our operations.&quot;
              </p>
              <p className="text-xs text-[#DB5F32] font-semibold uppercase tracking-widest mt-4">
                — Florin, Owner
              </p>
            </div>
          </div>
        </section>

        {/* Footer Call to Action */}
        <section className="text-center py-12 border-t border-white/5">
          <h2 className="text-2xl font-bold mb-4">Interested in building a mission-critical system?</h2>
          <p className="text-sm text-white/60 mb-8 max-w-md mx-auto leading-relaxed font-light">
            I partner with businesses to build robust, zero-downtime platforms. Let&apos;s discuss your requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@stefantudose.com"
              className="px-6 py-3 bg-[#DB5F32] hover:bg-[#c25026] text-white font-medium rounded-full transition-all shadow-md"
            >
              Get in Touch
            </a>
            <Link
              href="/"
              className="px-6 py-3 border border-white/10 hover:border-white/30 text-white font-medium rounded-full transition-all"
            >
              Return Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
