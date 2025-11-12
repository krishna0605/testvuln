import { ProjectCard } from '@/app/projects/components/ProjectCard';

const projects: {
  name: string;
  domain: string;
  status: 'Completed' | 'Scanning' | 'Idle';
  vulnerabilities: { critical?: number; high?: number; medium?: number; progress?: number };
  team: string[];
}[] = [
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC7MDadjyIuVWA9HTU3o7r5M4_pZJmEGtAJuLV3qwigLt5wOPKXw1KmDRA_a3QAqFcDm4rrSosWgUPQJjgrCnrQrPcHYZ00EgDCFwijF4f6d5faBF_SUcg-ZbZ-NRSWnKRoCslH0eNnwrYg_l9r58fhGAxp-3D2H8PH9nrWBojtE90r8NYFrDCohC9ftyKYQyLBBvere1B1nWCU2H2TcU_g9-odUa-4I3UtLRtsJHU8zhu9GXE45ihEQnLyJyLMTVrfD2Hle6lpO4A',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCdlGccNTYDVS-wA_lyc4x5J972Olz17NJ1c35hoFFcp-PAMr9da4_u67Mh1KtqcH5CNMHA5-h2gTS6Tbze-z_wYHn6FeOWj9q1rCvGqKHzdnLs-p2WkS8BFL8n9HPvPxXnwMxgk0vTg6dhlMbhWPFCri0eqOh9CpBKLfIMJufoiETKLmqeVr0CAzDBdlM0wCAeM5bzUH_rhcoMVKI5ZkoObRI_ZhmiPVNxUMIq_CE17oj_wDhTVxbsHoXduvNj_AadeBh0X_-klk',
    ],
  },
  {
    name: 'Marketing Website',
    domain: 'vulnscanner.io',
    status: 'Scanning',
    vulnerabilities: {
      progress: 65,
    },
    team: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALM_b6_qlGci6U7BkGCWVjxUDruDMz3DCGpm9B-Z4bdzuzcZJV1zryuBNsAiKtRD36SrG6LdxOKfJXrQvwhhjdewNOigBoY3ADFQshNTV96lSD6-tLZaTlfpwZWyTeSZ8D3mRoK5tDRmK2rsmrBBgNEC9MMxVVmzaDlXrKFm-ppi7WWY-fm42YDNyZrDaqr2Tq6v6vmnKYCjOXRDU2UYeihJlb5UCmGhEKxLwNf31FOREbwfwaaZcJCBSAQPsufOMZJGjZ9CBCeIk',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA928jzLXMi8p7qUKNoYt6DrieEbGvSgJ0NH41eEggUcQlbYFxzj8JiH1pwBjwOcv2ARXFaFDwnw1F0PPMlBaaGb57Qkr4RwikYjmoiHbWyUvKvgCXw8uzBnVnkZjjuG-_aGqdSqbFfauCGP2vsRIHj-qS8iO8r-EX2v-hs9CSUHVmEcB2JskQVUck8WdJqySJMxOim17hSJeM_RMLktn1uVrC9o5US6EX1J-BEMONPuGAUtiw8FoH7BW8kHwAh2_cZvunlL6hVKBY',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAkNRqCKiIXO78SNaHsbVndhh0EXl8Vn_6DiSJpvb0Ayqc7wWDbqXXk3fa2BfF8Vhl6D_g2kdVmug8rpuq90DHejXojNonRh8gXwAPsJz6R4lFhEWI0CGRBjJVt5CqP0geZs6UTlsgThMLWZZvPPwkPG6_0hxDTHDMq9nGUbbU9AtXUyrt3uAS2EoBsDW90ZYIXdOUU9zb2nrQQhES1gun4No7J_MDDk1gKKOqT9o916Qx2D2PdFSLgWfGmbNmZ9A5ZAK_VUXn21E',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCDbI6vxGRku-HdX8e6wG9wVqfsTpw_42R6TC6z5z-reCgax-P7bXrHVLo6_gXSo1D7jN_a3PhcLcFtMHWEagilTIDI52Kj14REY19Q8rZxsU2kK4HpL4rpL065J7hMzOnf3IFPnFaV_Pm_2nHcWgTlkmvOjAtoxWhfh1kuN9xCqyspZFzKpJMvt0TEOlK86obTZrj49CW0gAxULKsllDK92ZkTgedAIpRzZbVZXkBTK-p14oZ9BaVV0PYuJQsBM-E37Lm0howufVc',
    ],
  },
];

export function ProjectsGrid() {
  return (
    <section className="grid grid-cols-1 gap-6 @container md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}