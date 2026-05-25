import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import cmspLogo from '@/assets/cmsp-logo-lg.svg';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface shadow-[0_24px_48px_-12px_rgba(0,218,243,0.08)] border-b border-border">
      <div className="flex justify-between items-center w-full px-8 py-4 mx-auto max-w-screen-2xl">
        <Link to="/" className="flex items-center gap-2">
          <img 
            alt="CMSP Logo" 
            className="w-8 h-8" 
            src={cmspLogo} 
          />
          <span className="text-2xl font-light tracking-tighter text-primary font-headline">CMSP</span>
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-headline uppercase tracking-widest text-sm font-bold transition-colors ${
                isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-slate-400 hover:text-white'
              }`
            }
          >
            Capabilities
          </NavLink>
          <NavLink 
            to="/compliance" 
            className={({ isActive }) => 
              `font-headline uppercase tracking-widest text-sm font-bold transition-colors ${
                isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-slate-400 hover:text-white'
              }`
            }
          >
            Compliance
          </NavLink>
          <NavLink 
            to="/metrics" 
            className={({ isActive }) => 
              `font-headline uppercase tracking-widest text-sm font-bold transition-colors ${
                isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-slate-400 hover:text-white'
              }`
            }
          >
            Metrics
          </NavLink>
        </div>

        <div className="flex items-center gap-6">
          <Button 
            className="tactical-gradient text-primary-foreground font-headline font-bold text-xs uppercase tracking-widest scale-95 active:scale-90 transition-transform"
            asChild
          >
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 mx-auto max-w-screen-2xl">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <span className="text-xs text-slate-500 uppercase tracking-tight">
            © 2026 Cyber Mission Support Platform. All rights reserved.
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link to="/privacy" className="text-xs text-slate-500 uppercase tracking-tight hover:text-primary transition-colors opacity-80 hover:opacity-100">Privacy</Link>
          <Link to="/terms" className="text-xs text-slate-500 uppercase tracking-tight hover:text-primary transition-colors opacity-80 hover:opacity-100">Terms</Link>
          <Link to="/contact" className="text-xs text-slate-500 uppercase tracking-tight hover:text-primary transition-colors opacity-80 hover:opacity-100">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};
