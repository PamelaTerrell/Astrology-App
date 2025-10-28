import { Geist, Geist_Mono } from "next/font/google";
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
  alternates: { canonical: "/" },
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
    site: "@YourTwitterHandle",
    creator: "@YourTwitterHandle",
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

        {/* Google Tag (gtag.js) */}
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
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LFMS2CMGN5'); // automatic first page_view
              console.log('[GA4] initialized');
            `,
          }}
        />

        {/* Route-change page_view tracking */}
        <Suspense fallback={null}>
          <GtagPageView />
        </Suspense>
      </body>
    </html>
  );
}
