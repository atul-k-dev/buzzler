'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Globe, Zap, Users, Target, Layers, Cpu } from 'lucide-react';
import CompanyLayout from '@/components/CompanyLayout';
import Link from 'next/link';

const ease = [0.22, 1, 0.36, 1] as const;

const values = [
  {
    icon: Zap,
    title: 'Speed Without Shortcuts',
    description:
      'We move fast because we have built the right foundations — clean architecture, robust testing, and scalable infrastructure from day one.',
  },
  {
    icon: Globe,
    title: 'Globally Minded',
    description:
      'Our products serve users across mobility corridors, travel routes, and digital platforms spanning multiple countries and cultures.',
  },
  {
    icon: Users,
    title: 'People First',
    description:
      'Every feature we ship starts with a user problem. Empathy is our design compass; data is our validation tool.',
  },
  {
    icon: Target,
    title: 'Outcome Obsessed',
    description:
      'We do not ship lines of code — we ship outcomes. KPIs, growth metrics, and product health are things we care about as much as you do.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Thinking',
    description:
      'From AI inference layers to pixel-perfect interfaces, we own the entire stack and the decisions that shape it.',
  },
  {
    icon: Cpu,
    title: 'Intelligent by Default',
    description:
      'AI and automation are woven into everything we build — not bolted on as features, but embedded as foundational capabilities.',
  },
];

const stats = [
  { value: '50+', label: 'Products shipped' },
  { value: '12+', label: 'Countries reached' },
  { value: '99%', label: 'Client retention' },
  { value: '5yrs', label: 'In the industry' },
];

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <CompanyLayout
      label="/about"
      title="We Build What Matters."
      subtitle="Buzzler Technologies is a product-first software agency specialising in mobility, travel-tech, and intelligent digital platforms that scale."
    >
      {/* ── Stats bar ── */}
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mb-20 border border-border">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-background flex flex-col items-center justify-center py-10 px-6 gap-1"
            >
              <span className="text-4xl font-black tracking-tight">{s.value}</span>
              <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* ── Our Story ── */}
      <FadeIn delay={0.05}>
        <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
          <div>
            <p className="text-[10px] tracking-[0.25em] font-mono text-muted-foreground uppercase mb-4">
              /our story
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-6">
              Born from a gap in the market.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Buzzler started when our founders kept seeing the same problem: ambitious startups and
              growing companies struggling to find an engineering partner that could think both
              product and tech simultaneously. Most agencies were either design shops or dev shops —
              rarely both.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We set out to be different. Every engagement at Buzzler combines strategic product
              thinking with world-class engineering execution. The result? Digital products that don't
              just look good in demos — they survive, scale, and delight in the real world.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-surface border border-border overflow-hidden flex items-center justify-center">
              <img src="/logo.png" alt="Buzzler" className="w-40 opacity-60" />
            </div>
            {/* decorative accent card */}
            <div className="absolute -bottom-4 -right-4 bg-accent text-black text-xs font-black px-4 py-2 rounded-lg tracking-wide shadow-lg">
              EST. 2023
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ── Values ── */}
      <FadeIn delay={0.05}>
        <p className="text-[10px] tracking-[0.25em] font-mono text-muted-foreground uppercase mb-4">
          /our values
        </p>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-10">
          What we believe in.
        </h2>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <FadeIn key={v.title} delay={i * 0.07}>
              <div className="h-full bg-surface  rounded-xl p-4 flex flex-col gap-4 hover:border-accent/40 transition-colors group">
                <div className="w-10 h-10   flex items-center justify-center group-hover:border-accent/40 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* ── CTA ── */}
      <FadeIn delay={0.05}>
        <div className="rounded-xl  bg-surface p-7 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black mb-2">Ready to work together?</h3>
            <p className="text-muted-foreground text-sm">
              Tell us about your project and let's build something remarkable.
            </p>
          </div>
          <Link
            href="/contact"
            className="group flex items-center bg-accent text-black pl-6 pr-2 py-2 rounded-sm font-bold whitespace-nowrap hover:opacity-90 transition-all active:scale-95"
          >
            Start a Project
            <div className="ml-4 bg-black p-2 rounded-md group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-4 h-4 text-accent" />
            </div>
          </Link>
        </div>
      </FadeIn>
    </CompanyLayout>
  );
}
