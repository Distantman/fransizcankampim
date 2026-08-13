"use client";

import { useState } from "react";
import { Lang } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Methods from "@/components/Methods";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";

export default function Home() {
  const [lang, setLang] = useState<Lang>("tr");

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Methods lang={lang} />
        <Pricing lang={lang} />
        <HowItWorks lang={lang} />
        <Booking lang={lang} />
      </main>
      <Footer lang={lang} />
      <WhatsAppBubble lang={lang} />
    </>
  );
}
