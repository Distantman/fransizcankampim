import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Derya Uygun | Profesyonel Fransızca Dersleri – İzmir",
  description:
    "İzmir'in en deneyimli Fransızca öğretmeni Derya Uygun ile bireysel, online ve yüz yüze Fransızca derslerine başlayın. DELF/DALF hazırlık, konuşma ve seyahat Fransızcası.",
  keywords: [
    "Fransızca dersleri İzmir",
    "Fransızca öğretmeni",
    "DELF hazırlık",
    "DALF hazırlık",
    "online Fransızca",
    "cours de français Izmir",
    "French lessons Izmir",
  ],
  openGraph: {
    title: "Derya Uygun | Profesyonel Fransızca Dersleri",
    description:
      "Hedeflerinize göre kişiselleştirilmiş Fransızca dersleri. Konuşma, sınav hazırlığı ve seyahat Fransızcası.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
