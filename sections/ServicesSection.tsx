'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    id: 1,
    title: "Web Development",
    desc: "Web apps that load in under 2s and turn visitors into paying users — built on React and Next.js.",
    img: "/img/cardImg/c1.png",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "iOS and Android apps built once, deployed everywhere — with performance your users won't notice is cross-platform.",
    img: "/img/cardImg/c2.png",
  },
  {
    id: 3,
    title: "Custom Software",
    desc: "Custom-built tools shaped around your exact workflow — no off-the-shelf bloat, no wasted features.",
    img: "/img/cardImg/c3.png",
  },
  {
    id: 4,
    title: "CRM & Business Tools",
    desc: "Internal CRMs and ops tools that replace 3 spreadsheets and an email chain — built for your exact process.",
    img: "/img/cardImg/c4.png",
  },
  {
    id: 5,
    title: "API Integration",
    desc: "Plug your product into payment gateways, logistics APIs, or any third-party system — without breaking what already works.",
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
          <span className="absolute -top-6 left-0 text-[10px] tracking-widest text-foreground uppercase ">/WHAT WE DELIVER</span>
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
            className="text-5xl max-w-xl font-semibold text-foreground leading-[1.05]"
          >
            Everything you need to ship and grow.
          </motion.h2>
          
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
            <ServiceCard service={services[0]} height="h-[280px]" />
          </motion.div>
          <motion.div
            className="lg:col-span-3"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={gridInView ? 'visible' : 'hidden'}
          >
            <ServiceCard service={services[1]} height="h-[280px]" />
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
              <ServiceCard service={svc} height="h-[290px]" />
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
      className={`bg-surface p-4 md:p-6 rounded-lg overflow-hidden flex flex-col justify-end relative group cursor-pointer transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] ${height}`}
    >
      {/* 3D Image Background Overlay */}
      <div className="absolute -top-0 -right-23 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105">
        <img
          src={service.img}
          alt={service.title}
          className="w-[46%] opacity-90"
        />
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl md:text-[28px] font-bold text-foreground mb-3  leading-[1.1]">
          {service.title}
        </h3>
        <p className="text-foreground/60 text-sm leading-snug max-w-[280px] font-medium">
          {service.desc}
        </p>
      </div>
    </div>
  );
};

export default ServicesSection;
