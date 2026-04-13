'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Bảng điều khiển', icon: 'dashboard' },
  { href: '/audience', label: 'Khách hàng', icon: 'groups' },
  { href: '/automation', label: 'Tự động hóa', icon: 'smart_toy' },
  { href: '/ai', label: 'Trung tâm AI', icon: 'psychology' },
  { href: '/voucher', label: 'Mã giảm giá', icon: 'confirmation_number' },
];

export default function SideNavBar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 border-r-0 bg-slate-50 flex flex-col py-6 px-4 z-50">
      <div className="mb-10 px-2 flex items-center gap-3">
        <div className="w-8 h-8 primary-gradient rounded-xl flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-lg italic" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
        </div>
        <span className="text-xl font-bold text-blue-700 tracking-tight">AutoFlow</span>
      </div>
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href}
              href={item.href} 
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'text-blue-700 font-semibold bg-blue-50/50 shadow-sm' 
                  : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50/30'
              }`}
            >
              <span 
                className={`material-symbols-outlined italic ${isActive ? 'fill-1' : ''}`} 
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span className="font-sans text-sm tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
