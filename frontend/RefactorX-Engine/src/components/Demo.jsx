export default function Demo() {
  return (
    <section className="py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Interactive Demo
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#1e293b] p-4 rounded-lg">Original Code</div>
        <div className="bg-[#1e293b] p-4 rounded-lg">Refactored Code</div>
      </div>
    </section>
  );
}