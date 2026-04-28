'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Silk from '../components/Silk';
import SplitText from '../components/SplitText';
import { useTheme } from 'next-themes';

const ease = [0.22, 1, 0.36, 1] as const;

const ROTATING_WORDS = ["Software", "Platform", "Products"];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const isLight = mounted && resolvedTheme === 'light';

  return (
    <section className="relative pt-32  pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-[#ffe6e2] md:bg-[#ffcdc6] dark:bg-[#0f0307] transition-colors duration-700">
      {/* Dynamic Background Setup - Silk Component */}
      <div className="absolute inset-0 z-0 invert dark:invert-0  overflow-hidden pointer-events-none opacity-100  min-w-[700px]">
        <Silk
          speed={5}
          scale={1}
          color={isLight ? "#449c97ff" : "#c24d5bff"}
          noiseIntensity={isLight ? 2.5 : 1.5}
          rotation={0}
        />
        {/* Bottom blending gradient */}
        <div className="absolute inset-x-0 bottom-0 h-48 sm:h-84 bg-gradient-to-t from-black via-black/70 to-transparent z-40 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border  bg-primary/20 border-primary/20  mb-8 transition-colors duration-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary tracking-wide mt-0.5">50 products shipped since 2023.</span>
          </motion.div>

          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.22 }}
            className="text-[3rem] text-left w-full sm:text-center sm:text-6xl md:text-7xl lg:text-[6rem] font-bold text-[#202020] dark:text-[rgba(255,255,255,0.9)] leading-[1.05] mb-6 max-w-7xl custom-headline transition-colors duration-500"
          >

            We build  <span className="inline-grid align-bottom max-w-[225px]  min-w-[225px] lg:max-w-[440px] lg:min-w-[440px] " style={{ perspective: '1000px' }}>
              <SplitText
                key={wordIndex}
                text={ROTATING_WORDS[wordIndex]}
                className="col-start-1 row-start-1 bg-primary/90 text-accent pl-2 pr-2 rounded-md"
                delay={50}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
              />
            </span>
            <br />founders stop worrying.

          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.36 }}
            className="text-[17px] text-left sm:text-center sm:text-2xl text-foreground/80 mb-6 max-w-2xl transition-colors duration-500"
          >
            For founders who’ve been burned by agencies that over-promise and disappear. We scope honestly, ship on schedule, and stay accountable after launch.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.48 }}
            className="flex w-full flex-col lg:flex-row gap-4 lg:items-center justify-center mt-6"
          >
            <button className="h-13 px-6 sm:px-8 rounded-full border border-primary hover:bg-accent hover:-translate-y-0.5 active:scale-95 text-foreground font-semibold text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer">
              See 3 Products We’ve Shipped →
            </button>
            <button className="relative h-13 px-6 sm:px-8 rounded-full text-primary-foreground bg-primary hover:bg-accent hover:-translate-y-0.5 active:scale-95 font-semibold text-base transition-all duration-300 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer">
              Book a 30-min Strategy Call
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
              Our Other Servises:
            </p>
            <div className="flex flex-wrap dark:bg-white border border-black  p-2 rounded-full px-5 py-3 justify-center gap-5 lg:gap-7 items-center transition-all duration-700">
              <img src="/img/Clogo/1.png" alt="" className="lg:w-30 w-20 lg:border-r lg:pr-7 border-black" />
              <img src="/img/Clogo/2.png" alt="" className="lg:w-30 w-20 lg:border-r lg:pr-7  border-black" />
              <img src="/img/Clogo/3.png" alt="" className="lg:w-30 w-20  " />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
