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
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-4">
                      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIiwNuOx_OUxvYzCUQ5OF8FulHehtOwWtvXaTYghMXARcEM9d3QigZSiJzhUP1NT8R9vslrn0hM9a98Zp7EaqAxH4qihz-FNZS7glM1sCKhMJUgQ_nvQWydGteara6m817glvwCsZ_0K1CF15lwi8HjAlNJ-3Z7VB2d6pwM0EC3Shs5R2DHqkPkuPtG1OFDmy1kCS4tC58IQowau0tnBZzxNCeBFG-pqrjjh7IzaPLVLOSzYHye9px2hNNbRJRBperUphDL00jtHY")` }}></div>
                      <div className="text-sm font-medium text-text-heading">Alex Doe</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">alex.doe@example.com</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">Admin</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-green-500 shadow-green-glow"></div>
                      <span className="text-sm text-green-400">Active</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">2 hours ago</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-4">
                      <button aria-label="Edit Role" className="text-text-body hover:text-text-heading transition-colors"><span className="material-symbols-outlined" style={{ fontSize: '20px' }}>settings</span></button>
                      <button aria-label="Remove Member" className="text-text-body hover:text-red-500 transition-colors"><span className="material-symbols-outlined" style={{ fontSize: '20px' }}>delete</span></button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-4">
                      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzMBACYoGQ8ACxNjMfGXuZ5Pn3OBcNWxwTe9SJmZ1XcT8KDHhJtbeSt0EGEcIy62hEst6Et1HOmTQJRN49bbWhef4mfTvpuyJypumN2SNfK9-NLOO6uoO5CJof4EIYJQjl0HPxiWH5gk8cZH6-QrcVc9mkIXJABauTxQaSn2dZY_EY3bSrW6WzMawaYvzTbXWnnn4BvxRHfx_4xMSPlMztMp_LTyv8PP0wVL9Xm-U4LwpM_E1MkLRuofQ5ZLQI9Jnfn4yq9db_EaQ")` }}></div>
                      <div className="text-sm font-medium text-text-heading">Jane Smith</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">jane.smith@example.com</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">Editor</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-green-500 shadow-green-glow"></div>
                      <span className="text-sm text-green-400">Active</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">1 day ago</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-4">
                      <button aria-label="Edit Role" className="text-text-body hover:text-text-heading transition-colors"><span className="material-symbols-outlined" style={{ fontSize: '20px' }}>settings</span></button>
                      <button aria-label="Remove Member" className="text-text-body hover:text-red-500 transition-colors"><span className="material-symbols-outlined" style={{ fontSize: '20px' }}>delete</span></button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-4">
                      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzMBACYoGQ8ACxNjMfGXuZ5Pn3OBcNWxwTe9SJmZ1XcT8KDHhJtbeSt0EGEcIy62hEst6Et1HOmTQJRN49bbWhef4mfTvpuyJypumN2SNfK9-NLOO6uoO5CJof4EIYJQjl0HPxiWH5gk8cZH6-QrcVc9mkIXJABauTxQaSn2dZY_EY3bSrW6WzMawaYvzTbXWnnn4BvxRHfx_4xMSPlMztMp_LTyv8PP0wVL9Xm-U4LwpM_E1MkLRuofQ5ZLQI9Jnfn4yq9db_EaQ")` }}></div>
                      <div className="text-sm font-medium text-text-heading">Sam Wilson</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">sam.wilson@example.com</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-500/20 text-gray-400">Viewer</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-yellow-500 shadow-yellow-glow"></div>
                      <span className="text-sm text-yellow-400">Pending Invitation</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Never</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-4">
                      <button aria-label="Edit Role" className="text-text-body hover:text-text-heading transition-colors"><span className="material-symbols-outlined" style={{ fontSize: '20px' }}>settings</span></button>
                      <button aria-label="Remove Member" className="text-text-body hover:text-red-500 transition-colors"><span className="material-symbols-outlined" style={{ fontSize: '20px' }}>delete</span></button>
                    </div>
                  </td>
                </tr>
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
