export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0a1628] via-[#1e3a5f] to-[#6b21a8] opacity-95"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center">
        {/* Intro copy */}
        <div className="text-center max-w-4xl mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Turn your team&apos;s manual tasks into seamless, automated workflows.
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Hi, I&apos;m Stefan. I translate complex technical problems into simple, reliable software solutions for growing businesses.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-[#0a1628] rounded-full font-medium hover:bg-white/90 transition-all shadow-lg hover:shadow-xl text-center"
          >
            Explore My Work
          </a>
          <a
            href="mailto:contact@tudose.dev"
            className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all text-center"
          >
            Book a Discovery Call
          </a>
        </div>

        {/* Key Expertise Grid (Humble consulting pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 mb-4">
              <i className="fas fa-sitemap text-lg"></i>
            </div>
            <h3 className="text-white font-semibold text-xl mb-3">Reliable Software Architecture</h3>
            <p className="text-white/90 text-base leading-relaxed">
              Build software that&apos;s easier to maintain, faster to extend, and ready to grow with your business.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300 mb-4">
              <i className="fas fa-robot text-lg"></i>
            </div>
            <h3 className="text-white font-semibold text-xl mb-3">Business Process Automation</h3>
            <p className="text-white/90 text-base leading-relaxed">
              Stop wasting billable hours on repetitive admin. I connect your existing tools and build smart data-retrieval systems so your team can focus on high-value work.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300 mb-4">
              <i className="fas fa-lightbulb text-lg"></i>
            </div>
            <h3 className="text-white font-semibold text-xl mb-3">Technical Advisory & Consulting</h3>
            <p className="text-white/90 text-base leading-relaxed">
              Get straightforward, jargon-free advice. I help you evaluate software investments, plan your digital strategy, and avoid costly technical mistakes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}