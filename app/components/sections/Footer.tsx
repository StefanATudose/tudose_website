import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0a1628] py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="text-center mb-12">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-purple-400/20 shadow-xl">
              <Image
                src="/tudose.jpeg"
                alt="Tudose"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and title */}
            <h3 className="text-3xl font-bold text-white mb-2">A. Stefan Tudose</h3>
            <p className="text-white/60 text-lg mb-6">AI Solutions Architect</p>

            {/* Tagline */}
            <p className="text-white/40 max-w-md mx-auto">
              Transforming businesses with intelligent AI solutions. Let's build something amazing together.
            </p>
          </div>

          {/* Contact section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
            <h4 className="text-white font-semibold text-lg mb-6 text-center">Get in Touch</h4>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Email */}
              <a
                href="mailto:contact@tudose.dev"
                className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <i className="fas fa-envelope text-purple-400"></i>
                <span>contact@tudose.dev</span>
              </a>

              {/* Social links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] transition-colors"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#333] transition-colors"
                  title="GitHub"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Tudose. All rights reserved.
            </p>
            <p className="text-white/30 text-sm">
              Built with <i className="fas fa-heart text-purple-400"></i> and AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}