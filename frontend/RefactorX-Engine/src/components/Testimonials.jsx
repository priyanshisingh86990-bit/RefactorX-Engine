export default function Testimonials() {
  return (
    <section className="py-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      {[1,2,3].map(i => (
        <div key={i} className="bg-[#1e293b] p-6 rounded-xl">
          "Amazing tool for developers!"
        </div>
      ))}
    </section>
  );
}