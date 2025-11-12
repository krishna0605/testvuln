import Link from 'next/link';

export function ProjectsHeader() {
  return (
    <section>
      <div className="flex items-center gap-2 text-sm text-[#A0A0B0]">
        <Link href="/" className="hover:text-white">
          Dashboard
        </Link>
        <span>/</span>
        <span className="text-white">Projects</span>
      </div>
      <div className="mt-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div className="flex-1">
          <h1 className="text-4xl font-bold tracking-tighter text-white">
            Projects
          </h1>
          <p className="mt-2 text-base text-[#A0A0B0]">
            Manage your targets, view scan history, and start new scans.
          </p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex min-w-[158px] flex-1 cursor-pointer flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-5 transition-all hover:border-white/20">
          <p className="text-sm font-medium text-[#A0A0B0]">Total Projects</p>
          <p className="text-3xl font-bold text-white">128</p>
        </div>
        <div className="flex min-w-[158px] flex-1 cursor-pointer flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-5 transition-all hover:border-white/20">
          <p className="text-sm font-medium text-[#A0A0B0]">Active Scans</p>
          <p className="text-3xl font-bold text-white">12</p>
        </div>
        <div className="flex min-w-[158px] flex-1 cursor-pointer flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-5 transition-all hover:border-white/20">
          <p className="text-sm font-medium text-[#A0A0B0]">Vulnerabilities</p>
          <p className="text-3xl font-bold text-white">3,402</p>
        </div>
      </div>
    </section>
  );
}