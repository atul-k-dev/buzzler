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
         --hero-bg: #ffe6e2ff;
          --hero-glow-color: rgba(255, 58, 104, 0.1);
          --hero-glow-color-solid: rgba(255, 58, 104, 0.25);
          --hero-line-color: rgba(255, 58, 104, 0.4);
          --hero-line-glow: rgba(255, 58, 104, 0.6);
          --hero-curtain-opacity: 0.1;
          --hero-curtain-color: rgba(255, 255, 255, 0.8);
          --hero-text-primary: #202020ff;
          --hero-text-secondary: #222222ff;
        }

    
        .dark {
          --hero-bg: #0f0307ff;
          --hero-glow-color: rgba(255, 58, 160, 0.1);
          --hero-glow-color-solid: rgba(255, 94, 132, 0.25);
          --hero-line-color: rgba(247, 85, 104, 0.4);
          --hero-line-glow: rgba(247, 85, 174, 0.6);
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
          width: 0px;
          background: linear-gradient(to bottom, transparent, var(--hero-line-color), transparent);
          box-shadow: 0 0 20px var(--hero-line-glow);
        }
        .vertical-glow {
          position: absolute;
          top: -20%;
          bottom: -20%;
          background: linear-gradient(180deg, transparent 0%, var(--hero-glow-color) 30%, var(--hero-glow-color-solid) 50%, var(--hero-glow-color) 70%, transparent 100%);
          background-size: 150% 250%;
          animation: drift 1s ease-in-out infinite;
          filter: blur(10px);
          z-index: 0;
        }

        @media screen and (min-width: 768px) {
          :root {
           --hero-bg: #ffcdc6ff;
          }
         .dark {
          --hero-bg: #0f0307ff;
         }
          .vertical-glow {
          filter: blur(20px);
          }
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
        <div className="vertical-glow hidden md:block" style={{ left: '2%', width: '12vw', animationDuration: '32s' }} />
        <div className="vertical-glow  md:block" style={{ left: '15%', width: '18vw', animationDuration: '28s', animationDelay: '-8s' }} />
        <div className="vertical-glow hidden md:block" style={{ left: '30%', width: '10vw', animationDuration: '24s', animationDelay: '-5s' }} />
        <div className="vertical-glow hidden md:block" style={{ left: '45%', width: '15vw', animationDuration: '30s', animationDelay: '-15s' }} />
        <div className="vertical-glow hidden md:block" style={{ left: '55%', width: '20vw', animationDuration: '35s', animationDelay: '-10s' }} />
        <div className="vertical-glow hidden md:block" style={{ left: '72%', width: '14vw', animationDuration: '26s', animationDelay: '-12s' }} />
        <div className="vertical-glow  md:block" style={{ left: '85%', width: '12vw', animationDuration: '28s', animationDelay: '-3s' }} />
        <div className="vertical-glow hidden md:block" style={{ left: '94%', width: '16vw', animationDuration: '33s', animationDelay: '-7s' }} />

        {/* Bottom blending gradient */}
        <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/40  mb-8 transition-colors duration-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-foreground tracking-wide mt-0.5">Trusted by 50+ startups &amp; businesses</span>
          </motion.div>

          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.22 }}
            className="text-[3.2rem] text-left sm:text-center sm:text-6xl md:text-7xl lg:text-[6rem] font-semibold tracking-tight text-[var(--hero-text-primary)] leading-[1.05] mb-6 max-w-4xl custom-headline transition-colors duration-500"
          >
            Build Software<br />That Actually Works
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.36 }}
            className="text-lg text-left sm:text-center sm:text-lg text-[var(--hero-text-secondary)] mb-10 max-w-2xl font-light transition-colors duration-500"
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
            <button className="h-13 px-6 sm:px-8 rounded-full border border-accent hover:bg-accent hover:-translate-y-0.5 active:scale-95 text-foreground font-semibold text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer">
              Our Services
            </button>
            <button className="relative h-13 px-6 sm:px-8 rounded-full text-primary-foreground bg-primary hover:bg-accent hover:-translate-y-0.5 active:scale-95 font-semibold text-base transition-all duration-300 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer">
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
            <p className=" px-14 lg:px-0 text-xs uppercase tracking-widest text-foreground mb-8 font-medium transition-colors duration-500">
              Backed by founders and  businesses worldwide:
            </p>
            <div className="flex flex-wrap bg-white/65 border border-primary  p-2 rounded-full px-5 py-3 justify-center gap-5 lg:gap-7 items-center transition-all duration-700">
              <img src="/img/Clogo/1.png" alt="" className="lg:w-30 w-20 lg:border-r lg:pr-7 border-primary" />
              <img src="/img/Clogo/2.png" alt="" className="lg:w-30 w-20 lg:border-r lg:pr-7  border-primary" />
              <img src="/img/Clogo/3.png" alt="" className="lg:w-30 w-20  " />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
