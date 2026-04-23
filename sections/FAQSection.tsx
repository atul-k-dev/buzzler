'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const faqData = [
  {
    question: "What does this cost?",
    answer: "Most MVPs fall between ₹3–10L (or $5K–$15K USD) depending on scope. Larger platforms are quoted individually. We give you a fixed price before work begins — no hourly billing, no scope-creep invoices."
  },
  {
    question: "What makes Buzzler different from other dev agencies?",
    answer: "Three things: we own and operate our own live products (Balert, GrowBit, VedaBux), so we think like founders — not just coders. We charge flat rates so your budget is protected. And we include 30 days of post-launch support as standard, not an upsell."
  },
  {
    question: "What if I need to change scope mid-project?",
    answer: "Scope changes are documented and priced separately before any work begins on them. Nothing changes without your written sign-off. You are never surprised by a bill."
  },
  {
    question: "Can you build what I'm envisioning?",
    answer: "If you can describe it, we can scope it. We build web apps, mobile apps, internal tools, and custom platforms — for everything from pre-seed MVPs to established products that need a rebuild."
  },
  {
    question: "How fast can you actually ship?",
    answer: "A focused MVP: 4–8 weeks. A complex platform: 2–4 months. We scope it before we commit, so you get a real timeline — not an estimate that doubles."
  },
  {
    question: "Do I need to be technical to work with you?",
    answer: "No. Most of our clients come to us with a business idea and a problem to solve. We handle requirements, architecture, and all execution. You stay focused on your business."
  },
  {
    question: "What's your tech stack?",
    answer: "React, Next.js, Node.js, React Native, and Python. We recommend the stack that serves your product — not the one that’s trending on Hacker News."
  },
  {
    question: "What does post-launch support look like?",
    answer: "We offer 30-day included post-launch coverage for bug fixes and monitoring. After that, we offer ongoing retainers at a flat monthly rate. Talk to us about what’s right for your product."
  }
];

const FAQItem = ({
  question, answer, isOpen, onClick, index, inView,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
  inView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease, delay: 0.1 + index * 0.08 }}
    >
      <div
        className={`mb-2 transition-all duration-300 ${isOpen ? 'bg-surface/80' : 'bg-surface'} hover:bg-surface/90 overflow-hidden cursor-pointer group active:scale-[0.995]`}
        onClick={onClick}
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'
        }}
      >
        <div className="p-4 lg:p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-foreground text-lg md:text-xl font-medium pr-10 leading-tight">
              {question}
            </h3>
            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-sm flex items-center justify-center">
              {isOpen ? <Minus size={16} className="text-foreground" /> : <Plus size={16} className="text-foreground" />}
            </div>
          </div>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <p className="text-foreground/70 text-sm md:text-base leading-relaxed max-w-[90%]">
                  {answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section className="py-24 relative max-w-7xl mx-auto">
      {/* Top Divider */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, ease }}
        className="max-w-7xl mx-auto px-6 mb-12"
      >
        <div className="w-full h-[1px] bg-border relative">
          <div className="absolute top-0 left-0 w-32 h-[4px] bg-foreground/60"
            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }} />
          <span className="absolute -top-6 left-0 text-[10px] tracking-widest text-foreground uppercase ">/COMMON QUESTIONS</span>
        </div>
      </motion.div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 lg:px-8 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-5"
          >
            <h2 className="text-5xl font-semibold  text-foreground leading-[1.05]">
              Here&apos;s what founders ask us most.
            </h2>
          </motion.div>

          {/* Right Column (FAQ Items) */}
          <div className="lg:col-span-7 flex flex-col gap-2">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
                inView={inView}
              />
            ))}
          </div>

            

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
