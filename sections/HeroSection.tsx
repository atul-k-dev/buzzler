'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-[var(--hero-bg)] transition-colors duration-700">
      {/* Embedded CSS for animations and adaptive colors */}
      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --hero-bg: #ffffffff;
          --hero-glow-color: rgba(134, 94, 255, 0.4);
          --hero-glow-color-solid: rgba(134, 94, 255, 0.28);
          --hero-line-color: rgba(168, 85, 247, 0.1);
          --hero-line-glow: rgba(169, 85, 247, 0.32);
          --hero-curtain-opacity: 0.1;
          --hero-curtain-color: rgba(97, 58, 255, 0.41);
          --hero-text-primary: #202020ff;
          --hero-text-secondary: #222222ff;
        }
        .dark {
          --hero-bg: #06030F;
          --hero-glow-color: rgba(99, 58, 255, 0.1);
          --hero-glow-color-solid: rgba(135, 94, 255, 0.25);
          --hero-line-color: rgba(168, 85, 247, 0.4);
          --hero-line-glow: rgba(168, 85, 247, 0.6);
          --hero-curtain-opacity: 0.6;
          --hero-curtain-color: rgba(0,0,0,0.8);
          --hero-text-primary: rgba(255, 255, 255, 0.9);
          --hero-text-secondary: rgba(255, 255, 255, 0.6);
        }
        @keyframes drift {
          0% { background-position: 0% 0%; }
          50% { background-position: 0% 100%; }
          100% { background-position: 0% 0%; }
        }
        @keyframes line-glow {
          0% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.6; transform: scaleY(1.05); }
          100% { opacity: 0.3; transform: scaleY(1); }
        }
        .bg-line {
          position: absolute;
          top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, var(--hero-line-color), transparent);
          box-shadow: 0 0 20px var(--hero-line-glow);
        }
        .vertical-glow {
          position: absolute;
          top: -20%;
          bottom: -20%;
          background: linear-gradient(180deg, transparent 0%, var(--hero-glow-color) 30%, var(--hero-glow-color-solid) 50%, var(--hero-glow-color) 70%, transparent 100%);
          background-size: 100% 200%;
          animation: drift 25s linear infinite;
          filter: blur(20px);
          z-index: 0;
        }
      `}} />

      {/* Dynamic Background Setup - Vertical Lines & Deep Purple Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Curtain shadows */}
        <div className="absolute inset-0 w-full h-full mix-blend-multiply dark:mix-blend-overlay" style={{
          background: "linear-gradient(to right, transparent 5%, var(--hero-curtain-color) 25%, transparent 26%, transparent 45%, var(--hero-curtain-color) 65%, transparent 66%, transparent 85%, var(--hero-curtain-color) 95%)",
          opacity: "var(--hero-curtain-opacity)"
        }} />

        {/* Animated vertical thick glowing beams */}
        <div className="vertical-glow" style={{ left: '2%', width: '12vw', animationDuration: '32s' }} />
        <div className="vertical-glow" style={{ left: '15%', width: '18vw', animationDuration: '28s', animationDelay: '-8s' }} />
        <div className="vertical-glow" style={{ left: '30%', width: '10vw', animationDuration: '24s', animationDelay: '-5s' }} />
        <div className="vertical-glow" style={{ left: '45%', width: '15vw', animationDuration: '30s', animationDelay: '-15s' }} />
        <div className="vertical-glow" style={{ left: '55%', width: '20vw', animationDuration: '35s', animationDelay: '-10s' }} />
        <div className="vertical-glow" style={{ left: '72%', width: '14vw', animationDuration: '26s', animationDelay: '-12s' }} />
        <div className="vertical-glow" style={{ left: '85%', width: '12vw', animationDuration: '28s', animationDelay: '-3s' }} />
        <div className="vertical-glow" style={{ left: '94%', width: '16vw', animationDuration: '33s', animationDelay: '-7s' }} />

        {/* Sharp vertical lines */}
        <div className="bg-line" style={{ left: '12%', animation: 'line-glow 14s ease-in-out infinite 1s' }} />
        <div className="bg-line" style={{ left: '25%', animation: 'line-glow 8s ease-in-out infinite' }} />
        <div className="bg-line" style={{ left: '40%', animation: 'line-glow 11s ease-in-out infinite -2s' }} />
        <div className="bg-line" style={{ left: '65%', animation: 'line-glow 12s ease-in-out infinite 2s' }} />
        <div className="bg-line" style={{ left: '78%', animation: 'line-glow 9s ease-in-out infinite 4s' }} />
        <div className="bg-line" style={{ left: '85%', animation: 'line-glow 10s ease-in-out infinite -4s' }} />

        {/* Bottom blending gradient */}
        <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full -mt-10">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-[#0F081C]/60 backdrop-blur-[4px] mb-8 transition-colors duration-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <span className="text-xs font-semibold text-slate-600 dark:text-white/80 tracking-wide mt-0.5">Trusted by 50+ startups &amp; businesses</span>
          </motion.div>

          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.22 }}
            className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[6rem] font-semibold tracking-tight text-[var(--hero-text-primary)] leading-[1.05] mb-6 max-w-4xl custom-headline transition-colors duration-500"
          >
            Build Software<br />That Actually Works
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.36 }}
            className="text-lg sm:text-lg text-[var(--hero-text-secondary)] mb-10 max-w-2xl font-light transition-colors duration-500"
          >
            We design and build custom web, mobile, and AI-powered applications for startups and growing businesses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.48 }}
            className="flex flex-row gap-4 items-center justify-center"
          >
            <button className="h-13 px-8 rounded-full border border-black/5 dark:border-white/10 bg-slate-100 dark:bg-[#160B21] hover:bg-slate-200 dark:hover:bg-[#1C0E2B] text-slate-900 dark:text-white font-semibold text-base transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50">
              Our Services
            </button>
            <button className="relative h-13 px-8 rounded-full text-white dark:text-black bg-slate-900 dark:bg-white/80 hover:bg-black dark:hover:bg-white font-semibold text-base transition-all overflow-hidden group focus:outline-none focus:ring-2 focus:ring-purple-500/50">
              Start a Project
            </button>
          </motion.div>

          {/* Trusted by Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.65 }}
            className="mt-32 flex flex-col items-center"
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-foreground mb-8 font-medium transition-colors duration-500">
              Backed by founders and businesses worldwide:
            </p>
            <div className="flex flex-wrap bg-white/90 p-2 rounded-full px-5 justify-center gap-8 md:gap-7 items-center transition-all duration-700">
              <img src="/img/Clogo/1.jpg" alt="" width={100} height={100} className="border-r pr-7 border-border" />
              <img src="/img/Clogo/2.png" alt="" width={100} height={100} className="border-r pr-7 border-border" />
              <img src="/img/Clogo/3.png" alt="" width={100} height={100} className=" " />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
