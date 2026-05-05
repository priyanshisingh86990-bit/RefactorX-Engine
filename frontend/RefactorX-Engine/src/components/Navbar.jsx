export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <h1 className="text-xl font-bold text-blue-500">RefactorX</h1>
      <div className="space-x-6 hidden md:flex">
        <a>Features</a>
        <a>How it works</a>
        <a>Pricing</a>
        <a>Docs</a>
      </div>
      <button className="bg-blue-500 px-4 py-2 rounded-lg">Start</button>
    </nav>
  );
}