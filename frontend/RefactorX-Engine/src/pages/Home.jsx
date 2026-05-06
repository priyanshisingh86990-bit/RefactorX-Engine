import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trust from "../components/Trust";
import Features from "../components/Features";
import Demo from "../components/Demo";
import HowItWorks from "../components/HowItWorks";
import UseCases from "../components/UseCases";
import DeepDive from "../components/DeepDive";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0f172a]">
      <Navbar />
      <Hero />
      <Trust />
      <Features />
      <Demo />
      <HowItWorks />
      <UseCases />
      <DeepDive />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}