export default function Settings() {

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
            Workspace Settings
          </h1>

          <p className="text-slate-400 text-base max-w-2xl">
            Customize your RefactorX experience, preferences
            and workspace behavior.
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
          Save Changes
        </button>

      </div>

      {/* Main Grid */}
      <div className="
        grid
        xl:grid-cols-[320px_1fr]
        gap-8
      ">

        {/* LEFT SIDEBAR */}
        <div className="
          rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-6
          h-fit
        ">

          <div className="space-y-3">

            <button className="
              w-full
              flex
              items-center
              justify-between
              px-5
              py-4
              rounded-2xl
              bg-cyan-500/10
              border border-cyan-400/20
              text-cyan-400
            ">

              <span>General</span>

              <span>⚡</span>

            </button>

            <button className="
              w-full
              flex
              items-center
              justify-between
              px-5
              py-4
              rounded-2xl
              bg-white/5
              border border-white/10
              text-slate-300
              hover:bg-white/10
              transition-all
            ">

              <span>Notifications</span>

              <span>🔔</span>

            </button>

            <button className="
              w-full
              flex
              items-center
              justify-between
              px-5
              py-4
              rounded-2xl
              bg-white/5
              border border-white/10
              text-slate-300
              hover:bg-white/10
              transition-all
            ">

              <span>Security</span>

              <span>🛡️</span>

            </button>

            <button className="
              w-full
              flex
              items-center
              justify-between
              px-5
              py-4
              rounded-2xl
              bg-white/5
              border border-white/10
              text-slate-300
              hover:bg-white/10
              transition-all
            ">

              <span>Integrations</span>

              <span>🔗</span>

            </button>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-8">

          {/* GENERAL SETTINGS */}
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
              General Preferences
            </h2>

            <div className="space-y-8">

              {/* Theme */}
              <div className="
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-6
              ">

                <div>

                  <h3 className="
                    text-xl
                    font-semibold
                    text-white
                    mb-2
                  ">
                    Theme Mode
                  </h3>

                  <p className="text-slate-500">
                    Customize workspace appearance and visuals.
                  </p>

                </div>

                <div className="flex items-center gap-4">

                  <button className="
                    px-5
                    py-3
                    rounded-2xl
                    bg-cyan-500/10
                    border border-cyan-400/20
                    text-cyan-400
                  ">
                    Dark
                  </button>

                  <button className="
                    px-5
                    py-3
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    text-slate-300
                  ">
                    Light
                  </button>

                </div>

              </div>

              {/* Font Size */}
              <div className="
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-6
              ">

                <div>

                  <h3 className="
                    text-xl
                    font-semibold
                    text-white
                    mb-2
                  ">
                    Editor Font Size
                  </h3>

                  <p className="text-slate-500">
                    Adjust Monaco editor readability.
                  </p>

                </div>

                <select className="
                  bg-[#0f172a]
                  border border-white/10
                  text-slate-300
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                ">

                  <option>14px</option>
                  <option>16px</option>
                  <option>18px</option>

                </select>

              </div>

            </div>

          </div>

          {/* NOTIFICATIONS */}
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
              Notifications
            </h2>

            <div className="space-y-6">

              {/* Toggle */}
              <div className="
                flex
                items-center
                justify-between
                p-5
                rounded-2xl
                bg-[#0f172a]
                border border-white/5
              ">

                <div>

                  <h3 className="
                    text-white
                    font-semibold
                    mb-2
                  ">
                    AI Analysis Alerts
                  </h3>

                  <p className="text-slate-500 text-sm">
                    Receive updates for completed analyses.
                  </p>

                </div>

                <button className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-green-500/10
                  border border-green-400/20
                  text-green-400
                ">
                  Enabled
                </button>

              </div>

              {/* Toggle */}
              <div className="
                flex
                items-center
                justify-between
                p-5
                rounded-2xl
                bg-[#0f172a]
                border border-white/5
              ">

                <div>

                  <h3 className="
                    text-white
                    font-semibold
                    mb-2
                  ">
                    Workspace Reports
                  </h3>

                  <p className="text-slate-500 text-sm">
                    Weekly performance and optimization summaries.
                  </p>

                </div>

                <button className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-cyan-500/10
                  border border-cyan-400/20
                  text-cyan-400
                ">
                  Active
                </button>

              </div>

            </div>

          </div>

          {/* SECURITY */}
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
              Security
            </h2>

            <div className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-6
            ">

              <div>

                <h3 className="
                  text-xl
                  font-semibold
                  text-white
                  mb-2
                ">
                  Password & Access
                </h3>

                <p className="text-slate-500">
                  Manage account protection and workspace security.
                </p>

              </div>

              <button className="
                px-6
                py-3
                rounded-2xl
                bg-red-500/10
                border border-red-400/20
                text-red-400
                hover:bg-red-500/20
                transition-all
              ">
                Change Password
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}