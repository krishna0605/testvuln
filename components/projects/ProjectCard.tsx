const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-white/[.03] p-5 backdrop-blur-sm transition-all hover:border-white/20">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold text-white">{project.name}</h3>
          <p className="text-sm text-[#A0A0B0]">{project.domain}</p>
        </div>
        <div className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${project.status === 'Completed' ? 'bg-green-500/10 text-green-400' : project.status === 'Scanning' ? 'bg-blue-500/10 text-blue-400 animate-pulse' : 'bg-gray-500/10 text-gray-400'}`}>
          <span className={`mr-1 h-2 w-2 rounded-full ${project.status === 'Completed' ? 'bg-green-400' : project.status === 'Scanning' ? 'bg-blue-400' : 'bg-gray-400'}`}></span>
          {project.status}
        </div>
      </div>
      <div className="my-4 h-px w-full bg-white/10"></div>
      <p className="text-sm text-[#A0A0B0]">Vulnerability Summary</p>
      <div className="mt-2 flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500"></span>
          <span className="font-medium text-white">{project.vulnerabilities?.critical || 0}</span>
          <span className="text-xs text-[#A0A0B0]">Critical</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-orange-500"></span>
          <span className="font-medium text-white">{project.vulnerabilities?.high || 0}</span>
          <span className="text-xs text-[#A0A0B0]">High</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
          <span className="font-medium text-white">{project.vulnerabilities?.medium || 0}</span>
          <span className="text-xs text-[#A0A0B0]">Medium</span>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex -space-x-2">
          {project.team.map((avatar: string, index: number) => (
            <div key={index} className="size-8 rounded-full border-2 border-background-dark bg-cover" style={{ backgroundImage: `url('${avatar}')` }}></div>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-[#A0A0B0] hover:bg-white/10 hover:text-white"><span className="material-symbols-outlined">play_arrow</span></button>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-[#A0A0B0] hover:bg-white/10 hover:text-white"><span className="material-symbols-outlined">visibility</span></button>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-[#A0A0B0] hover:bg-white/10 hover:text-white"><span className="material-symbols-outlined">settings</span></button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
