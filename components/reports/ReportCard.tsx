const ReportCard = ({ report }: { report: any }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg p-6 glass-card transition-all duration-300 hover:border-primary/50">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-[#F0F0F0]">{report.name}</h3>
        <p className="text-sm text-[#A0A0B0]">{report.domain}</p>
      </div>
      <div className="text-xs text-[#A0A0B0]">Last Scan: {report.lastScan}</div>
      <div className="flex flex-wrap gap-2 items-center">
        <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-1 text-xs font-medium text-[#F0F0F0]">
          <span className="font-bold">{report.vulnerabilities.total}</span>
          <span>Total</span>
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-[#ef4444]/20 px-2 py-1 text-xs font-medium text-[#ef4444]">
          <span className="font-bold">{report.vulnerabilities.critical}</span>
          <span>Critical</span>
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-[#f97316]/20 px-2 py-1 text-xs font-medium text-[#f97316]">
          <span className="font-bold">{report.vulnerabilities.high}</span>
          <span>High</span>
        </span>
      </div>
      <button className="mt-4 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] neon-glow-primary">
        <span className="truncate">View Reports</span>
      </button>
    </div>
  );
};

export default ReportCard;
