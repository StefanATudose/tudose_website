import React from "react";
import Link from "next/link";
import Image from "next/image";

export function GymSection() {
  return (
    <section className="py-24 bg-[#121318] text-white relative overflow-hidden">
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
            <p className="text-white/50 text-xs text-center mt-6 max-w-xs leading-relaxed">
              The custom-built Flutter companion app used by gym members to check occupancy, book classes, and trigger entry turnstiles.
            </p>
          </div>

          {/* Copy Side (Right on desktop) */}
          <div className="lg:col-span-7 lg:order-2 order-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Why you can trust me: Software that runs a physical business
            </h2>

            <div className="space-y-6 text-white/90 font-medium leading-relaxed text-lg md:text-xl">
              <p>
                It is easy to make software look good in a presentation, but it is much harder to build systems that keep a physical business running.
              </p>
              <p>
                For <strong>Florin Gold Gym</strong>, I built the entire digital infrastructure: a Next.js admin portal and custom Flutter mobile apps.
              </p>
              <p>
                This system runs a physical facility of <strong>500+ active monthly members.</strong>
              </p>
              <p>
                Because bookings, payments, and automated turnstiles are tied directly to database state, <strong>this software is the heart of the business</strong>.
              </p>
              <p>
                If the server goes down, operations freeze and members are locked outside.
              </p>
              <p>
                To make sure that never happens, I built a <strong>zero-downtime architecture</strong> using idempotent webhooks and real-time state listeners.
              </p>
              <p>
                When you hire me, you are not just getting someone who writes code.
              </p>
              <p>
                You are getting a partner who treats your business logic with the same weight as a physical front door.
              </p>
              <p>
                That is the level of reliability I bring to every project I touch.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/florin-gold-gym"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-center"
              >
                <span>Read the full case study</span>
                <i className="fas fa-arrow-right text-sm"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
