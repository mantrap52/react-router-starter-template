import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Sydney, NSW",
    type: "Personal",
    stars: 5,
    quote:
      "I was nervous about shipping my grandmother's sarees and jewellery from India, but Dakshin made it completely stress-free. Everything arrived perfectly packed and on time. The tracking was excellent.",
    initials: "PS",
  },
  {
    name: "Raj Mehta",
    location: "Melbourne, VIC",
    type: "Business",
    stars: 5,
    quote:
      "We import textile goods from Surat for our retail stores. Before Dakshin we had three different agents and constant confusion. Now it's one call, one invoice, and things actually arrive when they say they will.",
    initials: "RM",
  },
  {
    name: "Anita & Vikram Patel",
    location: "Brisbane, QLD",
    type: "Personal",
    stars: 5,
    quote:
      "Dakshin sourced and shipped a full container of furniture for our new home from India. The price was a fraction of buying here and the quality was superb. Highly recommend for anyone setting up a home.",
    initials: "AP",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Customer Stories
          </p>
          <h2 className="section-heading">What Our Clients Say</h2>
          <p className="mt-4 text-charcoal/60 text-lg max-w-2xl mx-auto">
            From families sending personal effects to businesses managing
            full supply chains — here's what they experience with Dakshin.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 flex flex-col"
            >
              <Stars count={t.stars} />
              <p className="text-charcoal/70 text-sm leading-relaxed mt-4 flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-charcoal text-sm">{t.name}</div>
                  <div className="text-charcoal/40 text-xs">{t.location} · {t.type}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-charcoal/40 text-xs mt-10">
          Real customers. Unsponsored reviews.
        </p>
      </div>
    </section>
  );
}
