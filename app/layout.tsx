import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../lib/cart-context";
import Script from 'next/script';
import NetworkBar from "../components/NetworkBar";
import ExitIntent from "../components/ExitIntent";

export const metadata: Metadata = {
  metadataBase: new URL("https://jewsa.com"),
  title: { default: "JewSA — Where Pride Meets Punchlines", template: "%s | JewSA" },
  description: "Jewish-American pride merch that actually slaps. Shirts, hats, and gear for the tribe that built America.",
  openGraph: {
    title: "JewSA — Where Pride Meets Punchlines",
    description: "Jewish-American pride merch that actually slaps.",
    url: "https://jewsa.com",
    siteName: "JewSA",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "JewSA — Where Pride Meets Punchlines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JewSA — Where Pride Meets Punchlines",
    description: "Jewish-American pride merch that actually slaps.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: 'https://jewsa.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,700;0,9..40,900&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "JewSA",
          "url": "https://jewsa.com",
          "description": "Jewish-American pride merch. Shirts, hats, and gear for the tribe that built America — and never stopped being funny about it."
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "JewSA",
          "url": "https://jewsa.com"
        }) }} />
      </head>
      <body>
        <NetworkBar />
        <CartProvider>{children}</CartProvider>
        <ExitIntent />
      </body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PQ7WTL0B3G"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PQ7WTL0B3G');
          `}
        </Script>
    </html>
  );
}
