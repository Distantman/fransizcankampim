"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Plane, Award, BookOpen, Globe } from "lucide-react";
import { Lang, translations } from "@/lib/i18n";

interface AboutProps {
  lang: Lang;
}

const stats = [
  { icon: <BookOpen size={22} />, value: "10+", keyName: "stat1" },
  { icon: <Award size={22} />, value: "100+", keyName: "stat2" },
  { icon: <Globe size={22} />, value: "15+", keyName: "stat3" },
  { icon: <Plane size={22} />, value: "%95", keyName: "stat4" },
];

export default function About({ lang }: AboutProps) {
  const t = translations[lang].about;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = (i: number) => ({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 40,
    transition: { delay: i * 0.13, duration: 0.7, ease: "easeOut" as any },
  });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "120px 0",
        background: "var(--color-white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Bg decoration */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px",
        background: "linear-gradient(90deg, transparent, var(--color-gold), var(--color-blue-soft), transparent)",
      }} />

      <div style={{
        position: "absolute", top: "-200px", right: "-200px",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div className="container-site">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }} className="about-grid">

          {/* Left — Visual card */}
          <motion.div animate={fadeUp(0)} style={{ position: "relative" }} className="about-visual">
            {/* Large decorative quote */}
            <div style={{
              position: "absolute", top: "-30px", left: "-20px",
              fontFamily: "var(--font-playfair)",
              fontSize: "12rem", fontWeight: 900, lineHeight: 1,
              color: "rgba(201,169,110,0.08)", userSelect: "none", zIndex: 0,
            }}>&ldquo;</div>

            <div style={{
              position: "relative", zIndex: 1,
              background: "linear-gradient(135deg, #fdf9f0, #f0f4fb)",
              borderRadius: "var(--radius-xl)",
              padding: "48px",
              border: "1px solid var(--color-grey-200)",
              boxShadow: "0 20px 60px rgba(26,26,46,0.07)",
            }}>
              {/* Stats grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
              }}>
                {stats.map((s, i) => (
                  <motion.div
                    key={s.keyName}
                    animate={{
                      opacity: inView ? 1 : 0,
                      y: inView ? 0 : 20,
                      transition: { delay: 0.2 + i * 0.1, duration: 0.6, ease: "easeOut" as any }
                    }}
                    style={{
                      background: "var(--color-white)",
                      borderRadius: "var(--radius-md)",
                      padding: "24px 20px",
                      textAlign: "center",
                      border: "1px solid var(--color-grey-200)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div style={{ color: "var(--color-gold)", marginBottom: "8px", display: "flex", justifyContent: "center" }}>
                      {s.icon}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "2rem", fontWeight: 800,
                      color: "var(--color-charcoal)",
                      lineHeight: 1,
                    }}>{s.value}</div>
                    <div style={{
                      fontSize: "0.72rem", fontWeight: 600,
                      textTransform: "uppercase", letterSpacing: "0.08em",
                      color: "var(--color-grey-400)", marginTop: "6px",
                    }}>{t[s.keyName as keyof typeof t]}</div>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial snippet */}
              <div style={{
                marginTop: "24px",
                padding: "20px",
                background: "rgba(201,169,110,0.08)",
                borderRadius: "var(--radius-md)",
                borderLeft: "3px solid var(--color-gold)",
              }}>
                <p style={{
                  fontFamily: "var(--font-playfair)", fontStyle: "italic",
                  fontSize: "0.95rem", color: "var(--color-charcoal)", lineHeight: 1.7,
                }}>
                  {lang === "tr"
                    ? "\"Derya Hanım sayesinde 3 ayda DELF B1 sınavını geçtim. Dersleri çok eğlenceli ve etkili!\""
                    : lang === "fr"
                    ? "\"Grâce à Derya, j'ai réussi l'examen DELF B1 en 3 mois. Les cours sont très agréables et efficaces!\""
                    : "\"Thanks to Derya I passed my DELF B1 exam in 3 months. The lessons are so fun and effective!\""}
                </p>
                <p style={{ fontSize: "0.78rem", color: "var(--color-grey-600)", marginTop: "10px", fontWeight: 600 }}>
                  — {lang === "tr" ? "Elif K., İzmir" : "Elif K., Izmir"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <motion.div animate={fadeUp(1)}>
              <div className="section-tag">✦ {t.sectionTag}</div>
              <h2 style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
                fontWeight: 700,
                color: "var(--color-charcoal)",
                lineHeight: 1.25,
              }}>
                {t.headline}
              </h2>
            </motion.div>

            <motion.p animate={fadeUp(2)} style={{
              fontSize: "1rem", lineHeight: 1.85, color: "var(--color-grey-600)",
              borderLeft: "2px solid var(--color-gold-light)",
              paddingLeft: "20px",
            }}>
              {t.p1}
            </motion.p>

            <motion.p animate={fadeUp(3)} style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--color-grey-600)" }}>
              {t.p2}
            </motion.p>

            <motion.p animate={fadeUp(4)} style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--color-grey-600)" }}>
              {t.p3}
            </motion.p>

            {/* Accent flags/icons row */}
            <motion.div animate={fadeUp(5)} style={{
              display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "8px",
            }}>
              {["🇫🇷 Paris", "🇧🇪 Bruxelles", "🇨🇭 Genève", "🇨🇦 Montréal", "🇹🇷 İzmir"].map((place) => (
                <span key={place} style={{
                  display: "inline-flex", alignItems: "center",
                  background: "var(--color-grey-100)",
                  border: "1px solid var(--color-grey-200)",
                  borderRadius: "var(--radius-full)",
                  padding: "5px 14px",
                  fontSize: "0.8rem", fontWeight: 500, color: "var(--color-charcoal)",
                }}>{place}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .about-visual { order: -1; }
        }
      `}</style>
    </section>
  );
}
