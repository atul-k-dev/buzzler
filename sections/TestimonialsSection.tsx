'use client';

import React, { useRef, useCallback } from 'react';
import { Quote } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const ease = [0.22, 1, 0.36, 1] as const;

const testimonials = [
  {
    name: "Benjamin Daul",
    role: "Head of Engineering",
    text: "Buzzler built our internal dashboard in three weeks. It's clean, fast, and exactly what we needed — no unnecessary complexity.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
  },
  {
    name: "Jesse Leigh",
    role: "CEO & Founder",
    text: "We came with a rough idea and left with a fully working mobile app. The team was quick, communicative, and delivered beyond expectations.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
  },
  {
    name: "Amy Louise",
    role: "Customer Success Lead",
    text: "Our custom CRM completely changed how we manage clients. The Buzzler team understood our workflow better than we did.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
  },
  {
    name: "David Chen",
    role: "Co-Founder & CTO",
    text: "We needed a reliable dev partner to ship fast without cutting corners. Buzzler delivered a scalable web platform on time and on budget.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
  },
  {
    name: "Sarah Miller",
    role: "Product Director",
    text: "From wireframe to production in six weeks. The attention to detail in both the UI and the backend performance was impressive.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&q=80",
  },
  {
    name: "Robert Fox",
    role: "Startup Founder",
    text: "They didn't just write code — they asked the right questions, challenged bad assumptions, and helped us build the right product.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
  }
];

// Duplicate the array for a seamless loop (used by the desktop marquee)
const duplicatedTestimonials = [...testimonials, ...testimonials];

/** Shared testimonial card */
const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="w-full flex-shrink-0 bg-surface border border-border rounded-2xl p-4 sm:p-6 flex flex-col justify-between group hover:border-foreground/20 active:scale-[0.99] transition-all duration-300 relative cursor-pointer">
    <div className="mb-6">
      <Quote className="w-8 h-8 text-foreground mb-4 fill-foreground" strokeWidth={1} />
      <p className="text-foreground text-sm md:text-lg font-medium ">
        &quot;{t.text}&quot;
      </p>
    </div>

    <div className="flex items-center justify-between mt-auto">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-white/5">
          <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h5 className="text-foreground font-bold text-sm ">{t.name}</h5>
          <p className="text-foreground/40 text-[11px] font-medium uppercase tracking-wider">{t.role}</p>
        </div>
      </div>

      <div className="w-8 h-8 bg-primary border border-border rounded-sm flex items-center justify-center group-hover:border-white/20 transition-colors">
        <XIcon className="w-3.5 h-3.5 text-primary-foreground" />
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  // Use a separate ref for the marquee/carousel container
  const marqueeRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  const marqueeInView = useInView(marqueeRef, { once: true, amount: 0.1 });

  // Embla carousel (mobile only)
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: false },
    [autoplay.current]
  );

  return (
    <section className="py-14 lg:pt-14 lg:py-34 overflow-hidden relative xl:max-w-7xl mx-auto">
      {/* Top Divider */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="w-full h-[1px] bg-border relative">
          <div
            className="absolute top-0 left-0 w-32 h-[4px] bg-foreground/60"
            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
          />
          <span className="absolute -top-6 left-0 text-[10px] tracking-widest text-foreground uppercase ">
            /TESTIMONIALS
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-16">
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, ease }}
            className="text-5xl font-semibold text-foreground leading-[1.05]"
          >
            Our Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, ease, delay: 0.14 }}
            className="text-muted-foreground text-md max-w-[280px] leading-relaxed font-medium"
          >
            Real products, real teams, real results — here&apos;s what founders and builders say about working with us.
          </motion.p>
        </div>
      </div>

      {/* 
        Desktop Marquee — the outer fade-in wrapper uses useInView (not whileInView)
        so it doesn't conflict with the inner infinite marquee animation.
        The marquee track itself always runs; only the container fades in once.
      */}
      <motion.div
        ref={marqueeRef}
        initial={{ opacity: 0, y: 30 }}
        animate={marqueeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease, delay: 0.2 }}
        className="relative w-full overflow-hidden hidden lg:block"
      >
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-18 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-18 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* 
          Inner marquee track: uses CSS animation instead of Framer Motion animate
          to avoid any conflict with the parent's animate prop.
        */}
        <div
          className="flex gap-4 px-6 marquee-track"
          style={{ width: 'fit-content' }}
        >
          {duplicatedTestimonials.map((t, idx) => (
            <div key={idx} className="w-[300px] md:w-[350px] flex-shrink-0">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Mobile Embla Carousel */}
      <motion.div
        initial={{ opacity: 1, y: 30 }}
        animate={marqueeInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 30 }}
        transition={{ duration: 0.7, ease, delay: 0.2 }}
        className="lg:hidden px-4 pr-0 sm:pr-4"
      >
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-2 pl-2 pr-1">
              {testimonials.map((t, idx) => (
                <div key={idx} className="flex-[0_0_93%] min-w-0">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CSS for the marquee animation */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 40s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default TestimonialsSection;
