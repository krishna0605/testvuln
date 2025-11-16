import Link from 'next/link';
import ScanCard from '@/components/scans/ScanCard';
import ScanHistoryRow from '@/components/scans/ScanHistoryRow';
import Header from '@/components/Header';

const activeScans = [
  {
    target: "api.vulnscanner.io",
    status: "Scanning",
    progress: 75,
    pages: "1,402",
    urls: "3,120",
    elapsed: "42m",
  },
  {
    target: "webapp.example.com",
    status: "Queued",
    progress: 0,
    pages: "-",
    urls: "-",
    elapsed: "-",
  }
]

const scanHistory = [
  {
    target: "corp.vulnscanner.io",
    date: "2024-05-19 14:30 UTC",
    duration: "1h 12m",
    vulnerabilities: [
      { severity: "Critical", count: 5 },
      { severity: "High", count: 12 },
    ],
    status: "Critical Found",
  },
  {
    target: "blog.example.com",
    date: "2024-05-18 09:15 UTC",
    duration: "27m",
    vulnerabilities: [
      { severity: "Medium", count: 3 },
    ],
    status: "Completed",
  },
  {
    target: "internal-dashboard",
    date: "2024-05-17 22:00 UTC",
    duration: "5m",
    vulnerabilities: [],
    status: "Cancelled",
  }
]

const ScansPage = () => {
  return (
    <>
      <Header />
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
                  <ScanCard key={index} {...scan} />
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
                      <ScanHistoryRow key={index} {...scan} />
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default ScansPage;
