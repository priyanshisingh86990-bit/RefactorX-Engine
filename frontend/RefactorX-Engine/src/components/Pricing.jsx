import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for students and beginners exploring AI code analysis.",
    features: [
      "Basic code analysis",
      "Bug detection",
      "Code explanations",
      "Limited AI requests",
    ],
    highlighted: false,
    button: "Get Started",
  },
  {
    name: "Pro",
    price: "$19",
    description: "Built for serious developers and engineering teams.",
    features: [
      "Unlimited AI analysis",
      "Advanced refactoring",
      "Performance optimization",
      "Priority processing",
      "Team collaboration",
      "Export reports",
    ],
    highlighted: true,
    button: "Start Pro Plan",
  },
];

export default function Pricing() {
  return (
    <section id= "Pricing" className="relative py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            PRICING
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Simple pricing for <br />
            modern developers
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Start free and scale your AI-powered development workflow
            with premium optimization tools.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative
                rounded-[32px]
                p-10
                border
                backdrop-blur-xl
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-2

                ${
                  plan.highlighted
                    ? "bg-cyan-500/10 border-cyan-400/30 shadow-[0_0_80px_rgba(34,211,238,0.15)]"
                    : "bg-white/[0.04] border-white/10"
                }
              `}
            >

              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="
                  absolute
                  top-6
                  right-6
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-400
                  text-black
                  text-sm
                  font-semibold
                ">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-3xl font-bold text-white mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-end gap-2 mb-6">

                <span className="text-6xl font-bold text-white">
                  {plan.price}
                </span>

                <span className="text-slate-400 mb-2">
                  /month
                </span>

              </div>

              {/* Description */}
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                {plan.description}
              </p>

              {/* Features */}
              <div className="space-y-5 mb-10">

                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4"
                  >

                    <div className="
                      w-6
                      h-6
                      rounded-full
                      bg-cyan-500/10
                      border border-cyan-400/20
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                    ">
                      <Check className="w-4 h-4 text-cyan-400" />
                    </div>

                    <span className="text-slate-300">
                      {feature}
                    </span>

                  </div>
                ))}

              </div>

              {/* CTA */}
              <button
                className={`
                  w-full
                  py-4
                  rounded-2xl
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    plan.highlighted
                      ? "bg-cyan-400 text-black hover:scale-[1.02]"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }
                `}
              >
                {plan.button}
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}