import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARS Exports — Premium Brass Artifacts from Moradabad, India",
  description:
    "ARS Exports crafts exclusive brass home decor, religious artifacts, and premium gift items in Moradabad, India's Brass Capital. Exporting to 30+ countries worldwide.",
  keywords:
    "brass exports, brass decor, brass religious items, brass gifts, Moradabad brass, India brass exports, handcrafted brass",
  openGraph: {
    title: "ARS Exports — Premium Brass Artifacts",
    description:
      "Exclusive handcrafted brass artifacts from Moradabad. Decor, Religious & Gift collections for global importers.",
    url: "https://arsexports.com",
    siteName: "ARS Exports",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
