import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { FiCalendar, FiMapPin, FiAward, FiBookOpen } from 'react-icons/fi';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Sc. (Hons) in Information & Communication Technology',
      institution: 'Rajarata University of Sri Lanka (RUSL)',
      timeline: '2022 – Present',
      status: 'Undergraduate',
      type: 'Higher Education',
      badge: 'Academic',
      description:
        'Comprehensive study covering software engineering paradigms, AI & machine learning concepts, distributed database systems, cloud architectures, and object-oriented programming.',
      courses: ['Software Engineering', 'Database Management', 'AI & Algorithms', 'Data Structures', 'Web & Mobile Dev'],
    },
    {
      degree: 'Chartered Accountancy – Level II',
      institution: 'Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka)',
      timeline: 'Currently Reading',
      status: 'Level II Candidate',
      type: 'Professional Qualification',
      badge: 'Finance',
      description:
        'Advanced professional accounting curriculum focusing on Corporate Financial Reporting, Auditing & Assurance, Strategic Management Accounting, and Corporate Governance.',
      courses: ['Financial Reporting', 'Auditing & Assurance', 'Management Accounting', 'Corporate Law', 'Taxation'],
    },
    {
      degree: 'Passed Finalist (AAT Sri Lanka)',
      institution: 'Association of Accounting Technicians of Sri Lanka',
      timeline: 'Completed',
      status: 'Passed Finalist',
      type: 'Professional Qualification',
      badge: 'Completed',
      description:
        'Attained the highest credential stage covering comprehensive financial accounting, cost management, business mathematics, and computerised accounting systems.',
      courses: ['Financial Accounting', 'Cost Accounting', 'Computerised Accounting', 'Business Mathematics', 'Business Law'],
    },
  ];

  return (
    <section id="education" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-premium-red/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-premium-red uppercase tracking-wider mb-3">
            <HiOutlineAcademicCap className="text-sm" /> Academic &amp; Professional Qualifications
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Educational Journey
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Bridging university-level computer science rigor with accredited professional chartered accountancy qualifications.
          </p>
          <div className="w-16 h-1 bg-premium-red mx-auto rounded-full mt-4"></div>
        </div>

        {/* Education Timeline Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-8 border border-white/10 hover:border-premium-red/40 transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Card Top Pill & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-premium-red/10 border border-premium-red/20 flex items-center justify-center text-premium-red text-2xl group-hover:scale-110 transition-transform">
                    <HiOutlineAcademicCap />
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full font-bold ${
                      item.badge === 'Completed'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-premium-red/10 text-premium-red border border-premium-red/20'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Timeline & Institution */}
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-2">
                  <FiCalendar className="text-premium-red text-xs" />
                  <span>{item.timeline}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-red-100 transition-colors">
                  {item.degree}
                </h3>

                <p className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-1.5">
                  <FiMapPin className="text-premium-red text-xs flex-shrink-0" />
                  <span>{item.institution}</span>
                </p>

                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Coursework Tags */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider block mb-2 font-bold">
                  Key Modules &amp; Focus:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.courses.map((c, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-gray-300 font-mono"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
