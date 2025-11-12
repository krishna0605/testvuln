import Link from 'next/link';
import ScanCard from '@/app/components/scans/ScanCard';
import ScanHistoryRow from '@/app/components/scans/ScanHistoryRow';

const activeScans = [
  {
    target: 'api.vulnscanner.io',
    status: 'Scanning',
    progress: 75,
    pages: '1,402',
    urls: '3,120',
    elapsed: '42m',
  },
  {
    target: 'webapp.example.com',
    status: 'Queued',
    progress: 0,
    pages: '-',
    urls: '-',
    elapsed: '-',
  },
];

const scanHistory = [
  {
    target: 'corp.vulnscanner.io',
    date: '2024-05-19 14:30 UTC',
    duration: '1h 12m',
    vulnerabilities: {
      critical: 5,
      high: 12,
      medium: 0,
    },
    status: 'Critical Found',
  },
  {
    target: 'blog.example.com',
    date: '2024-05-18 09:15 UTC',
    duration: '27m',
    vulnerabilities: {
      critical: 0,
      high: 0,
      medium: 3,
    },
    status: 'Completed',
  },
  {
    target: 'internal-dashboard',
    date: '2024-05-17 22:00 UTC',
    duration: '5m',
    vulnerabilities: {
      critical: 0,
      high: 0,
      medium: 0,
    },
    status: 'Cancelled',
  },
];

const ScansPage = () => {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-6 py-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight text-text-heading">Scans</h1>
        <p className="text-base text-text-body">Manage active scans, recent history, and scan results.</p>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="col-span-1 flex flex-col gap-8 lg:col-span-2">
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-text-heading">Active Scans</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {activeScans.map((scan, index) => (
                <ScanCard key={index} scan={scan} />
              ))}
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-text-heading">Scan History</h2>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex w-full items-center gap-2">
                <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-white/5 px-3 text-sm font-medium text-text-body hover:bg-white/10 hover:text-text-heading"><span className="material-symbols-outlined text-xl">pause</span><span>Pause All</span></button>
                <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-white/5 px-3 text-sm font-medium text-text-body hover:bg-white/10 hover:text-text-heading"><span className="material-symbols-outlined text-xl">play_arrow</span><span>Resume All</span></button>
                <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-white/5 px-3 text-sm font-medium text-text-body hover:bg-white/10 hover:text-text-heading"><span className="material-symbols-outlined text-xl">cancel</span><span>Cancel All</span></button>
              </div>
              <div className="flex w-full items-center justify-end gap-2">
                <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-white/5 px-3 text-sm font-medium text-text-body hover:bg-white/10 hover:text-text-heading"><span className="material-symbols-outlined text-xl">filter_list</span><span>Filter</span></button>
                <button className="flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold text-background-dark shadow-sm hover:brightness-110">
                  <span className="material-symbols-outlined text-xl">download</span>
                  <span className="truncate">Export</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto rounded-xl border border-border-dark bg-card-dark backdrop-blur-sm">
              <table className="min-w-full text-sm">
                <thead className="border-b border-border-dark text-left text-xs uppercase text-text-body">
                  <tr>
                    <th className="p-4">Target</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Duration</th>
                    <th className="p-4">Vulnerabilities</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-dark">
                  {scanHistory.map((scan, index) => (
                    <ScanHistoryRow key={index} scan={scan} />
                  ))}
                </tbody>
              </table>
              <div className="flex items-center justify-between border-t border-border-dark p-4 text-sm">
                <span>Showing 1 to 3 of 24 scans</span>
                <div className="flex items-center gap-2">
                  <button className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 text-text-body hover:bg-white/10"><span className="material-symbols-outlined">chevron_left</span></button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 text-text-body hover:bg-white/10"><span className="material-symbols-outlined">chevron_right</span></button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <aside className="col-span-1 lg:sticky top-24 h-fit">
          <div className="flex flex-col gap-6 rounded-xl border border-border-dark bg-card-dark p-6 backdrop-blur-sm">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-text-body">Selected Scan</p>
              <h3 className="text-lg font-bold text-text-heading">api.vulnscanner.io</h3>
              <p className="text-xs text-text-body">Started: 2024-05-20 11:00 UTC</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between">
                <h4 className="font-semibold text-text-heading">Scan Progress</h4>
                <p className="text-xs text-text-body">ETA: 22 minutes</p>
              </div>
              <div className="h-2 w-full rounded-full bg-white/5">
                <div className="h-2 rounded-full bg-primary shadow-glow-cyan" style={{ width: '75%' }}></div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex flex-col"><span className="font-bold text-text-heading">1,402</span><span className="text-text-body">Pages Crawled</span></div>
                <div className="flex flex-col"><span className="font-bold text-text-heading">3,120</span><span className="text-text-body">URLs Discovered</span></div>
                <div className="flex flex-col"><span className="font-bold text-text-heading">89</span><span className="text-text-body">Forms Found</span></div>
                <div className="flex flex-col"><span className="font-bold text-text-heading">12</span><span className="text-text-body">Endpoints</span></div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-text-heading">Live Activity Feed</h4>
              <div className="flex h-48 flex-col gap-3 overflow-y-auto pr-2 text-xs">
                <p><span className="text-text-body">[11:42:10]</span><span className="text-text-heading"> Found candidate for XSS on /search...</span></p>
                <p><span className="text-text-body">[11:42:05]</span><span className="text-text-heading"> Discovered URL: /api/v2/users</span></p>
                <p><span className="text-text-body">[11:41:59]</span><span className="text-text-heading"> Found form on /login.php</span></p>
                <p><span className="text-text-body">[11:41:45]</span><span className="text-text-heading"> Discovered URL: /admin/dashboard</span></p>
                <p><span className="text-text-body">[11:41:30]</span><span className="text-text-heading"> Identified tech: PHP 8.1, Nginx</span></p>
              </div>
            </div>
            <div className="flex flex-col gap-3 border-t border-border-dark pt-6">
              <h4 className="font-semibold text-text-heading">Help & Documentation</h4>
              <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <span className="material-symbols-outlined text-base">open_in_new</span>How scans work
              </Link>
              <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <span className="material-symbols-outlined text-base">open_in_new</span>Understanding scan results
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ScansPage;
