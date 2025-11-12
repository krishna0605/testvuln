const GeneralSettingsPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <header>
        <h2 className="text-text-heading text-xl font-bold">General Settings</h2>
        <p className="text-text-body mt-1 text-sm">Configure your workspace's general settings.</p>
      </header>
      <div className="glass-card rounded-xl">
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-text-heading mb-2" htmlFor="timezone">Timezone</label>
              <select className="form-select w-full rounded-lg border-white/20 bg-white/5 text-text-heading focus:border-primary focus:ring-primary/50" id="timezone" name="timezone">
                <option>(UTC-08:00) Pacific Time</option>
                <option>(UTC-05:00) Eastern Time</option>
                <option>(UTC+00:00) Greenwich Mean Time</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-heading mb-2" htmlFor="date-format">Date Format</label>
              <select className="form-select w-full rounded-lg border-white/20 bg-white/5 text-text-heading focus:border-primary focus:ring-primary/50" id="date-format" name="date-format">
                <option>MM/DD/YYYY</option>
                <option>DD/MM/YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-text-heading mb-2" htmlFor="language">Language</label>
              <select className="form-select w-full rounded-lg border-white/20 bg-white/5 text-text-heading focus:border-primary focus:ring-primary/50" id="language" name="language">
                <option>English (US)</option>
                <option>English (UK)</option>
                <option>Español</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-heading mb-2">Theme</label>
              <div className="flex items-center gap-4">
                <p className="text-text-body">Dark</p>
                <button aria-checked="true" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark" role="switch" type="button">
                  <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-5"></span>
                </button>
                <p className="text-text-body/50">Light</p>
              </div>
            </div>
          </div>
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
  );
};

export default GeneralSettingsPage;
