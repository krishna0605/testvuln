const ProfileSettingsPage = () => {
  return (
    <section className="flex flex-col gap-6">
      <header>
        <h2 className="text-text-heading text-2xl font-bold">Profile</h2>
        <p className="text-text-body mt-1">Manage your personal information and preferences.</p>
      </header>
      <div className="glass-card rounded-xl">
        <div className="p-6 sm:p-8">
          <h3 className="text-text-heading text-lg font-semibold">Profile Information</h3>
          <div className="mt-6 space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 border-2 border-white/10" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIiwNuOx_OUxvYzCUQ5OF8FulHehtOwWtvXaTYghMXARcEM9d3QigZSiJzhUP1NT8R9vslrn0hM9a98Zp7EaqAxH4qihz-FNZS7glM1sCKhMJUgQ_nvQWydGteara6m817glvwCsZ_0K1CF15lwi8HjAlNJ-3Z7VB2d6pwM0EC3Shs5R2DHqkPkuPtG1OFDmy1kCS4tC58IQowau0tnBZzxNCeBFG-pqrjjh7IzaPLVLOSzYHye9px2hNNbRJRBperUphDL00jtHY")` }}></div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <label className="cursor-pointer" htmlFor="file-upload">
                  <div className="flex justify-center items-center gap-2 text-sm text-center border-2 border-dashed border-white/20 rounded-lg p-6 hover:bg-white/5 transition-colors">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>upload_file</span>
                    <div>
                      <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                      <p className="text-xs text-text-body mt-1">SVG, PNG, JPG or GIF (max. 800x800px)</p>
                    </div>
                  </div>
                </label>
                <input className="sr-only" id="file-upload" name="file-upload" type="file"/>
              </div>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-white/10 text-text-heading text-sm font-medium hover:bg-white/20 transition-colors">
                <span className="truncate">Upload New Photo</span>
              </button>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-text-heading mb-2" htmlFor="full-name">Full Name</label>
                <input className="form-input w-full rounded-lg border-white/20 bg-white/5 text-text-heading focus:border-primary focus:ring-primary/50" id="full-name" name="full-name" type="text" value="Alex Harrison"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-heading mb-2" htmlFor="email">Email Address</label>
                <div className="relative">
                  <input className="form-input w-full rounded-lg border-white/20 bg-white/10 text-text-body cursor-not-allowed pr-28" id="email" name="email" readOnly type="email" value="alex.harrison@vulnscanner.com"/>
                  <button className="absolute inset-y-1.5 right-1.5 flex items-center justify-center rounded-md h-[calc(100%-0.75rem)] px-2 text-xs font-medium text-primary hover:bg-primary/10 transition-colors">Update Email</button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-text-heading mb-2" htmlFor="company-name">Company Name</label>
                <input className="form-input w-full rounded-lg border-white/20 bg-white/5 text-text-heading focus:border-primary focus:ring-primary/50" id="company-name" name="company-name" type="text" value="CyberSec Solutions"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-heading mb-2" htmlFor="job-role">Job Role</label>
                <select className="form-select w-full rounded-lg border-white/20 bg-white/5 text-text-heading focus:border-primary focus:ring-primary/50" id="job-role" name="job-role">
                  <option>Developer</option>
                  <option selected>Security Engineer</option>
                  <option>Team Lead</option>
                  <option>Manager</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-text-heading mb-2" htmlFor="timezone">Timezone</label>
                <select className="form-select w-full rounded-lg border-white/20 bg-white/5 text-text-heading focus:border-primary focus:ring-primary/50" id="timezone" name="timezone">
                  <option>(UTC-08:00) Pacific Time</option>
                  <option selected>(UTC-05:00) Eastern Time</option>
                  <option>(UTC+00:00) Greenwich Mean Time</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-heading mb-2" htmlFor="language">Language</label>
                <select className="form-select w-full rounded-lg border-white/20 bg-white/5 text-text-heading focus:border-primary focus:ring-primary/50" id="language" name="language">
                  <option selected>English (US)</option>
                  <option>English (UK)</option>
                  <option>Español</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 border-t border-white/10 bg-white/5 px-6 py-4 rounded-b-xl">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent border border-white/20 text-text-heading text-sm font-medium hover:bg-white/10 transition-colors">
            <span className="truncate">Cancel</span>
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium transition-all hover:bg-primary/90 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark">
            <span className="truncate">Save Profile</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSettingsPage;
