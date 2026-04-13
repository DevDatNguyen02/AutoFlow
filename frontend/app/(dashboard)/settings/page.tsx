'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Hồ sơ cá nhân', icon: 'person' },
    { id: 'security', label: 'Bảo mật', icon: 'security' },
    { id: 'api', label: 'API & Kết nối', icon: 'api' },
    { id: 'billing', label: 'Gói dịch vụ', icon: 'payments' },
  ];

  return (
    <main className="p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">Cài đặt hệ thống</h1>
          <p className="text-on-surface-variant mt-1">Quản lý tài khoản, bảo mật và các kết nối kỹ thuật của bạn.</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sub Navigation Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <nav className="flex lg:flex-col gap-1 bg-surface-container-low p-2 rounded-2xl border border-outline-variant/10 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-primary text-on-primary shadow-lg shadow-primary/20 scale-[1.02]'
                      : 'text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px] italic">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 space-y-6">
            {activeTab === 'profile' && (
              <div className="glass-card bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-bold mb-8">Thông tin hồ sơ</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-xl group border-4 border-white">
                      <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlzXnKiDFSmzLPyMrMGh-mZfvFNJWW9vdfh8WD7G1jT-1lZhlmV1uaJWgxI1WI7jUUwWVxJFvPF9H0ySDR8fBUKbtIB4Jw0Vq0DStVXqILa8y38aLLYygZMZqX_wmMAUaKVoh5Av9hoP6luKdDRcAMqz8KH4WxK8QYlBNBzJ2Bj0A6FtG6S40YprGMBOzA-VnRMyCQ1bN5RCHQ4rjSTEePGVfmBok4CQv4QdPaytmkVxQSy3GKkq_lL5Oi_pQ2XraEhxE7ij_qpBp7"
                        alt="Profile Avatar"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <span className="material-symbols-outlined text-white text-2xl italic">photo_camera</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Ảnh đại diện</p>
                      <p className="text-xs text-on-surface-variant mt-1">Hỗ trợ JPG, PNG • Tối đa 2MB</p>
                      <button className="mt-2 text-xs font-bold text-primary hover:underline">Thay đổi ảnh</button>
                    </div>
                  </div>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1 border-l-2 border-primary ml-1">Họ và Tên</label>
                      <input 
                        type="text" 
                        defaultValue="Alex Rivera"
                        className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1 border-l-2 border-primary ml-1">Địa chỉ Email</label>
                      <input 
                        type="email" 
                        defaultValue="alex.rivera@autoflow.ai"
                        className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1 border-l-2 border-primary ml-1">Tiểu sử ngắn</label>
                      <textarea 
                        rows={3}
                        defaultValue="Quản trị viên hệ thống tại AutoFlow. Đam mê tự động hóa và AI."
                        className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      />
                    </div>
                  </form>
                  <div className="pt-6 border-t border-outline-variant/10 flex justify-end">
                    <button className="px-8 py-3 primary-gradient text-on-primary rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                      Lưu thay đổi
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="glass-card bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-bold mb-8">Bảo mật tài khoản</h3>
                <div className="space-y-8">
                  <div className="grid gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1 border-l-2 border-secondary ml-1">Mật khẩu hiện tại</label>
                      <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1 border-l-2 border-secondary ml-1">Mật khẩu mới</label>
                        <input 
                          type="password" 
                          placeholder="••••••••"
                          className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1 border-l-2 border-secondary ml-1">Xác nhận mật khẩu</label>
                        <input 
                          type="password" 
                          placeholder="••••••••"
                          className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-secondary-container/5 rounded-2xl border border-secondary/10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined italic">vibration</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">Xác thực hai yếu tố (2FA)</p>
                        <p className="text-xs text-on-surface-variant mt-0.5">Tăng cường bảo mật với mã xác nhận qua điện thoại.</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-secondary text-on-secondary rounded-lg text-xs font-bold hover:opacity-90 transition-all">Thiết lập</button>
                  </div>

                  <div className="pt-6 border-t border-outline-variant/10 flex justify-end">
                    <button className="px-8 py-3 bg-secondary text-on-secondary rounded-xl text-sm font-bold shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                      Cập nhật mật khẩu
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'api' && (
              <div className="glass-card bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-xl font-bold">API & Kết nối</h3>
                    <p className="text-sm text-on-surface-variant mt-1">Tích hợp AutoFlow vào các ứng dụng hiện có của bạn.</p>
                  </div>
                  <button className="px-4 py-2 bg-primary-container text-on-primary-container rounded-xl text-xs font-bold hover:opacity-90 transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm italic">add</span>
                    Tạo Key mới
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10">
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-xs font-bold text-primary uppercase tracking-widest">Sản xuất (Production)</p>
                      <span className="text-[10px] text-on-surface-variant">Lần cuối sử dụng: 2 giờ trước</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 font-mono text-sm text-on-surface-variant flex items-center justify-between">
                        <span>af_live_••••••••••••••••3a7b1f</span>
                        <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary transition-colors italic">content_copy</span>
                      </div>
                      <button className="px-4 py-3 bg-error/10 text-error rounded-xl hover:bg-error/20 transition-all">
                        <span className="material-symbols-outlined text-sm italic">delete</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10">
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-xs font-bold text-tertiary uppercase tracking-widest">Thử nghiệm (Sandbox)</p>
                      <span className="text-[10px] text-on-surface-variant">Chưa sử dụng</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 font-mono text-sm text-on-surface-variant flex items-center justify-between">
                        <span>af_test_••••••••••••••••8c2e9d</span>
                        <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary transition-colors italic">content_copy</span>
                      </div>
                      <button className="px-4 py-3 bg-error/10 text-error rounded-xl hover:bg-error/20 transition-all">
                        <span className="material-symbols-outlined text-sm italic">delete</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-outline-variant/10">
                    <p className="text-sm font-bold text-on-surface mb-4">Cấu hình Webhooks</p>
                    <div className="flex gap-4">
                        <div className="flex-1 space-y-2">
                            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">URL đích</label>
                            <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm outline-none" placeholder="https://your-api.com/webhook" type="text" />
                        </div>
                        <div className="self-end pb-1">
                            <button className="px-6 py-3 bg-surface-container-high rounded-xl text-sm font-bold">Thanh đổi</button>
                        </div>
                    </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="primary-gradient p-8 rounded-3xl text-on-primary shadow-2xl shadow-primary/20 relative overflow-hidden">
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Gói hiện tại</span>
                            <h2 className="text-4xl font-black tracking-tight mb-2">AutoFlow Pro v4</h2>
                            <p className="text-on-primary/70 text-sm font-medium">Kỳ hạn tiếp theo: 12 thg 05, 2024</p>
                        </div>
                        <div className="text-right">
                            <p className="text-5xl font-black tracking-tighter">$99<span className="text-lg opacity-60">/tháng</span></p>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                            <p className="text-[10px] font-bold uppercase opacity-60 mb-1">Dung lượng AI</p>
                            <p className="text-xl font-bold">12k <span className="text-xs opacity-60">/ 50k</span></p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                            <p className="text-[10px] font-bold uppercase opacity-60 mb-1">Số khách hàng</p>
                            <p className="text-xl font-bold">8.4k <span className="text-xs opacity-60">/ 25k</span></p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                            <p className="text-[10px] font-bold uppercase opacity-60 mb-1">Số Automation</p>
                            <p className="text-xl font-bold">15 <span className="text-xs opacity-60">/ Không giới hạn</span></p>
                        </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                </div>

                <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 glass-card">
                  <h3 className="text-xl font-bold mb-6">Lịch sử hóa đơn</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-surface-container-low/50 rounded-2xl hover:bg-surface-container-low transition-colors group">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                            <span className="material-symbols-outlined text-on-surface-variant italic">receipt_long</span>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-on-surface">Hóa đơn tháng 0{i+1}/2024</p>
                            <p className="text-[11px] text-on-surface-variant">Thanh toán vào: {12+i} thg 0{i+1}, 2024</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <p className="text-sm font-bold text-on-surface">$99.00</p>
                          <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                            <span className="material-symbols-outlined text-xl italic">download</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-8 py-3 text-sm font-bold text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-all">
                    Xem toàn bộ lịch sử
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
