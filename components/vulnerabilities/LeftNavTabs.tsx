import Link from 'next/link';

const LeftNavTabs = () => {
  return (
    <nav className="glass-card rounded-xl p-3">
      <ul className="flex flex-col gap-1">
        <li>
          <Link href="#" className="flex items-center gap-3 rounded-lg bg-white/10 px-3 py-2 text-white">
            <span className="material-symbols-outlined text-xl">info</span>
            <span className="text-sm font-medium">Details</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5">
            <span className="material-symbols-outlined text-xl">code_blocks</span>
            <span className="text-sm font-medium">Evidence</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5">
            <span className="material-symbols-outlined text-xl">verified_user</span>
            <span className="text-sm font-medium">Recommendation</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LeftNavTabs;
