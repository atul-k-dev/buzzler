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
          animate={cardsInView ? 'visible' : 'hidden' }      
          className="flex flex-col lg:flex-row gap-4 mt-4"
        >
          {/* Column 1: Assign tasks with ease (Left Tall) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="bg-surface lg:w-1/3 relative rounded-xl p-5 flex flex-col justify-between border border-white/[0.03] shadow-2xl overflow-hidden"
          >
            <div className="z-20">
              <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                Assign tasks with ease
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed pr-4">
                Delegate work to the right people in just a few clicks, keeping projects structured, accountable, and moving forward.
              </p>
            </div>
            
            <div className="flex-1 flex flex-col justify-end mt-4 relative z-10 w-full">
              <div className="flex flex-col gap-3 w-full mb-4 mx-auto">
                 {/* Row 1 */}
                 <div className="grid grid-cols-3 w-full gap-3 justify-start">
                   <div className="w-full h-full rounded-xl bg-gray-200 overflow-hidden relative shadow-lg">
                     <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop" alt="avatar" className="w-full h-full object-cover grayscale opacity-90" />
                   </div>
                   <div className="w-full h-full rounded-lg bg-primary/20 border border-border"></div>
                   <div className="w-full h-full rounded-lg bg-primary/20 border border-border"></div>
                 </div>
                
                 {/* Row 3 */}
                 <div className="grid grid-cols-3 w-full gap-3 justify-start">
                   <div className="w-full h-full rounded-lg bg-primary/20 border border-border"></div>
                   <div className="w-full h-full rounded-xl bg-gray-200 overflow-hidden relative shadow-lg">
                     <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop" alt="avatar" className="w-full h-full object-cover grayscale opacity-90" />
                   </div>
                   <div className="w-full h-full rounded-lg bg-primary/20 border border-border"></div>
                 </div>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm font-medium text-foreground">Marketing Members</span>
                <span className="text-xs font-semibold text-foreground bg-primary/10 px-5 py-2.5 rounded-full">UI/UX Designers</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Middle Stack */}
          <div className="flex flex-col gap-5 lg:w-1/3">
            {/* Card 2: Boost Efficiency (Middle Top) */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="bg-surface h-1/2 relative rounded-xl p-5 flex flex-col  justify-between border border-white/[0.03] overflow-hidden"
            >
              <div className="flex-1 flex items-center justify-center max-h-[100px]  relative">

                 {/* Rocket */}
                 <motion.div 
                   className="relative z-10 w-28 h-28 rotate-45"
                 >
                   <img src="https://em-content.zobj.net/source/apple/354/rocket_1f680.png" alt="rocket" className="w-full h-full object-contain " />
                 </motion.div>
              </div>
              <div className="z-20 ">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Boost Efficiency
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Help your team achieve greater efficiency with tools that support focus, reduce bottlenecks, and encourage smoother collaboration.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Task Tracking (Middle Bottom) */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="bg-surface h-1/2 relative rounded-xl p-5 flex flex-col justify-between border border-white/[0.03] shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-3 ">
                 {/* Checked Task */}
                 <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 cursor-pointer">
                   <div className="w-[20px] h-[20px] rounded-[6px] bg-foreground flex items-center justify-center shrink-0">
                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                   </div>
                   <span className="text-foreground text-sm font-medium line-through decoration-foreground decoration-[2px]">Present a bug as a feature</span>
                 </motion.div>
                 {/* Unchecked Task */}
                 <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 cursor-pointer">
                   <div className="w-[20px] h-[20px] rounded-[6px] bg-[#2a2a2a] border-[2px] border-[#444] flex items-center justify-center shrink-0"></div>
                   <span className="text-foreground text-sm font-medium">Find bug from landing page</span>
                 </motion.div>
                 {/* Faded Task */}
                 <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 cursor-pointer">
                   <div className="w-[20px] h-[20px] rounded-[6px] bg-[#1a1a1a] border-[2px] border-[#333] flex items-center justify-center shrink-0"></div>
                   <span className="text-foreground text-sm font-medium">Present a bug as a feature</span>
                 </motion.div>
              </div>
              
              <div className="mt-3 z-20">
                <div className="inline-block mb-2">
                  <h3 className="text-xl font-bold text-foreground tracking-tight leading-none">
                    Task Tracking
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Maintain accurate accounting of tasks, ensuring visibility into progress and completion history across the team.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Global Schedule (Right Tall) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="bg-surface lg:w-1/3 flex-1 relative rounded-xl p-5 flex flex-col justify-between border border-white/[0.03] shadow-2xl overflow-hidden"
          >
            <div className="z-20">
              <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                Global Schedule
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed pr-4">
                Collaborate seamlessly across time zones with built-in scheduling that keeps deadlines aligned for global teammates.
              </p>
            </div>
            
            <div className="absolute -bottom-20 -right-[45%] w-[120%] aspect-square z-10 pointer-events-none flex items-center justify-center overflow-hidden">
               {/* 3D Glowing Globe */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                 className="w-[100%] h-[100%] rounded-full relative overflow-hidden" 
                 style={{ background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #d4d4d4 25%, #737373 60%, #171717 100%)' }}
               >
                 {/* Dotted pattern overlay */}
                 <div className="absolute inset-0 opacity-70" style={{ backgroundImage: 'radial-gradient(#000000 2.5px, transparent 2.5px)', backgroundSize: '18px 18px', backgroundPosition: 'center' }}></div>
                 
                 
               </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
