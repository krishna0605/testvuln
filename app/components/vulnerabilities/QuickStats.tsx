import Link from 'next/link';

const QuickStats = () => {
  return (
    <div className="glass-card rounded-xl p-4">
      <h2 className="text-lg font-bold text-[#F0F0F0] mb-3">Quick Stats</h2>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between"><span>CVSS Score:</span> <span className="font-bold text-red-400">9.8</span></div>
        <div className="flex justify-between items-center"><span>CVE:</span> <Link href="#" className="text-primary hover:underline">CVE-2023-45133</Link></div>
        <div className="flex justify-between items-center"><span>CWE:</span> <Link href="#" className="text-primary hover:underline">CWE-89</Link></div>
      </div>
    </div>
  );
};

export default QuickStats;
