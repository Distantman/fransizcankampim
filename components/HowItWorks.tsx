"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarCheck, CreditCard, Video } from "lucide-react";
import { Lang, translations } from "@/lib/i18n";

interface HowItWorksProps {
  lang: Lang;
}

export default function HowItWorks({ lang }: HowItWorksProps) {
  const t = translations[lang].howItWorks;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const steps = [
    { icon: <CalendarCheck size={26} />, ...t.step1, num: "01" },
    { icon: <CreditCard size={26} />, ...t.step2, num: "02" },
    { icon: <Video size={26} />, ...t.step3, num: "03" },
  ];

  return (
    <section
      id="how-it-works"
      ref={ref}
      style={{
        padding: "120px 0",
        background: "var(--color-cream)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative stripe */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px",
        background: "linear-gradient(90deg, transparent, var(--color-blue-soft), var(--color-gold), transparent)",
      }} />

      <div className="container-site">

        {/* Header */}
        <motion.div
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30, transition: { duration: 0.7 } }}
          style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 80px" }}
        >
          <div className="section-tag" style={{ justifyContent: "center" }}>✦ {t.sectionTag}</div>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 700,
            color: "var(--color-charcoal)",
            lineHeight: 1.2,
          }}>
            {t.headline}
          </h2>
        </motion.div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "40px",
          position: "relative",
        }} className="steps-grid">

          {/* Connecting line */}
          <div style={{
            position: "absolute",
            top: "52px",
            left: "calc(16.67% + 30px)",
            right: "calc(16.67% + 30px)",
            height: "2px",
            background: "linear-gradient(90deg, var(--color-gold-light), var(--color-blue-pale))",
            zIndex: 0,
          }} className="connector-line" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 40,
                transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" as any },
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "24px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Step number + icon */}
              <div style={{ position: "relative" }}>
                {/* Outer ring */}
                <div style={{
                  width: "100px", height: "100px",
                  borderRadius: "50%",
                  border: "2px solid rgba(201,169,110,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "var(--color-white)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.07)",
                }}>
                  {/* Inner circle */}
                  <div style={{
                    width: "72px", height: "72px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--color-charcoal), var(--color-charcoal-soft))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--color-gold-light)",
                  }}>
                    {step.icon}
                  </div>
                </div>

                {/* Step number badge */}
                <div style={{
                  position: "absolute", bottom: "-4px", right: "-4px",
                  width: "28px", height: "28px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--color-gold-dark), var(--color-gold))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.62rem", fontWeight: 800,
                  color: "var(--color-white)",
                  border: "2px solid var(--color-cream)",
                  letterSpacing: "0.02em",
                }}>
                  {step.num}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.25rem", fontWeight: 700,
                  color: "var(--color-charcoal)",
                  marginBottom: "12px",
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: "0.93rem", lineHeight: 1.75,
                  color: "var(--color-grey-600)",
                  maxWidth: "260px", margin: "0 auto",
                }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* iyzico trust badge */}
        <motion.div
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20, transition: { delay: 0.8, duration: 0.6 } }}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "32px", marginTop: "72px", flexWrap: "wrap",
          }}
        >
          {[
            { icon: "🔒", label: lang === "tr" ? "256-bit SSL Şifrelemesi" : lang === "fr" ? "Chiffrement SSL 256 bits" : "256-bit SSL Encryption" },
            { icon: "💳", label: lang === "tr" ? "iyzico Güvenli Ödeme" : lang === "fr" ? "Paiement Sécurisé iyzico" : "iyzico Secure Payment" },
            { icon: "🎯", label: lang === "tr" ? "Sertifikalı Öğretmen" : lang === "fr" ? "Professeure Certifiée" : "Certified Teacher" },
            { icon: "📅", label: lang === "tr" ? "Esnek Zamanlama" : lang === "fr" ? "Horaires Flexibles" : "Flexible Scheduling" },
          ].map((badge) => (
            <div key={badge.label} style={{
              display: "flex", alignItems: "center", gap: "8px",
              background: "var(--color-white)",
              border: "1px solid var(--color-grey-200)",
              borderRadius: "var(--radius-full)",
              padding: "10px 20px",
              fontSize: "0.8rem", fontWeight: 500,
              color: "var(--color-grey-600)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}>
              <span style={{ fontSize: "1rem" }}>{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .connector-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}
