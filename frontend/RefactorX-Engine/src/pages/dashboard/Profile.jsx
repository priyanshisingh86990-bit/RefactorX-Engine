export default function Profile() {

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
            Profile Overview
          </h1>

          <p className="text-slate-400 text-base">
            Manage your RefactorX workspace profile and activity.
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
          Edit Profile
        </button>

      </div>

      {/* Top Section */}
      <div className="
        grid
        xl:grid-cols-[380px_1fr]
        gap-8
      ">

        {/* LEFT PROFILE CARD */}
        <div className="
          rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-8
        ">

          {/* Avatar */}
          <div className="
            flex
            flex-col
            items-center
            text-center
          ">

            <div className="
              w-32
              h-32
              rounded-full
              bg-cyan-400
              text-black
              flex
              items-center
              justify-center
              text-5xl
              font-bold
              mb-6
              shadow-[0_0_45px_rgba(34,211,238,0.35)]
            ">
              P
            </div>

            <h2 className="
              text-3xl
              font-bold
              text-white
              mb-2
            ">
              Priyanshi Singh
            </h2>

            <p className="text-cyan-400 mb-6">
              RefactorX Workspace Member
            </p>

            <div className="
              w-full
              rounded-2xl
              bg-[#0f172a]
              border border-white/10
              p-5
              space-y-4
            ">

              <div className="
                flex
                items-center
                justify-between
              ">

                <span className="text-slate-500">
                  Joined
                </span>

                <span className="text-white">
                  2026
                </span>

              </div>

              <div className="
                flex
                items-center
                justify-between
              ">

                <span className="text-slate-500">
                  Workspace
                </span>

                <span className="text-white">
                  Pro
                </span>

              </div>

              <div className="
                flex
                items-center
                justify-between
              ">

                <span className="text-slate-500">
                  AI Credits
                </span>

                <span className="text-cyan-400">
                  42
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* Stats */}
          <div className="
            grid
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

            {/* Card 2 */}
            <div className="
              rounded-3xl
              border border-cyan-400/10
              bg-cyan-500/5
              p-6
            ">

              <p className="text-slate-400 mb-3">
                Saved Projects
              </p>

              <h2 className="
                text-5xl
                font-bold
                text-cyan-400
              ">
                8
              </h2>

            </div>

            {/* Card 3 */}
            <div className="
              rounded-3xl
              border border-green-400/10
              bg-green-500/5
              p-6
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

          {/* Activity */}
          <div className="
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
          ">

            <h2 className="
              text-2xl
              font-semibold
              text-white
              mb-8
            ">
              Recent Activity
            </h2>

            <div className="space-y-5">

              {/* Item */}
              <div className="
                flex
                items-center
                justify-between
                p-5
                rounded-2xl
                bg-[#0f172a]
                border border-white/5
              ">

                <div className="flex items-center gap-4">

                  <div className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-cyan-500/10
                    border border-cyan-400/20
                    flex items-center
                    justify-center
                    text-cyan-400
                    text-xl
                  ">
                    ⚡
                  </div>

                  <div>

                    <h3 className="
                      text-white
                      font-semibold
                      mb-1
                    ">
                      React Authentication Refactor
                    </h3>

                    <p className="text-slate-500 text-sm">
                      Optimized 2 hours ago
                    </p>

                  </div>

                </div>

                <div className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-green-500/10
                  border border-green-400/20
                  text-green-400
                  text-sm
                ">
                  Completed
                </div>

              </div>

              {/* Item */}
              <div className="
                flex
                items-center
                justify-between
                p-5
                rounded-2xl
                bg-[#0f172a]
                border border-white/5
              ">

                <div className="flex items-center gap-4">

                  <div className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-purple-500/10
                    border border-purple-400/20
                    flex items-center
                    justify-center
                    text-purple-400
                    text-xl
                  ">
                    🚀
                  </div>

                  <div>

                    <h3 className="
                      text-white
                      font-semibold
                      mb-1
                    ">
                      Dashboard Performance Analysis
                    </h3>

                    <p className="text-slate-500 text-sm">
                      Yesterday
                    </p>

                  </div>

                </div>

                <div className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-cyan-500/10
                  border border-cyan-400/20
                  text-cyan-400
                  text-sm
                ">
                  Optimized
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}