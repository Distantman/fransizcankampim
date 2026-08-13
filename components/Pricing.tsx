"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Lang, translations } from "@/lib/i18n";

interface PricingProps {
  lang: Lang;
}

export default function Pricing({ lang }: PricingProps) {
  const t = translations[lang].pricing;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const tiers = [t.tier1, t.tier2, t.tier3];

  const tierStyles = [
    {
      background: "var(--color-white)",
      border: "1px solid var(--color-grey-200)",
      shadow: "0 8px 30px rgba(0,0,0,0.06)",
      popular: false,
    },
    {
      background: "linear-gradient(160deg, var(--color-charcoal) 0%, var(--color-charcoal-soft) 100%)",
      border: "1px solid rgba(201,169,110,0.3)",
      shadow: "0 24px 60px rgba(26,26,46,0.25)",
      popular: true,
    },
    {
      background: "var(--color-white)",
      border: "1px solid var(--color-grey-200)",
      shadow: "0 8px 30px rgba(0,0,0,0.06)",
      popular: false,
    },
  ];

  return (
    <section
      id="packages"
      ref={ref}
      style={{
        padding: "120px 0",
        background: "var(--color-white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative bg */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "60%",
        background: "linear-gradient(180deg, transparent, rgba(240,236,224,0.4))",
        pointerEvents: "none",
      }} />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30, transition: { duration: 0.7 } }}
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 72px" }}
        >
          <div className="section-tag" style={{ justifyContent: "center" }}>✦ {t.sectionTag}</div>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 700,
            color: "var(--color-charcoal)",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}>
            {t.headline}
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--color-grey-600)" }}>
            {t.sub}
          </p>
        </motion.div>

        {/* Tier cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          alignItems: "start",
        }} className="pricing-grid">
          {tiers.map((tier, i) => {
            const style = tierStyles[i];
            const isDark = style.popular;
            const textColor = isDark ? "rgba(255,255,255,0.9)" : "var(--color-charcoal)";
            const subColor = isDark ? "rgba(255,255,255,0.55)" : "var(--color-grey-600)";
            const borderColor = isDark ? "rgba(255,255,255,0.12)" : "var(--color-grey-200)";

            return (
              <motion.div
                key={i}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 40,
                  transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as any },
                }}
                style={{
                  background: style.background,
                  border: style.border,
                  borderRadius: "var(--radius-xl)",
                  padding: "40px 32px",
                  boxShadow: style.shadow,
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                  position: "relative",
                  overflow: "hidden",
                  transform: style.popular ? "scale(1.04)" : "scale(1)",
                }}
              >
                {/* Popular badge */}
                {tier.badge && (
                  <div style={{
                    position: "absolute", top: "20px", right: "20px",
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    background: isDark ? "rgba(201,169,110,0.25)" : "rgba(201,169,110,0.12)",
                    border: `1px solid ${isDark ? "rgba(201,169,110,0.4)" : "rgba(201,169,110,0.3)"}`,
                    color: isDark ? "var(--color-gold-light)" : "var(--color-gold-dark)",
                    fontSize: "0.7rem", fontWeight: 700,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    padding: "5px 12px", borderRadius: "var(--radius-full)",
                  }}>
                    <Sparkles size={10} />
                    {tier.badge}
                  </div>
                )}

                {/* Decorative glow for popular */}
                {isDark && (
                  <div style={{
                    position: "absolute", top: "-60px", right: "-60px",
                    width: "200px", height: "200px",
                    background: "radial-gradient(circle, rgba(201,169,110,0.15) 0%, transparent 70%)",
                    borderRadius: "50%", pointerEvents: "none",
                  }} />
                )}

                {/* Tier name + duration */}
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.5rem", fontWeight: 700,
                    color: textColor, marginBottom: "6px",
                  }}>
                    {tier.name}
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: subColor }}>{tier.desc}</p>
                </div>

                {/* Price */}
                <div style={{ borderBottom: `1px solid ${borderColor}`, paddingBottom: "28px" }}>
                  <div style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "3rem", fontWeight: 800,
                    color: isDark ? "var(--color-gold-light)" : "var(--color-gold-dark)",
                    lineHeight: 1,
                  }}>
                    {tier.price}
                  </div>
                  <div style={{
                    fontSize: "0.78rem", fontWeight: 500,
                    color: subColor, marginTop: "6px",
                    letterSpacing: "0.04em",
                  }}>
                    {tier.duration}
                  </div>
                </div>

                {/* Features */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", flexGrow: 1 }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <div style={{
                        width: "20px", height: "20px", flexShrink: 0,
                        background: isDark ? "rgba(201,169,110,0.2)" : "rgba(201,169,110,0.12)",
                        borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <Check size={11} color={isDark ? "var(--color-gold-light)" : "var(--color-gold-dark)"} />
                      </div>
                      <span style={{ fontSize: "0.88rem", color: isDark ? "rgba(255,255,255,0.8)" : "var(--color-grey-600)", lineHeight: 1.5 }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  id={`pricing-cta-${i}`}
                  onClick={() => scrollTo("#booking")}
                  className={isDark ? "btn-gold" : "btn-secondary"}
                  style={isDark ? {} : { borderColor: "var(--color-charcoal)", justifyContent: "center", width: "100%" }}
                >
                  {tier.cta}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          animate={{ opacity: inView ? 1 : 0, transition: { delay: 0.6, duration: 0.6 } }}
          style={{
            textAlign: "center", marginTop: "48px",
            fontSize: "0.82rem", color: "var(--color-grey-400)",
            fontStyle: "italic",
          }}
        >
          {t.note}
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 440px;
            margin: 0 auto;
          }
          .pricing-grid > *:nth-child(2) {
            transform: scale(1) !important;
          }
        }
      `}</style>
    </section>
  );
}
