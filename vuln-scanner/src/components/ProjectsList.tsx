'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectsList = () => {
  const projects = [
    {
      name: 'E-commerce Platform',
      domain: 'webapp.example.com',
      status: 'Completed',
      lastScan: '3 days ago',
      critical: 2,
      high: 0,
      medium: 5,
      low: 12,
    },
    {
      name: 'Corporate API',
      domain: 'api.vulnscanner.dev',
      status: 'Scanning',
      lastScan: 'In progress',
      critical: 0,
      high: 1,
      medium: 1,
      low: 3,
    },
    {
      name: 'Marketing Website',
      domain: 'mktg.example.com',
      status: 'Pending',
      lastScan: 'Never',
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
    },
    {
        name: 'Admin Dashboard',
        domain: 'admin.example.com',
        status: 'Completed',
        lastScan: '1 week ago',
        critical: 1,
        high: 3,
        medium: 8,
        low: 0,
    }
  ];

  return (
    <div className="lg:col-span-2">
      <div className="flex justify-between items-center mb-4 px-1">
        <h2 className="text-text-primary text-xl font-bold">My Projects</h2>
        <div className="flex items-center gap-1 p-1 rounded-lg bg-white/5 border border-white/10">
          <button className="px-2 py-1 rounded-md bg-white/10 text-text-primary"><span className="material-symbols-outlined text-base">grid_view</span></button>
          <button className="px-2 py-1 rounded-md text-text-secondary"><span className="material-symbols-outlined text-base">view_list</span></button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col gap-4 rounded-lg p-5 glass-card transition-transform transform hover:scale-[1.02] hover:border-primary/50 cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-text-primary">{project.name}</h3>
                <p className="text-sm text-text-secondary">{project.domain}</p>
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                project.status === 'Scanning' ? 'bg-blue-500/20 text-blue-400 animate-pulse' :
                'bg-gray-500/20 text-gray-400'
              }`}>{project.status}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <p className="text-text-secondary">Last scan: {project.lastScan}</p>
              <div className="flex items-center gap-2">
                {project.critical > 0 && <span className="flex items-center gap-1 text-red-400"><div className="size-2 rounded-full bg-red-500"></div>{project.critical}</span>}
                {project.high > 0 && <span className="flex items-center gap-1 text-orange-400"><div className="size-2 rounded-full bg-orange-500"></div>{project.high}</span>}
                {project.medium > 0 && <span className="flex items-center gap-1 text-yellow-400"><div className="size-2 rounded-full bg-yellow-500"></div>{project.medium}</span>}
                {project.low > 0 && <span className="flex items-center gap-1 text-blue-400"><div className="size-2 rounded-full bg-blue-500"></div>{project.low}</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
