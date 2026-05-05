export default function Pricing() {
  return (
    <section className="py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
      <div className="bg-[#1e293b] p-6 rounded-xl">
        <h3>Free</h3>
        <p>$0/month</p>
      </div>
      <div className="bg-[#1e293b] p-6 rounded-xl border border-blue-500">
        <h3>Pro</h3>
        <p>$19/month</p>
      </div>
    </section>
  );
}