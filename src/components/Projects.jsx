import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiCode, FiLayers, FiInfo, FiX, FiCheck } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import devscorePreview from '../assets/devscore-preview.png';
import voltrangePreview from '../assets/voltrange-preview.jpg';
import reelmatePreview from '../assets/reelmate-preview.jpg';
import acnrPreview from '../assets/acnr-preview.jpg';
import plantGrowthPreview from '../assets/plant-growth-preview.jpg';
import moodMelodiesPreview from '../assets/mood-melodies-preview.jpg';
import oderaPreview from '../assets/odera-preview.jpg';
import portfolioPreview from '../assets/portfolio-preview.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI & Computer Vision' },
    { id: 'mobile', name: 'Mobile App' },
    { id: 'web', name: 'Web & Full Stack' },
  ];

  const projects = [
    {
      id: 'devscore',
      title: 'DevScore — AI Job Readiness Scoring System',
      shortDesc: 'AI-driven candidate job readiness scoring platform comparing claimed resume competencies against mined GitHub code evidence.',
      category: 'ai',
      badge: 'Final Year Research Project',
      image: devscorePreview,
      tech: ['React (Vite)', 'Node.js', 'Express', 'Supabase', 'Python', 'AI/ML', 'Google OAuth'],
      github: 'https://github.com/ChanukaLakshan/DevScore',
      demo: 'https://github.com/ChanukaLakshan/DevScore',
      fullDescription:
        'DevScore is an advanced AI-driven job readiness scoring platform engineered by Team Script Fusion as a Final Year University Project. The system analyzes software engineering candidates by semantically comparing the skills claimed on their resumes against verifiable, mined GitHub code evidence, providing recruiters with an objective, evidence-based readiness score.',
      features: [
        'Semantic resume parsing and NLP skill extraction compared against mined GitHub activity',
        'Three-tier architecture: React (Vite) client, Node.js + Express REST API, and Supabase Postgres database',
        'AI/ML microservice integration for candidate ranking and semantic evaluation',
        'Google OAuth authentication foundation and secure session management',
        'Automated repository analysis to evaluate coding depth and technical proficiency',
      ],
    },
    {
      id: 'voltrange',
      title: 'VoltRange LK — EV Range & Charging Companion',
      shortDesc: 'Smart EV charging station locator, dynamic range calculation, and route companion app engineered for Sri Lankan EV drivers.',
      category: 'mobile',
      badge: 'Flutter & FastAPI',
      image: voltrangePreview,
      tech: ['Flutter', 'Dart', 'FastAPI', 'Python', 'Maps & Geolocation', 'REST APIs', 'EV Routing'],
      github: 'https://github.com/ChanukaLakshan/VoltRange-LK-Mobile-App',
      demo: 'https://github.com/ChanukaLakshan/VoltRange-LK-Mobile-App',
      fullDescription:
        'VoltRange LK is a comprehensive smart mobile application and backend ecosystem engineered to empower Electric Vehicle (EV) owners in Sri Lanka. It combines a cross-platform Flutter mobile client with a fast asynchronous Python FastAPI backend to deliver interactive charging spot locators, connector compatibility details (DC Fast / AC Type 2), real-time pricing and status info, and intelligent EV range estimation.',
      features: [
        'Interactive EV charging station locator with detailed port specifications (120 kW DC / 22 kW AC Type 2)',
        'Real-time charging spot availability, pricing rates, and detailed station info cards',
        'Dynamic EV range estimation and distance tracking tailored to travel routes',
        'Cross-platform Flutter frontend with fluid animations and clean mobile UI/UX',
        'High-performance Python FastAPI backend delivering low-latency geospatial data and routing APIs',
      ],
    },
    {
      id: 'reelmate',
      title: 'Reel-Mate Mobile App — Reels Creation & Collaboration',
      shortDesc: 'Mobile video application enabling creators to create, collaborate, sync edits in real-time, and share reels effortlessly.',
      category: 'mobile',
      badge: 'Mobile App Showcase',
      image: reelmatePreview,
      tech: ['Android SDK', 'Java', 'Video Sync', 'Media APIs', 'Room DB', 'Material Design', 'Collaboration UI'],
      github: 'https://github.com/ChanukaLakshan/Reel-Mate-Mobile-App',
      demo: 'https://github.com/ChanukaLakshan/Reel-Mate-Mobile-App',
      fullDescription:
        'Reel-Mate is a dynamic mobile application engineered to create, collaborate, and share video reels effortlessly. Featuring collaborative timeline editing, real-time edit synchronization, chat & suggestion channels, music recommendation tools, and an engaging community publishing feed.',
      features: [
        'Project feed for tracking creative drafts, active productions, and published reels',
        'Collaborative timeline editing with synchronized edit feeds and suggest modes',
        'Integrated audio controls with music suggestion and soundtrack alignment',
        'Direct collaborator communication with in-app chat and timestamped suggestions',
        'Community reel publishing hub with audience engagement metrics and social sharing',
      ],
    },
    {
      id: 'acnr',
      title: 'ACNR — Automated Currency Note Recognition',
      shortDesc: 'Computer vision and machine learning system for automated banknote detection, denomination verification, and counterfeit validation.',
      category: 'ai',
      badge: 'Computer Vision AI',
      image: acnrPreview,
      tech: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning', 'NumPy', 'Jupyter Notebook'],
      github: 'https://github.com/ChanukaLakshan/ACNR-Automated-Currency-Note-Recognition-',
      demo: 'https://github.com/ChanukaLakshan/ACNR-Automated-Currency-Note-Recognition-',
      fullDescription:
        'ACNR (Automated Currency Note Recognition) is an artificial intelligence and image processing software solution designed to accurately identify and verify banknote denominations. Using high-resolution image preprocessing, contour extraction, feature matching, and pattern classification, this system eliminates manual counting errors and assists automated cash-handling systems.',
      features: [
        'Multi-stage image preprocessing with grayscale filtering and Gaussian smoothing',
        'Contour detection and aspect ratio verification for banknotes',
        'Robust denomination pattern recognition against rotated or noisy inputs',
        'Built with Python, OpenCV, and mathematical matrix analysis',
      ],
    },
    {
      id: 'plant-growth',
      title: 'Plant Growth Analytics & Leaf Tracker',
      shortDesc: 'Data-driven computer vision application for automated leaf counting, time-series growth tracking, and morphometric analysis.',
      category: 'ai',
      badge: 'Vision & Data Analytics',
      image: plantGrowthPreview,
      tech: ['Python', 'OpenCV', 'Matplotlib', 'Tailwind CSS', 'NumPy', 'CSV Analytics'],
      github: 'https://github.com/ChanukaLakshan/Plant-Growth-App',
      demo: 'https://github.com/ChanukaLakshan/Plant-Growth-App',
      fullDescription:
        'Plant Growth App is an intelligent botanical monitoring application engineered with Python and computer vision. The system analyzes sequential leaf growth imagery, measures morphological changes, plots time-series growth charts, and logs historical dataset records in CSV format.',
      features: [
        'Automated leaf counting and morphological segmentation via OpenCV image analysis',
        'Time-series growth trajectory visualization with line graphs and change charts',
        'Historical growth dataset logging and export via CSV',
        'Responsive user interface styled with Tailwind CSS',
      ],
    },
    {
      id: 'mood-melodies',
      title: 'Mood Melodies Smart Audio App',
      shortDesc: 'Emotion-tuned audio streaming and playlist recommendation web application built with TypeScript, React, and Web Audio APIs.',
      category: 'web',
      badge: 'TypeScript Web App',
      image: moodMelodiesPreview,
      tech: ['TypeScript', 'React', 'Web Audio APIs', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/ChanukaLakshan/mood-melodies-app',
      demo: 'https://github.com/ChanukaLakshan/mood-melodies-app',
      fullDescription:
        'Mood Melodies is a modern single-page web application that recommends custom audio playlists and ambient soundscapes based on user emotional states and activity choices. Featuring rich audio controls, reactive visuals, and responsive UI components.',
      features: [
        'Contextual mood selector with emotion-tuned audio matching',
        'Full TypeScript type safety across component states and audio handlers',
        'Smooth audio playback with custom seek bar and volume sliders',
        'Dynamic visual feedback and themed UI transitions powered by Framer Motion',
      ],
    },
    {
      id: 'odera-clothing',
      title: 'Odera Clothing E-Commerce Platform',
      shortDesc: 'Full-stack commercial apparel e-commerce web platform with product catalogs, shopping cart, and database management.',
      category: 'web',
      badge: 'Full Stack E-Commerce',
      image: oderaPreview,
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Apache'],
      github: 'https://github.com/ChanukaLakshan/Odera-Clothing',
      demo: 'https://github.com/ChanukaLakshan/Odera-Clothing',
      fullDescription:
        'Odera Clothing is a full-featured online fashion storefront engineered for fashion retail. It features an interactive product catalog, size/color selectors, dynamic shopping cart calculations, and a secure relational MySQL database for order management and inventory tracking.',
      features: [
        'Relational MySQL schema design for orders, users, and product catalog',
        'Dynamic cart management and checkout summary calculation',
        'Responsive layout tailored for mobile shoppers and desktop users',
        'Structured PHP backend with secure parameterized queries',
      ],
    },
    {
      id: 'portfolio',
      title: 'Personal Developer & FinTech Hub',
      shortDesc: 'Elite developer portfolio with custom animations, glassmorphism design, active scrollspy, and reactive feedback.',
      category: 'web',
      badge: 'Production Web App',
      image: portfolioPreview,
      tech: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GitHub API'],
      github: 'https://github.com/ChanukaLakshan/ChanukaLakshan.github.io',
      demo: 'https://chanukalakshan.me',
      fullDescription:
        'A high-performance modern web application developed to showcase technical projects, academic qualifications, and financial engineering background. Engineered with modern React, Tailwind CSS, Framer Motion, and optimized for fast page speed and visual impact.',
      features: [
        'Modern dark theme with crimson glow and glassmorphism styling',
        'Fully responsive layout across mobile, tablet, and widescreen displays',
        'Interactive project detail modal with deep-dive technical specs',
        'SEO-optimized metadata and semantic HTML structure',
        'Deployed live on custom domain at chanukalakshan.me',
      ],
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => {
        if (activeFilter === 'ai') return p.category === 'ai' || p.id === 'devscore';
        if (activeFilter === 'web') return p.category === 'web' || p.id === 'devscore';
        if (activeFilter === 'mobile') return p.category === 'mobile';
        return p.category === activeFilter;
      });

  return (
    <section id="projects" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-premium-red/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-premium-red uppercase tracking-wider mb-3">
            <HiOutlineSparkles className="text-sm" /> Handcrafted Works &amp; Systems
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Explore production systems and open-source projects engineered with AI computer vision, native Android development, and modern web architectures.
          </p>
          <div className="w-16 h-1 bg-premium-red mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat.id
                  ? 'text-white bg-premium-red shadow-[0_0_20px_rgba(255,0,0,0.4)]'
                  : 'text-gray-400 hover:text-white bg-white/[0.03] border border-white/5 hover:border-white/20'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden hover:border-premium-red/40 transition-all duration-500 group flex flex-col justify-between hover:-translate-y-1.5 shadow-xl"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="aspect-video p-6 flex flex-col justify-between border-b border-white/5 relative overflow-hidden"
                    style={project.image ? {} : {}}
                  >
                    {/* Project preview image (if available) */}
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#141414] to-red-950/30"></div>
                    )}

                    {/* Dark overlay for readability */}
                    <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                      project.image
                        ? 'bg-gradient-to-t from-black/80 via-black/40 to-black/30 group-hover:from-black/70 group-hover:via-black/30'
                        : 'bg-radial-red opacity-0 group-hover:opacity-100'
                    }`}></div>

                    <div className="flex justify-between items-start z-10 relative">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-premium-red/20 text-premium-red border border-premium-red/30 backdrop-blur-sm">
                        {project.badge}
                      </span>
                      <div className="flex items-center gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-premium-red transition-all"
                          aria-label="GitHub Repository"
                        >
                          <FiGithub className="text-sm" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-premium-red transition-all"
                          aria-label="Live Demo / Repository"
                        >
                          <FiExternalLink className="text-sm" />
                        </a>
                      </div>
                    </div>

                    <div className="z-10 mt-auto relative">
                      <span className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors uppercase tracking-tight block">
                        {project.title.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6 line-clamp-3">
                      {project.shortDesc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-xl bg-white/[0.03] hover:bg-premium-red/20 border border-white/10 hover:border-premium-red/40 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <FiInfo className="text-sm text-premium-red" /> View Project Overview
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#0e0e0e] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-premium-red transition-all"
                aria-label="Close Modal"
              >
                <FiX className="text-lg" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-premium-red/20 text-premium-red border border-premium-red/30 inline-block mb-3">
                  {selectedProject.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Modal Full Description */}
              <div className="space-y-6 text-sm text-gray-300 leading-relaxed mb-6">
                <p>{selectedProject.fullDescription}</p>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-3">
                    Key Features &amp; Architecture:
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <FiCheck className="text-premium-red text-sm mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-3">
                    Technologies &amp; Libraries:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-white font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-bold text-white flex items-center gap-2 transition-all"
                  >
                    <FiGithub className="text-base" /> View Codebase
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-premium-red hover:bg-red-600 text-xs font-bold text-white flex items-center gap-2 shadow-[0_0_15px_rgba(255,0,0,0.4)] transition-all"
                  >
                    <FiExternalLink className="text-base" /> Project Link
                  </a>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-mono text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
