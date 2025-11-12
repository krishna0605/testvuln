import Link from 'next/link';

const SettingsPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full grow">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-text-heading text-4xl font-bold tracking-tight">Settings</p>
          <p className="text-text-body text-base mt-2">Manage your profile, preferences, and workspace settings.</p>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <aside className="w-full lg:w-64 lg:flex-shrink-0">
            <nav className="sticky top-28">
              <div className="flex flex-col gap-1 p-2 glass-card rounded-xl">
                <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/20 text-primary transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>tune</span>
                  <p className="text-sm font-medium">General</p>
                </Link>
                <Link href="/settings/profile" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-body hover:bg-white/10 hover:text-text-heading transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>account_circle</span>
                  <p className="text-sm font-medium">Profile</p>
                </Link>
                <Link href="/settings/security" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-body hover:bg-white/10 hover:text-text-heading transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>shield</span>
                  <p className="text-sm font-medium">Security</p>
                </Link>
                <Link href="/settings/notifications" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-body hover:bg-white/10 hover:text-text-heading transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>notifications</span>
                  <p className="text-sm font-medium">Notifications</p>
                </Link>
                <Link href="/settings/integrations" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-body hover:bg-white/10 hover:text-text-heading transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>extension</span>
                  <p className="text-sm font-medium">Integrations</p>
                </Link>
                <Link href="/settings/api-keys" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-body hover:bg-white/10 hover:text-text-heading transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>key</span>
                  <p className="text-sm font-medium">API Keys</p>
                </Link>
                <Link href="/billing" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-body hover:bg-white/10 hover:text-text-heading transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>credit_card</span>
                  <p className="text-sm font-medium">Billing</p>
                </Link>
                <Link href="/settings/team-management" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-body hover:bg-white/10 hover:text-text-heading transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>group</span>
                  <p className="text-sm font-medium">Team Management</p>
                </Link>
                <Link href="/settings/audit-log" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-body hover:bg-white/10 hover:text-text-heading transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>receipt_long</span>
                  <p className="text-sm font-medium">Audit Log</p>
                </Link>
              </div>
            </nav>
          </aside>
          <div className="flex-1">
            <div className="flex flex-col gap-10">
              <section className="flex flex-col gap-4">
                <header>
                  <h2 className="text-text-heading text-xl font-bold">General Settings</h2>
                  <p className="text-text-body mt-1 text-sm">Configure your workspace's general settings.</p>
                </header>
                <div className="glass-card rounded-xl">
                  <div className="p-6 space-y-6">
                    {/* General Settings Form */}
                  </div>
                  <div className="flex items-center justify-end gap-3 border-t border-white/10 bg-white/5 px-6 py-4 rounded-b-xl">
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-transparent border border-white/20 text-text-heading text-sm font-medium hover:bg-white/10 transition-colors">
                      <span className="truncate">Cancel</span>
                    </button>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">
                      <span className="truncate">Save Changes</span>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SettingsPage;
