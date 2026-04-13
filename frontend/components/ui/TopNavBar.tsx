'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white/80 backdrop-blur-md z-40 px-8 flex justify-between items-center border-b border-slate-100">
      <div className="flex items-center w-full max-w-xl">
        <div className="relative w-full group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
          <input 
            className="w-full bg-surface-container-low border-0 rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
            placeholder="Tìm kiếm quy trình, liên hệ hoặc phân tích..." 
            type="text"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined italic">notifications</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-50 transition-colors mr-2">
          <span className="material-symbols-outlined italic">help_outline</span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 p-1 pr-3 hover:bg-slate-50 rounded-full transition-all border border-transparent hover:border-slate-100"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm shadow-blue-200/50">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlzXnKiDFSmzLPyMrMGh-mZfvFNJWW9vdfh8WD7G1jT-1lZhlmV1uaJWgxI1WI7jUUwWVxJFvPF9H0ySDR8fBUKbtIB4Jw0Vq0DStVXqILa8y38aLLYygZMZqX_wmMAUaKVoh5Av9hoP6luKdDRcAMqz8KH4WxK8QYlBNBzJ2Bj0A6FtG6S40YprGMBOzA-VnRMyCQ1bN5RCHQ4rjSTEePGVfmBok4CQv4QdPaytmkVxQSy3GKkq_lL5Oi_pQ2XraEhxE7ij_qpBp7"
                alt="User Profile" 
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-bold text-slate-700 hidden sm:inline-block">Alex Rivera</span>
            <span className={`material-symbols-outlined text-sm text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl shadow-blue-900/10 border border-slate-100 py-2 animate-in fade-in zoom-in-95 duration-200 origin-top-right overflow-hidden overflow-y-auto max-h-[calc(100vh-80px)]">
              <div className="px-5 py-4 border-b border-slate-50">
                <p className="text-sm font-bold text-slate-800">Alex Rivera</p>
                <p className="text-[11px] text-slate-500 font-medium">alex.rivera@autoflow.ai</p>
                <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md text-[9px] font-black uppercase tracking-wider">
                  <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                  Quản trị viên
                </div>
              </div>

              <div className="p-2 space-y-0.5">
                <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all font-medium group">
                  <span className="material-symbols-outlined text-lg opacity-60 group-hover:opacity-100 italic">account_circle</span>
                  Hồ sơ cá nhân
                </Link>
                <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all font-medium group">
                  <span className="material-symbols-outlined text-lg opacity-60 group-hover:opacity-100 italic">settings</span>
                  Cài đặt hệ thống
                </Link>
                <Link href="/voucher" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all font-medium group">
                  <span className="material-symbols-outlined text-lg opacity-60 group-hover:opacity-100 italic">confirmation_number</span>
                  Ưu đãi của tôi
                </Link>
              </div>

              <div className="p-2 mt-1 border-t border-slate-50">
                <Link href="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-error hover:bg-error/5 transition-all font-bold group">
                  <span className="material-symbols-outlined text-lg italic">logout</span>
                  Đăng xuất
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
