export default function Topbar({
  setActivePage,
}) {
  return (
    <div className="
      h-[90px]
      border-b
      border-white/10
      flex
      items-center
      justify-between
      px-8
      bg-white/[0.02]
      backdrop-blur-xl
    ">

      {/* Search */}
      <div className="
        w-[420px]
        bg-white/[0.04]
        border border-white/10
        rounded-2xl
        px-5
        py-3
      ">

        <input
          type="text"
          placeholder="Search analyses..."
          className="
            bg-transparent
            outline-none
            text-white
            w-full
            placeholder:text-slate-500
          "
        />

      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Usage */}
        <div className="
          px-5
          py-3
          rounded-2xl
          bg-cyan-500/10
          border border-cyan-400/20
          text-cyan-400
          font-medium
        ">
          42 AI Credits
        </div>

        {/* Avatar */}
        <button
          onClick={() => setActivePage("profile")}
          className="
    w-12
    h-12
    rounded-full
    bg-cyan-400
    text-black
    font-semibold
    flex
    items-center
    justify-center
    hover:scale-105
    transition-all
    duration-300
    shadow-[0_0_30px_rgba(34,211,238,0.35)]
  "
        >

          P

        </button>

      </div>

    </div>
  );
}