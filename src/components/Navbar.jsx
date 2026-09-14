import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiDownload, FiArrowUpRight } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        {/* Brand Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-premium-red to-red-700 flex items-center justify-center font-black text-white text-lg tracking-tighter shadow-[0_0_15px_rgba(255,0,0,0.5)] group-hover:scale-105 transition-transform">
            CL
          </div>
          <div className="text-xl font-bold tracking-tight">
            <span className="text-white group-hover:text-gray-200 transition-colors">CHANUKA</span>
            <span className="text-premium-red">.L</span>
          </div>
        </motion.a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-full ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-premium-red/20 border border-premium-red/50 rounded-full shadow-[0_0_12px_rgba(255,0,0,0.4)] -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-premium-red hover:bg-red-600 rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,0,0,0.35)] hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] transition-all hover:scale-105"
          >
            Hire Me <FiArrowUpRight className="text-sm" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white text-xl focus:outline-none hover:border-premium-red/40 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-premium-red/20 text-premium-red border border-premium-red/30'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-premium-red shadow-[0_0_8px_#ff0000]" />}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-premium-red rounded-xl shadow-[0_0_15px_rgba(255,0,0,0.4)]"
                >
                  Hire Me / Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
