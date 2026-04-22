'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How We Work', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Clients', href: '#clients' },
  { label: 'FAQ', href: '#faq' },
];

const ease = [0.4, 0, 0.2, 1] as const;

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      // At very top — always show
      setAtTop(currentY < 10);

      // Scroll down → hide (only after scrolling 60px+ from top)
      // Scroll up → show
      if (currentY > 60) {
        if (diff > 2) {
          setVisible(false);
          setMobileOpen(false); // close mobile menu on hide
        } else if (diff < -2) {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentY;
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // navbar height compensation
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    setMobileOpen(false);
    handleNavClick('#contact');
  };

  return (
    <>
      {/* ── Navbar bar ── */}
      <motion.nav
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25, ease }}
        className="fixed top-0 left-0 right-0 z-50 py-4 px-2 sm:px-6 lg:px-8"
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between h-14 px-3 pl-4 sm:pl-6 sm:px-6 sm:pr-5 rounded-full transition-all duration-300 border ${atTop
            ? 'bg-transparent border-transparent '
            : 'bg-background  border-border'
            }`}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex-shrink-0 cursor-pointer text-lg font-bold tracking-tight text-foreground flex items-center gap-2 focus:outline-none"
          >
            <img src="/logo.png" alt="logo" width={20} />
            BUZZLER
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium focus:outline-none"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Desktop CTA */}
            <button
              onClick={scrollToContact}
              className="hidden md:flex items-center gap-2 px-5 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm rounded-full transition-all shadow-sm"
            >
             Let's Start
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-13 h-9 rounded-full bg-surface text-foreground focus:outline-none transition-colors hover:bg-surface"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-[4px] md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.3, ease }}
              className="fixed top-20 left-4 right-4 z-50 md:hidden bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Nav links */}
              <div className="flex flex-col py-3">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.05, duration: 0.3, ease }}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-6 py-4 text-foreground transition-colors text-base font-medium border-b border-border last:border-b-0 focus:outline-none"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3, ease }}
                className="p-4 border-t border-border"
              >
                <button
                  onClick={scrollToContact}
                  className="w-full flex items-center justify-between bg-foreground text-background font-bold text-sm pl-5 pr-3 py-3 rounded-full hover:opacity-90 transition-all active:scale-[0.98]"
                >
                  <span>Start a Project</span>
                  <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
