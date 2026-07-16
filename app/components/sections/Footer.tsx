export function Footer() {
  return (
    <footer id="contact" className="bg-[#0a1628] py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="text-center mb-12">
            {/* Name and title */}
            <h3 className="text-3xl font-bold text-white mb-2">A. Stefan Tudose</h3>
            <p className="text-white/60 text-lg mb-6">AI Solutions Architect</p>

            {/* Tagline */}
            <p className="text-white/50 max-w-md mx-auto text-sm font-light">
              Helping businesses build reliable software and make sense of technology. Let&apos;s chat.
            </p>
          </div>

          {/* Contact section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
            <h4 className="text-white font-semibold text-lg mb-6 text-center">Get in Touch</h4>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Email */}
              <a
                href="mailto:contact@stefantudose.com"
                className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <i className="fas fa-envelope text-purple-400"></i>
                <span>contact@stefantudose.com</span>
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
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex justify-center pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm text-center">
              © {new Date().getFullYear()} Tudose. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}