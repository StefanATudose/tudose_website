import { PhoneMockup } from "./PhoneMockup";

export function StartupSection() {
  return (
    <section className="py-24 bg-linear-to-r from-[#0a1628] via-[#1e3a5f] to-[#6b21a8] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-purple-200 text-sm font-medium mb-6">
              <i className="fas fa-brain mr-2"></i>
              Lessons from the Field
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Kaizen: What my first startup taught me about your business
            </h2>
            <p className="text-lg text-white/80 mb-6 font-light leading-relaxed">
              I built Kaizen, an Android distraction-blocker designed to be completely bypass-proof. It was a technical success—I had to go deep into Android system APIs, create monochrome UI configurations, and implement secure accountability partner wait periods. 
            </p>
            <p className="text-white/60 mb-8 text-sm leading-relaxed">
              But as a business, it fell short. It taught me the hard way that writing great code is only half the battle. You also need a clear distribution path, customer acquisition strategies, and solid product-market fit. Today, I bring that founder&apos;s empathy to your project: I won&apos;t just build what you ask for; I&apos;ll help you think through whether the feature makes business sense for your bottom line.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <i className="fas fa-shield-alt text-purple-400"></i>
                <span>Bypass-Proof Wait Loops</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <i className="fas fa-eye-slash text-purple-400"></i>
                <span>Monochrome UI Psychology</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <i className="fas fa-user-friends text-purple-400"></i>
                <span>Accountability Partners</span>
              </div>
            </div>
            <div>
              <a
                href="https://kaizen.stefantudose.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0a1628] rounded-full font-medium hover:bg-white/90 transition-colors shadow-md"
              >
                <i className="fa-solid fa-globe"></i>
                Visit Kaizen Site
              </a>
            </div>
          </div>

          {/* App mockup */}
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}