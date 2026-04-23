'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Paperclip, Phone } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const GetInTouchSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const [activeType, setActiveType] = useState('Startup');

  return (
    <section className="py-24 max-w-7xl mx-auto relative z-10 text-foreground font-sans overflow-x-hidden">

      {/* Top Divider */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="w-full h-[1px] bg-border relative">
          <div
            className="absolute top-0 left-0 w-32 h-[4px] bg-foreground/60"
            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
          />
          <span className="absolute -top-6 left-0 text-[10px] tracking-widest text-foreground uppercase font-mono">
            /Get in Touch
          </span>
        </div>
      </div>


      <div ref={ref} className="grid lg:grid-cols-2 px-4 sm:px-8 gap-4 lg:gap-4 items-stretch overflow-hidden">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col justify-between"
        >
          <div className="mb-16">

            <h2 className="text-5xl font-semibold text-foreground leading-[1.05]">
              Contact <br /> With <br /> Buzzler
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-auto">
            {/* Chat Card */}
            <div className="bg-surface rounded-lg p-4 relative flex flex-col justify-between min-h-[130px] transition-all duration-300 hover:border-foreground/10 hover:-translate-y-1 active:scale-[0.99] cursor-pointer group border border-transparent">
              <div className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full bg-accent"></div>
              <Paperclip className="w-5 h-5 text-foreground opacity-80" />
              <div className="mt-8">
                <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">/CHAT TO SALES</div>
                <div className="font-semibold text-base">hello@buzzler.com</div>
              </div>
            </div>

            {/* Call Card */}
            <div className="bg-surface rounded-lg p-4 relative flex flex-col justify-between min-h-[130px] transition-all duration-300 hover:border-foreground/10 hover:-translate-y-1 active:scale-[0.99] cursor-pointer group border border-transparent">
              <div className="absolute top-5 right-5 flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
              </div>
              <Phone className="w-5 h-5 text-foreground opacity-80" />
              <div className="mt-8">
                <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">/CALL US</div>
                <div className="font-semibold text-base">+1-555-000-8888</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column (Form) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="bg-surface p-3 lg:p-5 rounded-lg w-full max-w-xl ml-auto"
        >
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-muted  rounded-md px-4 py-3.5 text-base text-foreground placeholder:text-[#666] focus:outline-none focus:border-[#333] transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-muted  rounded-md px-4 py-3.5 text-base text-foreground placeholder:text-[#666] focus:outline-none focus:border-[#333] transition-colors"
            />

            <div className="grid grid-cols-3 gap-3 my-1">
              {['Startup', 'Agency', 'Enterprise'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setActiveType(type)}
                  className={`py-2.5 px-2 rounded-full text-sm font-semibold transition-all active:scale-[0.95] ${activeType === type
                    ? 'bg-accent text-foreground'
                    : 'bg-muted text-muted-foreground hover:border-accent hover:text-foreground'
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <textarea
              placeholder="Tell us about your project (size, needs, challenges...)"
              rows={4}
              className="w-full bg-muted  rounded-md px-4 py-3.5 text-base text-foreground placeholder:text-[#666] focus:outline-none focus:border-[#333] transition-colors resize-none mb-2"
            ></textarea>

            <button
              type="button"
              className="w-full bg-accent text-foreground font-semibold py-3 rounded-full transition-all active:scale-[0.98] hover:bg-accent/90"
            >
              Get in touch
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default GetInTouchSection;
