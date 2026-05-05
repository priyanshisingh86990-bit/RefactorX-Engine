export default function FAQ() {
  return (
    <section className="py-20 max-w-4xl mx-auto">
      {["How it works?", "Is it secure?", "Free trial?"].map(q => (
        <div key={q} className="border-b py-4">
          {q}
        </div>
      ))}
    </section>
  );
}