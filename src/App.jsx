import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center"
  >
    <div className="text-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-extrabold tracking-tighter mb-4"
      >
        <span className="text-white">CHANUKA</span>
        <span className="text-premium-red">.L</span>
      </motion.div>
      <div className="w-56 h-1 bg-white/10 rounded-full overflow-hidden mx-auto shadow-inner">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="w-1/2 h-full bg-premium-red shadow-[0_0_20px_#ff0000]"
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-xs font-mono text-gray-400 uppercase tracking-[0.3em]"
      >
        Software Engineering • FinTech • AI Systems
      </motion.p>
    </div>
  </motion.div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white relative">
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <GitHubStats />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Subtle Background Red Dot Matrix */}
      <div className="fixed inset-0 pointer-events-none -z-50 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ff0000_1px,transparent_1px)] [background-size:48px_48px]"></div>
      </div>
    </div>
  );
}

export default App;
