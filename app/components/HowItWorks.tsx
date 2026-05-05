import { motion } from "framer-motion";
import { MessageSquare, Search, Ship, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Fill in our quick quote form — whether you have items ready to ship or need us to source products from India. No jargon, just details.",
    icon: MessageSquare,
    side: "left" as const,
  },
  {
    number: "02",
    title: "We Source & Consolidate",
    description:
      "Our India team sources, quality-checks, and consolidates your goods at our Mundra, Gujarat facility — ready for sea freight.",
    icon: Search,
    side: "right" as const,
  },
  {
    number: "03",
    title: "We Ship & Clear Customs",
    description:
      "Your shipment departs Mundra Port. We manage all Australian customs documentation, quarantine, and port clearance.",
    icon: Ship,
    side: "left" as const,
  },
  {
    number: "04",
    title: "Delivered to Your Door",
    description:
      "Final-mile delivery anywhere in Australia. Track in real time and receive a single, transparent invoice — no surprise charges.",
    icon: CheckCircle,
    side: "right" as const,
  },
];

const journeyStats = [
  { label: "Distance", value: "~10,000 km" },
  { label: "Transit Time", value: "25–35 days" },
  { label: "Options", value: "LCL & FCL" },
  { label: "Route", value: "Mundra → Sydney" },
];

const stepImages = [
  {
    src: "https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?auto=format&fit=crop&w=800&q=80",
    alt: "Person typing on a laptop while filling out an online enquiry form",
  },
  {
    src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
    alt: "Workers organising and consolidating goods inside a warehouse",
  },
  {
    src: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800&q=80",
    alt: "Large cargo ship carrying containers across the ocean",
  },
  {
    src: "https://images.unsplash.com/photo-1612630741022-b29ec17d013d?auto=format&fit=crop&w=800&q=80",
    alt: "Delivery driver next to a van making a last-mile delivery",
  },
];

function StepImage({ stepIndex }: { stepIndex: number }) {
  const img = stepImages[stepIndex];
  return (
    <div className="h-44 rounded-2xl overflow-hidden">
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function StepContent({
  step,
  align,
}: {
  step: (typeof steps)[0];
  align: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "md:text-right" : ""}>
      <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-2">
        Step {step.number}
      </div>
      <h3 className="text-xl font-bold text-charcoal mb-3">{step.title}</h3>
      <p className="text-charcoal/60 text-sm leading-relaxed max-w-sm">
        {step.description}
      </p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2 className="section-heading">How It Works</h2>
          <p className="mt-4 text-charcoal/60 text-lg max-w-2xl mx-auto">
            Four simple steps from enquiry to delivery — we handle everything
            in between.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-navy/10 hidden md:block" />

          <div className="space-y-16 md:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = step.side === "left";

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative md:grid md:grid-cols-[1fr_64px_1fr] md:items-center gap-0 ${
                    i > 0 ? "md:mt-20" : ""
                  }`}
                >
                  {/* Mobile: always show step content */}
                  <div className="md:hidden">
                    <StepContent step={step} align="left" />
                  </div>

                  {/* Desktop left column */}
                  <div className="hidden md:block">
                    {isLeft ? (
                      <div className="md:pr-10 md:text-right">
                        <StepContent step={step} align="right" />
                      </div>
                    ) : (
                      <div className="md:pr-10">
                        <StepImage stepIndex={i} />
                      </div>
                    )}
                  </div>

                  {/* Center icon — desktop only */}
                  <div className="hidden md:flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center border-4 border-gray-50 shadow-lg z-10 relative">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="text-xs font-bold text-navy/30 tracking-widest">
                      {step.number}
                    </div>
                  </div>

                  {/* Desktop right column */}
                  <div className="hidden md:block">
                    {isLeft ? (
                      <div className="md:pl-10">
                        <StepImage stepIndex={i} />
                      </div>
                    ) : (
                      <div className="md:pl-10">
                        <StepContent step={step} align="left" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Journey stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-navy-dark rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {journeyStats.map((s, i) => (
              <div
                key={s.label}
                className={`px-8 py-6 text-center ${
                  i < journeyStats.length - 1 ? "border-r border-white/10" : ""
                }`}
              >
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-white/40 text-xs mt-1 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
