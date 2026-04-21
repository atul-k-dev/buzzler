import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-14 px-6 bg-surface/40 backdrop-blur-xl border border-border/50 rounded-full shadow-sm">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
          <img src="/logo.png" alt="logo" width={20} />
          BUZZLER
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-foreground transition-colors text-sm font-medium">Services</a>
          <a href="#" className="text-foreground hover:text-foreground transition-colors text-sm font-medium">Our Work</a>
          <a href="#" className="text-foreground hover:text-foreground transition-colors text-sm font-medium">About</a>
          <a href="#" className="text-foreground hover:text-foreground transition-colors text-sm font-medium">Contact</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:block">
            <button className="px-5 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm rounded-full transition-all shadow-sm">
              Start a Project
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-foreground focus:outline-none">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
