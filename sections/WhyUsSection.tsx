'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, Globe2, Layers } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Products Shipped till now' },
  { value: '4–8', label: 'week Avg. MVP Timeline' },
  { value: '30 ', label: 'days Post-Launch Support' },
  { value: '3 ', label: 'yrs Avg. Client Relationship' },
];

const reasons = [
  {
    icon: Layers,
    title: 'Architecture that grows with you',
    desc: 'We architect for growth from day one. When your user base 10x’s, your codebase won’t need a rewrite.',
  },
  {
    icon: Zap,
    title: 'Transparent Pricing. No Surprises.',
    desc: 'Flat-rate project pricing with clear milestones. You know the cost before you commit.',
  },
  {
    icon: Shield,
    title: 'Security Baked In, Not Bolted On',
    desc: 'Auth, encryption, and infrastructure hardening are part of our default build — not an add-on.',
  },
  {
    icon: Globe2,
    title: 'One Team, Full Stack',
    desc: 'Design, frontend, backend, DevOps. You deal with one team, one point of contact, zero hand-off gaps.',
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
          <span className="absolute -top-6 left-0 text-[10px] tracking-widest text-foreground uppercase ">
            /WHY BUZZLER
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between items-start mb-16 gap-6">
          <h2 className="text-5xl font-semibold max-w-xl text-foreground leading-[1.05]">
            We&apos;ve shipped 50+ products.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
            We know what makes them fail.
          </p>
          
        </div>

        {/* Stats Row */}
        <motion.div
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-surface rounded-lg p-5 flex flex-col gap-1 border border-transparent transition-all duration-300 hover:border-foreground/10 hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer"
            >
              <span className="text-4xl md:text-5xl font-black er text-foreground">
                {stat.value}
              </span>
              <span className="text-muted-foreground text-[11px]  uppercase tracking-widest">
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
                className="bg-surface relative rounded-lg p-6 group overflow-hidden flex flex-col gap-5 border border-transparent transition-all duration-300 hover:border-foreground/10 hover:-translate-y-1 active:scale-[0.99] cursor-pointer"
              >
                <div className=' absolute top-19 -rotate-20 right-0 scale-[4] opacity-[0.07] group-hover:opacity-[0.3] transition-colors duration-300'><Icon className="w-15 h-15 text-foreground" strokeWidth={2} /></div>
                <div className="w-10 h-10 bg-foreground/5 border border-border rounded-sm flex items-center justify-center group-hover:bg-foreground/10 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-foreground/70" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground  mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
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
