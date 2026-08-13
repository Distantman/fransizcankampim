"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Lang, translations } from "@/lib/i18n";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const langLabels: Record<Lang, string> = {
  tr: "TR",
  fr: "FR",
  en: "EN",
};

const langFull: Record<Lang, string> = {
  tr: "Türkçe",
  fr: "Français",
  en: "English",
};

export default function Navbar({ lang, setLang }: NavbarProps) {
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.about },
    { href: "#methods", label: t.methods },
    { href: "#packages", label: t.packages },
  ];

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" as any }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.4s ease",
          background: scrolled
            ? "rgba(250, 250, 247, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(201,169,110,0.2)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="container-site" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            aria-label="Ana sayfa"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "1px",
            }}
          >
            <span style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 700, color: "var(--color-charcoal)", lineHeight: 1 }}>
              {t.logo}
            </span>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gold-dark)" }}>
              {t.logoSub}
            </span>
          </button>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  color: "var(--color-charcoal)",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s",
                  padding: "4px 0",
                  position: "relative",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-dark)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-charcoal)")}
              >
                {link.label}
              </button>
            ))}

            {/* Language switcher */}
            <div style={{ position: "relative" }}>
              <button
                id="lang-switcher"
                onClick={() => setLangOpen(!langOpen)}
                aria-label="Change language"
                aria-expanded={langOpen}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(201,169,110,0.1)",
                  border: "1px solid rgba(201,169,110,0.3)",
                  borderRadius: "var(--radius-full)",
                  padding: "6px 14px",
                  cursor: "pointer",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "var(--color-gold-dark)",
                  transition: "all 0.2s",
                }}
              >
                <Globe size={14} />
                {langLabels[lang]}
                <ChevronDown size={12} style={{ transition: "transform 0.2s", transform: langOpen ? "rotate(180deg)" : "none" }} />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      right: 0,
                      background: "var(--color-white)",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--color-grey-200)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                      overflow: "hidden",
                      minWidth: "140px",
                      zIndex: 100,
                    }}
                  >
                    {(["tr", "fr", "en"] as Lang[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLang(l); setLangOpen(false); }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          width: "100%",
                          padding: "10px 16px",
                          background: lang === l ? "rgba(201,169,110,0.1)" : "transparent",
                          border: "none",
                          cursor: "pointer",
                          fontFamily: "var(--font-inter)",
                          fontSize: "0.85rem",
                          fontWeight: lang === l ? 600 : 400,
                          color: lang === l ? "var(--color-gold-dark)" : "var(--color-charcoal)",
                          textAlign: "left",
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) => { if (lang !== l) e.currentTarget.style.background = "var(--color-grey-100)"; }}
                        onMouseLeave={(e) => { if (lang !== l) e.currentTarget.style.background = "transparent"; }}
                      >
                        <span style={{ fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em" }}>{langLabels[l]}</span>
                        <span style={{ color: "var(--color-grey-600)" }}>{langFull[l]}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollTo("#booking")}
              className="btn-primary"
              style={{ padding: "10px 22px", fontSize: "0.85rem" }}
            >
              <span>{t.book}</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="mobile-menu-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "var(--color-charcoal)",
              display: "none",
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: "72px",
              left: 0,
              right: 0,
              zIndex: 999,
              background: "rgba(250,250,247,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--color-grey-200)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-inter)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "var(--color-charcoal)",
                  padding: "12px 0",
                  textAlign: "left",
                  borderBottom: "1px solid var(--color-grey-200)",
                }}
              >
                {link.label}
              </button>
            ))}

            <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
              {(["tr", "fr", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setMobileOpen(false); }}
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid",
                    borderColor: lang === l ? "var(--color-gold)" : "var(--color-grey-200)",
                    background: lang === l ? "rgba(201,169,110,0.1)" : "transparent",
                    color: lang === l ? "var(--color-gold-dark)" : "var(--color-grey-600)",
                    fontWeight: lang === l ? 700 : 500,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {langLabels[l]}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollTo("#booking")}
              className="btn-primary"
              style={{ marginTop: "8px", justifyContent: "center" }}
            >
              <span>{t.book}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
