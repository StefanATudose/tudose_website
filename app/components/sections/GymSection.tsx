import React from "react";
import Link from "next/link";
import Image from "next/image";

export function GymSection() {
  return (
    <section id="gym" className="py-24 bg-[#121318] text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#db5f32]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Mockup Side (Left on desktop) */}
          <div className="lg:col-span-5 lg:order-1 order-2 flex flex-col items-center justify-center">
            <div className="relative w-64 md:w-72 aspect-[9/19] bg-gray-950 rounded-[2.5rem] p-3 shadow-2xl border-4 border-white/10">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                <Image
                  src="/images/gym-0.jpeg"
                  alt="Florin Gold Gym mobile application screenshot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                  priority
                />
              </div>
              {/* Device camera cutout */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20"></div>
            </div>
            {/* Description underneath */}
            <p className="text-white text-xs text-center mt-6 max-w-xs leading-relaxed">
              The custom-built mobile app used by gym members to purchase subscriptions, book classes, and trigger entry turnstiles.
            </p>
          </div>

          {/* Copy Side (Right on desktop) */}
          <div className="lg:col-span-7 lg:order-2 order-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Why you can trust me: My software can&apos;t afford to fail.
            </h2>

            <div className="space-y-6 text-white/90 font-medium leading-relaxed text-lg md:text-xl">
              <p>
                Anyone can make a prototype with AI.
              </p>
              <p>
                I build <strong>reliable software</strong> that businesses depend on every day.
              </p>
              <p>
                For <strong>Florin Gold Gym</strong>, I built the entire digital platform: the admin portal, mobile apps, payments, bookings, and access control.
              </p>
              <p>
                <strong>500+ members</strong> rely on it every month.
              </p>
              <p>
                If it goes down, <strong>payments stop, operations stall</strong>, and members can&apos;t get inside.
              </p>
              <p>
                So I built it for <strong>reliability from day one</strong>.
              </p>
              <p>
                That&apos;s the <strong>standard I bring to every project</strong>.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/florin-gold-gym"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-center"
              >
                <span>Read the case study</span>
                <i className="fas fa-arrow-right text-sm"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
