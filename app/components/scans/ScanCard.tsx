const ScanCard = ({ scan }: { scan: any }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-card-dark p-6 backdrop-blur-sm transition-all hover:border-border-dark/80 hover:bg-white/10">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <p className="text-lg font-bold text-text-heading">{scan.target}</p>
          <div className={`mt-1 flex items-center gap-2 ${scan.status === 'Scanning' ? 'text-primary' : 'text-amber-400'}`}>
            {scan.status === 'Scanning' && (
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </div>
            )}
            <p className="text-sm font-medium">{scan.status}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-text-body">
          <button className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-white/10 hover:text-white">
            <span className="material-symbols-outlined text-xl">{scan.status === 'Scanning' ? 'pause' : 'play_arrow'}</span>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-white/10 hover:text-white"><span className="material-symbols-outlined text-xl">cancel</span></button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-white/10 hover:text-white"><span className="material-symbols-outlined text-xl">more_vert</span></button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-2 flex-1 rounded-full bg-white/5">
          <div className={`h-2 rounded-full ${scan.status === 'Scanning' ? 'bg-primary shadow-glow-cyan' : 'bg-amber-400'}`} style={{ width: `${scan.progress}%` }}></div>
        </div>
        <p className="text-sm font-semibold text-text-heading">{scan.progress}%</p>
      </div>
      <div className="flex items-center justify-between text-sm text-text-body">
        <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">description</span><span>{scan.pages} pages</span></div>
        <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">link</span><span>{scan.urls} URLs</span></div>
        <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">timer</span><span>{scan.elapsed} elapsed</span></div>
      </div>
    </div>
  );
};

export default ScanCard;
