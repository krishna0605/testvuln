export function ProjectsList() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4 px-1">
        <h2 className="text-text-primary text-xl font-bold">My Projects</h2>
        <div className="flex items-center gap-1 p-1 rounded-lg bg-white/5 border border-white/10">
          <button className="px-2 py-1 rounded-md bg-white/10 text-text-primary"><span className="material-symbols-outlined text-base">grid_view</span></button>
          <button className="px-2 py-1 rounded-md text-text-secondary"><span className="material-symbols-outlined text-base">view_list</span></button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4 rounded-lg p-5 glass-card transition-transform transform hover:scale-[1.02] hover:border-primary/50 cursor-pointer">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-text-primary">E-commerce Platform</h3>
              <p className="text-sm text-text-secondary">webapp.example.com</p>
            </div>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-500/20 text-green-400">Completed</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <p className="text-text-secondary">Last scan: 3 days ago</p>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-red-400"><div className="size-2 rounded-full bg-red-500"></div>2</span>
              <span className="flex items-center gap-1 text-yellow-400"><div className="size-2 rounded-full bg-yellow-500"></div>5</span>
              <span className="flex items-center gap-1 text-blue-400"><div className="size-2 rounded-full bg-blue-500"></div>12</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg p-5 glass-card transition-transform transform hover:scale-[1.02] hover:border-primary/50 cursor-pointer">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-text-primary">Corporate API</h3>
              <p className="text-sm text-text-secondary">api.vulnscanner.dev</p>
            </div>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 animate-pulse">Scanning</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <p className="text-text-secondary">Last scan: In progress</p>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-red-400"><div className="size-2 rounded-full bg-red-500"></div>0</span>
              <span className="flex items-center gap-1 text-yellow-400"><div className="size-2 rounded-full bg-yellow-500"></div>1</span>
              <span className="flex items-center gap-1 text-blue-400"><div className="size-2 rounded-full bg-blue-500"></div>3</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg p-5 glass-card transition-transform transform hover:scale-[1.02] hover:border-primary/50 cursor-pointer">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-text-primary">Marketing Website</h3>
              <p className="text-sm text-text-secondary">mktg.example.com</p>
            </div>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-500/20 text-gray-400">Pending</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <p className="text-text-secondary">Last scan: Never</p>
            <div className="flex items-center gap-2 text-text-secondary">
              No data
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg p-5 glass-card transition-transform transform hover:scale-[1.02] hover:border-primary/50 cursor-pointer">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-text-primary">Admin Dashboard</h3>
              <p className="text-sm text-text-secondary">admin.example.com</p>
            </div>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-500/20 text-green-400">Completed</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <p className="text-text-secondary">Last scan: 1 week ago</p>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-red-400"><div className="size-2 rounded-full bg-red-500"></div>1</span>
              <span className="flex items-center gap-1 text-yellow-400"><div className="size-2 rounded-full bg-yellow-500"></div>3</span>
              <span className="flex items-center gap-1 text-blue-400"><div className="size-2 rounded-full bg-blue-500"></div>8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
