import { motion } from "framer-motion";
import {
  ShoppingCart,
  Shirt,
  Wrench,
  Leaf,
  Monitor,
  Home,
  Pill,
  Package,
} from "lucide-react";

const industries = [
  {
    icon: ShoppingCart,
    name: "Grocery & Food",
    description: "Spices, lentils, pickles, snacks, and packaged food for retail and wholesale.",
  },
  {
    icon: Shirt,
    name: "Textiles & Apparel",
    description: "Fabrics, garments, and fashion goods from India's top textile hubs.",
  },
  {
    icon: Wrench,
    name: "Hardware & Tools",
    description: "Machinery parts, hand tools, and industrial hardware at competitive prices.",
  },
  {
    icon: Leaf,
    name: "Ayurveda & Wellness",
    description: "Herbal products, supplements, and wellness goods with Australian TGA compliance guidance.",
  },
  {
    icon: Monitor,
    name: "Electronics & Accessories",
    description: "Consumer electronics, accessories, and components sourced and shipped safely.",
  },
  {
    icon: Home,
    name: "Homewares & Décor",
    description: "Furniture, handicrafts, ceramics, and home décor from artisan producers.",
  },
  {
    icon: Pill,
    name: "Pharmaceuticals",
    description: "Generic medicines and health products with full regulatory documentation.",
  },
  {
    icon: Package,
    name: "General Merchandise",
    description: "Everything else — if it's made in India, we can source and ship it.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Industries We Serve
          </p>
          <h2 className="section-heading">Whatever Your Category</h2>
          <p className="mt-4 text-charcoal/60 text-lg max-w-2xl mx-auto">
            From grocery to heavy machinery, our India supplier network spans
            virtually every product category.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-hover bg-white rounded-2xl p-6 border border-gray-100 hover:border-gold/30 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                  <Icon className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-charcoal text-base mb-2">{ind.name}</h3>
                <p className="text-charcoal/55 text-sm leading-relaxed">{ind.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-charcoal/50 text-sm mb-4">
            Don't see your category? We likely ship it.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}
