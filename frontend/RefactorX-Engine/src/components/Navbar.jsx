import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <h1 className="text-xl font-bold text-blue-500">RefactorX</h1>
      <div className="hidden md:flex items-center gap-10 text-slate-300">

        <a
          href="#Features"
          className="hover:text-cyan-400 transition duration-300"
        >
          Features
        </a>

        <a
          href="#HowItWorks"
          className="hover:text-cyan-400 transition duration-300"
        >
          Workflow
        </a>

        <a
          href="#Demo"
          className="hover:text-cyan-400 transition duration-300"
        >
          Live Demo
        </a>

        <a
          href="#Pricing"
          className="hover:text-cyan-400 transition duration-300"
        >
          Pricing
        </a>

      </div>
      <Link
        to="/signup"
        className="
    bg-cyan-400
    text-black
    px-5
    py-2.5
    rounded-xl
    font-semibold
    hover:scale-105
    hover:bg-cyan-300
    transition-all
    duration-300
    shadow-[0_0_30px_rgba(34,211,238,0.25)]
  "
      >
        Start Free
      </Link>
    </nav>
  );
}