import Link from 'next/link';
import FindingCard from '@/components/reports/FindingCard';

const findings = [
  {
    id: 1,
    title: 'Cross-Site Scripting (XSS) in Search Query',
    severity: 'High',
    cve: 'CVE-2024-12345',
    description: 'Improper neutralization of user-supplied input in the main search functionality allows for the injection of arbitrary scripts, potentially leading to session hijacking.',
    status: 'Patched',
  },
  {
    id: 2,
    title: 'SQL Injection via API Endpoint',
    severity: 'Critical',
    cve: 'CVE-2024-54321',
    description: "The '/api/v1/user' endpoint is vulnerable to time-based blind SQL injection, allowing an attacker to exfiltrate database information.",
    status: 'New',
  },
  {
    id: 3,
    title: 'Outdated jQuery Library',
    severity: 'Medium',
    cve: 'N/A',
    description: 'The application uses an outdated version of jQuery (v2.1.4) which is known to have multiple security vulnerabilities. It is recommended to update to the latest version.',
    status: 'Fixed',
  },
];

const ScanReportPage = () => {
  return (
    <main className="flex flex-1 justify-center py-5 sm:py-8 md:py-12">
      <div className="layout-content-container flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6">
        <header className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/projects" className="text-body-text hover:text-primary transition-colors text-base font-medium leading-normal">Projects</Link>
            <span className="text-body-text text-base font-medium leading-normal">/</span>
            <Link href="/projects/1" className="text-body-text hover:text-primary transition-colors text-base font-medium leading-normal">ProjectName</Link>
            <span className="text-body-text text-base font-medium leading-normal">/</span>
            <span className="text-heading text-base font-medium leading-normal">Reports</span>
          </div>
          <div className="flex w-full sm:w-auto flex-wrap gap-3">
            <button className="flex flex-1 sm:flex-none min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-glass-bg border border-glass-border text-heading hover:border-primary/50 hover:bg-primary/10 transition-colors text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="material-symbols-outlined text-base">file_save</span>
              <span className="truncate">Export as CSV</span>
            </button>
            <button className="flex flex-1 sm:flex-none min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white shadow-neon-primary hover:bg-primary/90 transition-all text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="material-symbols-outlined text-base">picture_as_pdf</span>
              <span className="truncate">Export as PDF</span>
            </button>
          </div>
        </header>

        <div className="flex flex-col gap-2 py-4">
          <h1 className="text-heading text-3xl md:text-4xl font-bold leading-tight">Scan Report: example.com</h1>
          <p className="text-body-text text-base font-normal leading-normal">Scanned on January 26, 2024 at 11:15 AM</p>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-1 flex-col gap-2 rounded-xl p-6 border border-glass-border bg-glass-bg backdrop-blur-sm">
            <p className="text-body-text text-base font-medium leading-normal">Total Vulnerabilities</p>
            <p className="text-heading text-4xl font-bold leading-tight">128</p>
          </div>
          <div className="flex flex-1 flex-col gap-2 rounded-xl p-6 border border-glass-border bg-glass-bg backdrop-blur-sm">
            <p className="text-body-text text-base font-medium leading-normal">High Severity</p>
            <p className="text-heading text-4xl font-bold leading-tight text-severity-high">14</p>
          </div>
          <div className="flex flex-1 flex-col gap-2 rounded-xl p-6 border border-glass-border bg-glass-bg backdrop-blur-sm">
            <p className="text-body-text text-base font-medium leading-normal">Scan Duration</p>
            <p className="text-heading text-4xl font-bold leading-tight">2h 15m</p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-6">
          <div className="flex min-w-72 flex-1 flex-col gap-4 rounded-xl border border-glass-border bg-glass-bg backdrop-blur-sm p-6">
            <p className="text-heading text-lg font-bold leading-normal">Vulnerabilities by Severity</p>
            <div className="min-h-[240px] flex items-center justify-center">
              {/* Donut Chart */}
            </div>
          </div>
          <div className="flex min-w-72 flex-1 flex-col gap-4 rounded-xl border border-glass-border bg-glass-bg backdrop-blur-sm p-6">
            <p className="text-heading text-lg font-bold leading-normal">Top 5 Vulnerability Types</p>
            <div className="flex flex-col gap-5 pt-2">
              {/* Bar Chart */}
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6 py-6" id="FindingsList">
          <h2 className="text-heading text-2xl font-bold">Detailed Findings</h2>
          <div className="flex flex-col gap-4">
            {findings.map((finding) => (
              <FindingCard key={finding.id} finding={finding} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ScanReportPage;
