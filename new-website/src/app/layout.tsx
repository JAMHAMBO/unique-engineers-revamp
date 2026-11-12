import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  themeColor: "#1f54a3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "UNIQUE ENGINEERS",
    template: "%s | UNIQUE ENGINEERS",
  },
  description:
    "Operating continuously since 1999. Turnkey contractor for automotive paint shops, heavy conveyors, steel structures, and plant maintenance across India with zero safety casualties.",
  keywords: [
    "UNIQUE ENGINEERS",
    "Automotive Paint Finishing Systems",
    "Paint Shop Contractor India",
    "Conveyor Installation India",
    "Power and Free Conveyor",
    "Industrial Steel Structures Mumbai",
    "Plant Maintenance",
    "Spray Booths Ovens Tanks",
    "Eisenmann Durr Subcontractor",
    "Bhiwandi Fabrication Works",
  ],
  authors: [{ name: "UNIQUE ENGINEERS" }],
  creator: "UNIQUE ENGINEERS",
  publisher: "UNIQUE ENGINEERS",
  metadataBase: new URL("https://uniqueengineers.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UNIQUE ENGINEERS | Turnkey Automotive Paint Finishing Systems",
    description:
      "25+ Years of Engineering Excellence. 500+ Projects & Shutdowns Delivered across India. Zero Safety Casualties.",
    url: "https://uniqueengineers.com",
    siteName: "UNIQUE ENGINEERS",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased selection:bg-brand-500 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

