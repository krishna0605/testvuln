import Link from 'next/link';

const ReferencesPanel = () => {
  return (
    <div className="glass-card rounded-xl p-4">
      <h2 className="text-lg font-bold text-[#F0F0F0] mb-3">References</h2>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2">
          <span className="material-symbols-outlined text-base text-primary">open_in_new</span>
          <Link href="#" className="text-primary hover:underline">OWASP: SQL Injection</Link>
        </li>
        <li className="flex items-center gap-2">
          <span className="material-symbols-outlined text-base text-primary">open_in_new</span>
          <Link href="#" className="text-primary hover:underline">PortSwigger: SQLi</Link>
        </li>
      </ul>
    </div>
  );
};

export default ReferencesPanel;
