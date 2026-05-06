import {
  Code2,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    icon: Code2,
    title: "Paste Your Code",
    description:
      "Upload or paste your code directly into the RefactorX Engine editor for instant analysis.",
  },
  {
    icon: BrainCircuit,
    title: "AI Analyzes Instantly",
    description:
      "Our AI scans your codebase, detects bugs, performance issues, and optimization opportunities.",
  },
  {
    icon: Sparkles,
    title: "Get Smart Refactoring",
    description:
      "Receive optimized, cleaner, production-ready code with clear explanations and insights.",
  },
];

export default function HowItWorks() {
  return (
    <section id="HowItWorks" className="relative py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a]" />

      <div className="absolute top-20 left-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-24">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            SIMPLE WORKFLOW
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            How RefactorX <br />
            Works Seamlessly
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            RefactorX Engine simplifies code optimization into
            three intelligent AI-powered steps.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-20 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/20 via-cyan-400/40 to-blue-500/20"></div>

          <div className="grid lg:grid-cols-3 gap-10 relative">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="
                    relative
                    group
                    bg-white/[0.04]
                    border border-white/10
                    backdrop-blur-xl
                    rounded-3xl
                    p-10
                    hover:border-cyan-400/40
                    hover:bg-white/[0.07]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                  "
                >

                  {/* Step Number */}
                  <div className="
                    absolute
                    -top-5
                    left-8
                    w-10
                    h-10
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    text-black
                    font-bold
                    flex
                    items-center
                    justify-center
                    shadow-lg
                  ">
                    {index + 1}
                  </div>

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl"></div>

                  {/* Icon */}
                  <div className="
                    relative
                    w-16
                    h-16
                    rounded-2xl
                    bg-cyan-500/10
                    border border-cyan-400/20
                    flex
                    items-center
                    justify-center
                    mb-8
                  ">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>

                  {/* Content */}
                  <div className="relative">

                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {step.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed text-lg">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}