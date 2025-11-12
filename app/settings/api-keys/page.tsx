const ApiKeysSettingsPage = () => {
  return (
    <section className="flex flex-col gap-6">
      <header>
        <h2 className="text-text-heading text-xl font-bold">API Keys</h2>
        <p className="text-text-body mt-1 text-sm">Manage your API keys for programmatic access to VulnScanner.</p>
      </header>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-text-body max-w-sm">Treat your API keys like passwords. Do not share them publicly.</p>
        <button className="flex-shrink-0 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-cyan-glow hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
          <span className="truncate">Generate New API Key</span>
        </button>
      </div>
      <div className="glass-card rounded-xl">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10 text-sm">
            <thead className="text-left text-text-body">
              <tr>
                <th className="px-6 py-4 font-medium" scope="col">
                  <div className="flex items-center gap-1.5 cursor-pointer hover:text-text-heading">Name <span className="material-symbols-outlined text-base">unfold_more</span></div>
                </th>
                <th className="px-6 py-4 font-medium" scope="col">Key Prefix</th>
                <th className="px-6 py-4 font-medium" scope="col">Permissions</th>
                <th className="px-6 py-4 font-medium" scope="col">
                  <div className="flex items-center gap-1.5 cursor-pointer hover:text-text-heading">Created On <span className="material-symbols-outlined text-base">unfold_more</span></div>
                </th>
                <th className="px-6 py-4 font-medium" scope="col">
                  <div className="flex items-center gap-1.5 cursor-pointer hover:text-text-heading">Last Used <span className="material-symbols-outlined text-base">unfold_more</span></div>
                </th>
                <th className="px-6 py-4 font-medium" scope="col">Status</th>
                <th className="px-6 py-4 font-medium" scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-text-heading">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="whitespace-nowrap px-6 py-4 font-medium">CI/CD Integration</td>
                <td className="whitespace-nowrap px-6 py-4 text-text-body font-mono">vsk_xyz...</td>
                <td className="whitespace-nowrap px-6 py-4 text-text-body">Read-Only, Scan Management</td>
                <td className="whitespace-nowrap px-6 py-4 text-text-body">Mar 15, 2024</td>
                <td className="whitespace-nowrap px-6 py-4 text-text-body">5 days ago</td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
                    <span className="size-2 rounded-full bg-green-400 shadow-green-glow"></span>
                    Active
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button aria-label="Edit Permissions" className="p-1.5 rounded-md hover:bg-white/10 text-text-body hover:text-text-heading transition-colors"><span className="material-symbols-outlined text-base">settings</span></button>
                    <button aria-label="Revoke Key" className="p-1.5 rounded-md hover:bg-white/10 text-text-body hover:text-red-500 transition-colors"><span className="material-symbols-outlined text-base">delete</span></button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="whitespace-nowrap px-6 py-4 font-medium">Staging Environment</td>
                <td className="whitespace-nowrap px-6 py-4 text-text-body font-mono">vsk_abc...</td>
                <td className="whitespace-nowrap px-6 py-4 text-text-body">Full Access</td>
                <td className="whitespace-nowrap px-6 py-4 text-text-body">Feb 01, 2024</td>
                <td className="whitespace-nowrap px-6 py-4 text-text-body">1 month ago</td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
                    <span className="size-2 rounded-full bg-green-400 shadow-green-glow"></span>
                    Active
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button aria-label="Edit Permissions" className="p-1.5 rounded-md hover:bg-white/10 text-text-body hover:text-text-heading transition-colors"><span className="material-symbols-outlined text-base">settings</span></button>
                    <button aria-label="Revoke Key" className="p-1.5 rounded-md hover:bg-white/10 text-text-body hover:text-red-500 transition-colors"><span className="material-symbols-outlined text-base">delete</span></button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="whitespace-nowrap px-6 py-4 font-medium">Legacy Reporting Script</td>
                <td className="whitespace-nowrap px-6 py-4 text-text-body font-mono">vsk_def...</td>
                <td className="whitespace-nowrap px-6 py-4 text-text-body">Read-Only</td>
                <td className="whitespace-nowrap px-6 py-4 text-text-body">Jan 10, 2024</td>
                <td className="whitespace-nowrap px-6 py-4 text-text-body">Jan 11, 2024</td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-400">
                    <span className="size-2 rounded-full bg-red-400 shadow-red-glow"></span>
                    Revoked
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button aria-label="Edit Permissions" className="p-1.5 rounded-md text-text-body/50 cursor-not-allowed" disabled><span className="material-symbols-outlined text-base">settings</span></button>
                    <button aria-label="Revoke Key" className="p-1.5 rounded-md text-text-body/50 cursor-not-allowed" disabled><span className="material-symbols-outlined text-base">delete</span></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 bg-white/5 px-6 py-4 rounded-b-xl">
          <p className="text-sm text-text-body">Showing <span className="font-medium text-text-heading">1</span> to <span className="font-medium text-text-heading">3</span> of <span className="font-medium text-text-heading">3</span> results</p>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center rounded-lg h-8 w-8 bg-transparent border border-white/20 text-text-body/50 text-sm font-medium cursor-not-allowed" disabled>
              <span className="material-symbols-outlined text-base">chevron_left</span>
            </button>
            <button className="flex items-center justify-center rounded-lg h-8 w-8 bg-transparent border border-white/20 text-text-body hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiKeysSettingsPage;
