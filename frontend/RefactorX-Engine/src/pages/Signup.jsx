import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const response = await fetch(
        "http://localhost:3000/api/auth/signup",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {

        localStorage.setItem("token", data.token);

        alert("Signup Successful 🚀");

        navigate("/dashboard");

      } else {

        alert(data.message || "Signup failed");

      }

    } catch (error) {

      console.log(error);

      alert("Server Error");

    } finally {

      setLoading(false);

    }
  };
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f172a] flex items-center justify-center px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#111827] to-black"></div>

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      {/* Card */}
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
            Create Account
          </h2>

          <p className="text-slate-400">
            Start optimizing your code with AI.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSignup}
          className="space-y-6"
        >

          {/* Name */}
          <div>

            <label className="text-slate-300 text-sm mb-3 block">
              Full Name
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

              <User className="text-slate-500" size={20} />

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="John Doe"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <label className="text-slate-300 text-sm mb-3 block">
              Password
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

              <Lock className="text-slate-500" size={20} />

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          {/* Button */}
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
            {loading ? "Creating..." : "Create Account"}
          </button>

        </form>

        {/* Bottom */}
        <p className="text-slate-400 text-center mt-8">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-cyan-400 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}