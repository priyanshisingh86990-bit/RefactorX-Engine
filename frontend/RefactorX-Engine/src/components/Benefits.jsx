export default function Benefits() {
  return (
    <section className="py-20 max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
      {["Save Time", "Better Quality", "Learn Faster", "Boost Productivity"].map(
        (b) => (
          <div key={b} className="bg-[#1e293b] p-6 rounded-xl">
            {b}
          </div>
        )
      )}
    </section>
  );
}