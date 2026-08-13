"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star, MapPin } from "lucide-react";
import Image from "next/image";
import { Lang, translations } from "@/lib/i18n";

interface HeroProps {
  lang: Lang;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as any },
    }),
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #fafaf7 0%, #f0ece0 40%, #e8f0f8 100%)",
        paddingTop: "72px",
      }}
    >
      {/* Decorative background blobs */}
      <div style={{
        position: "absolute", top: "-10%", right: "-5%", width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-15%", left: "-10%", width: "700px", height: "700px",
        background: "radial-gradient(circle, rgba(107,140,186,0.1) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      {/* Floating decorative text */}
      <div style={{
        position: "absolute", top: "20%", left: "2%",
        fontFamily: "var(--font-playfair)", fontSize: "14rem", fontWeight: 700,
        color: "rgba(201,169,110,0.04)", userSelect: "none", pointerEvents: "none",
        lineHeight: 1,
      }}>FR</div>

      <div className="container-site" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
          minHeight: "calc(100vh - 72px)",
          paddingTop: "40px",
          paddingBottom: "40px",
        }} className="hero-grid">

          {/* Left — Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            {/* Badge */}
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(201,169,110,0.35)",
                borderRadius: "var(--radius-full)",
                padding: "8px 18px",
                fontSize: "0.72rem", fontWeight: 600,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "var(--color-gold-dark)",
              }}>
                <MapPin size={12} />
                {t.badge}
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
              <h1 style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "var(--color-charcoal)",
              }}>
                {t.headline1}{" "}
                <span className="text-gold-gradient">{t.headline2}</span>{" "}
                {t.headline3}
              </h1>
            </motion.div>

            {/* Stars */}
            <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />
              ))}
              <span style={{ fontSize: "0.82rem", color: "var(--color-grey-600)", marginLeft: "4px" }}>
                100+ {lang === "tr" ? "mutlu öğrenci" : lang === "fr" ? "élèves satisfaits" : "happy students"}
              </span>
            </motion.div>

            {/* Subtext */}
            <motion.p custom={3} initial="hidden" animate="visible" variants={fadeUp}
              style={{
                fontSize: "1.05rem", lineHeight: 1.8,
                color: "var(--color-grey-600)", maxWidth: "520px",
              }}>
              {t.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp}
              style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
              <button
                id="hero-cta"
                onClick={() => scrollTo("#booking")}
                className="btn-primary"
                style={{ fontSize: "1rem", padding: "16px 32px" }}
              >
                <span>{t.cta}</span>
                <ArrowRight size={18} />
              </button>

              <span style={{ fontSize: "0.8rem", color: "var(--color-grey-400)", letterSpacing: "0.02em" }}>
                {t.ctaSub}
              </span>
            </motion.div>

            {/* Scroll hint */}
            <motion.button
              custom={5} initial="hidden" animate="visible" variants={fadeUp}
              onClick={() => scrollTo("#about")}
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                background: "none", border: "none", cursor: "pointer",
                color: "var(--color-grey-400)", fontSize: "0.8rem",
                fontFamily: "var(--font-inter)", marginTop: "8px",
                width: "fit-content",
              }}
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <ChevronDown size={16} />
                {t.scroll}
              </motion.div>
            </motion.button>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" as any }}
            style={{ position: "relative" }}
            className="hero-image-col"
          >
            {/* Decorative frame */}
            <div style={{
              position: "absolute", top: "-16px", right: "-16px",
              width: "calc(100% - 32px)", height: "calc(100% - 32px)",
              border: "2px solid rgba(201,169,110,0.3)",
              borderRadius: "var(--radius-xl)",
              zIndex: 0,
            }} />

            <div style={{
              position: "relative", zIndex: 1,
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              aspectRatio: "4/5",
              background: "linear-gradient(135deg, #f0e8d0, #dce8f5)",
              boxShadow: "0 32px 80px rgba(26,26,46,0.18), 0 8px 24px rgba(201,169,110,0.15)",
            }}>
              <Image
                src="/derya.jpg"
                alt="Derya Uygun – Fransızca Öğretmeni"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
                unoptimized
              />

              {/* Overlay card */}
              <div style={{
                position: "absolute", bottom: "24px", left: "24px", right: "24px",
                background: "rgba(255,255,255,0.88)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderRadius: "var(--radius-md)",
                padding: "18px 22px",
                border: "1px solid rgba(255,255,255,0.6)",
              }}>
                <div style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1.1rem", color: "var(--color-charcoal)" }}>
                  Derya Uygun
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--color-grey-600)", marginTop: "2px" }}>
                  {lang === "tr" ? "Sertifikalı Fransızca Öğretmeni · İzmir" : lang === "fr" ? "Professeure Certifiée · Izmir" : "Certified French Teacher · Izmir"}
                </div>
                <div style={{
                  display: "flex", alignItems: "center", gap: "6px", marginTop: "10px",
                }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite" }} />
                  <span style={{ fontSize: "0.75rem", color: "var(--color-grey-600)", fontWeight: 500 }}>
                    {lang === "tr" ? "Şu an öğrenci kabul ediyor" : lang === "fr" ? "Accepte des élèves maintenant" : "Currently accepting students"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding-top: 60px !important;
          }
          .hero-image-col {
            order: -1;
            max-width: 380px;
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
