'use client';

import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-8 items-center justify-center text-center py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        <h1 className="text-text-primary text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
          Illuminate Your Web Security.
        </h1>
        <h2 className="text-white/70 text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto">
          VulnScanner provides comprehensive, actionable, and integrated security scanning to protect your web applications from threats.
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
          <span className="truncate">Get Started</span>
        </button>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white/10 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-colors">
          <span className="truncate">Explore Services</span>
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-3 p-3 flex-wrap justify-center mt-4"
      >
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/5 px-4">
          <p className="text-white/80 text-sm font-medium leading-normal">OWASP Coverage</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/5 px-4">
          <p className="text-white/80 text-sm font-medium leading-normal">Actionable Insights</p>
        </div>
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/5 px-4">
          <p className="text-white/80 text-sm font-medium leading-normal">CI/CD Friendly</p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
