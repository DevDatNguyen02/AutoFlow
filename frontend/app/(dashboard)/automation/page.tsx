import Image from 'next/image';

export default function AutomationPage() {
  return (
    <main className="h-[calc(100vh-64px)] flex overflow-hidden">
      {/* Node Palette Sidebar */}
      <aside className="w-72 bg-surface-container-low p-6 flex flex-col gap-8 overflow-y-auto">
        <div>
          <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">Sự kiện Kích hoạt</label>
          <div className="grid gap-3">
            <div className="group cursor-grab active:cursor-grabbing bg-surface-container-lowest p-3 rounded-xl flex items-center gap-3 border border-transparent hover:border-primary/20 transition-all shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm">ads_click</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Xem Trang</span>
                <span className="text-[10px] text-on-surface-variant">Khi khách truy cập URL</span>
              </div>
            </div>
            <div className="group cursor-grab bg-surface-container-lowest p-3 rounded-xl flex items-center gap-3 border border-transparent hover:border-primary/20 transition-all shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm">person_add</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Gửi Biểu mẫu</span>
                <span className="text-[10px] text-on-surface-variant">Thu thập dữ liệu tiềm năng</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">Điều kiện</label>
          <div className="grid gap-3">
            <div className="group cursor-grab bg-surface-container-lowest p-3 rounded-xl flex items-center gap-3 border border-transparent hover:border-primary/20 transition-all shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm">rule</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Điểm tiềm năng</span>
                <span className="text-[10px] text-on-surface-variant">Kiểm tra mức độ tương tác</span>
              </div>
            </div>
            <div className="group cursor-grab bg-surface-container-lowest p-3 rounded-xl flex items-center gap-3 border border-transparent hover:border-primary/20 transition-all shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm">location_on</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Địa lý</span>
                <span className="text-[10px] text-on-surface-variant">Lọc theo quốc gia/thành phố</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">Hành động</label>
          <div className="grid gap-3">
            <div className="group cursor-grab bg-surface-container-lowest p-3 rounded-xl flex items-center gap-3 border border-transparent hover:border-primary/20 transition-all shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm">mail</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Gửi Email</span>
                <span className="text-[10px] text-on-surface-variant">Kích hoạt gửi email hàng loạt</span>
              </div>
            </div>
            <div className="group cursor-grab bg-surface-container-lowest p-3 rounded-xl flex items-center gap-3 border border-transparent hover:border-primary/20 transition-all shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm">confirmation_number</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Tặng Mã giảm giá</span>
                <span className="text-[10px] text-on-surface-variant">Phát hành mã giảm giá</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Canvas Area */}
      <section className="flex-1 canvas-grid relative bg-surface overflow-hidden">
        {/* Connection Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <marker id="arrow" markerHeight="6" markerWidth="6" orient="auto-start-reverse" refX="10" refY="5" viewBox="0 0 10 10">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#98b1f2"></path>
            </marker>
          </defs>
          <path d="M 240 180 C 300 180, 300 180, 360 180" fill="none" markerEnd="url(#arrow)" stroke="#98b1f2" strokeDasharray="4" strokeWidth="2"></path>
          <path d="M 520 180 C 580 180, 580 120, 640 120" fill="none" markerEnd="url(#arrow)" stroke="#98b1f2" strokeWidth="2"></path>
          <path d="M 520 180 C 580 180, 580 280, 640 280" fill="none" markerEnd="url(#arrow)" stroke="#98b1f2" strokeWidth="2"></path>
        </svg>

        {/* Node: Trigger */}
        <div className="absolute left-20 top-36 w-56 p-4 bg-surface-container-lowest rounded-xl shadow-lg ring-1 ring-black/5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full uppercase tracking-wider">Trigger</span>
            <span className="material-symbols-outlined text-sm text-on-surface-variant italic">drag_indicator</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
              <span className="material-symbols-outlined italic">ads_click</span>
            </div>
            <div>
              <p className="text-sm font-bold">Trang Black Friday</p>
              <p className="text-[10px] text-on-surface-variant truncate w-24">/promo/black-friday</p>
            </div>
          </div>
          <div className="absolute -right-2 top-[calc(50%-4px)] w-4 h-4 bg-primary rounded-full border-2 border-white"></div>
        </div>

        {/* Node: Condition */}
        <div className="absolute left-[360px] top-36 w-60 p-4 bg-surface-container-lowest rounded-xl shadow-xl ring-2 ring-primary/40">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full uppercase tracking-wider">Điều kiện</span>
            <span className="material-symbols-outlined text-sm text-on-surface-variant italic">drag_indicator</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
              <span className="material-symbols-outlined italic">rule</span>
            </div>
            <div>
              <p className="text-sm font-bold">Kiểm tra Điểm tiềm năng</p>
              <p className="text-[10px] text-on-surface-variant">Điểm &gt; 50</p>
            </div>
          </div>
          <div className="absolute -left-2 top-[calc(50%-4px)] w-4 h-4 bg-primary-container rounded-full border-2 border-white"></div>
          <div className="absolute -right-2 top-10 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-[6px] text-white font-bold">ĐÚNG</span>
          </div>
          <div className="absolute -right-2 bottom-10 w-4 h-4 bg-error rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-[6px] text-white font-bold">SAI</span>
          </div>
        </div>

        {/* Floating Controls */}
        <div className="absolute bottom-10 left-10 flex gap-2 bg-surface-container-lowest p-2 rounded-2xl shadow-xl border border-outline-variant/20">
          <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-low text-on-surface-variant transition-colors"><span className="material-symbols-outlined italic">add</span></button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-low text-on-surface-variant transition-colors"><span className="material-symbols-outlined italic">remove</span></button>
          <div className="w-[1px] h-6 self-center bg-outline-variant/30"></div>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-low text-on-surface-variant transition-colors"><span className="material-symbols-outlined italic">center_focus_weak</span></button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-low text-on-surface-variant transition-colors"><span className="material-symbols-outlined italic">navigation</span></button>
        </div>
      </section>

      {/* Right Property Panel */}
      <aside className="w-80 bg-surface-container-low border-l border-outline-variant/10 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-bold text-on-surface">Cấu hình Node</h3>
          <button className="text-on-surface-variant hover:text-error transition-colors"><span className="material-symbols-outlined italic">delete</span></button>
        </div>
        <div className="space-y-6">
          <section>
            <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant mb-2 block">Nhãn hiển thị</label>
            <input className="w-full bg-surface-container-lowest border-0 ring-1 ring-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all outline-none" type="text" defaultValue="Kiểm tra Điểm tiềm năng" />
          </section>
          <section>
            <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant mb-2 block">Toán tử Logic</label>
            <select className="w-full bg-surface-container-lowest border-0 ring-1 ring-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all outline-none appearance-none">
              <option>Lớn hơn</option>
              <option>Nhỏ hơn</option>
              <option>Bằng</option>
              <option>Khác</option>
            </select>
          </section>
          
          <div className="pt-6 border-t border-outline-variant/10">
            <label className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant mb-4 block">Xem trước trực quan</label>
            <div className="rounded-2xl overflow-hidden bg-surface-container-lowest p-4 border border-outline-variant/10">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center relative overflow-hidden rounded-xl">
                 <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuyTMrT013EPykoC12pmCKO1f0ZRPbkz8kaG4hu5_bRD5I_YMeHgeK52tQm-KcKTy0LBFHkQEH0ocvNhRJUiDPFQaKzIUsq2CTFB-LzXncv7jT-T60alOkQlvNCUM3M2Pk55VKgqupGZsL-hXmg0WFbshSYHaV__RCyd5S59U9wNQOCKpeYuofRB7B-oYnAIMwoO0pGrd03H-lUMQdWQuXH9AnSXwRZVKywJSjZ7_oh4x2NdcjxsjGog4HlelVEkw4ohGrLIZk1QLH" 
                  alt="Node Logic Visualization" 
                  fill 
                  className="object-cover mix-blend-overlay"
                />
                <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-primary font-bold">NẾU điểm &gt; 50 THÌ [A] CÒN LẠI [B]</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <button className="w-full py-3 bg-primary-container text-on-primary-container text-sm font-bold rounded-xl hover:bg-primary-container/80 transition-all">Cập nhật Node</button>
            <button className="w-full py-3 text-on-surface-variant text-sm font-medium hover:text-on-surface transition-all">Đặt lại thay đổi</button>
          </div>
        </div>
      </aside>
    </main>
  );
}
