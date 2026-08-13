"use client";

import { motion } from "framer-motion";
import { Mail, Camera, Globe, Heart } from "lucide-react";
import { Lang, translations } from "@/lib/i18n";

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-charcoal)",
        color: "rgba(255,255,255,0.7)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent line */}
      <div style={{
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.4), rgba(107,140,186,0.3), transparent)",
      }} />

      {/* Main footer */}
      <div className="container-site" style={{ padding: "64px 24px 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "48px",
          marginBottom: "56px",
        }} className="footer-grid">

          {/* Brand column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <div style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.4rem", fontWeight: 700,
                color: "var(--color-white)",
                marginBottom: "4px",
              }}>
                Derya Uygun
              </div>
              <div style={{
                fontSize: "0.7rem", fontWeight: 600,
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: "var(--color-gold)",
              }}>
                {lang === "tr" ? "Fransızca Öğretmeni" : lang === "fr" ? "Professeure de Français" : "French Teacher"}
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "rgba(255,255,255,0.45)", maxWidth: "300px" }}>
              {t.tagline}
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { icon: <Camera size={18} />, label: "Instagram", href: "#" },
                { icon: <Globe size={18} />, label: "LinkedIn", href: "#" },
                { icon: <Mail size={18} />, label: "Email", href: "mailto:mdmderya777@gmail.com" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    width: "40px", height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(201,169,110,0.2)";
                    e.currentTarget.style.borderColor = "rgba(201,169,110,0.4)";
                    e.currentTarget.style.color = "var(--color-gold-light)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div>
            <h4 style={{
              fontFamily: "var(--font-inter)", fontSize: "0.72rem",
              fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
              color: "var(--color-gold)", marginBottom: "20px",
            }}>
              {t.contact}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "WhatsApp", href: "https://wa.me/905428084522" },
                { label: "mdmderya777@gmail.com", href: "mailto:mdmderya777@gmail.com" },
                { label: "İzmir, Türkiye", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    fontSize: "0.85rem", color: "rgba(255,255,255,0.45)",
                    textDecoration: "none", transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal column */}
          <div>
            <h4 style={{
              fontFamily: "var(--font-inter)", fontSize: "0.72rem",
              fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
              color: "var(--color-gold)", marginBottom: "20px",
            }}>
              {t.legal}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: t.links.msss, href: "#" },
                { label: t.links.kvkk, href: "#" },
                { label: t.links.privacy, href: "#" },
                { label: t.links.cookie, href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "0.82rem", color: "rgba(255,255,255,0.4)",
                    textDecoration: "none", transition: "color 0.2s",
                    lineHeight: 1.4,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          paddingTop: "28px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "12px",
        }}>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>
            © {currentYear} Derya Uygun. {t.rights}
          </p>
          <p style={{
            fontSize: "0.75rem", color: "rgba(255,255,255,0.25)",
            display: "flex", alignItems: "center", gap: "4px",
          }}>
            Made with <Heart size={11} fill="rgba(201,169,110,0.6)" color="rgba(201,169,110,0.6)" /> in İzmir
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </footer>
  );
}
