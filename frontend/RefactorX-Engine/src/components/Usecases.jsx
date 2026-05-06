import {
  GraduationCap,
  Code2,
  Users,
} from "lucide-react";

export default function UseCases() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a]" />

      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            USE CASES
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Built for every <br />
            coding workflow
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            From students learning programming to engineering teams
            maintaining large-scale systems.
          </p>

        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Large Left Card */}
          <div className="
            lg:col-span-2
            bg-white/[0.04]
            border border-white/10
            rounded-3xl
            p-10
            backdrop-blur-xl
            relative
            overflow-hidden
            min-h-[420px]
            flex
            flex-col
            justify-between
          ">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

            <div className="relative">

              <div className="
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
                <Code2 className="text-cyan-400 w-8 h-8" />
              </div>

              <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                Perfect for modern developers building scalable applications
              </h3>

              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                RefactorX helps developers analyze legacy code,
                optimize performance, improve readability,
                and generate production-ready architecture instantly.
              </p>

            </div>

            {/* Bottom Stats */}
            <div className="relative flex gap-10 mt-12 flex-wrap">

              <div>
                <h4 className="text-4xl font-bold text-cyan-400">
                  40%
                </h4>
                <p className="text-slate-400 mt-2">
                  Faster Refactoring
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-cyan-400">
                  AI
                </h4>
                <p className="text-slate-400 mt-2">
                  Smart Suggestions
                </p>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-8">

            {/* Students */}
            <div className="
              bg-white/[0.04]
              border border-white/10
              rounded-3xl
              p-8
              backdrop-blur-xl
              flex-1
            ">

              <div className="
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
                <GraduationCap className="text-cyan-400 w-7 h-7" />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                Students
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Learn coding concepts faster with AI-generated explanations.
              </p>
            </div>

            {/* Teams */}
            <div className="
              bg-white/[0.04]
              border border-white/10
              rounded-3xl
              p-8
              backdrop-blur-xl
              flex-1
            ">

              <div className="
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
                <Users className="text-cyan-400 w-7 h-7" />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                Engineering Teams
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Maintain scalable systems and improve collaboration workflows.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}