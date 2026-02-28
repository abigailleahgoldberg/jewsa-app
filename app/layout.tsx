import type { Metadata } from "next";
import "./globals.css";

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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,700;0,9..40,900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
