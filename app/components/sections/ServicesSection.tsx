import React from "react";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0a1628] border-b border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Services I Offer
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
            Tailored engineering and consulting to help your business operate more efficiently, scale securely, and avoid costly mistakes.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center group shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-300 mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-sitemap text-2xl"></i>
            </div>
            <h3 className="text-white font-bold text-2xl mb-4">Reliable Software Architecture</h3>
            <div className="text-white/80 text-base md:text-lg font-medium leading-relaxed space-y-4 flex-grow">
              <p>
                Build software that is easy to maintain and fast to extend.
              </p>
              <p>
                Ensure your platform is ready to grow with your business.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center group shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-300 mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-robot text-2xl"></i>
            </div>
            <h3 className="text-white font-bold text-2xl mb-4">Business Process Automation</h3>
            <div className="text-white/80 text-base md:text-lg font-medium leading-relaxed space-y-4 flex-grow">
              <p>
                Stop wasting billable hours on repetitive admin tasks.
              </p>
              <p>
                I connect your existing tools and build smart data-retrieval systems.
              </p>
              <p>
                Empower your team to focus exclusively on high-value work.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center group shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-300 mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-lightbulb text-2xl"></i>
            </div>
            <h3 className="text-white font-bold text-2xl mb-4">Technical Advisory & Consulting</h3>
            <div className="text-white/80 text-base md:text-lg font-medium leading-relaxed space-y-4 flex-grow">
              <p>
                Get straightforward, jargon-free advice.
              </p>
              <p>
                Evaluate software investments and plan your digital strategy.
              </p>
              <p>
                Avoid costly technical mistakes and lock-ins.
              </p>
            </div>
          </div>
        </div>

        {/* CTA underneath the services */}
        <div className="text-center mt-16">
          <a
            href="mailto:contact@stefantudose.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0a1628] rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-center"
          >
            <span>Let&apos;s discuss your project</span>
            <i className="fas fa-arrow-right text-sm"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
