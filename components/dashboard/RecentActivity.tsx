export const RecentActivity = () => {
  return (
    <div>
      <h2 className="text-text-primary text-xl font-bold mb-4 px-1">Recent Activity</h2>
      <div className="flow-root">
        <ul className="-mb-8" role="list">
          <li>
            <div className="relative pb-8">
              <span aria-hidden="true" className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-white/10"></span>
              <div className="relative flex space-x-3">
                <div>
                  <span className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center ring-4 ring-[#0B0D12]">
                    <span className="material-symbols-outlined text-red-400 text-base">dangerous</span>
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-text-secondary">Critical vulnerability detected in <a className="font-medium text-primary hover:underline" href="#">E-commerce Platform</a></p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-text-secondary/70">
                    <time>2h ago</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="relative pb-8">
              <span aria-hidden="true" className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-white/10"></span>
              <div className="relative flex space-x-3">
                <div>
                  <span className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center ring-4 ring-[#0B0D12]">
                    <span className="material-symbols-outlined text-green-400 text-base">task_alt</span>
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-text-secondary">Scan on <a className="font-medium text-primary hover:underline" href="#">Admin Dashboard</a> completed.</p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-text-secondary/70">
                    <time>8h ago</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="relative pb-8">
              <span aria-hidden="true" className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-white/10"></span>
              <div className="relative flex space-x-3">
                <div>
                  <span className="h-8 w-8 rounded-full bg-orange-500/20 flex items-center justify-center ring-4 ring-[#0B0D12]">
                    <span className="material-symbols-outlined text-orange-400 text-base">priority_high</span>
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-text-secondary">New high vulnerability found on <a className="font-medium text-primary hover:underline" href="#">Corporate API</a>.</p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-text-secondary/70">
                    <time>1d ago</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="relative">
              <div className="relative flex space-x-3">
                <div>
                  <span className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center ring-4 ring-[#0B0D12]">
                    <span className="material-symbols-outlined text-blue-400 text-base">add_circle</span>
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-text-secondary">New project created: <a className="font-medium text-primary hover:underline" href="#">Internal Tools</a>.</p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-text-secondary/70">
                    <time>2d ago</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
