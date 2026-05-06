import {
  ShieldCheck,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Bug Detection",
    description:
      "AI automatically identifies hidden bugs, edge cases, and performance bottlenecks in your codebase.",
    icon: ShieldCheck,
  },
  {
    title: "Code Explanation",
    description:
      "Understand complex logic instantly with AI-generated explanations and readable insights.",
    icon: Sparkles,
  },
  {
    title: "Smart Refactoring",
    description:
      "Refactor messy code into clean, scalable, and production-ready architecture with AI precision.",
    icon: Wand2,
  },
  {
    title: "Fast Processing",
    description:
      "Analyze and optimize large codebases in seconds with lightning-fast AI processing.",
    icon: Zap,
  },
];

export default function Features() {
  return (
    <section id="Features" className="relative py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a]" />

      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Powerful Features
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Everything you need to <br />
            refactor code intelligently
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
            RefactorX Engine combines AI-powered debugging,
            code optimization, and intelligent analysis into
            one seamless developer experience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  rounded-3xl
                  p-8
                  overflow-hidden
                  hover:border-cyan-400/40
                  hover:bg-white/10
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />

                {/* Icon */}
                <div className="
                  relative
                  w-14
                  h-14
                  rounded-2xl
                  bg-cyan-500/10
                  border border-cyan-400/20
                  flex
                  items-center
                  justify-center
                  mb-6
                ">
                  <Icon className="text-cyan-400 w-7 h-7" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500" />

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}