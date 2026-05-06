// Hero.jsx

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#111827] to-black min-h-screen flex items-center">

      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-120px] w-[350px] h-[350px] bg-cyan-400/10 blur-[140px] rounded-full"></div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-white/5 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span className="text-sm text-blue-200">
              AI-Powered Code Refactoring Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Refactor Your
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Code with AI
            </span>
            Precision
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
            Detect bugs, understand complex logic, and generate optimized,
            production-ready code instantly with AI.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-[0_0_30px_rgba(59,130,246,0.45)] hover:scale-105 transition-all duration-300">
              Start Analyzing
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all duration-300">
              Watch Demo
            </button>

          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">

            <div>
              <h3 className="text-3xl font-bold text-white">20K+</h3>
              <p className="text-slate-400 text-sm mt-1">
                Developers
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">99%</h3>
              <p className="text-slate-400 text-sm mt-1">
                Faster Analysis
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-slate-400 text-sm mt-1">
                Supported Languages
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* Main Card */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">

            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/20">

              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              <div className="text-sm text-slate-400">
                RefactorX Engine
              </div>

            </div>

            {/* Code Comparison */}
            <div className="grid md:grid-cols-2">

              {/* BEFORE */}
              <div className="p-6 border-r border-white/10">

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-red-300 font-semibold">
                    Before
                  </h3>

                  <span className="text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/20">
                    3 Issues
                  </span>
                </div>

                <div className="space-y-3 text-sm font-mono text-slate-400">

                  <div className="bg-black/30 p-3 rounded-lg">
                    const users = [];
                  </div>

                  <div className="bg-black/30 p-3 rounded-lg">
                    for(let i=0; i &lt; data.length; i++)
                  </div>

                  <div className="bg-black/30 p-3 rounded-lg border border-red-500/30">
                    if(user.active == true)
                  </div>

                  <div className="bg-black/30 p-3 rounded-lg">
                    users.push(data[i]);
                  </div>

                </div>

              </div>

              {/* AFTER */}
              <div className="p-6">

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-cyan-300 font-semibold">
                    Optimized
                  </h3>

                  <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/20">
                    AI Improved
                  </span>
                </div>

                <div className="space-y-3 text-sm font-mono text-slate-300">

                  <div className="bg-cyan-500/5 p-3 rounded-lg border border-cyan-500/10">
                    const users = data
                  </div>

                  <div className="bg-cyan-500/5 p-3 rounded-lg border border-cyan-500/10">
                    .filter(user =&gt; user.active)
                  </div>

                  <div className="bg-cyan-500/5 p-3 rounded-lg border border-cyan-500/10">
                    .map(user =&gt; user);
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-8 bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">

            <p className="text-sm text-slate-400 mb-2">
              AI Analysis
            </p>

            <h4 className="text-white font-semibold">
              40% Performance Improved
            </h4>

          </div>

        </div>

      </div>
    </section>
  );
}


