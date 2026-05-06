export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-20">
      
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-3xl font-bold shadow-[0_0_30px_rgba(34,211,238,0.25)]">
                R
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white">
                  RefactorX Engine
                </h2>

                <p className="text-slate-400 mt-1">
                  AI-Powered Code Refactoring
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-xl text-lg">
              RefactorX helps developers analyze, optimize, and refactor
              production-grade codebases with powerful AI-driven insights.
            </p>

            {/* SOCIAL BUTTONS */}
            <div className="flex items-center gap-4 mt-8">

              <a
                href="#"
                className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-xl"
              >
                GitHub
              </a>

              <a
                href="#"
                className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-xl"
              >
                Twitter
              </a>

              <a
                href="#"
                className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-xl"
              >
                LinkedIn
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-10">

            <div>
              <h3 className="text-white font-semibold mb-5">
                Product
              </h3>

              <div className="space-y-3 text-slate-400">
                <p className="hover:text-cyan-400 cursor-pointer transition">
                  Features
                </p>

                <p className="hover:text-cyan-400 cursor-pointer transition">
                  Pricing
                </p>

                <p className="hover:text-cyan-400 cursor-pointer transition">
                  Demo
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-5">
                Company
              </h3>

              <div className="space-y-3 text-slate-400">
                <p className="hover:text-cyan-400 cursor-pointer transition">
                  About
                </p>

                <p className="hover:text-cyan-400 cursor-pointer transition">
                  Careers
                </p>

                <p className="hover:text-cyan-400 cursor-pointer transition">
                  Contact
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-14 pt-8 text-center text-slate-500">
          © 2026 RefactorX Engine. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

// import {
//   Mail,
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden">

//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#111827] to-black"></div>

//       {/* Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* Top Border */}
//         <div className="border-t border-white/10"></div>

//         {/* Footer Content */}
//         <div className="py-20 grid lg:grid-cols-5 gap-14">

//           {/* Brand */}
//           <div className="lg:col-span-2">

//             <div className="flex items-center gap-3 mb-6">

//               <div className="
//                 w-12
//                 h-12
//                 rounded-2xl
//                 bg-cyan-500/10
//                 border border-cyan-400/20
//                 flex
//                 items-center
//                 justify-center
//                 text-cyan-400
//                 font-bold
//                 text-xl
//               ">
//                 R
//               </div>

//               <div>
//                 <h3 className="text-2xl font-bold text-white">
//                   RefactorX Engine
//                 </h3>

//                 <p className="text-slate-500 text-sm">
//                   AI-Powered Code Refactoring
//                 </p>
//               </div>

//             </div>

//             <p className="text-slate-400 leading-relaxed max-w-md mb-8">
//               RefactorX helps developers analyze, optimize,
//               and refactor production-grade codebases with
//               powerful AI-driven insights.
//             </p>

//             {/* Socials */}

//             <div className="flex items-center gap-4 mt-8">

//               <a
//                 href="#"
//                 className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-xl"
//               >
//                 GitHub
//               </a>

//               <a
//                 href="#"
//                 className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-xl"
//               >
//                 Twitter
//               </a>

//               <a
//                 href="#"
//                 className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-xl"
//               >
//                 LinkedIn
//               </a>

//             </div>

//             {/* Product */}
//             <div>

//               <h4 className="text-white font-semibold text-lg mb-6">
//                 Product
//               </h4>

//               <div className="space-y-4 text-slate-400">

//                 <a href="#" className="block hover:text-cyan-400 transition">
//                   Features
//                 </a>

//                 <a href="#" className="block hover:text-cyan-400 transition">
//                   Pricing
//                 </a>

//                 <a href="#" className="block hover:text-cyan-400 transition">
//                   Integrations
//                 </a>

//                 <a href="#" className="block hover:text-cyan-400 transition">
//                   API Access
//                 </a>

//               </div>

//             </div>

//             {/* Resources */}
//             <div>

//               <h4 className="text-white font-semibold text-lg mb-6">
//                 Resources
//               </h4>

//               <div className="space-y-4 text-slate-400">

//                 <a href="#" className="block hover:text-cyan-400 transition">
//                   Documentation
//                 </a>

//                 <a href="#" className="block hover:text-cyan-400 transition">
//                   Blog
//                 </a>

//                 <a href="#" className="block hover:text-cyan-400 transition">
//                   Community
//                 </a>

//                 <a href="#" className="block hover:text-cyan-400 transition">
//                   Support
//                 </a>

//               </div>

//             </div>

//             {/* Company */}
//             <div>

//               <h4 className="text-white font-semibold text-lg mb-6">
//                 Company
//               </h4>

//               <div className="space-y-4 text-slate-400">

//                 <a href="#" className="block hover:text-cyan-400 transition">
//                   About
//                 </a>

//                 <a href="#" className="block hover:text-cyan-400 transition">
//                   Careers
//                 </a>

//                 <a href="#" className="block hover:text-cyan-400 transition">
//                   Privacy Policy
//                 </a>

//                 <a href="#" className="block hover:text-cyan-400 transition">
//                   Terms
//                 </a>

//               </div>

//             </div>

//           </div>

//           {/* Bottom */}
//           <div className="
//           border-t
//           border-white/10
//           py-8
//           flex
//           flex-col
//           md:flex-row
//           items-center
//           justify-between
//           gap-4
//         ">

//             <p className="text-slate-500 text-sm">
//               © 2026 RefactorX Engine. All rights reserved.
//             </p>

//             <p className="text-slate-500 text-sm">
//               Built with AI for modern developers.
//             </p>

//           </div>

//         </div>

//     </footer>
//   );
// }