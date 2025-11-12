const SecuritySettingsPage = () => {
  return (
    <section className="flex flex-col gap-6">
      <header>
        <h2 className="text-text-heading text-xl font-bold">Security</h2>
        <p className="text-text-body mt-1 text-sm">Configure your account security preferences and settings.</p>
      </header>
      <div className="glass-card rounded-xl">
        <div className="p-6 divide-y divide-white/10">
          <div className="pb-6">
            <h3 className="text-base font-semibold text-text-heading">Change Password</h3>
            <p className="text-text-body text-sm mt-1 mb-4">For your security, we recommend choosing a strong, unique password that you don't use for any other service.</p>
            <button className="glowing-button relative flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-medium transition-colors z-0">
              <span className="truncate">Change Password</span>
            </button>
          </div>
          <div className="py-6">
            <h3 className="text-base font-semibold text-text-heading">Two-Factor Authentication (2FA)</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-4">
              <p className="text-text-body text-sm max-w-md">Add an extra layer of security to your account. Once enabled, you'll be required to enter a code from your authenticator app to log in.</p>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-sm font-medium text-primary">Enabled</span>
                <button aria-checked="true" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark" role="switch" type="button">
                  <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-5"></span>
                </button>
              </div>
            </div>
            <div className="mt-4">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-white/10 text-text-heading text-sm font-medium hover:bg-white/20 transition-colors">Manage 2FA</button>
            </div>
          </div>
          <div className="pt-6">
            <h3 className="text-base font-semibold text-text-heading">Active Sessions</h3>
            <p className="text-text-body text-sm mt-1 mb-4">This is a list of devices that have logged into your account. Revoke any sessions that you do not recognize.</p>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-transparent border border-white/20 text-text-heading text-sm font-medium hover:bg-white/10 transition-colors">Manage Active Sessions</button>
          </div>
        </div>
      </div>
      <div className="glass-card rounded-xl border-red-500/30">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-red-400">Delete Account</h3>
              <p className="text-text-body text-sm mt-1 max-w-xl">Permanently delete your VulnScanner account and all associated data. This action cannot be undone.</p>
            </div>
            <button className="flex-shrink-0 bg-red-600/20 text-red-400 ring-2 ring-red-500/20 hover:brightness-125 transition-all min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 text-sm font-medium">
              <span className="truncate">Delete Account</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySettingsPage;
