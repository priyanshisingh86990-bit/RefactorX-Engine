export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#111827] to-black"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-5xl mx-auto px-6">

        {/* CTA Card */}
        <div className="
          relative
          overflow-hidden
          rounded-[40px]
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          px-8 md:px-16
          py-20
          text-center
          shadow-[0_0_100px_rgba(34,211,238,0.08)]
        ">

          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5"></div>

          {/* Content */}
          <div className="relative z-10">

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-6">
              START BUILDING SMARTER
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
              Transform your codebase <br />
              with AI-powered refactoring
            </h2>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
              Join thousands of developers using RefactorX Engine
              to debug faster, optimize performance, and write
              cleaner production-ready code effortlessly.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

              <button className="
                px-10
                py-5
                rounded-2xl
                bg-cyan-400
                text-black
                font-semibold
                text-lg
                hover:scale-105
                transition-all
                duration-300
                shadow-[0_0_40px_rgba(34,211,238,0.35)]
              ">
                Start Free Today
              </button>

              <button className="
                px-10
                py-5
                rounded-2xl
                border border-white/10
                bg-white/5
                text-white
                font-semibold
                text-lg
                hover:bg-white/10
                transition-all
                duration-300
              ">
                Watch Demo
              </button>

            </div>

            {/* Bottom Text */}
            <p className="text-slate-500 mt-8 text-sm">
              No credit card required • Free forever plan available
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}