import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f172a] flex items-center justify-center px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#111827] to-black"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      {/* Login Card */}
      <div className="
        relative
        w-full
        max-w-md
        bg-white/[0.04]
        border border-white/10
        backdrop-blur-xl
        rounded-[32px]
        p-10
        shadow-[0_0_80px_rgba(34,211,238,0.08)]
      ">

        {/* Logo */}
        <div className="flex items-center gap-4 mb-10">

          <div className="
            w-14
            h-14
            rounded-2xl
            bg-cyan-500/10
            border border-cyan-400/20
            flex
            items-center
            justify-center
            text-cyan-400
            text-2xl
            font-bold
          ">
            R
          </div>

          <div>

            <h1 className="text-2xl font-bold text-white">
              RefactorX Engine
            </h1>

            <p className="text-slate-400 text-sm">
              AI-Powered Refactoring
            </p>

          </div>

        </div>

        {/* Heading */}
        <div className="mb-8">

          <h2 className="text-4xl font-bold text-white mb-3">
            Welcome Back
          </h2>

          <p className="text-slate-400">
            Login to continue your AI development workflow.
          </p>

        </div>

        {/* Form */}
        <form className="space-y-6">

          {/* Email */}
          <div>

            <label className="text-slate-300 text-sm mb-3 block">
              Email Address
            </label>

            <div className="
              flex items-center gap-3
              bg-white/[0.03]
              border border-white/10
              rounded-2xl
              px-5 py-4
              focus-within:border-cyan-400/40
              transition
            ">

              <Mail className="text-slate-500" size={20} />

              <input
                type="email"
                placeholder="you@example.com"
                className="
                  bg-transparent
                  outline-none
                  w-full
                  text-white
                  placeholder:text-slate-500
                "
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <div className="flex items-center justify-between mb-3">

              <label className="text-slate-300 text-sm">
                Password
              </label>

              <button
                type="button"
                className="text-cyan-400 text-sm hover:underline"
              >
                Forgot Password?
              </button>

            </div>

            <div className="
              flex items-center gap-3
              bg-white/[0.03]
              border border-white/10
              rounded-2xl
              px-5 py-4
              focus-within:border-cyan-400/40
              transition
            ">

              <Lock className="text-slate-500" size={20} />

              <input
                type="password"
                placeholder="••••••••"
                className="
                  bg-transparent
                  outline-none
                  w-full
                  text-white
                  placeholder:text-slate-500
                "
              />

            </div>

          </div>

          {/* Login Button */}
          <button
            className="
              w-full
              py-4
              rounded-2xl
              bg-cyan-400
              text-black
              font-semibold
              hover:scale-[1.02]
              transition-all
              duration-300
              shadow-[0_0_40px_rgba(34,211,238,0.25)]
            "
          >
            Login
          </button>

        </form>

        {/* Bottom */}
        <p className="text-slate-400 text-center mt-8">

          Don’t have an account?{" "}

          <Link
            to="/signup"
            className="text-cyan-400 hover:underline"
          >
            Create Account
          </Link>

        </p>

      </div>

    </div>
  );
}