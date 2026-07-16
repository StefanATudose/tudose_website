import Image from "next/image";

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

      {/* Hero Image (Absolute, huge, starts at the absolute bottom of the page, going to the top) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] lg:w-full lg:max-w-[750px] xl:max-w-[900px] h-[55vh] sm:h-[65vh] lg:h-[90vh] xl:h-[95vh] z-0 opacity-30 lg:opacity-100 pointer-events-none flex items-end justify-center">
        <div className="relative w-full h-full">
          <Image
            src="/tudose2.png"
            alt="Stefan Tudose"
            fill
            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 750px, 900px"
            className="w-full h-full object-contain object-bottom"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch w-full">
          {/* Left Column (Subtitle & CTAs) - bottom-left aligned */}
          <div className="lg:col-span-3 flex flex-col justify-end items-center lg:items-start text-center lg:text-left order-3 lg:order-1 mt-8 lg:mt-0 min-h-0 lg:self-end lg:pb-0 lg:translate-y-12 relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[2.5rem] xl:text-[2.8rem] font-bold text-white tracking-tight leading-none">
              Hi, I&apos;m Stefan.
            </h2>
            <p className="text-lg sm:text-xl lg:text-xl text-purple-200/70 font-medium mt-4 max-w-sm">
              I translate complex technical problems into simple, reliable software solutions for growing businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-3 mt-8 justify-center lg:justify-start flex-wrap w-full">
              <a
                href="#techvector"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#7c3aed] text-white rounded-xl font-semibold hover:bg-[#6d28d9] transition-all shadow-lg shadow-purple-500/20 text-sm md:text-base border border-transparent"
              >
                <span>Explore My Work</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </a>
              <a
                href="mailto:contact@stefantudose.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white/90 rounded-xl font-medium hover:bg-white/5 transition-all text-sm md:text-base"
              >
                <span>Book a Discovery Call</span>
                <i className="fas fa-calendar-alt text-xs"></i>
              </a>
            </div>
          </div>

          {/* Middle Spacer Column */}
          <div className="hidden lg:block lg:col-span-6 lg:order-2 pointer-events-none"></div>

          {/* Right Column (Title) - top-right aligned */}
          <div className="lg:col-span-3 flex flex-col justify-start items-center lg:items-end text-center lg:text-right order-1 lg:order-3 min-h-0 lg:self-start lg:pt-0 lg:-translate-y-8 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.7rem] xl:text-[3.5rem] font-bold text-white tracking-tight leading-tight max-w-xl">
              Turn manual tasks into seamless, automated workflows.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}