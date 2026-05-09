export default function Overview() {

  return (

    <div className="space-y-8">

      {/* Heading */}
      <div>

        <h1 className="
          text-4xl
          font-bold
          text-white
          mb-3
        ">
          Welcome Back 👋
        </h1>

        <p className="text-slate-400 text-base">
          Monitor your AI activity, projects and code insights.
        </p>

      </div>

      {/* Stats */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
      ">

        {/* Card 1 */}
        <div className="
          rounded-3xl
          border border-white/10
          bg-white/5
          p-6
        ">

          <p className="text-slate-400 mb-2">
            Total Analyses
          </p>

          <h2 className="text-4xl font-bold text-white">
            42
          </h2>

        </div>

        {/* Card 2 */}
        <div className="
          rounded-3xl
          border border-white/10
          bg-white/5
          p-6
        ">

          <p className="text-slate-400 mb-2">
            Saved Projects
          </p>

          <h2 className="text-4xl font-bold text-cyan-400">
            8
          </h2>

        </div>

        {/* Card 3 */}
        <div className="
          rounded-3xl
          border border-white/10
          bg-white/5
          p-6
        ">

          <p className="text-slate-400 mb-2">
            AI Credits
          </p>

          <h2 className="text-4xl font-bold text-green-400">
            42
          </h2>

        </div>

      </div>

      {/* Activity */}
      <div className="
        rounded-3xl
        border border-white/10
        bg-white/5
        p-8
      ">

        <h2 className="
          text-2xl
          font-semibold
          text-white
          mb-6
        ">
          Recent Activity
        </h2>

        <div className="space-y-4">

          <div className="
            flex
            items-center
            justify-between
            p-4
            rounded-2xl
            bg-[#0f172a]
          ">

            <div>

              <p className="text-white font-medium">
                React Authentication Fix
              </p>

              <p className="text-slate-500 text-sm">
                JavaScript • 2 hours ago
              </p>

            </div>

            <span className="
              px-4
              py-2
              rounded-xl
              bg-cyan-500/10
              text-cyan-400
              text-sm
            ">
              Optimized
            </span>

          </div>

          <div className="
            flex
            items-center
            justify-between
            p-4
            rounded-2xl
            bg-[#0f172a]
          ">

            <div>

              <p className="text-white font-medium">
                Node API Refactor
              </p>

              <p className="text-slate-500 text-sm">
                Node.js • Yesterday
              </p>

            </div>

            <span className="
              px-4
              py-2
              rounded-xl
              bg-green-500/10
              text-green-400
              text-sm
            ">
              Completed
            </span>

          </div>

        </div>

      </div>

    </div>

  );
}