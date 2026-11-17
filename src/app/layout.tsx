import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});
const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Feride Çıkkan Kaptan | Fizyoterapist · Ankara",
  description:
    "Ankara Çankaya'da manuel terapi, sporcu rehabilitasyonu, fonksiyonel egzersiz ve Klinik Pilates alanlarında kişiye özel fizyoterapi yaklaşımı.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
