import {
  LayoutDashboard,
  Sparkles,
  History,
  FolderKanban,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Overview",
    page: "overview",
    icon: LayoutDashboard,
  },
  {
    title: "AI Analyzer",
    page: "analyzer",
    icon: Sparkles,
  },
  {
    title: "History",
    page: "history",
    icon: History,
  },
  {
    title: "Projects",
    page: "projects",
    icon: FolderKanban,
  },
  {
    title: "Settings",
    page: "settings",
    icon: Settings,
  },
];

export default function Sidebar({
  activePage,
  setActivePage,
}) {
  return (
    <div className="
      w-[280px]
      min-h-screen
      border-r
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      p-6
      flex
      flex-col
      justify-between
    ">

      <div>

        {/* Logo */}
        <div className="flex items-center gap-4 mb-14">

          <div className="
            w-14
            h-14
            rounded-2xl
            bg-cyan-500/10
            border border-cyan-400/20
            flex items-center justify-center
            text-cyan-400
            text-2xl
            font-bold
          ">
            R
          </div>

          <div>

            <h2 className="text-white text-2xl font-bold">
              RefactorX
            </h2>

            <p className="text-slate-500 text-sm">
              AI Workspace
            </p>

          </div>

        </div>

        {/* Menu */}
        <div className="space-y-3">

          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                onClick={() =>
                  setActivePage(item.page)
                }

                className={`
  w-full
  flex
  items-center
  gap-4
  px-5
  py-4
  rounded-2xl
  transition-all
  duration-300
  group

  ${activePage === item.page
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.12)]"
                    : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                  }
`}
              >

                <Icon
                  size={22}
                  className="group-hover:scale-110 transition"
                />

                <span className="font-medium">
                  {item.title}
                </span>

              </button>
            );
          })}

        </div>

      </div>

      {/* Logout */}
      <button

        onClick={() => {

          localStorage.removeItem("token");

          localStorage.removeItem("user");

          window.location.href = "/login";

        }}

        className="
    w-full
    flex
    items-center
    gap-3
    px-4
    py-3
    rounded-xl
    text-red-400
    hover:bg-red-500/10
    transition-all
  "
      >

        Logout

      </button>

    </div>
  );
}