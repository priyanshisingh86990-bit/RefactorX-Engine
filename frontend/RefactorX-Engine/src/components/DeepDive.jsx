
import {
  LayoutDashboard,
  Bug,
  Sparkles,
  Code2,
  BarChart3,
} from "lucide-react";

export default function DeepDive() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a]">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            PRODUCT DEEP DIVE
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Explore the RefactorX <br />
            AI Dashboard Experience
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A modern developer workspace built for intelligent debugging,
            AI-assisted refactoring, and production-grade optimization.
          </p>

        </div>

        {/* Dashboard */}
        <div className="relative bg-white/[0.04] border border-white/10 rounded-[32px] overflow-hidden backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.08)]">

          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/20">

            <div className="flex items-center gap-3">

              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <span className="text-slate-400 text-sm">
                RefactorX Dashboard
              </span>

            </div>

            <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">
              AI Active
            </div>

          </div>

          {/* Main Layout */}
          <div className="grid lg:grid-cols-[260px_1fr] min-h-[700px]">

            {/* Sidebar */}
            <div className="border-r border-white/10 bg-black/20 p-6">

              <div className="space-y-4">

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                  <LayoutDashboard className="w-5 h-5" />
                  Dashboard
                </div>

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:bg-white/5 transition">
                  <Bug className="w-5 h-5" />
                  Bug Reports
                </div>

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:bg-white/5 transition">
                  <Sparkles className="w-5 h-5" />
                  AI Suggestions
                </div>

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:bg-white/5 transition">
                  <Code2 className="w-5 h-5" />
                  Refactored Code
                </div>

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:bg-white/5 transition">
                  <BarChart3 className="w-5 h-5" />
                  Analytics
                </div>

              </div>

            </div>

            {/* Main Panel */}
            <div className="p-8">

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">

                <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">
                  <p className="text-slate-400 mb-3">
                    Bugs Fixed
                  </p>

                  <h3 className="text-4xl font-bold text-white">
                    128
                  </h3>
                </div>

                <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">
                  <p className="text-slate-400 mb-3">
                    Performance Gain
                  </p>

                  <h3 className="text-4xl font-bold text-cyan-400">
                    +42%
                  </h3>
                </div>

                <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">
                  <p className="text-slate-400 mb-3">
                    AI Suggestions
                  </p>

                  <h3 className="text-4xl font-bold text-white">
                    324
                  </h3>
                </div>

              </div>

              {/* Editor */}
              <div className="bg-[#0f172a] border border-white/10 rounded-3xl overflow-hidden">

                {/* Tabs */}
                <div className="flex items-center gap-4 px-6 py-4 border-b border-white/10 bg-black/20">

                  <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">
                    analysis.js
                  </div>

                  <div className="text-slate-500 text-sm">
                    optimized.ts
                  </div>

                </div>

                {/* Code */}
                <div className="p-8 font-mono text-sm text-slate-300 space-y-4">

                  <div className="text-cyan-400">
                    {`const optimizedUsers = data`}
                  </div>

                  <div className="ml-6 text-slate-400">
                    {`.filter(user => user.active)`}
                  </div>

                  <div className="ml-6 text-slate-400">
                    {`.map(user => ({`}
                  </div>

                  <div className="ml-12 text-slate-500">
                    {`...user,`}
                  </div>

                  <div className="ml-12 text-slate-500">
                    {`optimized: true`}
                  </div>

                  <div className="ml-6 text-slate-400">
                    {`}))`}
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}



// import { Sparkles, Code2, ShieldCheck, Zap } from "lucide-react";

// export default function DeepDive() {
//   const cards = [
//     {
//       icon: <Sparkles size={26} />,
//       title: "AI Refactoring",
//       desc: "Automatically optimize and clean messy code instantly.",
//     },
//     {
//       icon: <Code2 size={26} />,
//       title: "Code Understanding",
//       desc: "Understand complex codebases with AI explanations.",
//     },
//     {
//       icon: <ShieldCheck size={26} />,
//       title: "Bug Detection",
//       desc: "Detect hidden bugs and vulnerabilities faster.",
//     },
//     {
//       icon: <Zap size={26} />,
//       title: "Performance Boost",
//       desc: "Improve speed and efficiency with smart suggestions.",
//     },
//   ];

//   return (
//     <section className="relative py-28 px-6 overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

//       <div className="relative max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-20">

//           <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
//             PRODUCT DEEP DIVE
//           </p>

//           <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
//             Built For Modern <br />
//             Developers & AI Teams
//           </h2>

//           <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
//             RefactorX combines AI-powered debugging, optimization,
//             and intelligent code analysis into one modern platform.
//           </p>

//         </div>

//         {/* Main Showcase */}
//         <div className="grid lg:grid-cols-2 gap-10 items-center">

//           {/* Left Side */}
//           <div className="space-y-6">

//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className="group bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-300"
//               >

//                 <div className="flex items-start gap-5">

//                   <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition">
//                     {card.icon}
//                   </div>

//                   <div>
//                     <h3 className="text-2xl font-semibold text-white mb-2">
//                       {card.title}
//                     </h3>

//                     <p className="text-slate-400 leading-relaxed">
//                       {card.desc}
//                     </p>
//                   </div>

//                 </div>

//               </div>
//             ))}

//           </div>

//           {/* Right Side */}
//           <div className="relative">

//             <div className="bg-white/[0.04] border border-white/10 rounded-[32px] overflow-hidden backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.08)]">

//               {/* Top Bar */}
//               <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-black/20">

//                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-green-500"></div>

//               </div>

//               {/* Code Window */}
//               <div className="p-8 font-mono text-sm space-y-4 text-slate-300">

//                 <div className="text-cyan-400">
//                   const optimizedUsers = data
//                 </div>

//                 <div className="ml-6 text-slate-400">
//                   .filter(user =&gt; user.active)
//                 </div>

//                 <div className="ml-6 text-slate-400">
//                   .map(user =&gt; (
//                 </div>

//                 <div className="ml-12 text-slate-500">
//                   ...user,
//                 </div>

//                 <div className="ml-12 text-slate-500">
//                   optimized: true
//                 </div>

//                 <div className="ml-6 text-slate-400">
//                   ))
//                 </div>

//               </div>

//             </div>

//             {/* Floating Card */}
//             <div className="absolute -bottom-6 -left-6 bg-cyan-500 text-black px-6 py-4 rounded-2xl font-semibold shadow-2xl">
//               +42% Faster Performance
//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }


