import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://upwardphysio.com"),
  title: {
    default: "Upward Physio — Rise Higher. Move Better.",
    template: "%s | Upward Physio",
  },
  description:
    "Premium concierge physical therapy that meets you where you are — at home, in clinic, or at work. Personalized 1:1 care for recovery, performance, and prevention.",
  keywords: [
    "physical therapy",
    "concierge physical therapy",
    "orthopedic rehab",
    "injury recovery",
    "sports performance",
    "workplace wellness",
  ],
  openGraph: {
    title: "Upward Physio — Rise Higher. Move Better.",
    description:
      "Premium concierge physical therapy. Personalized 1:1 care at home, in clinic, or at work.",
    url: "https://upwardphysio.com",
    siteName: "Upward Physio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upward Physio",
    description: "Premium concierge physical therapy.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
