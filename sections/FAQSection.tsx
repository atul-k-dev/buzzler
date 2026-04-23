'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const faqData = [
  {
    question: "What types of projects does Buzzler take on?",
    answer: "We build custom web apps, mobile apps, and software platforms for startups and SMBs. Whether you need an MVP in four weeks or a full-scale product rebuild, we scope it and ship it."
  },
  {
    question: "How long does it take to build a product?",
    answer: "A focused MVP typically takes 4 to 8 weeks. Larger platforms with complex requirements are scoped individually and usually run 2 to 4 months. We'll give you a clear timeline before we start."
  },
  {
    question: "Do you work with non-technical founders?",
    answer: "Absolutely. Most of our clients come to us with a business idea, not a spec sheet. We help you define requirements, plan the product, and handle all the technical execution."
  },
  {
    question: "What technologies do you use?",
    answer: "We primarily work with React, Next.js, Node.js, React Native, and Python. We choose the stack that fits your product best, not the one that's most trendy."
  },
  {
    question: "What happens after the product is launched?",
    answer: "We offer post-launch maintenance and support packages that cover bug fixes, performance monitoring, feature updates, and ongoing improvements as your product grows."
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
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)'
        }}
      >
        <div className="p-6">
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
            <h2 className="text-5xl font-semibold text-foreground leading-[1.05]">
              Frequently <br /> Asked <br /> Questions
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
