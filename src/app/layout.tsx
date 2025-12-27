import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "roxr.ai | AI Development, Consultation & Transformation",
  description: "Accelerate your business with bespoke AI Application Development, Strategic AI Consultation, and holistic Business Transformation. Join the AIProphet YouTube community for cutting-edge knowledge sharing.",
  keywords: ["AI Application Development", "AI Consultation", "Business Transformation", "AIProphet", "Knowledge Sharing", "GenAI Strategy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--neon-purple)]/30 selection:text-white`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
