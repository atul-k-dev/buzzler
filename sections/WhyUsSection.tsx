'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, Globe2, Layers } from 'lucide-react';

const stats = [
  { value: '2023', label: 'Year Founded' },
  { value: '11–50', label: 'Team Size' },
  { value: '100%', label: 'Code Ownership' },
  { value: '#1', label: 'Mobility & Travel-Tech' },
];

const reasons = [
  {
    icon: Layers,
    title: 'Smart Digital Solutions',
    desc: 'We build scalable web and mobile applications that simplify real-world experiences — from mobility platforms to intelligent travel-tech ecosystems.',
  },
  {
    icon: Zap,
    title: 'Seamless & Affordable Access',
    desc: 'Our solutions are built for everyone. Streamlined access, wide availability, and pricing designed for all categories of users and businesses.',
  },
  {
    icon: Shield,
    title: 'Fortified & Reliable',
    desc: 'Security is at the core of every product we ship. Robust infrastructure, insightful monitoring, and peace of mind — built in from day one.',
  },
  {
    icon: Globe2,
    title: 'Connected Ecosystems',
    desc: 'We operate at the intersection of mobility, travel-tech, and intelligent platforms — creating seamless connected experiences for users and operators alike.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const WhyUsSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.15 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 });

  return (
    <section className="py-24 relative">
      {/* Top Divider */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="w-full h-[1px] bg-border relative">
          <div
            className="absolute top-0 left-0 w-32 h-[4px] bg-foreground/60"
            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
          />
          <span className="absolute -top-6 left-0 text-[10px] tracking-widest text-foreground uppercase font-mono">
            /WHY BUZZLER
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between items-start mb-16 gap-6">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tighter leading-tight">
            Streamlined software solutions.
          </h2>
          <p className="text-foreground/60 text-[13px] md:text-sm max-w-sm leading-relaxed font-medium">
            Buzzler is a fast-growing technology company building smart digital solutions that simplify real-world experiences — headquartered in Hyderabad, India.
          </p>
        </div>

        {/* Stats Row */}
        <motion.div
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-surface rounded-lg p-6 flex flex-col gap-1 border border-transparent transition-all duration-300 hover:border-foreground/10 hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer"
            >
              <span className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
                {stat.value}
              </span>
              <span className="text-foreground/40 text-[11px] font-mono uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons Bento Grid */}
        <motion.div
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                className="bg-surface relative rounded-lg p-8 group overflow-hidden flex flex-col gap-5 border border-transparent transition-all duration-300 hover:border-foreground/10 hover:-translate-y-1 active:scale-[0.99] cursor-pointer"
              >
                <div className=' absolute top-14 -rotate-20 right-0 scale-[6] opacity-[0.07] group-hover:opacity-[0.3] transition-colors duration-300'><Icon className="w-15 h-15 text-foreground" strokeWidth={2} /></div>
                <div className="w-10 h-10 bg-foreground/5 border border-border rounded-sm flex items-center justify-center group-hover:bg-foreground/10 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-foreground/70" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground tracking-tight mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-foreground/50 text-sm leading-relaxed max-w-md">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
