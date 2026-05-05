import { useState } from "react";
import { Package, Building2, Ship, Search, ClipboardCheck, Truck, ArrowRight } from "lucide-react";

const personalServices = [
  {
    title: "Personal Cargo Shipping",
    description: "Send personal belongings, gifts, or purchases from India to your door in Australia. LCL and FCL options available.",
    icon: Package,
  },
  {
    title: "Product Sourcing for Individuals",
    description: "Can't find it in Australia? We source products from India's vast market and ship them directly to you.",
    icon: Search,
  },
  {
    title: "Customs Clearance",
    description: "We handle all Australian customs documentation and clearance so you never have to worry about paperwork.",
    icon: ClipboardCheck,
  },
  {
    title: "Last-Mile Delivery",
    description: "Door-to-door delivery anywhere in Australia. Track your shipment in real time from port to doorstep.",
    icon: Truck,
  },
];

const businessServices = [
  {
    title: "B2B Supply Chain Management",
    description: "End-to-end supply chain from India's best manufacturers to your Australian warehouse or retail floor.",
    icon: Building2,
  },
  {
    title: "Bulk & FCL Shipping",
    description: "Full container loads for high-volume importers. Competitive freight rates and priority scheduling.",
    icon: Ship,
  },
  {
    title: "Supplier Network Access",
    description: "Tap into our vetted network of 500+ Indian suppliers across categories — quality checked and compliance ready.",
    icon: Search,
  },
  {
    title: "Procurement & QC",
    description: "We procure, inspect, and consolidate your orders before they leave India — one invoice, zero complexity.",
    icon: ClipboardCheck,
  },
];

type Service = { title: string; description: string; icon: React.ElementType };

function ScenarioCard({
  badge,
  title,
  subtitle,
  services,
  imageSrc,
  imageAlt,
}: {
  badge: string;
  title: string;
  subtitle: string;
  services: Service[];
  imageSrc: string;
  imageAlt: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative h-[540px] rounded-3xl overflow-hidden cursor-pointer bg-navy-dark"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive((v) => !v)}
    >
      {/* Real photo background */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Default state */}
      <div
        className={`absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 via-black/15 to-transparent transition-opacity duration-300 ${
          active ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="inline-flex self-start items-center gap-1.5 bg-gold/25 border border-gold/40 text-gold text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          {badge}
        </div>
        <h3 className="text-white font-bold text-2xl leading-tight mb-2">{title}</h3>
        <p className="text-white/60 text-sm">{subtitle}</p>
        <p className="mt-5 text-white/35 text-xs uppercase tracking-widest font-medium">
          Hover or tap to explore →
        </p>
      </div>

      {/* Revealed services overlay */}
      <div
        className={`absolute inset-0 bg-navy-dark/97 p-8 flex flex-col transition-all duration-300 ease-out ${
          active
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <div className="inline-flex self-start items-center gap-1.5 bg-gold/20 border border-gold/35 text-gold text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          {badge}
        </div>
        <h3 className="text-white font-bold text-xl mb-6">{title}</h3>
        <div className="space-y-4 flex-1">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{s.title}</p>
                  <p className="text-white/45 text-xs mt-0.5 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <a
          href="#contact"
          onClick={(e) => e.stopPropagation()}
          className="mt-6 inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Get a Quote
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            How can we help?
          </p>
          <h2 className="section-heading">Solving by Scenario</h2>
          <p className="mt-4 text-charcoal/60 text-lg max-w-2xl mx-auto">
            Every shipment is unique. Tell us who you are, and we'll show you
            exactly how we make the India-to-Australia crossing seamless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ScenarioCard
            badge="Personal"
            title="For Individuals & Families"
            subtitle="Shipping personal goods, gifts, or sourcing products from India directly to your door."
            services={personalServices}
            imageSrc="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80"
            imageAlt="Person receiving a delivered package at home"
          />
          <ScenarioCard
            badge="Business"
            title="For Importers & Retailers"
            subtitle="End-to-end B2B supply chain, bulk shipping, and supplier sourcing at scale."
            services={businessServices}
            imageSrc="https://plus.unsplash.com/premium_photo-1682129581247-5f2a7c8379d7?auto=format&fit=crop&w=800&q=80"
            imageAlt="Warehouse workers managing logistics and supply chain"
          />
        </div>
      </div>
    </section>
  );
}
