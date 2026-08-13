"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Mail } from "lucide-react";
import { Lang, translations } from "@/lib/i18n";

interface BookingProps {
  lang: Lang;
}

export default function Booking({ lang }: BookingProps) {
  const t = translations[lang].booking;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="booking"
      ref={ref}
      style={{
        padding: "120px 0",
        background: "linear-gradient(160deg, var(--color-charcoal) 0%, #0f0f22 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glows */}
      <div style={{
        position: "absolute", top: "-100px", left: "-100px",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 65%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-150px", right: "-100px",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(107,140,186,0.08) 0%, transparent 65%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      {/* Decorative text watermark */}
      <div style={{
        position: "absolute", bottom: "-20px", right: "-20px",
        fontFamily: "var(--font-playfair)", fontSize: "16rem",
        fontWeight: 900, color: "rgba(255,255,255,0.02)",
        userSelect: "none", pointerEvents: "none", lineHeight: 1,
      }}>FR</div>

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30, transition: { duration: 0.7 } }}
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 56px" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(201,169,110,0.15)",
            border: "1px solid rgba(201,169,110,0.3)",
            color: "var(--color-gold-light)",
            fontSize: "0.75rem", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "6px 16px", borderRadius: "var(--radius-full)",
            marginBottom: "24px",
          }}>
            ✦ {t.sectionTag}
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 700,
            color: "var(--color-white)",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}>
            {t.headline}
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.55)" }}>
            {t.sub}
          </p>
        </motion.div>

        {/* Live contact card */}
        <motion.div
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40, transition: { delay: 0.2, duration: 0.8 } }}
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <div style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "var(--radius-xl)",
            padding: "48px 32px",
            boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "36px",
          }}>
            {/* Icons header */}
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{
                width: "60px", height: "60px",
                background: "rgba(37, 211, 102, 0.15)",
                border: "1px solid rgba(37, 211, 102, 0.25)",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#25D366",
              }}>
                <MessageSquare size={26} />
              </div>
              <div style={{
                width: "60px", height: "60px",
                background: "rgba(201, 169, 110, 0.15)",
                border: "1px solid rgba(201, 169, 110, 0.25)",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--color-gold-light)",
              }}>
                <Mail size={26} />
              </div>
            </div>

            {/* Description */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3 style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.5rem", fontWeight: 700,
                color: "var(--color-white)",
              }}>
                {lang === "tr" ? "Hemen İletişime Geçin" : lang === "fr" ? "Contactez-moi" : "Get in Touch Directly"}
              </h3>
              <p style={{
                fontSize: "0.95rem", lineHeight: 1.7,
                color: "rgba(255,255,255,0.6)",
                maxWidth: "440px",
                margin: "0 auto",
              }}>
                {t.sub}
              </p>
            </div>

            {/* Buttons */}
            <div style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}>
              <a
                href="https://wa.me/905428084522"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{
                  height: "54px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                <MessageSquare size={18} />
                {t.ctaWhatsApp}
              </a>

              <a
                href="mailto:mdmderya777@gmail.com"
                className="btn-secondary"
                style={{
                  height: "54px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  borderRadius: "var(--radius-full)",
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "var(--color-white)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-gold-light)";
                  e.currentTarget.style.color = "var(--color-gold-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.color = "var(--color-white)";
                }}
              >
                <Mail size={18} />
                {t.ctaEmail}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
