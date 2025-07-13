import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import NavBar from "./components/NavBar";
import ReturnHomeLink from "./components/ReturnHomeLink";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cosmic Zodiac Astrology",
  description:
    "Discover your zodiac sign, explore astrology insights, and find your perfect compatibility matches.",
  icons: {
    icon: "/stars.png", // 👈 Add this line
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        {children}
        <ReturnHomeLink />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
