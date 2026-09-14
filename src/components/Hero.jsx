import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight, FiCode, FiAward, FiCpu, FiTrendingUp } from 'react-icons/fi';
import { HiOutlineAcademicCap } from 'react-icons/hi';

const Hero = () => {
  const stats = [
    { label: 'Academic Standing', value: 'ICT @ RUSL', sub: 'Rajarata University' },
    { label: 'Financial Qualification', value: 'AAT Finalist', sub: 'CA Sri Lanka Level II' },
    { label: 'Projects & Systems', value: '10+', sub: 'AI, Web & Mobile' },
    { label: 'Open Source', value: 'GitHub Active', sub: 'Production & Research' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#050505]">
      {/* Dynamic Background Glows & Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-premium-red/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-10 -right-32 w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2.5s' }}></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content (Left 7 cols) */}
          <div className="lg:col-span-7 text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-premium-red/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(255,0,0,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-gray-300 tracking-wider uppercase">
                Available for Software & FinTech Roles
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                <span className="text-white block">Hi, I'm</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-premium-red">
                  Chanuka Lakshan
                </span>
              </h1>
            </motion.div>

            {/* Subtitle / Focus */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg sm:text-xl font-normal max-w-2xl mb-6 leading-relaxed"
            >
              <span className="text-white font-semibold">ICT Undergraduate</span> at Rajarata University &amp; <span className="text-premium-red font-semibold">AAT Finalist / CA Sri Lanka Student</span>. 
              Engineering intelligent solutions at the intersection of <span className="text-white font-medium">Artificial Intelligence</span>, <span className="text-white font-medium">Software Systems</span>, and <span className="text-white font-medium">Financial Technology</span>.
            </motion.p>

            {/* Domain Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2.5 mb-10"
            >
              {[
                { name: 'FinTech & Accounting Tech', icon: <FiTrendingUp className="text-premium-red" /> },
                { name: 'AI & Machine Learning', icon: <FiCpu className="text-premium-red" /> },
                { name: 'Full-Stack Development', icon: <FiCode className="text-premium-red" /> },
                { name: 'Cloud & Database Systems', icon: <FiAward className="text-premium-red" /> },
              ].map((chip, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-medium text-gray-300 hover:border-premium-red/40 hover:bg-white/[0.06] transition-all"
                >
                  {chip.icon}
                  <span>{chip.name}</span>
                </div>
              ))}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 bg-premium-red hover:bg-red-600 text-white rounded-full font-bold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,0,0,0.7)] transition-all"
              >
                View Featured Projects <FiArrowRight className="text-base" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 border border-white/20 hover:border-premium-red/50 text-white rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white/[0.05] transition-all"
              >
                Contact Me
              </motion.a>

              <a
                href="#about"
                className="px-4 py-3 text-gray-400 hover:text-white flex items-center gap-2 text-xs font-mono uppercase tracking-wider transition-colors ml-2"
              >
                <FiDownload className="text-premium-red" /> CV Summary
              </a>
            </motion.div>

            {/* Social Links Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex items-center gap-5 pt-8 border-t border-white/10"
            >
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Connect:</span>
              <a
                href="https://github.com/ChanukaLakshan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-300 hover:text-white hover:border-premium-red/40 hover:bg-white/[0.08] transition-all hover:scale-110 shadow-sm"
                aria-label="GitHub Profile"
              >
                <FiGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/chanuka-lakshan-153361271/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-300 hover:text-white hover:border-premium-red/40 hover:bg-white/[0.08] transition-all hover:scale-110 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin className="text-lg" />
              </a>
              <div className="h-4 w-px bg-white/10 mx-2"></div>
              <span className="text-xs text-gray-400 font-mono">📍 Sri Lanka</span>
            </motion.div>
          </div>

          {/* Hero Visual Card (Right 5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Outer Card with Neon Red Border & Glow */}
              <div className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden group hover:border-premium-red/40 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-premium-red/20 rounded-full blur-3xl pointer-events-none"></div>

                {/* Profile Header */}
                <div className="flex items-center gap-5 mb-8 pb-6 border-b border-white/10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 via-premium-red to-black p-0.5 shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                    <div className="w-full h-full bg-[#0d0d0d] rounded-2xl flex items-center justify-center">
                      <span className="text-3xl font-black text-white tracking-tighter">CL</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">Chanuka Lakshan</h3>
                    <p className="text-xs font-mono text-premium-red uppercase tracking-wider mt-0.5">Undergraduate &amp; Analyst</p>
                    <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400">
                      <HiOutlineAcademicCap className="text-premium-red text-sm" />
                      <span>Rajarata University of SL</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {stats.map((item, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-premium-red/30 hover:bg-white/[0.04] transition-all"
                    >
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-white block truncate">
                        {item.value}
                      </span>
                      <span className="text-[11px] text-gray-500 block truncate">
                        {item.sub}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Terminal Preview */}
                <div className="p-4 rounded-xl bg-black/60 border border-white/5 font-mono text-xs text-gray-400 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-gray-500 pb-2 border-b border-white/5">
                    <span>SYSTEM_STATUS</span>
                    <span className="text-emerald-400">ONLINE</span>
                  </div>
                  <p className="text-gray-300">
                    <span className="text-premium-red">&gt;</span> focus: <span className="text-white">["AI_Systems", "FinTech", "Full_Stack"]</span>
                  </p>
                  <p className="text-gray-400">
                    <span className="text-premium-red">&gt;</span> goal: <span className="text-gray-300">"Autonomous Accounting &amp; Smart Tech"</span>
                  </p>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-5 glass-red px-4 py-2.5 rounded-2xl border border-premium-red/30 shadow-[0_10px_25px_rgba(255,0,0,0.25)] flex items-center gap-3 backdrop-blur-xl"
              >
                <div className="w-8 h-8 rounded-xl bg-premium-red/20 flex items-center justify-center text-premium-red text-sm font-bold">
                  ⚡
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block">Final Year Research</span>
                  <span className="text-xs font-bold text-white">DevScore AI System</span>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass px-4 py-2.5 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3 backdrop-blur-xl"
              >
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-premium-red text-sm font-bold">
                  📊
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block">Finance &amp; Tech</span>
                  <span className="text-xs font-bold text-white">AAT Finalist</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
