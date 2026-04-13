import Image from 'next/image';

export default function AudiencePage() {
  return (
    <main className="p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-on-surface tracking-tight">Quản lý Khách hàng</h2>
            <p className="text-on-surface-variant mt-1">Quản lý và phân tích 12,482 hồ sơ khách hàng của bạn.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-surface-container-low text-on-surface-variant px-4 py-2 rounded-xl text-sm font-medium hover:bg-surface-container-high transition-colors">Xuất CSV</button>
            <button className="bg-surface-container-low text-on-surface-variant px-4 py-2 rounded-xl text-sm font-medium hover:bg-surface-container-high transition-colors">Lọc phân khúc</button>
          </div>
        </div>

        {/* Dashboard Grid (Tonal Stacking) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Customer List Stage */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden glass-card">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-container-low border-none">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-on-surface-variant">Khách hàng</th>
                    <th className="px-6 py-4 font-semibold text-on-surface-variant">Điểm tiềm năng</th>
                    <th className="px-6 py-4 font-semibold text-on-surface-variant">Thẻ</th>
                    <th className="px-6 py-4 font-semibold text-on-surface-variant">Trạng thái</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y-0">
                  {/* Row 1 */}
                  <tr className="group hover:bg-surface-container-low/50 transition-colors cursor-pointer border-b border-surface-container-low">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">JD</div>
                        <div>
                          <div className="font-bold text-on-surface">Jane Doe</div>
                          <div className="text-xs text-on-surface-variant">jane.doe@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[85%]"></div>
                        </div>
                        <span className="text-xs font-bold text-primary">85</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-md">Interested</span>
                        <span className="px-2 py-0.5 bg-tertiary-container text-on-tertiary-container text-[10px] font-bold rounded-md">High-Value</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Đang hoạt động
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 italic text-sm">chevron_right</span>
                    </td>
                  </tr>
                  {/* Row 2 (Active/Focus Example) */}
                  <tr className="bg-surface-container-low transition-colors cursor-pointer border-b border-surface-container-low">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary font-bold">MC</div>
                        <div>
                          <div className="font-bold text-on-surface">Marcus Chen</div>
                          <div className="text-xs text-on-surface-variant">m.chen@techglobal.io</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[92%]"></div>
                        </div>
                        <span className="text-xs font-bold text-primary">92</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-md">Qualified</span>
                        <span className="px-2 py-0.5 bg-primary-container text-on-primary-container text-[10px] font-bold rounded-md">B2B</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-amber-600">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        Chờ
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <span className="material-symbols-outlined text-primary italic text-sm">chevron_right</span>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="group hover:bg-surface-container-low/50 transition-colors cursor-pointer border-b border-surface-container-low">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary font-bold">SL</div>
                        <div>
                          <div className="font-bold text-on-surface">Sarah Lopez</div>
                          <div className="text-xs text-on-surface-variant">sarah@creative.co</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[45%]"></div>
                        </div>
                        <span className="text-xs font-bold text-primary">45</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-0.5 bg-error-container text-on-error-container text-[10px] font-bold rounded-md">Churn-Risk</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                        Ngoại tuyến
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 italic text-sm">chevron_right</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="p-6 bg-surface-container-lowest flex items-center justify-between border-t border-surface-container-low">
                <p className="text-xs text-on-surface-variant">Hiển thị 1-10 trên 12,482 khách hàng</p>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-lg border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button className="w-8 h-8 rounded-lg border border-outline-variant/20 flex items-center justify-center bg-primary text-on-primary text-xs font-bold">1</button>
                  <button className="w-8 h-8 rounded-lg border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors text-xs font-bold">2</button>
                  <button className="w-8 h-8 rounded-lg border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Customer 360 Detail Sidebar */}
          <div className="lg:col-span-1 glass-card rounded-2xl border border-white/40 shadow-2xl shadow-primary/5 p-6 flex flex-col h-[calc(100vh-12rem)] sticky top-24">
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDByVUhwTyLYSzSPmztcjmZ4fF4u8f6lqs72IMESO388td7hqgF1eGpimwFX0padkKGZRQMHoiIeFP70XsBFcrGSQ8TcUEuJ0Y2a_tv2wwBR8Tcj5ngApeB1Ea9gvdZHovmP5S2LZYw7RJXStFXaIzkDsOGDb_c7BOMBlDcqdmBU5iPLVB68HZ49McwEtExg5SDZWrwZLjtjbO4VhGuAleFF8P3faV2DJ3zlpYqfVRhLanm8vYaNPVvWWX6th4MdpkAlo_ftrMzoDPy" 
                    alt="Customer Detail" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-on-surface leading-tight">Marcus Chen</h3>
                  <p className="text-xs text-on-surface-variant">m.chen@techglobal.io</p>
                  <div className="mt-2 flex gap-1">
                    <span className="px-2 py-0.5 bg-primary-container text-on-primary-container text-[10px] font-bold rounded-full">VIP Elite</span>
                    <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full">Tech Guru</span>
                  </div>
                </div>
              </div>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined italic">more_vert</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-8 scrollbar-hide">
              <section>
                <h4 className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-widest mb-4">Dòng thời gian hoạt động</h4>
                <div className="space-y-6 relative ml-2">
                  <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-outline-variant opacity-20"></div>
                  <div className="relative pl-6">
                    <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-primary ring-4 ring-primary/10"></div>
                    <p className="text-xs font-bold text-on-surface leading-none">Đã nhận mã giảm giá</p>
                    <p className="text-[11px] text-on-surface-variant mt-1">Giảm giá 20% áp dụng cho 'Gói Doanh nghiệp'</p>
                    <p className="text-[10px] text-on-surface-variant/60 mt-0.5 italic">Hôm nay, 2:45 PM</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-outline-variant"></div>
                    <p className="text-xs font-bold text-on-surface leading-none">Trò chuyện với AI</p>
                    <p className="text-[11px] text-on-surface-variant mt-1">Hỏi về giới hạn API để xuất dữ liệu hàng loạt</p>
                    <p className="text-[10px] text-on-surface-variant/60 mt-0.5 italic">Hôm qua, 11:20 AM</p>
                  </div>
                </div>
              </section>

              <section>
                <h4 className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-widest mb-4">Quy trình tự động hóa đang chạy</h4>
                <div className="space-y-3">
                  <div className="bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-container rounded-lg">
                        <span className="material-symbols-outlined text-primary text-sm">rocket_launch</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold">Chuỗi quy trình chào mừng</p>
                        <p className="text-[10px] text-on-surface-variant">Bước 4 trên 6</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-xs text-primary italic">play_arrow</span>
                  </div>
                </div>
              </section>
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant/10">
              <button className="w-full py-3 bg-gradient-to-br from-primary to-primary-dim text-on-primary rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-95">
                Gửi tin nhắn trực tiếp
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
