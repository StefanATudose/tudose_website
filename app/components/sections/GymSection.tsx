import React from "react";
import Link from "next/link";

export function GymSection() {
  return (
    <section className="py-24 bg-[#121318] text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#db5f32]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Metrics Side (Left on desktop) */}
          <div className="lg:col-span-5 lg:order-1 order-2">
            <div className="bg-[#191a1f] border border-white/10 rounded-2xl p-6 shadow-2xl relative">
              {/* Green status badge */}
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full font-medium border border-emerald-500/20 w-fit mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                <span>SYSTEM HEALTH: NOMINAL</span>
              </div>

              <div className="space-y-4">
                <div className="text-center py-6 border-b border-white/5">
                  <p className="text-4xl font-extrabold text-white tracking-tight">542</p>
                  <p className="text-[11px] text-white/50 uppercase tracking-wider mt-1">Active Gym Members</p>
                </div>
                
                <div className="flex justify-between items-center text-xs text-white/70 pt-2">
                  <span>Turnstile Check-ins</span>
                  <span className="font-mono text-emerald-400">100% Automated</span>
                </div>
                <div className="flex justify-between items-center text-xs text-white/70">
                  <span>Subscription Webhooks</span>
                  <span className="font-mono text-emerald-400">Idempotent</span>
                </div>
                <div className="flex justify-between items-center text-xs text-white/70">
                  <span>Daily Uptime</span>
                  <span className="font-mono text-emerald-400">99.9%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Side (Right on desktop) */}
          <div className="lg:col-span-7 lg:order-2 order-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              2. Reliable Delivery: Building systems you can bet your business on
            </h2>

            <div className="space-y-4 text-white/75 font-light leading-relaxed text-base">
              <p>
                A beautiful design is useless if it crashes. For <strong>Florin Gold Gym</strong>, I delivered 
                the entire digital infrastructure: a Next.js admin portal and custom Flutter mobile apps.
              </p>
              <p>
                This system runs a physical facility of <strong>500+ active members</strong>. Because bookings, recurring billing, 
                and automated access turnstiles are tied directly to database state, <strong>this software is the heart of the business</strong>.
              </p>
              <p>
                <strong>If the server goes down, operations freeze.</strong> By implementing idempotent webhook systems 
                and real-time state listeners, I engineered a <strong>zero-downtime architecture</strong> they count on 24/7.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/florin-gold-gym"
                className="inline-flex items-center gap-2 text-[#db5f32] hover:text-[#c25026] font-semibold transition-colors group"
              >
                <span>Read the full case study & see implementation details</span>
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
