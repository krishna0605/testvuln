'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/settings', icon: 'tune', label: 'General' },
  { href: '/settings/profile', icon: 'account_circle', label: 'Profile' },
  { href: '/settings/security', icon: 'shield', label: 'Security' },
  { href: '/settings/notifications', icon: 'notifications', label: 'Notifications' },
  { href: '/settings/integrations', icon: 'extension', label: 'Integrations' },
  { href: '/settings/api-keys', icon: 'key', label: 'API Keys' },
  { href: '/billing', icon: 'credit_card', label: 'Billing' },
  { href: '/settings/team-management', icon: 'group', label: 'Team Management' },
  { href: '/settings/audit-log', icon: 'receipt_long', label: 'Audit Log' },
];

const SettingsNav = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-64 lg:flex-shrink-0">
      <nav className="sticky top-28">
        <div className="flex flex-col gap-1 p-2 glass-card rounded-xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                pathname === item.href
                  ? 'bg-primary/20 text-primary'
                  : 'text-text-body hover:bg-white/10 hover:text-text-heading'
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{item.icon}</span>
              <p className="text-sm font-medium">{item.label}</p>
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default SettingsNav;
