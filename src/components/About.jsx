import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiDownload, FiCode, FiTrendingUp, FiAward, FiShield } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

const About = () => {
  const pillars = [
    {
      icon: <FiCode className="text-xl text-premium-red" />,
      title: 'Software & AI Systems',
      description: 'Building modern web, mobile, and AI solutions with React, Python, Java, and cloud databases.',
    },
    {
      icon: <FiTrendingUp className="text-xl text-premium-red" />,
      title: 'Accounting & FinTech',
      description: 'AAT Finalist & CA Level II student specializing in automated accounting, ERP systems, and audit workflows.',
    },
    {
      icon: <FiShield className="text-xl text-premium-red" />,
      title: 'System Architecture & Innovation',
      description: 'Designing end-to-end full-stack architectures, microservices, and AI models with scalable and clean code principles.',
    },
  ];

  const highlights = [
    'Undergraduate at Rajarata University of Sri Lanka (B.Sc. in ICT)',
    'Passed Finalist of Association of Accounting Technicians (AAT SL)',
    'Chartered Accountancy Student (CA Sri Lanka – Level II)',
    'Final Year AI & Software Engineering Researcher (DevScore System)',
    'Specialist in AI-driven Automated Currency Recognition & FinTech',
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-premium-red/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-premium-red uppercase tracking-wider mb-3">
            <HiOutlineSparkles /> Discover My Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-premium-red mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual & Highlight Card (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Profile Card */}
              <div className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden shadow-2xl">
                <div className="aspect-square rounded-2xl bg-gradient-to-tr from-black via-[#141414] to-red-950/40 p-8 flex flex-col justify-between border border-white/5 relative overflow-hidden">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono text-premium-red uppercase tracking-widest bg-premium-red/10 border border-premium-red/20 px-3 py-1 rounded-full">
                      Profile Matrix
                    </span>
                    <span className="text-2xl">🇱🇰</span>
                  </div>

                  <div className="text-center my-auto">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-premium-red/10 border border-premium-red/30 flex items-center justify-center text-4xl font-black text-white shadow-[0_0_25px_rgba(255,0,0,0.3)] mb-4">
                      CL
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Chanuka Lakshan</h3>
                    <p className="text-xs text-gray-400 font-mono mt-1">IT Undergraduate &amp; Financial Analyst</p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-white/5">
                    <span>RUSL ICT</span>
                    <span className="text-premium-red font-bold">AAT Finalist</span>
                    <span>CA SL Level 2</span>
                  </div>
                </div>

                {/* Quote Strip */}
                <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <p className="text-xs italic text-gray-400 leading-relaxed text-center">
                    "Bridging the language of balance sheets with the power of artificial intelligence."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio & Core Values (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
                Fusing <span className="text-premium-red">Financial Acumen</span> with Modern <span className="text-white">Software Engineering</span>
              </h3>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                I am an <strong className="text-white">ICT Undergraduate at Rajarata University of Sri Lanka</strong> with a distinct competitive advantage: I possess in-depth professional training in finance as an <strong className="text-white">AAT Finalist</strong> and current <strong className="text-white">Chartered Accountancy (CA Sri Lanka – Level II)</strong> candidate.
              </p>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                Most software engineers understand code, and most accountants understand finance — I bridge both worlds. My vision is to engineer autonomous accounting software, AI-driven audit recognition engines (like my ACNR Currency Recognition system), and robust enterprise software platforms that eliminate manual inefficiencies.
              </p>

              {/* Highlights Checkmarks */}
              <div className="space-y-3 mb-10">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <FiCheckCircle className="text-premium-red text-base flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Core Pillars 3-Grid */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-premium-red/30 transition-all group"
                  >
                    <div className="mb-3 w-9 h-9 rounded-lg bg-premium-red/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {pillar.icon}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">{pillar.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-premium-red hover:bg-red-600 text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(255,0,0,0.35)] transition-all"
                >
                  Let's Discuss Collaboration
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
