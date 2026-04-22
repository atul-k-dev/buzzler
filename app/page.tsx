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
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground" data-scroll-container>
      <Navbar />
      
      <main>
        <div id="hero" data-scroll data-scroll-speed="0"><HeroSection /></div>
        <div id="services" className="relative z-10 bg-background" data-scroll data-scroll-speed="0.05"><ServicesSection /></div>
        <div id="process" className="relative z-10 bg-background" data-scroll data-scroll-speed="0.05"><ProcessSection /></div>
        <div id="why-us" className="relative z-10 bg-background" data-scroll data-scroll-speed="0.05"><WhyUsSection /></div>
        <div id="blog" className="relative z-10 bg-background" data-scroll data-scroll-speed="0.05"><LatestInsightsSection /></div>
        <div id="clients" className="relative z-10 bg-background" data-scroll data-scroll-speed="0.05"><TestimonialsSection /></div>
        <div id="faq" className="relative z-10 bg-background" data-scroll data-scroll-speed="0.05"><FAQSection /></div>
      </main>
      
      <div id="contact" className="relative z-20 bg-background" data-scroll><Footer /></div>
    </div>
  );
}
