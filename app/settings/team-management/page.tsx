const TeamManagementSettingsPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <header>
        <h2 className="text-text-heading text-xl font-bold">Team Management</h2>
        <p className="text-text-body mt-1 text-sm">Manage your team members and their roles.</p>
      </header>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <label className="flex flex-col !h-10 w-full max-w-sm">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-text-body flex border-none bg-white/5 items-center justify-center pl-3 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
              </div>
              <input className="form-input w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-heading focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-white/5 h-full placeholder:text-text-body px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal" placeholder="Search team members or email..."/>
            </div>
          </label>
          <button className="w-full md:w-auto flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-cyan-glow transition-all hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-px">
            <span className="material-symbols-outlined mr-2" style={{ fontSize: '20px' }}>add</span>
            <span className="truncate">Invite New Member</span>
          </button>
        </div>
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-body uppercase tracking-wider" scope="col">Avatar & Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-body uppercase tracking-wider" scope="col">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-body uppercase tracking-wider" scope="col">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-body uppercase tracking-wider" scope="col">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-body uppercase tracking-wider" scope="col">Last Active</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-text-body uppercase tracking-wider" scope="col">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {/* Team members rows */}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t border-white/10 bg-white/5 px-6 py-4">
            <p className="text-sm text-text-body">Showing 1 to 3 of 3 results</p>
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center size-8 rounded-lg text-text-body/50 cursor-not-allowed">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_left</span>
              </button>
              <button className="flex items-center justify-center size-8 rounded-lg bg-primary/20 text-primary text-sm font-bold">1</button>
              <button className="flex items-center justify-center size-8 rounded-lg text-text-body hover:bg-white/10">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamManagementSettingsPage;
