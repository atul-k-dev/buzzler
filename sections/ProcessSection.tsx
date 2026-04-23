'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    desc: 'We start by understanding your idea, goals, and constraints. No templates — just a focused conversation about what you actually need to build.',
    tag: 'Week 1',
  },
  {
    number: '02',
    title: 'Scope & Plan',
    desc: 'We break the project into clear deliverables, timelines, and milestones. You know exactly what gets built and when.',
    tag: 'Week 1–2',
  },
  {
    number: '03',
    title: 'Design & Build',
    desc: 'Our team designs, develops, and tests in iterative sprints. You get regular updates and can give feedback at every stage.',
    tag: 'Week 2–8',
  },
  {
    number: '04',
    title: 'Launch & Support',
    desc: "We deploy your product, monitor performance, and stay available post-launch. Shipping isn't the end — it's the beginning.",
    tag: 'Ongoing',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

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
            /HOW WE WORK
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between items-start mb-16 gap-6">
          <h2 className="text-5xl font-semibold text-foreground leading-[1.05]">
            A process built<br />for clarity.
          </h2>
          <p className="text-muted-foreground text-md max-w-sm leading-relaxed font-medium">
            Four steps from first conversation to shipped product. No black boxes, no surprises.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="bg-surface rounded-lg p-6 flex flex-col justify-between min-h-[280px] group cursor-pointer relative overflow-hidden border border-transparent transition-all duration-300 hover:border-foreground/10 hover:-translate-y-1 active:scale-[0.99]"
            >
              {/* Connector arrow on desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute right-[-9px] top-1/2 -translate-y-1/2 z-20 w-4 h-4 items-center justify-center">
                  <svg viewBox="0 0 16 16" className="w-3 h-3 text-border fill-current">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              {/* Top row: number + tag */}
              <div className="flex items-start justify-between mb-8">
                <span
                  className="text-[56px] font-black text-black/20  dark:text-white/20 leading-none er select-none transition-colors duration-300"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <span className="text-[10px]  uppercase tracking-widest text-foreground border border-primary/60 px-2 py-1 rounded-sm mt-1">
                  {step.tag}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-foreground  mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/50 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="mt-6 w-8 h-[2px] bg-foreground/20 group-hover:w-16 group-hover:bg-foreground/50 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
