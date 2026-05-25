import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import cmspLogo from '@/assets/cmsp-logo-lg.svg';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            <Button 
              className="tactical-gradient text-primary-foreground font-headline font-bold text-xs uppercase tracking-widest scale-95 active:scale-90 transition-transform"
              asChild
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          {/* Hamburger Menu Toggle (Mobile Only) */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-white border-none focus-visible:ring-0 active:scale-95 transition-transform"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface/95 border-b border-border backdrop-blur-md md:hidden flex flex-col p-6 space-y-6 z-40 transition-all duration-300">
          <NavLink 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => 
              `font-headline uppercase tracking-widest text-sm font-bold py-2 ${
                isActive ? 'text-primary' : 'text-slate-400 hover:text-white'
              }`
            }
          >
            Capabilities
          </NavLink>
          <NavLink 
            to="/compliance" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => 
              `font-headline uppercase tracking-widest text-sm font-bold py-2 ${
                isActive ? 'text-primary' : 'text-slate-400 hover:text-white'
              }`
            }
          >
            Compliance
          </NavLink>
          <NavLink 
            to="/metrics" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => 
              `font-headline uppercase tracking-widest text-sm font-bold py-2 ${
                isActive ? 'text-primary' : 'text-slate-400 hover:text-white'
              }`
            }
          >
            Metrics
          </NavLink>
          <div className="pt-4 border-t border-white/5">
            <Button 
              className="tactical-gradient text-primary-foreground font-headline font-bold text-xs uppercase tracking-widest w-full py-4 h-auto"
              asChild
            >
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </Button>
          </div>
        </div>
      )}
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
