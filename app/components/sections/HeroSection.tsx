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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch w-full">
          {/* Left Column (Subtitle & CTAs) - bottom-left aligned */}
          <div className="lg:col-span-4 flex flex-col justify-end items-center lg:items-start text-center lg:text-left order-3 lg:order-1 mt-8 lg:mt-0 min-h-0 lg:self-end lg:pb-12">
            <span className="text-sm font-light text-purple-300/80 mb-3 block lowercase tracking-wider">
              let&apos;s work together
            </span>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[1.75rem] xl:text-[2.15rem] font-bold text-white/90 tracking-tight leading-tight max-w-md">
              Hi, I&apos;m Stefan. I translate complex technical problems into simple, reliable software solutions for growing businesses.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-row gap-3 mt-8 justify-center lg:justify-start flex-wrap w-full">
              <a
                href="mailto:contact@stefantudose.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#7c3aed] text-white rounded-xl font-semibold hover:bg-[#6d28d9] transition-all shadow-lg shadow-purple-500/20 text-sm md:text-base border border-transparent"
              >
                <span>Book a Discovery Call</span>
                <i className="fas fa-calendar-alt text-xs"></i>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white/90 rounded-xl font-medium hover:bg-white/5 transition-all text-sm md:text-base"
              >
                <span>Explore My Work</span>
              </a>
            </div>
          </div>

          {/* Middle Column (Image) - centered and huge */}
          <div className="lg:col-span-4 flex items-center justify-center order-2 lg:self-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] xl:w-[440px] xl:h-[440px] rounded-full overflow-hidden ring-12 ring-white/5 shadow-2xl animate-float bg-linear-to-b from-purple-500/10 to-blue-500/10 flex-shrink-0">
              <Image
                src="/tudose.jpeg"
                alt="Stefan Tudose"
                fill
                sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, (max-width: 1280px) 350px, 440px"
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column (Title) - top-right aligned */}
          <div className="lg:col-span-4 flex flex-col justify-start items-center lg:items-end text-center lg:text-right order-1 lg:order-3 min-h-0 lg:self-start lg:pt-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] xl:text-[3.2rem] font-bold text-white tracking-tight leading-tight max-w-md">
              Turn your team&apos;s manual tasks into seamless, automated workflows.
            </h1>
            
            {/* Scroll Indicator Arrow matching design */}
            <div className="mt-8 hidden lg:block animate-bounce">
              <a href="#services" className="text-white/40 hover:text-white/80 transition-colors" aria-label="Scroll down">
                <i className="fas fa-arrow-down text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}