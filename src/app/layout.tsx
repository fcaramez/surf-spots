import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0891b2",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://surf-spots.vercel.app"),
  title: "Surf Spots - Discover Perfect Waves Across Europe & Beyond",
  description:
    "Find the perfect surf spot based on your experience level, budget, and wave preferences. Explore detailed guides for surf locations across Europe and worldwide.",
  keywords:
    "surf spots, surfing europe, wave guide, surf travel, surf experience levels, surf destinations, wave sizes, surf cost guide, surf locations",
  authors: [{ name: "Surf Spots" }],
  creator: "Surf Spots",
  publisher: "Surf Spots",
  robots: "index, follow",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
    },
  },
  openGraph: {
    type: "website",
    title: "Surf Spots - Discover Perfect Waves Across Europe & Beyond",
    description:
      "Find the perfect surf spot based on your experience level, budget, and wave preferences. Explore detailed guides for surf locations across Europe and worldwide.",
    url: "/",
    siteName: "Surf Spots",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surf Spots Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surf Spots - Discover Perfect Waves Across Europe & Beyond",
    description:
      "Find the perfect surf spot based on your experience level, budget, and wave preferences. Explore detailed guides for surf locations across Europe and worldwide.",
    images: ["/og-image.jpg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/images/favicon.ico",
    apple: "/icons/icon-192x192.png",
  },
  other: {
    rating: "general",
    "revisit-after": "7 days",
    "geo.region": "EU",
    "geo.position": "48.8566;2.3522",
    ICBM: "48.8566, 2.3522",
  },
};

// JSON-LD Schema
const generateSportsActivityLocationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": "https://surfspots.eu",
    name: "Surf Spots",
    description:
      "Find the perfect surf spot based on your experience level, budget, and wave preferences across Europe and worldwide.",
    sport: ["Surfing"],
    audience: {
      "@type": "Audience",
      audienceType: ["Beginners", "Intermediate Surfers", "Advanced Surfers"],
    },
    additionalType: "http://www.wikidata.org/entity/Q159992",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://surfspots.eu/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
};

const generateBreadcrumbSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://surfspotseu",
      },
    ],
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-32MHVQ2EC3" />
      <head>
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="550af9e9-992f-4c55-986f-0c1b3e131898"
          type="text/javascript"
          async
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateSportsActivityLocationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbSchema()),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
