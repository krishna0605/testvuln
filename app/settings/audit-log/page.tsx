const AuditLogSettingsPage = () => {
  return (
    <section className="flex flex-col gap-6">
      <header>
        <h2 className="text-text-heading text-xl font-bold">Audit Log</h2>
        <p className="text-text-body mt-1 text-sm">Track all activities within your VulnScanner account.</p>
      </header>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-[250px]">
            <label className="sr-only" htmlFor="audit-search">Search</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="material-symbols-outlined text-text-body" style={{ fontSize: '20px' }}>search</span>
              </div>
              <input className="form-input w-full rounded-lg border-none bg-white/5 pl-10 text-text-heading h-10 placeholder:text-text-body focus:outline-0 focus:ring-2 focus:ring-primary/50 text-sm" id="audit-search" placeholder="Search by user, action, or resource..." type="search"/>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <select className="form-select w-full sm:w-auto rounded-lg border-white/20 bg-white/5 text-text-body focus:border-primary focus:ring-primary/50 h-10 text-sm">
              <option>All Users</option>
              <option>Alex Doe</option>
              <option>Jane Smith</option>
            </select>
            <select className="form-select w-full sm:w-auto rounded-lg border-white/20 bg-white/5 text-text-body focus:border-primary focus:ring-primary/50 h-10 text-sm">
              <option>All Actions</option>
              <option>Login</option>
              <option>Project Created</option>
              <option>Scan Started</option>
              <option>User Role Changed</option>
            </select>
            <select className="form-select w-full sm:w-auto rounded-lg border-white/20 bg-white/5 text-text-body focus:border-primary focus:ring-primary/50 h-10 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Custom Range</option>
            </select>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent border border-white/20 text-text-heading text-sm font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
              <span className="truncate">Export to CSV</span>
            </button>
          </div>
        </div>
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-text-body/70 uppercase tracking-wider">
                    <a className="group inline-flex items-center gap-1" href="#">
                      Timestamp
                      <span className="material-symbols-outlined text-text-body/50 group-hover:text-text-body" style={{ fontSize: '16px' }}>arrow_downward</span>
                    </a>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-text-body/70 uppercase tracking-wider">
                    <a className="group inline-flex items-center gap-1" href="#">
                      User
                      <span className="material-symbols-outlined text-text-body/50 group-hover:text-text-body" style={{ fontSize: '16px' }}>unfold_more</span>
                    </a>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-text-body/70 uppercase tracking-wider">
                    <a className="group inline-flex items-center gap-1" href="#">
                      Action
                      <span className="material-symbols-outlined text-text-body/50 group-hover:text-text-body" style={{ fontSize: '16px' }}>unfold_more</span>
                    </a>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-text-body/70 uppercase tracking-wider">Resource</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-text-body/70 uppercase tracking-wider">IP Address</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-text-body/70 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-body">2023-10-27 14:35:01</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-heading">alex.doe@example.com</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-heading">Logged in</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-body">-</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-body">192.168.1.101</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400" style={{ boxShadow: '0 0 10px rgba(4, 120, 87, 0.5)' }}>Success</span>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-body">2023-10-27 14:32:15</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-heading">jane.smith@example.com</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-heading">Created project 'WebAppAlpha'</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-body">Project: WebAppAlpha</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-body">203.0.113.45</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400" style={{ boxShadow: '0 0 10px rgba(4, 120, 87, 0.5)' }}>Success</span>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-body">2023-10-27 14:30:02</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-heading">jane.smith@example.com</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-heading">Started scan on 'WebAppAlpha'</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-body">Scan: 123e4567-e89b</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-body">203.0.113.45</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400" style={{ boxShadow: '0 0 10px rgba(4, 120, 87, 0.5)' }}>Success</span>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-body">2023-10-26 18:05:41</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-heading">admin@vulnscanner.io</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-heading">User role changed for jane@example.com</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-body">User: jane@example.com</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-body">198.51.100.2</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2.5 py-0.5 text-xs font-medium text-yellow-400" style={{ boxShadow: '0 0 10px rgba(202, 138, 4, 0.5)' }}>Warning</span>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-body">2023-10-26 11:15:20</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-heading">unknown@user.com</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-heading">Failed login attempt</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-body">-</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-text-body">104.28.243.123</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className="inline-flex items-center rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-medium text-red-400" style={{ boxShadow: '0 0 10px rgba(153, 27, 27, 0.5)' }}>Failed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
            <div className="text-sm text-text-body">
              Showing <span className="font-medium text-text-heading">1</span> to <span className="font-medium text-text-heading">5</span> of <span className="font-medium text-text-heading">97</span> results
            </div>
            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
              <a className="relative inline-flex items-center rounded-l-md px-2 py-2 text-text-body ring-1 ring-inset ring-white/10 hover:bg-white/5 focus:z-20 focus:outline-offset-0" href="#">
                <span className="sr-only">Previous</span>
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_left</span>
              </a>
              <a aria-current="page" className="relative z-10 inline-flex items-center bg-primary/20 px-4 py-2 text-sm font-semibold text-primary focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href="#">1</a>
              <a className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-text-heading ring-1 ring-inset ring-white/10 hover:bg-white/5 focus:z-20" href="#">2</a>
              <a className="relative hidden items-center px-4 py-2 text-sm font-semibold text-text-heading ring-1 ring-inset ring-white/10 hover:bg-white/5 focus:z-20 md:inline-flex" href="#">3</a>
              <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-text-heading ring-1 ring-inset ring-white/10">...</span>
              <a className="relative hidden items-center px-4 py-2 text-sm font-semibold text-text-heading ring-1 ring-inset ring-white/10 hover:bg-white/5 focus:z-20 md:inline-flex" href="#">8</a>
              <a className="relative inline-flex items-center rounded-r-md px-2 py-2 text-text-body ring-1 ring-inset ring-white/10 hover:bg-white/5 focus:z-20 focus:outline-offset-0" href="#">
                <span className="sr-only">Next</span>
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_right</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditLogSettingsPage;
