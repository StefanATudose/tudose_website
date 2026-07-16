import React from "react";
import Image from "next/image";

export function KaizenSection() {
  return (
    <section id="kaizen" className="py-24 bg-linear-to-r from-[#0a1628] via-[#1e3a5f] to-[#6b21a8] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Content Side */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Thinking like a founder: Why you need a partner, not just a contractor
            </h2>

            <div className="space-y-6 text-white/90 font-medium leading-relaxed text-lg md:text-xl">
              <p>
                Most developers are hired to write code, but great software starts with understanding why the code needs to exist in the first place.
              </p>
              <p>
                When I built <strong>Kaizen</strong>, a distraction blocker that reached thousands of users, I did not just write the Android code and database queries.
              </p>
              <p>
                I had to handle product strategy, customer acquisition, marketing, and user feedback.
              </p>
              <p>
                That experience completely changed how I view software engineering.
              </p>
              <p>
                I stopped looking at projects as a list of technical tasks and started looking at them as business investments.
              </p>
              <p>
                When we work together, I will not just blindly write code; I will partner with you to audit features, simplify scope, and save you money.
              </p>
              <p>
                I understand the pressure of keeping a business profitable, managing operational costs, and hitting milestones.
              </p>
              <p>
                You do not need another contractor who just completes tickets and asks for approval.
              </p>
              <p>
                You need a technical partner who cares about your business outcome as much as you do.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="https://kaizen.stefantudose.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-center"
              >
                <span>Visit the Kaizen site</span>
                <i className="fas fa-arrow-right text-sm"></i>
              </a>
            </div>
          </div>

          {/* Browser Mockup Side */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center w-full">
            <div className="w-full aspect-video bg-gray-950 rounded-2xl p-2 shadow-2xl border border-white/10 relative flex flex-col">
              {/* Browser header with window controls */}
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-[#0f1115] rounded-t-xl shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <div className="flex-grow flex justify-center text-[10px] text-white/30 font-mono select-none">
                  kaizen.stefantudose.com
                </div>
              </div>
              {/* Screen viewport */}
              <div className="w-full flex-grow rounded-b-xl overflow-hidden relative">
                <Image
                  src="/images/kaizen-1.png"
                  alt="Kaizen desktop landing page hero"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            {/* Description underneath */}
            <p className="text-white/50 text-xs text-center mt-6 max-w-sm leading-relaxed">
              The homepage of Kaizen, a project built with startup principles, unit economics, and real-world distribution in mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
