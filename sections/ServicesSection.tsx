'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    id: 1,
    title: "Web Development",
    desc: "High-performance websites and web apps built with modern frameworks, designed to convert visitors into customers.",
    img: "/img/cardImg/c1.png",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android apps that deliver a seamless, native-quality experience for your users.",
    img: "/img/cardImg/c2.png",
  },
  {
    id: 3,
    title: "Custom Software",
    desc: "Tailor-made software solutions built around your exact business processes, from MVPs to full-scale platforms.",
    img: "/img/cardImg/c3.png",
  },
  {
    id: 4,
    title: "CRM & Business Tools",
    desc: "Custom CRM systems and internal business tools that keep your team efficient and your clients happy.",
    img: "/img/cardImg/c4.png",
  },
  {
    id: 5,
    title: "API Integration",
    desc: "Connect your app with third-party services, payment gateways, and external systems to extend functionality.",
    img: "/img/cardImg/c5.png",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease, delay: i * 0.1 },
  }),
};

const ServicesSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.4 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.05 });

  return (
    <section className="py-24 relative">
      {/* Top Divider */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, ease }}
        className="max-w-7xl mx-auto px-6 mb-12"
      >
        <div className="w-full h-[1px] bg-border relative">
          <div className="absolute top-0 left-0 w-32 h-[4px] bg-foreground/60"
            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }} />
          <span className="absolute -top-6 left-0 text-[10px] tracking-widest text-foreground uppercase font-mono">/WHAT WE BUILD</span>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between items-start mb-16 gap-6"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.65, ease }}
            className="text-5xl md:text-6xl font-bold text-foreground tracking-tighter leading-tight"
          >
            Digital products,<br />end to end.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.65, ease, delay: 0.12 }}
            className="text-foreground/60 text-[13px] md:text-sm max-w-sm leading-relaxed font-medium"
          >
            From idea to launch — we build the web apps, mobile apps, and custom software your business needs to grow.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Top Row: 2 large cards */}
          <motion.div
            className="lg:col-span-3"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={gridInView ? 'visible' : 'hidden'}
          >
            <ServiceCard service={services[0]} height="h-[320px]" />
          </motion.div>
          <motion.div
            className="lg:col-span-3"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={gridInView ? 'visible' : 'hidden'}
          >
            <ServiceCard service={services[1]} height="h-[320px]" />
          </motion.div>

          {/* Bottom Row: 3 smaller cards */}
          {[services[2], services[3], services[4]].map((svc, i) => (
            <motion.div
              key={svc.id}
              className="lg:col-span-2"
              custom={i + 2}
              variants={cardVariants}
              initial="hidden"
              animate={gridInView ? 'visible' : 'hidden'}
            >
              <ServiceCard service={svc} height="h-[300px]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, height }: { service: typeof services[0], height: string }) => {
  return (
    <div
      className={`bg-surface p-6 rounded-lg overflow-hidden flex flex-col justify-end relative group cursor-pointer transition-transform duration-300 active:scale-[0.98] ${height}`}
    >
      {/* 3D Image Background Overlay */}
      <div className="absolute -top-4 -right-33 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105">
        <img
          src={service.img}
          alt={service.title}
          className="w-[46%] opacity-90"
        />
      </div>

      <div className="relative z-10 pb-4">
        <h3 className="text-2xl md:text-[28px] font-bold text-foreground mb-3 tracking-tight leading-[1.1]">
          {service.title}
        </h3>
        <p className="text-foreground/60 text-sm md:text-[15px] leading-snug max-w-[280px] font-medium">
          {service.desc}
        </p>
      </div>
    </div>
  );
};

export default ServicesSection;
