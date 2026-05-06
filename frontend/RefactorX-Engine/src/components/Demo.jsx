export default function Demo() {
  return (
    <section id="Demo" className="relative py-28 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            LIVE AI ANALYSIS
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            See RefactorX <br />
            Transform Code Instantly
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Watch how our AI engine detects issues, optimizes logic,
            improves readability, and generates production-ready code
            in real time.
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Original Code */}
          <div className="bg-[#0f172a]/80 border border-red-500/20 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl">

            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111827]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <span className="text-red-400 text-sm font-medium">
                Before Optimization
              </span>
            </div>

            {/* Code */}
            <div className="p-6 font-mono text-sm text-gray-300 space-y-4">

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
{`const users = [];

for(let i = 0; i < data.length; i++) {
   if(data[i].active === true){
      users.push(data[i]);
   }
}`}
              </div>

              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 text-xs rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                  Unoptimized Loop
                </span>

                <span className="px-3 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                  Poor Readability
                </span>
              </div>
            </div>
          </div>

          {/* Refactored Code */}
          <div className="bg-[#0f172a]/80 border border-cyan-500/20 rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,0.08)]">

            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111827]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <span className="text-cyan-400 text-sm font-medium">
                AI Optimized
              </span>
            </div>

            {/* Code */}
            <div className="p-6 font-mono text-sm text-gray-200 space-y-4">

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
{`const users = data
   .filter(user => user.active)
   .map(user => ({
      ...user
   }));`}
              </div>

              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Cleaner Logic
                </span>

                <span className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-300 border border-green-500/20">
                  Performance Improved
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-cyan-400 mb-2">
              40%
            </h3>
            <p className="text-gray-400">
              Faster Code Execution
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-cyan-400 mb-2">
              65%
            </h3>
            <p className="text-gray-400">
              Better Readability
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-cyan-400 mb-2">
              AI
            </h3>
            <p className="text-gray-400">
              Instant Refactoring Engine
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}