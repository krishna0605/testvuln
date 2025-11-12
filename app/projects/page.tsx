import Link from 'next/link';
import ProjectCard from '@/app/components/projects/ProjectCard';

const projects = [
  {
    name: 'E-commerce Platform',
    domain: 'api.ecom.vulnscanner.io',
    status: 'Completed',
    vulnerabilities: {
      critical: 4,
      high: 12,
      medium: 35,
    },
    team: [
      { avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7MDadjyIuVWA9HTU3o7r5M4_pZJmEGtAJuLV3qwigLt5wOPKXw1KmDRA_a3QAqFcDm4rrSosWgUPQJjgrCnrQrPcHYZ00EgDCFwijF4f6d5faBF_SUcg-ZbZ-NRSWnKRoCslH0eNnwrYg_l9r58fhGAxp-3D2H8PH9nrWBojtE90r8NYFrDCohC9ftyKYQyLBBvere1B1nWCU2H2TcU_g9-odUa-4I3UtLRtsJHU8zhu9GXE45ihEQnLyJyLMTVrfD2Hle6lpO4A' },
      { avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCdlGccNTYDVS-wA_lyc4x5J972Olz17NJ1c35hoFFcp-PAMr9da4_u67Mh1KtqcH5CNMHA5-h2gTS6Tbze-z_wYHn6FeOWj9q1rCvGqKHzdnLs-p2WkS8BFL8n9HPvPxXnwMxgk0vTg6dhlMbhWPFCri0eqOh9CpBKLfIMJufoiETKLmqeVr0CAzDBdlM0wCAeM5bzUH_rhcoMVKI5ZkoObRI_ZhmiPVNxUMIq_CE17oj_wDhTVxbsHoXduvNj_AadeBh0X_-klk' },
    ],
  },
  {
    name: 'Marketing Website',
    domain: 'vulnscanner.io',
    status: 'Scanning',
    vulnerabilities: {
      critical: 0,
      high: 0,
      medium: 0,
    },
    team: [
      { avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALM_b6_qlGci6U7BkGCWVjxUDruDMz3DCGpm9B-Z4bdzuzcZJV1zryuBNsAiKtRD36SrG6LdxOKfJXrQvwhhjdewNOigBoY3ADFQshNTV96lSD6-tLZaTlfpwZWyTeSZ8D3mRoK5tDRmK2rsmrBBgNEC9MMxVVmzaDlXrKFm-ppi7WWY-fm42YDNyZrDaqr2Tq6v6vmnKYCjOXRDU2UYeihJlb5UCmGhEKxLwNf31FOREbwfwaaZcJCBSAQPsufOMZJGjZ9CBCeIk' },
    ],
  },
  {
    name: 'Internal Dashboard',
    domain: 'internal.app.vulnscanner.io',
    status: 'Idle',
    vulnerabilities: {
      critical: 1,
      high: 2,
      medium: 8,
    },
    team: [
      { avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA928jzLXMi8p7qUKNoYt6DrieEbGvSgJ0NH41eEggUcQlbYFxzj8JiH1pwBjwOcv2ARXFaFDwnw1F0PPMlBaaGb57Qkr4RwikYjmoiHbWyUvKvgCXw8uzBnVnkZjjuG-_aGqdSqbFfauCGP2vsRIHj-qS8iO8r-EX2v-hs9CSUHVmEcB2JskQVUck8WdJqySJMxOim17hSJeM_RMLktn1uVrC9o5US6EX1J-BEMONPuGAUtiw8FoH7BW8kHwAh2_cZvunlL6hVKBY' },
      { avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAkNRqCKiIXO78SNaHsbVndhh0EXl8Vn_6DiSJpvb0Ayqc7wWDbqXXk3fa2BfF8Vhl6D_g2kdVmug8rpuq90DHejXojNonRh8gXwAPsJz6R4lFhEWI0CGRBjJVt5CqP0geZs6UTlsgThMLWZZvPPwkPG6_0hxDTHDMq9nGUbbU9AtXUyrt3uAS2EoBsDW90ZYIXdOUU9zb2nrQQhES1gun4No7J_MDDk1gKKOqT9o916Qx2D2PdFSLgWfGmbNmZ9A5ZAK_VUXn21E' },
      { avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDbI6vxGRku-HdX8e6wG9wVqfsTpw_42R6TC6z5z-reCgax-P7bXrHVLo6_gXSo1D7jN_a3PhcLcFtMHWEagilTIDI52Kj14REY19Q8rZxsU2kK4HpL4rpL065J7hMzOnf3IFPnFaV_Pm_2nHcWgTlkmvOjAtoxWhfh1kuN9xCqyspZFzKpJMvt0TEOlK86obTZrj49CW0gAxULKsllDK92ZkTgedAIpRzZbVZXkBTK-p14oZ9BaVV0PYuJQsBM-E37Lm0howufVc' },
    ],
  },
];

const ProjectsPage = () => {
  return (
    <main className="flex flex-1 justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-screen-xl space-y-8">
        <section>
          <div className="flex items-center gap-2 text-sm text-[#A0A0B0]">
            <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
            <span>/</span>
            <span className="text-white">Projects</span>
          </div>
          <div className="mt-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tighter text-white">Projects</h1>
              <p className="mt-2 text-base text-[#A0A0B0]">Manage your targets, view scan history, and start new scans.</p>
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

        <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <button className="flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-[0_0_15px_-3px_rgba(14,165,233,0.5)] transition-all hover:shadow-[0_0_25px_-3px_rgba(14,165,233,0.7)]">
              <span className="material-symbols-outlined fill !text-xl">add</span>
              <span>New Project</span>
            </button>
            <button className="flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-white/10 bg-white/5 px-4 text-sm font-bold text-white transition-all hover:bg-white/10">
              <span className="material-symbols-outlined !text-xl">upload_file</span>
              <span>Import Projects</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <label className="flex-1 md:flex-none">
              <div className="flex w-full items-stretch rounded-lg border border-white/10 bg-white/5">
                <div className="text-[#A0A0B0] flex items-center justify-center pl-3">
                  <span className="material-symbols-outlined !text-xl">search</span>
                </div>
                <input className="form-input h-10 flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border-none bg-transparent text-white placeholder:text-[#A0A0B0] focus:outline-none focus:ring-0" placeholder="Search by name or domain" value=""/>
              </div>
            </label>
            <div className="flex items-center rounded-lg border border-white/10 bg-white/5 p-0.5">
              <button className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/20 text-primary">
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-md text-[#A0A0B0] hover:text-white">
                <span className="material-symbols-outlined">list</span>
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 @container md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </section>

        <nav className="flex items-center justify-between pt-4">
          <p className="text-sm text-[#A0A0B0]">Showing 1-3 of 128 projects</p>
          <div className="flex items-center gap-2">
            <button className="flex h-9 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 text-sm font-medium text-white transition-all hover:bg-white/10 disabled:opacity-50" disabled>Previous</button>
            <button className="flex h-9 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 text-sm font-medium text-white transition-all hover:bg-white/10">Next</button>
          </div>
        </nav>
      </div>
    </main>
  );
};

export default ProjectsPage;
