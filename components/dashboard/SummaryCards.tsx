export const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      <div className="flex flex-col gap-2 rounded-lg p-6 glass-card">
        <div className="flex justify-between items-start">
          <p className="text-text-secondary text-base font-medium">Total Projects</p>
          <span className="material-symbols-outlined text-text-secondary/70">folder_copy</span>
        </div>
        <p className="text-text-primary tracking-light text-3xl font-bold">128</p>
      </div>
      <div className="flex flex-col gap-2 rounded-lg p-6 glass-card">
        <div className="flex justify-between items-start">
          <p className="text-text-secondary text-base font-medium">Active Scans</p>
          <span className="material-symbols-outlined text-text-secondary/70">hourglass_top</span>
        </div>
        <p className="text-text-primary tracking-light text-3xl font-bold">3</p>
        <div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-lg p-6 glass-card">
        <div className="flex justify-between items-start">
          <p className="text-text-secondary text-base font-medium">Total Vulnerabilities</p>
          <span className="material-symbols-outlined text-text-secondary/70">bug_report</span>
        </div>
        <p className="text-red-500 tracking-light text-3xl font-bold">97</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/20 text-red-400">Critical: 5</span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-orange-500/20 text-orange-400">High: 12</span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">Med: 30</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-lg p-6 glass-card">
        <div className="flex justify-between items-start">
          <p className="text-text-secondary text-base font-medium">Resolved Issues</p>
          <span className="material-symbols-outlined text-text-secondary/70">task_alt</span>
        </div>
        <p className="text-green-500 tracking-light text-3xl font-bold">412</p>
      </div>
    </div>
  );
};
