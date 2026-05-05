import { motion } from "framer-motion";

const supplyCards = [
  {
    title: "Gujarat Textile Hubs",
    description:
      "Surat and Ahmedabad are India's fabric capitals. We connect you directly to mills and wholesalers.",
  },
  {
    title: "Mundra Port Gateway",
    description:
      "India's largest private port handles our exports — faster loading, lower dwell time, better rates.",
  },
  {
    title: "Pan-India Sourcing",
    description:
      "From Tamil Nadu leather to Jaipur gems — our 500+ supplier network spans every Indian state.",
  },
  {
    title: "QC Before Shipment",
    description:
      "Every order is inspected at our India consolidation facility before it leaves the country.",
  },
  {
    title: "Transparent Customs",
    description:
      "We pre-classify all goods against Australian tariff schedules — no delays, no surprises.",
  },
  {
    title: "Consolidated Invoicing",
    description:
      "Multiple suppliers, one shipment, one invoice. Accounting made simple for importers.",
  },
];

export default function IndiaSupplyChain() {
  return (
    <section id="india-supply-chain" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-col header */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Our India Advantage
            </p>
            <h2 className="section-heading">
              Rooted in India,<br />Delivering to Australia
            </h2>
          </div>
          <div>
            <p className="text-charcoal/60 text-lg leading-relaxed">
              We operate from within India — which means supplier relationships,
              local knowledge, and on-the-ground quality control that agents
              sitting in Australia simply can't offer.
            </p>
          </div>
        </div>

        {/* 6 bordered cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {supplyCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="border-2 border-navy/10 rounded-2xl p-6 hover:border-gold/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <span className="text-gold font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-bold text-charcoal text-base mb-2">{card.title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-navy rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <div className="text-white font-bold text-xl mb-1">
              Ready to tap into India's supply chain?
            </div>
            <div className="text-white/50 text-sm">
              Get a quote in 24 hours — no commitment required.
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-3 rounded-full transition-colors whitespace-nowrap"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
