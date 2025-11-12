const NotificationsSettingsPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <header>
        <h2 className="text-text-heading text-xl font-bold">Notifications</h2>
        <p className="text-text-body mt-1 text-sm">Configure how you receive alerts and updates.</p>
      </header>
      <div className="glass-card rounded-xl">
        <div className="p-6 divide-y divide-white/10">
          <div className="pb-6 space-y-6">
            <h3 className="text-base font-semibold text-text-heading">Channels</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-text-body" style={{ fontSize: '24px' }}>mail</span>
                  <div>
                    <p className="text-sm font-medium text-text-heading">Email Notifications</p>
                    <p className="text-xs text-text-body">Get alerts delivered to your inbox.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-primary">On</span>
                  <button aria-checked="true" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark" role="switch" type="button">
                    <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-5"></span>
                  </button>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-text-body" style={{ fontSize: '24px' }}>web_asset</span>
                  <div>
                    <p className="text-sm font-medium text-text-heading">In-App Notifications</p>
                    <p className="text-xs text-text-body">Receive alerts within the application.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-text-body">Off</span>
                  <button aria-checked="false" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-white/10 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark" role="switch" type="button">
                    <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-0"></span>
                  </button>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-text-body" style={{ fontSize: '24px' }}>desktop_windows</span>
                  <div>
                    <p className="text-sm font-medium text-text-heading">Desktop Push Notifications</p>
                    <p className="text-xs text-text-body">Requires browser permissions to be enabled.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-text-body">Off</span>
                  <button aria-checked="false" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-white/10 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark" role="switch" type="button">
                    <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-0"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 space-y-4">
            <h3 className="text-base font-semibold text-text-heading">Event Types</h3>
            <p className="text-sm text-text-body">Select which events you want to be notified about via email.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input defaultChecked className="form-checkbox size-4 rounded bg-white/10 border-white/20 text-primary focus:ring-primary focus:ring-offset-background-dark" type="checkbox"/>
                <span className="text-sm text-text-heading">Critical Vulnerability Found</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input defaultChecked className="form-checkbox size-4 rounded bg-white/10 border-white/20 text-primary focus:ring-primary focus:ring-offset-background-dark" type="checkbox"/>
                <span className="text-sm text-text-heading">High Vulnerability Found</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input defaultChecked className="form-checkbox size-4 rounded bg-white/10 border-white/20 text-primary focus:ring-primary focus:ring-offset-background-dark" type="checkbox"/>
                <span className="text-sm text-text-heading">Scan Completed</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input className="form-checkbox size-4 rounded bg-white/10 border-white/20 text-primary focus:ring-primary focus:ring-offset-background-dark" type="checkbox"/>
                <span className="text-sm text-text-heading">New Report Available</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input defaultChecked className="form-checkbox size-4 rounded bg-white/10 border-white/20 text-primary focus:ring-primary focus:ring-offset-background-dark" type="checkbox"/>
                <span className="text-sm text-text-heading">Project Status Changes</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input className="form-checkbox size-4 rounded bg-white/10 border-white/20 text-primary focus:ring-primary focus:ring-offset-background-dark" type="checkbox"/>
                <span className="text-sm text-text-heading">Team Member Actions</span>
              </label>
            </div>
          </div>
          <div className="pt-6 space-y-4">
            <h3 className="text-base font-semibold text-text-heading">Frequency</h3>
            <div>
              <label className="block text-sm font-medium text-text-body mb-2" htmlFor="frequency">Email Frequency</label>
              <select className="form-select w-full max-w-sm rounded-lg border-white/20 bg-white/5 text-text-heading focus:border-primary focus:ring-primary/50" id="frequency" name="frequency">
                <option>Real-time</option>
                <option>Daily Digest</option>
                <option>Weekly Summary</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 border-t border-white/10 bg-white/5 px-6 py-4 rounded-b-xl">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-transparent border border-white/20 text-text-heading text-sm font-medium hover:bg-white/10 transition-colors">
            <span className="truncate">Cancel</span>
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-cyan-glow disabled:bg-primary/50 disabled:cursor-not-allowed disabled:shadow-none" disabled>
            <span className="truncate">Save Preferences</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotificationsSettingsPage;
