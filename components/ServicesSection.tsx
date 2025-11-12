'use client';

import { motion } from 'framer-motion';

const ServicesSection = () => {
  return (
    <section className="flex flex-col gap-8" id="services">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tighter text-center"
      >
        Our Core Services
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 p-6 rounded-xl glassmorphic-card"
        >
          <span className="material-symbols-outlined text-primary text-3xl">scanner</span>
          <h4 className="text-[#F0F0F0] font-semibold">Automated Vulnerability Scans</h4>
          <p className="text-white/70 text-sm">Continuously scan your applications for known vulnerabilities.</p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 p-6 rounded-xl glassmorphic-card"
        >
          <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
          <h4 className="text-[#F0F0F0] font-semibold">Real-Time Monitoring</h4>
          <p className="text-white/70 text-sm">Get instant alerts on new threats and suspicious activities.</p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 p-6 rounded-xl glassmorphic-card"
        >
          <span className="material-symbols-outlined text-primary text-3xl">analytics</span>
          <h4 className="text-[#F0F0F0] font-semibold">Detailed Reports &amp; Analytics</h4>
          <p className="text-white/70 text-sm">Receive insightful reports to understand your security posture.</p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 p-6 rounded-xl glassmorphic-card"
        >
          <span className="material-symbols-outlined text-primary text-3xl">hub</span>
          <h4 className="text-[#F0F0F0] font-semibold">Integration Ecosystem</h4>
          <p className="text-white/70 text-sm">Connect with your favorite developer tools and platforms.</p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 p-6 rounded-xl glassmorphic-card"
        >
          <span className="material-symbols-outlined text-primary text-3xl">gavel</span>
          <h4 className="text-[#F0F0F0] font-semibold">Compliance Assistance</h4>
          <p className="text-white/70 text-sm">Streamline adherence to industry standards like PCI-DSS and GDPR.</p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 p-6 rounded-xl glassmorphic-card"
        >
          <span className="material-symbols-outlined text-primary text-3xl">healing</span>
          <h4 className="text-[#F0F0F0] font-semibold">Guided Remediation</h4>
          <p className="text-white/70 text-sm">Step-by-step guidance to help your team fix vulnerabilities fast.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
