import Link from 'next/link';

const AffectedEndpoints = () => {
  return (
    <div className="glass-card rounded-xl p-5">
      <h2 className="text-lg font-bold text-[#F0F0F0] mb-3">Affected Endpoints</h2>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2">
          <span className="material-symbols-outlined text-base text-primary">link</span>
          <Link href="#" className="text-primary hover:underline">/api/login</Link>
        </li>
        <li className="flex items-center gap-2">
          <span className="material-symbols-outlined text-base text-primary">link</span>
          <Link href="#" className="text-primary hover:underline">/search?q=test</Link>
        </li>
      </ul>
    </div>
  );
};

export default AffectedEndpoints;
