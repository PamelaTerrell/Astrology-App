import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import NavBar from "./components/NavBar";
import ReturnHomeLink from "./components/ReturnHomeLink";
import GoToCompatibilityLink from "./components/GoToCompatabilityLink";
import GoToDarkSideLink from "./components/GoToDarkSide";
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
    "Discover your daily horoscope, explore zodiac compatibility, and uncover the deeper truths of astrology with Cosmic Zodiac Astrology.",
  keywords: [
    "horoscope",
    "astrology",
    "zodiac signs",
    "zodiac compatibility",
    "daily horoscope",
    "birth chart",
    "sun sign",
    "moon sign",
    "rising sign",
  ],
  authors: [
    {
      name: "Pamela J. Terrell",
      url: "https://pamelajterrell.com",
    },
  ],
  creator: "Pamela J. Terrell",
  publisher: "Pamela J. Terrell",
  metadataBase: new URL("https://cosmiczodiacastrology.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
  openGraph: {
    title: "Cosmic Zodiac Astrology",
    description: "Explore horoscopes, compatibility, and your astrological destiny.",
    url: "https://cosmiczodiacastrology.com",
    siteName: "Cosmic Zodiac Astrology",
    images: [
      {
        url: "/OG.png",
        width: 1200,
        height: 630,
        alt: "Cosmic Zodiac Astrology - OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmic Zodiac Astrology",
    description: "Explore horoscopes, compatibility, and your astrological destiny.",
    images: ["/OG.png"],
    site: "@YourTwitterHandle", // optional
    creator: "@YourTwitterHandle", // optional
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        {children}
        <GoToCompatibilityLink />
        <GoToDarkSideLink />
        <ReturnHomeLink />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
