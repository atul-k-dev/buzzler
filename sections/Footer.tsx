'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const ctaRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  const ctaInView = useInView(ctaRef, { once: true, amount: 0.25 });
  const navInView = useInView(navRef, { once: true, amount: 0.2 });
  const bottomInView = useInView(bottomRef, { once: true, amount: 0.6 });
  const logoInView = useInView(logoRef, { once: true, amount: 0.3 });

  const navColVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.55, ease, delay: i * 0.1 },
    }),
  };

  return (
    <footer className="text-foreground pt-24 pb-10 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-20 left-1/4"><Plus size={16} /></div>
        <div className="absolute top-20 left-2/4"><Plus size={16} /></div>
        <div className="absolute top-20 left-3/4"><Plus size={16} /></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">

        {/* CTA Section */}
        <div ref={ctaRef} className="flex w-full justify-between  gap-12 items-center mb-12 lg:mb-32">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={ctaInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease }}

          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-10 leading-[1.1]">
              Ready to build<br />your next product?
            </h2>
            <Link href="/contact" className="group inline-flex items-center bg-accent text-black pl-6 pr-2 py-2 rounded-sm font-bold text-lg hover:bg-[#96db00] transition-all transform active:scale-95">
              <span>Start a Project</span>
              <div className="ml-6 bg-black p-2 rounded-md group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-5 h-5 text-accent" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={ctaInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease, delay: 0.15 }}
            className="lg:flex justify-start lg:justify-end hidden"
          >
            <div className="relative rounded-sm flex items-center justify-center overflow-hidden  group">

              <img src="/logo.png" alt="logo" className='w-60' />


            </div>
          </motion.div>

        </div>

        {/* Navigation Links Section */}
        <div ref={navRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-8 mb-24">

          {/* Email / Phone Column */}
          <motion.div
            custom={0}
            variants={navColVariants}
            initial="hidden"
            animate={navInView ? 'visible' : 'hidden'}
            className="col-span-2 lg:col-span-2"
          >
            <div className="mb-4">
              <span className="text-[10px] tracking-widest text-foreground uppercase font-mono">/Headquarters</span>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mt-2 cursor-pointer hover:opacity-80 transition-opacity">
                Hyderabad
              </h3>
            </div>
            <div>
              <span className="text-[10px] tracking-widest text-foreground uppercase font-mono">/Company size</span>
              <p className="text-xl md:text-2xl font-medium mt-2">
                11-50 employees
              </p>
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div
            custom={1}
            variants={navColVariants}
            initial="hidden"
            animate={navInView ? 'visible' : 'hidden'}
            className='w-full lg:text-right'
          >
            <span className="text-[10px] tracking-widest text-foreground uppercase   font-mono">/Navigation</span>
            <ul className="mt-6 space-y-4 font-semibold ">
              <li><Link href="/" className="text-lg text-foreground hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/#services" className="text-lg text-foreground hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/#why-us" className="text-lg text-foreground hover:text-accent transition-colors">Why Us</Link></li>
              <li><Link href="/#blog" className="text-lg text-foreground hover:text-accent transition-colors">Our Products</Link></li>
            </ul>
          </motion.div>

          {/* Company / Legal Column */}
          <motion.div
            custom={2}
            variants={navColVariants}
            initial="hidden"
            animate={navInView ? 'visible' : 'hidden'}
            className='w-full lg:text-right'
          >
            <span className="text-[10px] tracking-widest text-foreground uppercase font-mono">/Company</span>
            <ul className="mt-6 space-y-4 font-semibold ">
              <li><Link href="/about" className="text-lg text-foreground hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/legal/terms" className="text-lg text-foreground hover:text-accent transition-colors">Terms of Services</Link></li>
              <li><Link href="/legal/privacy" className="text-lg text-foreground hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>

          </motion.div>

          {/* Follow Us Column */}
          <motion.div
            custom={3}
            variants={navColVariants}
            initial="hidden"
            animate={navInView ? 'visible' : 'hidden'}
            className='w-full lg:text-right'
          >
            <span className="text-[10px] tracking-widest text-foreground uppercase font-mono">/Follow Us</span>
            <ul className="mt-6 space-y-4 font-semibold ">
              <li><a href="https://www.youtube.com/channel/UCV7QqrR7dqIcAU4rrQ6T5wA" target='_blank' rel='noopener noreferrer' className="text-lg text-foreground hover:text-accent transition-colors">Youtube</a></li>
              <li><a href="https://www.instagram.com/balert.in/" target='_blank' rel='noopener noreferrer' className="text-lg text-foreground hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/buzzler-technologies/" target='_blank' rel='noopener noreferrer' className="text-lg text-foreground hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="https://x.com/balert_in" target='_blank' rel='noopener noreferrer' className="text-lg text-foreground hover:text-accent transition-colors">X/Twitter</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          ref={bottomRef}
          initial={{ opacity: 0, y: 16 }}
          animate={bottomInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex flex-col gap-1 items-center md:items-start">
            <div className="w-32 h-[2px] bg-border relative overflow-hidden mb-2">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-primary" />
            </div>
            <p className="text-[10px] tracking-[0.2em] font-mono text-foreground">
              @{currentYear} BUZZLER. ALL RIGHTS RESERVED.
            </p>
          </div>

          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="text-[10px] tracking-widest text-foreground font-mono">MADE BY</span>
            <span className="text-xs font-bold tracking-tighter flex items-center uppercase gap-1 group-hover:text-[#fa57579d] transition-colors">
              Atul Kumar <Zap className="w-3 h-3 fill-current" />
            </span>
          </div>
        </motion.div>

        {/* Giant Text Logo Background */}
        <motion.div
          ref={logoRef}
          initial={{ opacity: 0, y: 40 }}
          animate={logoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="mt-5 select-none pointer-events-none flex flex-col items-center overflow-visible"
        >
          <h4
            className="text-[15vw] font-black tracking-[10] xl:tracking-tighter leading-none italic uppercase whitespace-nowrap"
            style={{
              WebkitTextStroke: '2.5px var(--muted-foreground)',
              color: 'transparent'
            }}
          >
            BUZZLER
          </h4>
        </motion.div>
      </div>
    </footer>
  );
};

const Zap = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export default Footer;
