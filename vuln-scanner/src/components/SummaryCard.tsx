'use client';

import { motion } from 'framer-motion';

interface SummaryCardProps {
  title: string;
  value: string;
  icon: string;
  color?: string;
  children?: React.ReactNode;
}

const SummaryCard = ({ title, value, icon, color, children }: SummaryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-2 rounded-lg p-6 glass-card"
    >
      <div className="flex justify-between items-start">
        <p className="text-text-secondary text-base font-medium">{title}</p>
        <span className="material-symbols-outlined text-text-secondary/70">{icon}</span>
      </div>
      <p className={`text-text-primary tracking-light text-3xl font-bold ${color}`}>{value}</p>
      {children}
    </motion.div>
  );
};

export default SummaryCard;
