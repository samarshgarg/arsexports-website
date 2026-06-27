import Hero from "@/components/Hero";
import USPSection from "@/components/USPSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <>
      <Hero />
      <USPSection />
      <FeaturedCategories />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <LeadForm />
    </>
  );
}
