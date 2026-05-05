import { motion } from "framer-motion";
import {
  FileText,
  MapPin,
  DollarSign,
  Users,
  Clock,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: FileText,
    title: "One Invoice",
    description:
      "Sourcing, freight, customs, and last-mile delivery — all consolidated into a single, transparent invoice. No surprise charges.",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description:
      "Know exactly where your shipment is at every stage — from our India warehouse to your Australian doorstep.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Upfront quotes with no hidden fees. Our pricing covers everything so you can plan your budget with confidence.",
  },
  {
    icon: Users,
    title: "500+ Vetted Suppliers",
    description:
      "We've spent years building a network of trusted Indian manufacturers across categories — quality verified, compliance ready.",
  },
  {
    icon: Clock,
    title: "10+ Years Experience",
    description:
      "Over a decade navigating India-Australia trade regulations, port logistics, and customs requirements.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Responsibility",
    description:
      "We take ownership from source to delivery. If something goes wrong, we fix it — you have one point of contact.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="section-heading">The Dakshin Difference</h2>
          <p className="mt-4 text-charcoal/60 text-lg max-w-2xl mx-auto">
            We don't just ship — we simplify the entire India-to-Australia
            trade journey so you can focus on what matters.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-hover group bg-white border border-gray-100 rounded-2xl p-7 hover:border-gold/30"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
                  <Icon className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-charcoal text-lg mb-2">{r.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {r.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
