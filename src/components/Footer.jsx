import React, { useState, useEffect } from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-14 bg-[#050505] border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center pb-10 border-b border-white/5">
          {/* Brand & Identity (4 cols) */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-premium-red flex items-center justify-center font-black text-white text-sm shadow-[0_0_10px_#ff0000]">
                CL
              </div>
              <div className="text-xl font-extrabold tracking-tight">
                <span className="text-white">CHANUKA</span>
                <span className="text-premium-red">.L</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              ICT Undergraduate @ Rajarata University • AAT Finalist • CA Sri Lanka (Level II) • Full-Stack &amp; AI Developer.
            </p>
          </div>

          {/* Quick Nav Links (5 cols) */}
          <div className="md:col-span-5 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-premium-red transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Local Time (3 cols) */}
          <div className="md:col-span-3 flex flex-col md:items-end gap-3">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ChanukaLakshan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-300 hover:text-white hover:border-premium-red/40 hover:bg-premium-red/20 transition-all"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/chanuka-lakshan-153361271/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-300 hover:text-white hover:border-premium-red/40 hover:bg-premium-red/20 transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:chanukalakshan.sl@gmail.com"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-300 hover:text-white hover:border-premium-red/40 hover:bg-premium-red/20 transition-all"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>

            <div className="text-[11px] font-mono text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Sri Lanka: {time || 'Loading...'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <div>
            &copy; {currentYear} Chanuka Lakshan. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Built with precision &amp; code</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-premium-red/20 border border-white/10 hover:border-premium-red/40 text-gray-300 hover:text-white transition-all text-xs font-mono"
            aria-label="Back to Top"
          >
            <span>Back to Top</span> <FiArrowUp />
          </button>
        </div>
      </div>

      {/* Subtle Glow at bottom */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-premium-red/10 blur-[100px] rounded-full pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
