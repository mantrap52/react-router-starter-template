import { useState } from "react";
import { Send, MapPin, Mail, FileText, MapPin as Track, DollarSign } from "lucide-react";

const trustPoints = [
  { icon: DollarSign, text: "One consolidated invoice — sourcing, freight, customs, delivery." },
  { icon: Track, text: "Real-time shipment tracking from Mundra Port to your door." },
  { icon: FileText, text: "Transparent pricing — no hidden fees, ever." },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Ship?
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Tell us what you need and we'll come back with a quote within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form — takes 2 cols */}
          <div className="lg:col-span-2">
            {status === "sent" ? (
              <div className="bg-white/10 border border-white/20 rounded-2xl p-10 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-white font-bold text-xl mb-2">Message Received!</h3>
                <p className="text-white/60 text-sm">
                  We'll get back to you within 24 hours with a tailored quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/70 text-sm mb-1.5">Full Name *</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-1.5">Email *</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/70 text-sm mb-1.5">Enquiry Type</label>
                    <select
                      name="type"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="personal" className="text-navy">Personal Shipping</option>
                      <option value="business" className="text-navy">Business / B2B</option>
                      <option value="sourcing" className="text-navy">Product Sourcing</option>
                      <option value="other" className="text-navy">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-1.5">Approx. Volume</label>
                    <select
                      name="volume"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="small" className="text-navy">Small parcel (&lt; 50 kg)</option>
                      <option value="lcl" className="text-navy">LCL (part container)</option>
                      <option value="fcl" className="text-navy">FCL (full container)</option>
                      <option value="unsure" className="text-navy">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-1.5">
                    Tell Us About Your Shipment *
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="What are you shipping or looking to source? Where from, where to, any deadlines?"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gold hover:bg-gold-light text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? (
                    "Sending…"
                  ) : (
                    <>
                      Send My Enquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Please email us directly at info@dakshinglobal.com
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Contact Details</h3>
              <div className="space-y-3">
                <a
                  href="mailto:info@dakshinglobal.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  info@dakshinglobal.com
                </a>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Sydney, Australia<br />India-wide supplier network</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Why Dakshin?</h3>
              <div className="space-y-4">
                {trustPoints.map((pt) => {
                  const Icon = pt.icon;
                  return (
                    <div key={pt.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">{pt.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gold/10 border border-gold/30 rounded-2xl p-5">
              <p className="text-white font-semibold text-sm mb-1">
                Response within 24 hours
              </p>
              <p className="text-white/50 text-xs">
                We review every enquiry personally and provide tailored quotes — no automated responses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
