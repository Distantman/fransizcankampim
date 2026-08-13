"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { Lang, translations } from "@/lib/i18n";

interface WhatsAppBubbleProps {
  lang: Lang;
}

export default function WhatsAppBubble({ lang }: WhatsAppBubbleProps) {
  const t = translations[lang].footer;
  const [hovered, setHovered] = useState(false);

  const WHATSAPP_NUMBER = "905428084522"; // Replace with real number
  const message =
    lang === "tr"
      ? "Merhaba Derya Hanım, Fransızca dersleri hakkında bilgi almak istiyorum."
      : lang === "fr"
      ? "Bonjour Derya, je voudrais des informations sur vos cours de français."
      : "Hello Derya, I'd like to get information about your French lessons.";

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      {/* Tooltip label */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "var(--color-charcoal)",
              color: "var(--color-white)",
              fontFamily: "var(--font-inter)",
              fontSize: "0.82rem",
              fontWeight: 500,
              padding: "8px 16px",
              borderRadius: "var(--radius-full)",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              pointerEvents: "none",
            }}
          >
            {t.whatsappLabel}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        id="whatsapp-float-btn"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsappLabel}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25d366, #128c7e)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 24px rgba(37,211,102,0.45)",
          textDecoration: "none",
          color: "white",
          position: "relative",
        }}
      >
        {/* Pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.5, 1.8], opacity: [0.5, 0.25, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" as any }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "rgba(37,211,102,0.4)",
          }}
        />
        <MessageCircle size={26} fill="white" color="white" />
      </motion.a>
    </div>
  );
}
