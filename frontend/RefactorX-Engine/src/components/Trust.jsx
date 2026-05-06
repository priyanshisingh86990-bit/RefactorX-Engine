import {
  FaGoogle,
  FaMicrosoft,
  FaSlack,
  FaAmazon,
} from "react-icons/fa";

import { SiVercel, SiOpenai } from "react-icons/si";

export default function Trust() {
  const companies = [
  { icon: FaGoogle, name: "Google" },
  { icon: FaMicrosoft, name: "Microsoft" },
  { icon: FaSlack, name: "Slack" },
  { icon: FaAmazon, name: "Amazon" },
  { icon: SiVercel, name: "Vercel" },
  { icon: SiOpenai, name: "OpenAI" },
];

  return (
    <section className="relative py-28 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a]" />

      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Trusted Worldwide
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Trusted by modern developers <br />
            & AI engineering teams
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
            RefactorX Engine helps developers analyze, optimize,
            and refactor production-grade codebases with AI precision.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {companies.map((company, index) => {
            const Icon = company.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  rounded-3xl
                  py-7
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  hover:border-cyan-400/40
                  hover:bg-white/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <Icon className="text-3xl text-slate-300 group-hover:text-cyan-400 transition-colors duration-300" />

                <span className="text-slate-400 group-hover:text-white text-sm transition-colors duration-300">
                  {company.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20">

          <div className="text-center">
            <h3 className="text-5xl font-bold text-white">20K+</h3>
            <p className="text-slate-400 mt-3">Developers</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-white">99%</h3>
            <p className="text-slate-400 mt-3">Faster Analysis</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-white">50+</h3>
            <p className="text-slate-400 mt-3">Languages Supported</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-white">24/7</h3>
            <p className="text-slate-400 mt-3">AI Assistance</p>
          </div>

        </div>
      </div>
    </section>
  );
}


// export default function Trust() {
//   const companies = [
//     "Google",
//     "Microsoft",
//     "Slack",
//     "Amazon",
//     "Vercel",
//     "OpenAI",
//   ];

//   return (
//     <section className="relative py-24 overflow-hidden">
      
//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a]" />

//       <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

//       <div className="relative max-w-6xl mx-auto px-6">
        
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 font-medium mb-4">
//             Trusted Worldwide
//           </p>

//           <h2 className="text-3xl md:text-4xl font-bold text-white">
//             Trusted by modern developers & AI teams
//           </h2>

//           <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
//             Thousands of developers use RefactorX Engine to analyze,
//             optimize, and refactor production-grade code faster.
//           </p>
//         </div>

//         {/* Logo Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//           {companies.map((company, index) => (
//             <div
//               key={index}
//               className="
//                 group
//                 bg-white/5
//                 border border-white/10
//                 backdrop-blur-xl
//                 rounded-2xl
//                 py-5
//                 flex
//                 items-center
//                 justify-center
//                 text-slate-300
//                 font-semibold
//                 hover:border-cyan-400/40
//                 hover:bg-white/10
//                 hover:text-white
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//               "
//             >
//               {company}
//             </div>
//           ))}
//         </div>

//         {/* Bottom Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          
//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-white">20K+</h3>
//             <p className="text-slate-400 mt-2">Developers</p>
//           </div>

//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-white">99%</h3>
//             <p className="text-slate-400 mt-2">Faster Analysis</p>
//           </div>

//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-white">50+</h3>
//             <p className="text-slate-400 mt-2">Languages Supported</p>
//           </div>

//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-white">24/7</h3>
//             <p className="text-slate-400 mt-2">AI Assistance</p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }