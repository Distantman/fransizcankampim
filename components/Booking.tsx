"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Lock, CreditCard } from "lucide-react";
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

        {/* Form placeholder card */}
        <motion.div
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40, transition: { delay: 0.2, duration: 0.8 } }}
          style={{ maxWidth: "760px", margin: "0 auto" }}
        >
          <div style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
          }}>
            {/* Mock form toolbar */}
            <div style={{
              background: "rgba(255,255,255,0.07)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "16px 24px",
              display: "flex", alignItems: "center", gap: "8px",
            }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "rgba(255,80,80,0.7)" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "rgba(255,200,0,0.7)" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "rgba(80,200,80,0.7)" }} />
              <div style={{ flex: 1, height: "28px", borderRadius: "var(--radius-sm)", background: "rgba(255,255,255,0.06)", marginLeft: "8px", display: "flex", alignItems: "center", padding: "0 12px" }}>
                <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>
                  https://form.jotform.com/derya-uygun
                </span>
              </div>
              <Lock size={13} color="rgba(255,255,255,0.3)" />
            </div>

            {/* Placeholder content */}
            <div style={{
              padding: "60px 48px",
              display: "flex", flexDirection: "column", alignItems: "center",
              gap: "32px", textAlign: "center",
            }}>
              {/* Icon */}
              <div style={{
                width: "80px", height: "80px",
                background: "linear-gradient(135deg, rgba(201,169,110,0.2), rgba(107,140,186,0.15))",
                border: "1px solid rgba(201,169,110,0.25)",
                borderRadius: "var(--radius-lg)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <CreditCard size={32} color="var(--color-gold-light)" />
              </div>

              <div>
                <h3 style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.4rem", fontWeight: 700,
                  color: "var(--color-white)", marginBottom: "12px",
                }}>
                  Jotform + iyzico
                </h3>
                <p style={{
                  fontSize: "0.93rem", lineHeight: 1.75,
                  color: "rgba(255,255,255,0.45)",
                  maxWidth: "440px",
                }}>
                  {t.formPlaceholder}
                </p>
              </div>

              {/* Mock form fields */}
              <div style={{ width: "100%", maxWidth: "480px", display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  lang === "tr" ? "Ad Soyad" : lang === "fr" ? "Nom Complet" : "Full Name",
                  lang === "tr" ? "E-posta Adresi" : lang === "fr" ? "Adresse E-mail" : "Email Address",
                  lang === "tr" ? "Telefon Numarası" : lang === "fr" ? "Numéro de Téléphone" : "Phone Number",
                  lang === "tr" ? "Tercih Ettiğiniz Ders Paketi" : lang === "fr" ? "Forfait Préféré" : "Preferred Package",
                ].map((placeholder) => (
                  <div key={placeholder} style={{
                    height: "48px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "var(--radius-sm)",
                    display: "flex", alignItems: "center", padding: "0 16px",
                  }}>
                    <span style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.25)" }}>
                      {placeholder}
                    </span>
                  </div>
                ))}

                <button
                  id="booking-submit-btn"
                  style={{
                    marginTop: "8px",
                    height: "52px",
                    background: "linear-gradient(135deg, var(--color-gold-dark), var(--color-gold))",
                    border: "none",
                    borderRadius: "var(--radius-full)",
                    color: "var(--color-white)",
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700, fontSize: "0.95rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(160,120,64,0.4)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  {lang === "tr" ? "Ders Rezervasyonu Yap →" : lang === "fr" ? "Réserver un Cours →" : "Book Your Lesson →"}
                </button>
              </div>

              {/* Trust note */}
              <div style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "12px 20px",
                background: "rgba(255,255,255,0.04)",
                borderRadius: "var(--radius-full)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
                <Shield size={14} color="rgba(255,255,255,0.4)" />
                <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)" }}>
                  {t.formNote}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
