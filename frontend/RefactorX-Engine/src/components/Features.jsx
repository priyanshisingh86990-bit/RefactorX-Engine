const features = [
  "Bug Detection",
  "Code Explanation",
  "Smart Refactoring",
  "Fast Processing",
];

export default function Features() {
  return (
    <section className="py-20 max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
      {features.map((f) => (
        <div key={f} className="bg-[#1e293b] p-6 rounded-xl border border-[#334155]">
          <h3 className="font-semibold mb-2">{f}</h3>
          <p className="text-sm text-gray-400">
            Powerful AI-driven feature for developers.
          </p>
        </div>
      ))}
    </section>
  );
}