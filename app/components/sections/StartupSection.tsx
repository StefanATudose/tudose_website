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
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6">
              <i className="fas fa-rocket mr-2"></i>
              My Startup
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              kaiZen
            </h2>
            <p className="text-xl text-white/80 mb-4">
              TBA
            </p>
            <p className="text-white/60 mb-8">
              TODO: CHANGE FocusFlow is an innovative Android application designed to help users reduce screen time and build healthier digital habits. Operating at the system level, it provides intelligent insights, app usage analytics, and customizable focus modes that help users reclaim their time and attention.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-white/80">
                <i className="fas fa-chart-line text-purple-400"></i>
                <span>Usage Analytics</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <i className="fas fa-bell-slash text-purple-400"></i>
                <span>Focus Modes</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <i className="fas fa-brain text-purple-400"></i>
                <span>Smart Insights</span>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0a1628] rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                <i className="fa-solid fa-globe"></i>
                Visit Website
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