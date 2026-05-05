import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "2,000+", label: "Shipments Delivered" },
  { value: "500+", label: "India Suppliers" },
  { value: "1 Invoice", label: "Transparent Pricing" },
  { value: "Door-to-Door", label: "Full-Service" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-navy-dark overflow-hidden">
      {/* Video backdrop — full opacity, video is the visual */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Minimal overlay — just enough contrast for text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/55" />

      {/* Main content — centered */}
      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 w-full pt-24 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium px-4 py-1.5 rounded-full mb-8 border border-white/20">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            India to Australia — Sea Cargo & Sourcing
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
          >
            <span className="text-white">From Indian Shores</span>
            <br />
            <span className="text-gold">to Australian Doors</span>
          </h1>

          <p
            className="text-white/80 text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}
          >
            End-to-end sea cargo and product sourcing — we source, procure,
            ship, clear customs, and deliver to your door. For individuals and
            businesses alike.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-full transition-colors group shadow-lg shadow-black/25"
            >
              What's Crossing the Ocean
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full border border-white/25 transition-colors"
            >
              How we can help
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="relative bg-black/45 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-gold">{s.value}</div>
                <div className="text-white/55 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:block">
        <ChevronDown className="w-5 h-5 text-white/30 animate-[bounce-y_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
