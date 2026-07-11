import React from "react";
import { PhoneMockup } from "./PhoneMockup";

export function KaizenSection() {
  return (
    <section className="py-24 bg-linear-to-r from-[#0a1628] via-[#1e3a5f] to-[#6b21a8] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              3. Entrepreneurial Strategy: Kaizen: What my first startup taught me about your business
            </h2>

            <div className="space-y-4 text-white/80 font-light leading-relaxed text-base">
              <p>
                I built <strong>Kaizen</strong>, a system-level Android distraction blocker. Technically, it was a tour 
                de force—hacking custom system APIs to create a <strong>bypass-proof focus loop</strong>.
              </p>
              <p>
                Commercially, it fell short. <strong>That failure was my real-world business degree.</strong> It taught me 
                the hard way that great code is useless without market viability, distribution, and unit economics.
              </p>
              <p>
                When you hire me, <strong>I speak in your terms, not tech jargon</strong>. We will talk business strategy, 
                risk, and ROI. I partner with you to audit your ideas and ensure <strong>every line of code grows your bottom line</strong>.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://kaizen.stefantudose.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-200 hover:text-purple-300 font-semibold transition-colors group"
              >
                <span>Visit the Kaizen site</span>
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* App mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
