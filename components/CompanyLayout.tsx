'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface CompanyLayoutProps {
  children: React.ReactNode;
  /** small mono label above the title, e.g. "/about" */
  label: string;
  title: string;
  subtitle?: string;
}

export default function CompanyLayout({
  children,
  label,
  title,
  subtitle,
}: CompanyLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/20 selection:text-accent relative">
      {/* Noise overlay */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage: "url('/img/bgEffect.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '150px',
        }}
      />

      {/* ── Top nav bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-background/80 backdrop-blur-sm border border-border/80">
          {/* Back home */}
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Home</span>
          </Link>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold tracking-tight text-foreground text-lg"
          >
            <img src="/logo.png" alt="Buzzler" width={20} />
            BUZZLER
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* ── Page hero ── */}
      <section className="pt-40 pb-16 px-4 sm:px-8 max-w-6xl mx-auto relative z-10">
        <p className="text-[10px] tracking-[0.25em] font-mono text-muted-foreground uppercase mb-4">
          {label}
        </p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-5">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </section>

      {/* ── Page content ── */}
      <main className="relative z-10 px-4 sm:px-8 max-w-6xl mx-auto pb-24">
        {children}
      </main>

      {/* ── Minimal footer ── */}
      <footer className="relative z-10 border-t border-border mt-16 py-8 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.2em] font-mono text-muted-foreground">
            © {new Date().getFullYear()} BUZZLER TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6 text-xs font-medium text-muted-foreground">
            <Link href="/legal/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/legal/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
