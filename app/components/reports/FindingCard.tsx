import Link from 'next/link';

const FindingCard = ({ finding }: { finding: any }) => {
  const severityColor = {
    'High': 'bg-severity-high/10 text-severity-high ring-severity-high/20',
    'Critical': 'bg-severity-critical/10 text-severity-critical ring-severity-critical/20',
    'Medium': 'bg-severity-medium/10 text-severity-medium ring-severity-medium/20',
  };

  const statusColor = {
    'Patched': 'bg-green-500/10 text-green-400 ring-green-500/20',
    'New': 'bg-sky-500/10 text-sky-400 ring-sky-500/20',
    'Fixed': 'bg-yellow-500/10 text-yellow-400 ring-yellow-500/20',
  };

  return (
    <div className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start rounded-xl p-6 border border-glass-border bg-glass-bg backdrop-blur-sm hover:border-primary/50 transition-colors">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-4">
          <h3 className="text-heading font-bold text-lg">{finding.title}</h3>
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${severityColor[finding.severity]}`}>
            {finding.severity}
          </span>
        </div>
        <p className="text-body-text text-sm">{finding.cve}</p>
        <p className="text-body-text text-sm max-w-prose">{finding.description}</p>
      </div>
      <div className="flex flex-col md:items-end justify-between gap-4 h-full">
        <span className={`inline-flex w-fit items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${statusColor[finding.status]}`}>
          {finding.status}
        </span>
        <Link href={`/vulnerabilities/${finding.id}`} className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary hover:bg-primary/30 group-hover:bg-primary group-hover:text-white transition-colors text-sm font-bold">
          <span>View Details</span>
          <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
};

export default FindingCard;
