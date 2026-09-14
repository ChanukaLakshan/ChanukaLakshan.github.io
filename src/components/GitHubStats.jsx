import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiActivity, FiLayers, FiGitPullRequest, FiStar, FiArrowUpRight, FiGitBranch } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

const GitHubStats = () => {
  const [hoveredDay, setHoveredDay] = useState(null);

  const stats = [
    { label: 'Total Contributions', value: '500+', icon: <FiActivity className="text-premium-red text-xl" /> },
    { label: 'Active Repositories', value: '15+', icon: <FiLayers className="text-premium-red text-xl" /> },
    { label: 'Code Reviews & PRs', value: '35+', icon: <FiGitPullRequest className="text-premium-red text-xl" /> },
    { label: 'Primary Languages', value: 'Python / JS', icon: <FiGitBranch className="text-premium-red text-xl" /> },
  ];

  const featuredRepos = [
    {
      name: 'DevScore',
      desc: 'AI-driven candidate job readiness scoring mining verifiable GitHub activity & resume verification.',
      lang: 'React / Express / Python',
      langColor: 'bg-cyan-400',
      stars: '★ Final Year',
      url: 'https://github.com/ChanukaLakshan/DevScore',
    },
    {
      name: 'ACNR-System',
      desc: 'Automated Currency Note Recognition and counterfeit validation using Python & OpenCV.',
      lang: 'Python / OpenCV',
      langColor: 'bg-yellow-400',
      stars: '★ Computer Vision',
      url: 'https://github.com/ChanukaLakshan/ACNR-Automated-Currency-Note-Recognition-',
    },
    {
      name: 'Plant-Growth-App',
      desc: 'Data-driven leaf count tracking and botanical morphometrics analytics application with Python & Tailwind.',
      lang: 'Python / Vision',
      langColor: 'bg-emerald-400',
      stars: '★ Analytics',
      url: 'https://github.com/ChanukaLakshan/Plant-Growth-App',
    },
    {
      name: 'mood-melodies-app',
      desc: 'Interactive mood-adaptive audio player & playlist recommender built with TypeScript and Web Audio API.',
      lang: 'TypeScript / React',
      langColor: 'bg-blue-400',
      stars: '★ Web App',
      url: 'https://github.com/ChanukaLakshan/mood-melodies-app',
    },
  ];

  // 12 columns x 7 days heatmap simulation (84 cells)
  const heatmapData = Array.from({ length: 84 }, (_, index) => {
    const intensity = (index * 7 + 13) % 10;
    let count = 0;
    let colorClass = 'bg-white/[0.04]';

    if (intensity > 7) {
      count = Math.floor(Math.random() * 6) + 7;
      colorClass = 'bg-premium-red shadow-[0_0_8px_rgba(255,0,0,0.6)]';
    } else if (intensity > 4) {
      count = Math.floor(Math.random() * 4) + 3;
      colorClass = 'bg-red-600/80';
    } else if (intensity > 2) {
      count = Math.floor(Math.random() * 2) + 1;
      colorClass = 'bg-red-900/60';
    }

    return { id: index, count, colorClass, day: `Day ${(index % 7) + 1}`, week: `W${Math.floor(index / 7) + 1}` };
  });

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-premium-red/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-premium-red uppercase tracking-wider mb-3">
            <FiGithub className="text-sm" /> Open-Source &amp; Version Control
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            GitHub Activity &amp; Stats
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Track my engineering velocity, repository milestones, and constant commitment to learning through code.
          </p>
          <div className="w-16 h-1 bg-premium-red mx-auto rounded-full mt-4"></div>
        </div>

        {/* Stats 4-Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-premium-red/40 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{item.label}</span>
                <div className="w-9 h-9 rounded-xl bg-premium-red/10 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <span className="text-3xl font-extrabold text-white tracking-tight">{item.value}</span>
            </motion.div>
          ))}
        </div>

        {/* Main Grid: Heatmap & Featured Repositories */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Contribution Heatmap Card (7 cols) */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white">
                    <FiGithub />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-mono">@ChanukaLakshan</h3>
                    <p className="text-[11px] text-gray-500 font-mono">Annual Activity Matrix</p>
                  </div>
                </div>

                <a
                  href="https://github.com/ChanukaLakshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-white/[0.04] hover:bg-premium-red/20 border border-white/10 hover:border-premium-red/40 text-xs font-mono text-gray-300 hover:text-white transition-all flex items-center gap-1.5"
                >
                  Visit Profile <FiArrowUpRight />
                </a>
              </div>

              {/* Heatmap Grid */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-[11px] font-mono text-gray-500 px-1">
                  <span>Jan</span>
                  <span>Apr</span>
                  <span>Jul</span>
                  <span>Oct</span>
                  <span>Dec</span>
                </div>

                <div className="grid grid-flow-col grid-rows-7 gap-1.5 p-3 rounded-2xl bg-black/50 border border-white/5">
                  {heatmapData.map((cell) => (
                    <div
                      key={cell.id}
                      onMouseEnter={() => setHoveredDay(cell)}
                      onMouseLeave={() => setHoveredDay(null)}
                      className={`w-3.5 h-3.5 rounded-[3px] ${cell.colorClass} transition-all duration-200 hover:scale-125 cursor-pointer relative`}
                    />
                  ))}
                </div>
              </div>

              {/* Hover Day Info & Legend */}
              <div className="flex items-center justify-between text-xs font-mono text-gray-400 pt-3 border-t border-white/5">
                <div>
                  {hoveredDay ? (
                    <span className="text-premium-red font-bold">
                      {hoveredDay.count > 0 ? `${hoveredDay.count} commits on ${hoveredDay.week}` : 'No commits on this day'}
                    </span>
                  ) : (
                    <span className="text-gray-500">Hover over cells for activity</span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-white/[0.04]"></div>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-red-900/60"></div>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-red-600/80"></div>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-premium-red"></div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Repositories (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <HiOutlineSparkles className="text-premium-red" /> Pinned Repositories
            </h3>

            {featuredRepos.map((repo, i) => (
              <a
                key={i}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-premium-red/40 transition-all block group hover:-translate-y-1 shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white font-mono group-hover:text-red-200 transition-colors flex items-center gap-2">
                    <FiLayers className="text-premium-red text-xs" /> {repo.name}
                  </span>
                  <FiArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  {repo.desc}
                </p>
                <div className="flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${repo.langColor}`}></span>
                    <span>{repo.lang}</span>
                  </div>
                  <span>{repo.stars}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
