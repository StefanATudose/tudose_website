import React from "react";

export function TechVectorSection() {
  return (
    <section id="projects" className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Copy Side */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight">
              1. Custom AI: Opening up the possibilities of what AI can do for your business
            </h2>
            
            <div className="space-y-4 text-black/70 font-light leading-relaxed text-base">
              <p>
                Many business owners see artificial intelligence as abstract or gimmicky. I built 
                <strong> TechVector</strong>—a live, production-grade research assistant—to make the practical 
                value of custom AI concrete.
              </p>
              <p>
                Instead of simple keyword matches, it reads and understands a massive archive of technical 
                articles semantically, understanding the context behind a user&apos;s intent. It demonstrates how a 
                RAG (Retrieval-Augmented Generation) system can automate hours of manual searching.
              </p>
              <p>
                For your business, this opens up immediate possibilities: converting raw folders of PDFs, invoice histories, 
                customer logs, or partner contracts into instant knowledge assistants that answer questions and 
                run operations automatically.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://techvector.stefantudose.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors group"
              >
                <span>Try the live assistant yourself</span>
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* Interactive Mockup Side */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b1320] rounded-2xl p-6 shadow-xl border border-white/5 relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-1.5 border-b border-white/10 pb-3 mb-4 text-[11px] text-white/40 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Custom AI Assistant</span>
              </div>

              {/* Chat Interface Mockup */}
              <div className="space-y-4 font-sans text-xs">
                {/* User Query */}
                <div className="bg-white/5 border border-white/10 text-white rounded-xl p-3.5 leading-relaxed">
                  <p className="text-[10px] text-purple-300 font-semibold mb-1">YOUR PROSPECT / TEAM</p>
                  &quot;How can custom AI help our operations team save time?&quot;
                </div>

                {/* AI Response */}
                <div className="bg-linear-to-br from-purple-950/30 to-indigo-950/30 border border-purple-500/20 text-white rounded-xl p-4 leading-relaxed">
                  <p className="text-[10px] text-emerald-400 font-semibold mb-1.5">CUSTOM AGENT</p>
                  <p className="mb-2">By index-linking your unstructured documents (contracts, PDFs, support logs) into a private search database:</p>
                  <ul className="list-disc list-inside space-y-1 text-white/80">
                    <li><strong className="text-white">Instant Answers:</strong> Queries retrieve exact clause coordinates in seconds.</li>
                    <li><strong className="text-white">Process Integration:</strong> Connects database updates to email summaries.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
