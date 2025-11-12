import { Icon } from '@/components/Icon';

export function ActionsRow() {
  return (
    <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <button className="flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-[0_0_15px_-3px_rgba(14,165,233,0.5)] transition-all hover:shadow-[0_0_25px_-3px_rgba(14,165,233,0.7)]">
          <Icon name="add" className="fill !text-xl" />
          <span>New Project</span>
        </button>
        <button className="flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-white/10 bg-white/5 px-4 text-sm font-bold text-white transition-all hover:bg-white/10">
          <Icon name="upload_file" className="!text-xl" />
          <span>Import Projects</span>
        </button>
      </div>
      <div className="flex items-center gap-3">
        <label className="flex-1 md:flex-none">
          <div className="flex w-full items-stretch rounded-lg border border-white/10 bg-white/5">
            <div className="text-[#A0A0B0] flex items-center justify-center pl-3">
              <Icon name="search" className="!text-xl" />
            </div>
            <input
              className="form-input h-10 flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border-none bg-transparent text-white placeholder:text-[#A0A0B0] focus:outline-none focus:ring-0"
              placeholder="Search by name or domain"
            />
          </div>
        </label>
        <div className="flex items-center rounded-lg border border-white/10 bg-white/5 p-0.5">
          <button className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/20 text-primary">
            <Icon name="grid_view" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md text-[#A0A0B0] hover:text-white">
            <Icon name="list" />
          </button>
        </div>
      </div>
    </section>
  );
}