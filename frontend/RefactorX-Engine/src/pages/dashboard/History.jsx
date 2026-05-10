export default function History() {

  const historyItems = [
    {
      title: "Authentication System Refactor",
      language: "JavaScript",
      status: "Optimized",
      score: "92%",
      date: "2 hours ago",
    },
    {
      title: "Node API Performance Cleanup",
      language: "Node.js",
      status: "Completed",
      score: "88%",
      date: "Yesterday",
    },
    {
      title: "React Dashboard Analysis",
      language: "React",
      status: "In Review",
      score: "76%",
      date: "2 days ago",
    },
    {
      title: "MongoDB Query Optimization",
      language: "Backend",
      status: "Optimized",
      score: "95%",
      date: "3 days ago",
    },
  ];

  return (

    <div className="space-y-8">

      {/* Header */}
      <div className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-6
      ">

        <div>

          <h1 className="
            text-4xl
            font-bold
            text-white
            mb-3
          ">
            Analysis History
          </h1>

          <p className="text-slate-400 text-base">
            Explore all previous AI analyses, optimizations
            and intelligent code insights.
          </p>

        </div>

        {/* Search */}
        <div className="
          w-full
          lg:w-[350px]
          bg-white/[0.04]
          border border-white/10
          rounded-2xl
          px-5
          py-4
        ">

          <input
            type="text"
            placeholder="Search history..."
            className="
              bg-transparent
              outline-none
              text-white
              w-full
              placeholder:text-slate-500
            "
          />

        </div>

      </div>

      {/* Stats */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
      ">

        {/* Total */}
        <div className="
          rounded-3xl
          border border-white/10
          bg-white/5
          p-6
          backdrop-blur-xl
        ">

          <p className="text-slate-400 mb-3">
            Total Analyses
          </p>

          <h2 className="
            text-5xl
            font-bold
            text-white
          ">
            42
          </h2>

        </div>

        {/* Optimized */}
        <div className="
          rounded-3xl
          border border-cyan-400/10
          bg-cyan-500/5
          p-6
          backdrop-blur-xl
        ">

          <p className="text-slate-400 mb-3">
            Optimized Projects
          </p>

          <h2 className="
            text-5xl
            font-bold
            text-cyan-400
          ">
            31
          </h2>

        </div>

        {/* Success */}
        <div className="
          rounded-3xl
          border border-green-400/10
          bg-green-500/5
          p-6
          backdrop-blur-xl
        ">

          <p className="text-slate-400 mb-3">
            Success Rate
          </p>

          <h2 className="
            text-5xl
            font-bold
            text-green-400
          ">
            94%
          </h2>

        </div>

      </div>

      {/* Table Container */}
      <div className="
        rounded-[32px]
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        overflow-hidden
      ">

        {/* Top */}
        <div className="
          px-8
          py-6
          border-b border-white/10
          flex
          items-center
          justify-between
        ">

          <div>

            <h2 className="
              text-2xl
              font-semibold
              text-white
              mb-2
            ">
              Recent Analyses
            </h2>

            <p className="text-slate-500">
              Your latest AI-powered code reviews.
            </p>

          </div>

          <button className="
            px-6
            py-3
            rounded-2xl
            bg-cyan-500/10
            border border-cyan-400/20
            text-cyan-400
            hover:bg-cyan-500/20
            transition-all
          ">
            Export History
          </button>

        </div>

        {/* Items */}
        <div className="divide-y divide-white/5">

          {historyItems.map((item, index) => (

            <div
              key={index}
              className="
                px-8
                py-6
                flex
                flex-col
                xl:flex-row
                xl:items-center
                xl:justify-between
                gap-6
                hover:bg-white/[0.03]
                transition-all
              "
            >

              {/* Left */}
              <div className="flex items-center gap-5">

                {/* Icon */}
                <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-cyan-500/10
                  border border-cyan-400/20
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  text-2xl
                ">
                  ⚡
                </div>

                {/* Content */}
                <div>

                  <h3 className="
                    text-xl
                    font-semibold
                    text-white
                    mb-2
                  ">
                    {item.title}
                  </h3>

                  <p className="text-slate-500">
                    {item.language} • {item.date}
                  </p>

                </div>

              </div>

              {/* Right */}
              <div className="
                flex
                flex-wrap
                items-center
                gap-4
              ">

                {/* Score */}
                <div className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  text-white
                  font-medium
                ">
                  Score: {item.score}
                </div>

                {/* Status */}
                <div className={`
                  px-5
                  py-3
                  rounded-2xl
                  font-medium

                  ${
                    item.status === "Optimized"
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-400/20"
                      : item.status === "Completed"
                      ? "bg-green-500/10 text-green-400 border border-green-400/20"
                      : "bg-yellow-500/10 text-yellow-400 border border-yellow-400/20"
                  }
                `}>

                  {item.status}

                </div>

                {/* Open */}
                <button className="
                  px-6
                  py-3
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  text-slate-300
                  hover:bg-white/10
                  transition-all
                ">
                  Open
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}