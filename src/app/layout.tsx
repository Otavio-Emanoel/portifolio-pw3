import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Otávio Emanoel — Desenvolvedor Fullstack",
  description:
    "Portfólio de Otávio Emanoel, Desenvolvedor Fullstack especializado em Node.js, Next.js e Java.",
  openGraph: {
    title: "Otávio Emanoel — Desenvolvedor Fullstack",
    description:
      "Portfólio de Otávio Emanoel, Desenvolvedor Fullstack especializado em Node.js, Next.js e Java.",
    url: "https://otavio-emanoel-dev.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://otavio-emanoel-dev.vercel.app/me.webp",
        width: 800,
        height: 800,
        alt: "Otávio Emanoel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Otávio Emanoel — Desenvolvedor Fullstack",
    description:
      "Portfólio de Otávio Emanoel, Desenvolvedor Fullstack especializado em Node.js, Next.js e Java.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

