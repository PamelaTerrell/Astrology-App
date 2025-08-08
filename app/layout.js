import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

import NavBar from "./components/NavBar";
import ReturnHomeLink from "./components/ReturnHomeLink";
import GoToCompatibilityLink from "./components/GoToCompatabilityLink";
import Footer from "./components/Footer";

// Load Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata = {
  title: "Cosmic Zodiac Astrology",
  description:
    "Discover your zodiac sign, explore astrology insights, and find your perfect compatibility matches.",
  icons: {
    icon: "/fav.png",
  },
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Cosmic Zodiac Astrology",
    description:
      "Explore horoscopes, compatibility, and your astrological destiny.",
    url: "https://cosmiczodiacastrology.com",
    siteName: "Cosmic Zodiac Astrology",
    images: [
      {
        url: "/OG.png",
        width: 1200,
        height: 630,
        alt: "Cosmic Zodiac Astrology Open Graph",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmic Zodiac Astrology",
    description:
      "Explore horoscopes, compatibility, and your astrological destiny.",
    images: ["/OG.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        {children}
        <GoToCompatibilityLink />
        <ReturnHomeLink />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
