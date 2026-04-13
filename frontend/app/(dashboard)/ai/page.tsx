import Image from 'next/image';

export default function AICenterPage() {
  return (
    <main className="p-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Page Header */}
        <div className="flex justify-between items-end">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Không gian làm việc</span>
            <h2 className="text-4xl font-extrabold text-on-surface tracking-tight mt-1">Trung tâm AI</h2>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 rounded-xl text-sm font-semibold text-on-secondary-container bg-secondary-container hover:opacity-90 transition-all">
              Xem trước Bot
            </button>
            <button className="px-6 py-2.5 rounded-xl text-sm font-semibold text-on-primary bg-gradient-to-br from-primary to-primary-dim shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Xuất bản thay đổi
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-8">
          {/* Knowledge Base Section (Left Span 8) */}
          <section className="col-span-12 lg:col-span-8 space-y-8">
            <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 glass-card">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">Cơ sở Kiến thức</h3>
                  <p className="text-sm text-on-surface-variant">Huấn luyện AI với dữ liệu doanh nghiệp của bạn</p>
                </div>
                <span className="material-symbols-outlined text-primary-fixed-dim text-4xl italic" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
              </div>
              
              {/* Upload Area */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border-2 border-dashed border-outline-variant/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:border-primary/40 transition-colors cursor-pointer bg-surface-container-low/30">
                  <span className="material-symbols-outlined text-3xl text-on-surface-variant mb-3 group-hover:text-primary transition-colors italic">upload_file</span>
                  <p className="text-sm font-semibold">Tải tài liệu lên</p>
                  <p className="text-xs text-on-surface-variant mt-1">PDF, DOCX tối đa 10MB</p>
                </div>
                <div className="bg-surface-container-low/30 rounded-2xl p-8 flex flex-col gap-4">
                  <div>
                    <p className="text-sm font-semibold mb-1">Thu thập dữ liệu Website</p>
                    <p className="text-xs text-on-surface-variant">Lập chỉ mục trang từ URL công khai</p>
                  </div>
                  <div className="flex gap-2">
                    <input className="flex-1 bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-primary outline-none" placeholder="https://example.com" type="text" />
                    <button className="bg-primary text-on-primary p-2 rounded-lg hover:bg-primary-dim">
                      <span className="material-symbols-outlined text-sm italic">add</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Indexed Sources List */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Nguồn đã lập chỉ mục</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-4 bg-surface rounded-2xl group hover:bg-surface-container-low transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl italic">description</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Service_Level_Agreement_2024.pdf</p>
                        <p className="text-[11px] text-on-surface-variant">Đồng bộ lần cuối: 2 giờ trước • 2.4 MB</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                        Đang hoạt động
                      </div>
                      <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-lg italic">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Conversations */}
            <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 glass-card">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">Hội thoại Gần đây</h3>
                  <p className="text-sm text-on-surface-variant">Theo dõi tương tác AI trong thời gian thực</p>
                </div>
                <button className="text-sm font-bold text-primary hover:underline">Xem tất cả</button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-6 p-4 border border-outline-variant/10 rounded-2xl hover:bg-surface-container-low transition-colors cursor-pointer">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100">
                    <Image 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA69EMXR9d9sBmWOQ-KGJCEb7DJ5H8QWjhMhi17z8hSgVdUQ4dP6JVkfQOX0gIjh1217UmWaQfRlOnZNCLZ-R2lGfiaXffwNOFbVBekOtfVs7UWIGiVKff3qeVK7Qy3nOypO3wS3prj8d-IdrSoCwygVIAc5rc7BeL5mB0Ww4Yu_-hxTKMmmg36ivKDFKktH9pI7XlGlYbAMIZQaq8x2LD6FrTtgaTDuP49Lfa2VqJecqN83iFjPjXYQ766Tt49BA-Z74cBpbNcwT64" 
                      alt="User Avatar" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <p className="text-sm font-bold">Sarah Jenkins</p>
                      <span className="text-[10px] text-on-surface-variant">15 phút trước</span>
                    </div>
                    <p className="text-xs text-on-surface-variant truncate italic">"I'm looking for the updated refund policy regarding enterprise subscriptions..."</p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant italic">chevron_right</span>
                </div>
              </div>
            </div>
          </section>

          {/* Bot Configuration (Right Span 4) */}
          <aside className="col-span-12 lg:col-span-4 space-y-8">
            <div className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 h-fit sticky top-24 glass-card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary italic" style={{ fontVariationSettings: "'FILL' 1" }}>tune</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">Thiết lập Tính cách</h3>
              </div>
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Tên Bot</label>
                  <input className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary outline-none" type="text" defaultValue="Trợ lý AutoFlow v2" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Lời nhắc hệ thống</label>
                  <textarea className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary leading-relaxed outline-none" rows={6} defaultValue="Bạn là một trợ lý chuyên nghiệp cho AutoFlow..." />
                </div>
                <button className="w-full py-4 mt-4 bg-primary-fixed text-on-primary-fixed rounded-2xl text-sm font-bold hover:bg-primary-fixed-dim transition-colors">
                  Lưu tính cách Bot
                </button>
              </form>
            </div>

            {/* Bot Analytics Mini-Card */}
            <div className="bg-gradient-to-br from-inverse-surface to-slate-800 rounded-3xl p-6 text-white shadow-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Tổng tóm tắt hiệu suất</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold tracking-tight">94%</p>
                  <p className="text-[10px] text-slate-400 font-medium">Tỷ lệ giải quyết</p>
                </div>
              </div>
              <div className="mt-6 h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[94%]"></div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
