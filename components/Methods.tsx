"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, GraduationCap, Compass } from "lucide-react";
import { Lang, translations } from "@/lib/i18n";

interface MethodsProps {
  lang: Lang;
}

const cardIcons = [
  <MessageCircle size={28} key="msg" />,
  <GraduationCap size={28} key="grad" />,
  <Compass size={28} key="comp" />,
];

const cardGradients = [
  "linear-gradient(135deg, #fdf9f0, #fef3dc)",
  "linear-gradient(135deg, #f0f4fb, #dce8f5)",
  "linear-gradient(135deg, #f0fdf4, #dcf5e8)",
];

const cardBorders = [
  "rgba(201,169,110,0.25)",
  "rgba(107,140,186,0.25)",
  "rgba(52,168,83,0.2)",
];

const cardIconBg = [
  "rgba(201,169,110,0.15)",
  "rgba(107,140,186,0.15)",
  "rgba(52,168,83,0.12)",
];

const cardIconColor = [
  "var(--color-gold-dark)",
  "var(--color-blue-soft)",
  "#2d8a4e",
];

export default function Methods({ lang }: MethodsProps) {
  const t = translations[lang].methods;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const cards = [t.card1, t.card2, t.card3];

  return (
    <section
      id="methods"
      ref={ref}
      style={{
        padding: "120px 0",
        background: "var(--color-cream)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative grid lines */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(201,169,110,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,169,110,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30, transition: { duration: 0.7 } }}
          style={{ textAlign: "center", maxWidth: "660px", margin: "0 auto 72px" }}
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

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "28px",
        }} className="methods-grid">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 50,
                transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as any },
              }}
              style={{
                background: cardGradients[i],
                border: `1px solid ${cardBorders[i]}`,
                borderRadius: "var(--radius-xl)",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 24px 60px rgba(26,26,46,0.1)",
              }}
            >
              {/* Icon */}
              <div style={{
                width: "60px", height: "60px",
                background: cardIconBg[i],
                borderRadius: "var(--radius-md)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: cardIconColor[i],
              }}>
                {cardIcons[i]}
              </div>

              {/* Title */}
              <div>
                <h3 style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.4rem", fontWeight: 700,
                  color: "var(--color-charcoal)",
                  marginBottom: "4px",
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontSize: "0.78rem", fontWeight: 600,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  color: cardIconColor[i],
                }}>
                  {card.sub}
                </p>
              </div>

              {/* Description */}
              <p style={{
                fontSize: "0.95rem", lineHeight: 1.75,
                color: "var(--color-grey-600)",
                flexGrow: 1,
              }}>
                {card.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      display: "inline-block",
                      padding: "4px 12px",
                      borderRadius: "var(--radius-full)",
                      border: `1px solid ${cardBorders[i]}`,
                      background: "rgba(255,255,255,0.6)",
                      fontSize: "0.75rem", fontWeight: 600,
                      color: cardIconColor[i],
                      letterSpacing: "0.04em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .methods-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .methods-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
