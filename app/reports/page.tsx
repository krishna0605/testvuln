import Link from 'next/link';
import ReportCard from '@/components/reports/ReportCard';
import Header from '@/components/Header';

const reports = [
  {
    project: "Project Alpha",
    domain: "www.project-alpha.com",
    lastScan: "2023-10-26",
    vulnerabilities: {
      total: 152,
      critical: 12,
      high: 34,
    }
  },
  {
    project: "Project Beta",
    domain: "api.beta-project.io",
    lastScan: "2023-10-25",
    vulnerabilities: {
      total: 88,
      critical: 5,
      high: 19,
    }
  },
  {
    project: "Project Gamma",
    domain: "www.gamma-site.dev",
    lastScan: "2023-10-22",
    vulnerabilities: {
      total: 24,
      medium: 11,
      low: 13,
    }
  },
  {
    project: "Delta Initiative",
    domain: "delta.vulnscanner.io",
    lastScan: "2023-10-20",
    vulnerabilities: {
      total: 412,
      critical: 55,
      high: 102,
    }
  }
];

const ReportsPage = () => {
  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-full max-w-[1280px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-2">
              <p className="text-[#F0F0F0] text-4xl font-black leading-tight tracking-[-0.033em]">Reports</p>
              <p className="text-[#A0A0B0] text-base font-normal leading-normal">Select a project to view scan reports and exports.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="flex-grow">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded h-full">
                  <div className="text-[#A0A0B0] flex border-none bg-white/5 items-center justify-center pl-4 rounded-l border-r-0">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-white/5 focus:border-none h-full placeholder:text-[#A0A0B0] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search by project name or domain..." value=""/>
                </div>
              </label>
            </div>
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              <button className="flex h-12 sm:h-auto items-center justify-center gap-x-2 rounded bg-white/5 px-4 hover:bg-white/10 transition-colors">
                <p className="text-[#F0F0F0] text-sm font-medium leading-normal">Severity</p>
                <span className="material-symbols-outlined text-[#A0A0B0]">expand_more</span>
              </button>
              <button className="flex h-12 sm:h-auto items-center justify-center gap-x-2 rounded bg-white/5 px-4 hover:bg-white/10 transition-colors">
                <p className="text-[#F0F0F0] text-sm font-medium leading-normal">Status</p>
                <span className="material-symbols-outlined text-[#A0A0B0]">expand_more</span>
              </button>
              <button className="flex h-12 sm:h-auto items-center justify-center gap-x-2 rounded bg-white/5 px-4 hover:bg-white/10 transition-colors">
                <p className="text-[#F0F0F0] text-sm font-medium leading-normal">Date Range</p>
                <span className="material-symbols-outlined text-[#A0A0B0]">expand_more</span>
              </button>
              <button className="flex h-12 sm:h-auto items-center justify-center gap-x-2 rounded bg-white/5 px-4 hover:bg-white/10 transition-colors">
                <p className="text-[#F0F0F0] text-sm font-medium leading-normal">Owner</p>
                <span className="material-symbols-outlined text-[#A0A0B0]">expand_more</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {reports.map((report, index) => (
              <ReportCard key={index} {...report} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsPage;
