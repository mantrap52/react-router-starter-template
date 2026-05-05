import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import WhyUs from "../components/WhyUs";
import Industries from "../components/Industries";
import IndiaSupplyChain from "../components/IndiaSupplyChain";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dakshin Global — India to Australia Sea Cargo & Sourcing" },
    {
      name: "description",
      content:
        "End-to-end sea cargo and product sourcing from India to Australia. We source, procure, ship, clear customs, and deliver to your door — for individuals and businesses alike.",
    },
    { name: "theme-color", content: "#2e5476" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Industries />
      <IndiaSupplyChain />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
