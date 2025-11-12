import SummaryCard from "@/components/SummaryCard";
import ProjectsList from "@/components/ProjectsList";
import RecentActivity from "@/components/RecentActivity";

const DashboardPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap justify-between items-start gap-6 mb-8">
        <div className="flex min-w-72 flex-col gap-2">
          <h1 className="text-text-primary text-3xl md:text-4xl font-bold leading-tight tracking-tight">Dashboard</h1>
          <p className="text-text-secondary text-base font-normal leading-normal">Welcome back, Alex. Here’s your security overview.</p>
        </div>
        <div className="flex flex-shrink-0 gap-3">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide transition-all duration-300 glow-on-hover">
            <span className="material-symbols-outlined mr-2" style={{ fontSize: '20px' }}>add</span>
            <span className="truncate">New Scan</span>
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white/10 text-text-primary border border-white/20 hover:bg-white/20 text-sm font-bold leading-normal tracking-wide transition-colors">
            <span className="truncate">New Project</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <SummaryCard title="Total Projects" value="128" icon="folder_copy" />
        <SummaryCard title="Active Scans" value="3" icon="hourglass_top">
          <div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
          </div>
        </SummaryCard>
        <SummaryCard title="Total Vulnerabilities" value="97" icon="bug_report" color="text-red-500">
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/20 text-red-400">Critical: 5</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-orange-500/20 text-orange-400">High: 12</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">Med: 30</span>
          </div>
        </SummaryCard>
        <SummaryCard title="Resolved Issues" value="412" icon="task_alt" color="text-green-500" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ProjectsList />
        <RecentActivity />
      </div>
    </div>
  );
};

export default DashboardPage;
