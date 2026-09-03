import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Suspense } from "react";

import GtagPageView from "./GtagPageView";

import NavBar from "./components/NavBar";
import ReturnHomeLink from "./components/ReturnHomeLink";
import GoToCompatibilityLink from "./components/GoToCompatabilityLink";
import GoToDarkSideLink from "./components/GoToDarkSide";
import Footer from "./components/Footer";

const displayFont = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://cosmiczodiacastrology.com"),

  title: {
    default: "Cosmic Zodiac Astrology",
    template: "%s | Cosmic Zodiac Astrology",
  },

  description:
    "Explore the twelve zodiac signs, personality traits, compatibility, strengths, shadow traits, and cosmic insights.",

  keywords: [
    "astrology",
    "zodiac",
    "zodiac signs",
    "zodiac compatibility",
    "astrology compatibility",
    "sun signs",
    "zodiac personality traits",
    "astrological signs",
  ],

  authors: [
    {
      name: "Pamela J. Terrell",
      url: "https://pamelajterrell.com",
    },
  ],

  creator: "Pamela J. Terrell",
  publisher: "Pamela J. Terrell",

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
    description:
      "Explore zodiac signs, personality traits, compatibility, strengths, and shadow traits.",
    url: "/",
    siteName: "Cosmic Zodiac Astrology",
    images: [
      {
        url: "/OG.png",
        width: 1200,
        height: 630,
        alt: "Cosmic Zodiac Astrology",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cosmic Zodiac Astrology",
    description:
      "Explore zodiac signs, personality traits, compatibility, strengths, and shadow traits.",
    images: ["/OG.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <NavBar />

        {children}

        <GoToCompatibilityLink />
        <GoToDarkSideLink />
        <ReturnHomeLink />

        <Footer />

        <Analytics />

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-LFMS2CMGN5"
        />

        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                dataLayer.push(arguments);
              }

              gtag("js", new Date());

              gtag("config", "G-LFMS2CMGN5", {
                send_page_view: true
              });
            `,
          }}
        />

        <Suspense fallback={null}>
          <GtagPageView />
        </Suspense>
      </body>
    </html>
  );
}