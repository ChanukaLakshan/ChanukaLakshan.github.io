import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, SiJavascript, SiHtml5, SiTailwindcss, 
  SiPython, SiPhp, SiMysql, SiGit, SiFigma, SiFirebase, SiVite
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaFileInvoiceDollar, FaChartLine, FaBalanceScale, FaDatabase } from 'react-icons/fa';
import { FiCode, FiLayers, FiCpu, FiTrendingUp } from 'react-icons/fi';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend & UI' },
    { id: 'backend', name: 'Backend & Data' },
    { id: 'fintech', name: 'Accounting & FinTech' },
    { id: 'tools', name: 'Tools & DevOps' },
  ];

  const allSkills = [
    // Frontend
    { name: 'React.js', category: 'frontend', icon: <SiReact />, color: 'text-cyan-400', level: 'Advanced', highlight: 'UI Components & State' },
    { name: 'JavaScript (ES6+)', category: 'frontend', icon: <SiJavascript />, color: 'text-yellow-400', level: 'Advanced', highlight: 'Modern Async JS' },
    { name: 'Tailwind CSS', category: 'frontend', icon: <SiTailwindcss />, color: 'text-sky-400', level: 'Advanced', highlight: 'Responsive Design' },
    { name: 'HTML5 & Semantic UI', category: 'frontend', icon: <SiHtml5 />, color: 'text-orange-500', level: 'Expert', highlight: 'Accessibility & SEO' },
    { name: 'CSS3 / Animations', category: 'frontend', icon: <FaCss3Alt />, color: 'text-blue-500', level: 'Advanced', highlight: 'Framer Motion & Keyframes' },
    { name: 'Vite & Modern Tooling', category: 'frontend', icon: <SiVite />, color: 'text-purple-400', level: 'Proficient', highlight: 'Fast Bundling' },

    // Backend & Data
    { name: 'Python', category: 'backend', icon: <SiPython />, color: 'text-yellow-500', level: 'Advanced', highlight: 'AI, OpenCV & Automation' },
    { name: 'Java & Android', category: 'backend', icon: <FaJava />, color: 'text-red-500', level: 'Proficient', highlight: 'Android SDK & OOP' },
    { name: 'PHP', category: 'backend', icon: <SiPhp />, color: 'text-indigo-400', level: 'Proficient', highlight: 'Backend Web & CRUD' },
    { name: 'MySQL & Relational DB', category: 'backend', icon: <SiMysql />, color: 'text-blue-500', level: 'Advanced', highlight: 'Complex Queries & Schema' },
    { name: 'Firebase', category: 'backend', icon: <SiFirebase />, color: 'text-amber-500', level: 'Proficient', highlight: 'Auth & Firestore' },
    { name: 'RESTful APIs', category: 'backend', icon: <FaDatabase />, color: 'text-emerald-400', level: 'Advanced', highlight: 'Integration & JSON' },

    // FinTech & Accounting
    { name: 'Financial Accounting', category: 'fintech', icon: <FaFileInvoiceDollar />, color: 'text-emerald-400', level: 'AAT Finalist', highlight: 'Financial Statements' },
    { name: 'Management Accounting', category: 'fintech', icon: <FaChartLine />, color: 'text-green-400', level: 'AAT / CA SL', highlight: 'Costing & Budgeting' },
    { name: 'Auditing & Assurance', category: 'fintech', icon: <FaBalanceScale />, color: 'text-blue-400', level: 'CA Level II', highlight: 'Internal Controls & Risk' },
    { name: 'Accounting Systems / ERP', category: 'fintech', icon: <FiTrendingUp />, color: 'text-rose-400', level: 'Specialist', highlight: 'FinTech Automation' },

    // Tools & DevOps
    { name: 'Git & GitHub', category: 'tools', icon: <SiGit />, color: 'text-orange-500', level: 'Advanced', highlight: 'Version Control & CI' },
    { name: 'Figma UI/UX', category: 'tools', icon: <SiFigma />, color: 'text-pink-400', level: 'Proficient', highlight: 'Prototyping & Layouts' },
  ];

  const filteredSkills = activeTab === 'all' 
    ? allSkills 
    : allSkills.filter((s) => s.category === activeTab);

  const softSkills = [
    { title: 'High-Pressure Problem Solving', desc: 'Navigating production challenges, complex debugging, and deadlines calmly.' },
    { title: 'Cross-Functional Team Leadership', desc: 'Leading agile project teams, sprint planning, and peer reviews with accountability.' },
    { title: 'Analytical & Critical Reasoning', desc: 'Auditing logic coupled with software algorithmic thinking.' },
    { title: 'Agile & Rapid Problem Solving', desc: 'Iterative delivery and continuous self-improvement.' },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-premium-red/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-premium-red uppercase tracking-wider mb-3">
            <FiCpu className="text-sm" /> Technical &amp; Financial Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills &amp; Expertise
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            A comprehensive suite of technologies, programming languages, database architectures, and financial frameworks.
          </p>
          <div className="w-16 h-1 bg-premium-red mx-auto rounded-full mt-4"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 relative ${
                activeTab === tab.id
                  ? 'text-white bg-premium-red shadow-[0_0_20px_rgba(255,0,0,0.4)]'
                  : 'text-gray-400 hover:text-white bg-white/[0.03] border border-white/5 hover:border-white/20'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-premium-red/40 transition-all group flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`text-3xl sm:text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-gray-300">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-red-100 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-gray-400 font-mono">
                    {skill.highlight}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono uppercase">
                  <span>{skill.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-premium-red/60 group-hover:bg-premium-red"></span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Section: Professional Traits & Specialization Callout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Professional Traits (7 cols) */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-premium-red font-mono">#</span> Core Professional Strengths
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                Interpersonal and engineering attributes honed through demanding software projects and academic rigor.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {softSkills.map((trait, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <h4 className="text-sm font-bold text-white mb-1">{trait.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{trait.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FinTech & AI Specialization Goal (5 cols) */}
          <div className="lg:col-span-5 glass-red p-8 rounded-3xl border border-premium-red/30 flex flex-col justify-between relative overflow-hidden shadow-[0_10px_30px_rgba(255,0,0,0.15)]">
            <div className="absolute top-0 right-0 w-36 h-36 bg-premium-red/20 rounded-full blur-3xl -z-10"></div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-premium-red font-bold block mb-2">
                Strategic Career Focus
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Intelligent Accounting Systems &amp; FinTech
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Pioneering the fusion of computer vision, machine learning models, and automated ERP architectures to redefine financial statement auditing, banknote verification, and corporate reporting.
              </p>
            </div>

            <div className="pt-4 border-t border-premium-red/20 flex items-center justify-between text-xs font-mono text-gray-300">
              <span>Status: Active Research &amp; Building</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-premium-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-premium-red"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
