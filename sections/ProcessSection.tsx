'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    desc: 'We ask the hard questions before a single line of code is written. You receive a written product scope summary within 24 hours of our first call.',
    tag: 'Week 1',
  },
  {
    number: '02',
    title: 'Scope & Plan',
    desc: 'You receive a signed document: features, milestones, timeline, and fixed cost. Nothing starts until you’ve approved every line of it.',
    tag: 'Week 1–2',
  },
  {
    number: '03',
    title: 'Design & Build',
    desc: 'Weekly Loom walkthroughs and a live staging link every sprint. You test before we ship — no waiting to see what we built.',
    tag: 'Week 2–8',
  },
  {
    number: '04',
    title: 'Launch & Support',
    desc: '30-day monitoring included as standard. On-call response within 4 business hours. Your product stays live — and we stay responsible for it.',
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
          <h2 className="text-5xl font-semibold max-w-xl text-foreground leading-[1.05]">
            Four steps. You approve everything.
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
            That's Shape your product to the real life.
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
              className="bg-surface rounded-lg p-5 flex-1 flex flex-col justify-between min-h-[280px] group cursor-pointer relative overflow-hidden border border-transparent transition-all duration-300 hover:border-foreground/10 hover:-translate-y-1 active:scale-[0.99]"
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
              <div className="flex items-start  justify-between mb-3">
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
                <h3 className="text-2xl font-bold text-foreground   mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/50 text-sm leading-relaxed line-clamp-4">
                  {step.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="mt-3 w-8 h-[2px] bg-foreground/20 group-hover:w-16 group-hover:bg-foreground/50 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
