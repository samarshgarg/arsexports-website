import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About ARS Exports — Heritage, Craftsmanship & Vision",
  description:
    "Learn about ARS Exports — rooted in Moradabad, India's Brass Capital. Our story, values, and commitment to export-grade quality.",
};

export default function About() {
  return <AboutPage />;
}
