import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import ProcessSection from "@/sections/ProcessSection";
import WhyUsSection from "@/sections/WhyUsSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import FAQSection from "@/sections/FAQSection";
import LatestInsightsSection from "@/sections/LatestInsightsSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      
      <main>
        <div id="hero"><HeroSection /></div>
        <div id="services"><ServicesSection /></div>
        <div id="process"><ProcessSection /></div>
        <div id="why-us"><WhyUsSection /></div>
        <div id="clients"><TestimonialsSection /></div>
        <div id="blog"><LatestInsightsSection /></div>
        <div id="faq"><FAQSection /></div>
      </main>
      
      <div id="contact"><Footer /></div>
    </div>
  );
}
