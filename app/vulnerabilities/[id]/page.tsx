import Link from 'next/link';
import VulnerabilityDetails from '@/components/vulnerabilities/VulnerabilityDetails';
import EvidenceTabs from '@/components/vulnerabilities/EvidenceTabs';
import PoCPanel from '@/components/vulnerabilities/PoCPanel';
import AffectedEndpoints from '@/components/vulnerabilities/AffectedEndpoints';
import LeftNavTabs from '@/components/vulnerabilities/LeftNavTabs';
import QuickStats from '@/components/vulnerabilities/QuickStats';
import Actions from '@/components/vulnerabilities/Actions';
import RemediationPanel from '@/components/vulnerabilities/RemediationPanel';
import ReferencesPanel from '@/components/vulnerabilities/ReferencesPanel';
import FindingDetails from '@/components/vulnerabilities/FindingDetails';

const VulnerabilityDetailsPage = () => {
  return (
    <main className="flex-1 px-4 py-8 md:px-8 lg:px-12 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
            <Link href="/projects" className="text-[#A0A0B0] hover:text-primary">Projects</Link>
            <span className="text-[#A0A0B0]">/</span>
            <Link href="/projects/1" className="text-[#A0A0B0] hover:text-primary">ProjectName</Link>
            <span className="text-[#A0A0B0]">/</span>
            <Link href="/reports/1" className="text-[#A0A0B0] hover:text-primary">Scan #1024</Link>
            <span className="text-[#A0A0B0]">/</span>
            <span className="text-white">SQL Injection</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl md:text-4xl font-bold text-[#F0F0F0] tracking-tight">SQL Injection</h1>
              <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-red-500/10 px-4 ring-1 ring-inset ring-red-500/20 glow-critical">
                <p className="text-sm font-medium text-red-400">Critical</p>
              </div>
            </div>
            <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors">
              <span className="truncate">Mark as Resolved</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="sticky top-8 flex flex-col gap-6">
              <LeftNavTabs />
              <QuickStats />
              <Actions />
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="flex flex-col gap-6">
              <VulnerabilityDetails />
              <EvidenceTabs />
              <PoCPanel />
              <AffectedEndpoints />
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="sticky top-8 flex flex-col gap-6">
              <RemediationPanel />
              <ReferencesPanel />
              <FindingDetails />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VulnerabilityDetailsPage;
