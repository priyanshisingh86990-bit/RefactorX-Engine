import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Features from "./components/Features";
import Demo from "./components/Demo";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import UseCases from "./components/UseCases";
import Testimonials from "./components/Testimonials";
import DeepDive from "./components/DeepDive";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0f172a]">
      <Navbar />
      <Hero />
      <Trust />
      <Features />
      <Demo />
      <HowItWorks />
      <Benefits />
      <UseCases />
      <Testimonials />
      <DeepDive />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

// function App() {
//   const [code, setCode] = useState("");
//   const [result, setResult] = useState(null);

//   const analyzeCode = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/analyze", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           code,
//           language: "javascript",
//         }),
//       });

//       const data = await res.json();
//       setResult(data.analysis);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>RefactorX Engine 🔥</h1>

//       <textarea
//         rows="10"
//         cols="60"
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         placeholder="Paste your code here..."
//       />

//       <br />

//       <button onClick={analyzeCode}>Analyze</button>

//       {result && (
//         <div>
//           <h3>Explanation:</h3>
//           <p>{result.explanation}</p>

//           <h3>Optimized Code:</h3>
//           <pre>{result.optimizedCode}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;