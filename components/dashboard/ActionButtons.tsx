export const ActionButtons = () => {
  return (
    <div className="flex flex-shrink-0 gap-3">
      <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide transition-all duration-300 glow-on-hover">
        <span className="material-symbols-outlined mr-2" style={{ fontSize: '20px' }}>add</span>
        <span className="truncate">New Scan</span>
      </button>
      <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white/10 text-text-primary border border-white/20 hover:bg-white/20 text-sm font-bold leading-normal tracking-wide transition-colors">
        <span className="truncate">New Project</span>
      </button>
    </div>
  );
};
