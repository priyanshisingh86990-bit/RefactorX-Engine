export default function Projects() {

  const projects = [
    {
      name: "RefactorX Frontend",
      description:
        "AI-powered dashboard interface with Monaco editor and intelligent workflows.",
      stack: ["React", "Tailwind", "Monaco"],
      status: "Active",
      progress: "82%",
    },
    {
      name: "Authentication Engine",
      description:
        "Secure JWT authentication system with protected workspace access.",
      stack: ["Node.js", "JWT", "MongoDB"],
      status: "Completed",
      progress: "100%",
    },
    {
      name: "AI Optimization Workspace",
      description:
        "Smart code analysis system focused on performance and readability improvements.",
      stack: ["OpenAI", "Express", "React"],
      status: "In Progress",
      progress: "64%",
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
            Projects Workspace
          </h1>

          <p className="text-slate-400 text-base max-w-2xl">
            Organize, manage and monitor all your AI-powered
            development workspaces in one place.
          </p>

        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">

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
            Import Project
          </button>

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
            New Workspace
          </button>

        </div>

      </div>

      {/* Stats */}
      <div className="
        grid
        md:grid-cols-3
        gap-6
      ">

        {/* Card */}
        <div className="
          rounded-3xl
          border border-white/10
          bg-white/5
          p-6
          backdrop-blur-xl
        ">

          <p className="text-slate-400 mb-3">
            Total Projects
          </p>

          <h2 className="
            text-5xl
            font-bold
            text-white
          ">
            12
          </h2>

        </div>

        {/* Card */}
        <div className="
          rounded-3xl
          border border-cyan-400/10
          bg-cyan-500/5
          p-6
          backdrop-blur-xl
        ">

          <p className="text-slate-400 mb-3">
            Active Workspaces
          </p>

          <h2 className="
            text-5xl
            font-bold
            text-cyan-400
          ">
            5
          </h2>

        </div>

        {/* Card */}
        <div className="
          rounded-3xl
          border border-green-400/10
          bg-green-500/5
          p-6
          backdrop-blur-xl
        ">

          <p className="text-slate-400 mb-3">
            Completed
          </p>

          <h2 className="
            text-5xl
            font-bold
            text-green-400
          ">
            7
          </h2>

        </div>

      </div>

      {/* Projects Grid */}
      <div className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-7
      ">

        {projects.map((project, index) => (

          <div
            key={index}
            className="
              rounded-[32px]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-7
              hover:border-cyan-400/20
              transition-all
              duration-300
              group
            "
          >

            {/* Top */}
            <div className="
              flex
              items-start
              justify-between
              mb-7
            ">

              {/* Icon */}
              <div className="
                w-16
                h-16
                rounded-3xl
                bg-cyan-500/10
                border border-cyan-400/20
                flex
                items-center
                justify-center
                text-cyan-400
                text-3xl
                group-hover:scale-105
                transition-all
              ">
                ⚡
              </div>

              {/* Status */}
              <div className={`
                px-4
                py-2
                rounded-2xl
                text-sm
                font-medium

                ${
                  project.status === "Active"
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-400/20"
                    : project.status === "Completed"
                    ? "bg-green-500/10 text-green-400 border border-green-400/20"
                    : "bg-yellow-500/10 text-yellow-400 border border-yellow-400/20"
                }
              `}>

                {project.status}

              </div>

            </div>

            {/* Content */}
            <div>

              <h2 className="
                text-2xl
                font-bold
                text-white
                mb-4
              ">
                {project.name}
              </h2>

              <p className="
                text-slate-500
                leading-relaxed
                mb-6
              ">
                {project.description}
              </p>

            </div>

            {/* Stack */}
            <div className="
              flex
              flex-wrap
              gap-3
              mb-7
            ">

              {project.stack.map((tech, i) => (

                <span
                  key={i}
                  className="
                    px-4
                    py-2
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    text-slate-300
                    text-sm
                  "
                >

                  {tech}

                </span>

              ))}

            </div>

            {/* Progress */}
            <div className="mb-7">

              <div className="
                flex
                items-center
                justify-between
                mb-3
              ">

                <span className="text-slate-400">
                  Progress
                </span>

                <span className="text-white font-medium">
                  {project.progress}
                </span>

              </div>

              <div className="
                w-full
                h-3
                rounded-full
                bg-white/5
                overflow-hidden
              ">

                <div
                  className="
                    h-full
                    rounded-full
                    bg-cyan-400
                  "
                  style={{
                    width: project.progress,
                  }}
                />

              </div>

            </div>

            {/* Buttons */}
            <div className="
              flex
              items-center
              gap-4
            ">

              <button className="
                flex-1
                px-5
                py-4
                rounded-2xl
                bg-cyan-500/10
                border border-cyan-400/20
                text-cyan-400
                hover:bg-cyan-500/20
                transition-all
              ">
                Open Workspace
              </button>

              <button className="
                px-5
                py-4
                rounded-2xl
                bg-white/5
                border border-white/10
                text-slate-300
                hover:bg-white/10
                transition-all
              ">
                View
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}