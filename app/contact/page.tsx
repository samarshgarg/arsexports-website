import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact ARS Exports — Get a Quote or Request a Catalogue",
  description:
    "Reach out to ARS Exports for product enquiries, custom designs, export quotes, or catalogue requests. Based in Moradabad & Noida, India.",
};

export default function Contact() {
  return <ContactPage />;
}
