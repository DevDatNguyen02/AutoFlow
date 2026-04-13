export default function DashboardPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Welcome Section */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-on-surface tracking-tight mb-1">Tổng quan Hệ sinh thái</h1>
          <p className="text-on-surface-variant text-body-md">Hệ thống tự động hóa của bạn đang hoạt động tối ưu.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-2xl font-bold text-on-surface">1,482</span>
            </div>
            <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Khách truy cập trực tuyến</span>
          </div>
        </div>
      </div>

      {/* Metric Cards Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 hover:shadow-xl transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">person_add</span>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+12%</span>
          </div>
          <p className="text-on-surface-variant text-sm font-medium mb-1">Tổng số liên hệ</p>
          <p className="text-3xl font-bold text-on-surface">24,892</p>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 hover:shadow-xl transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Đang chạy</span>
          </div>
          <p className="text-on-surface-variant text-sm font-medium mb-1">Quy trình kích hoạt</p>
          <p className="text-3xl font-bold text-on-surface">156</p>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 hover:shadow-xl transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined">forum</span>
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Hôm nay</span>
          </div>
          <p className="text-on-surface-variant text-sm font-medium mb-1">Hội thoại AI</p>
          <p className="text-3xl font-bold text-on-surface">3,204</p>
        </div>
      </div>

      {/* Charts & Activity Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Traffic Chart */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold text-on-surface">Động lực Chuyển đổi</h3>
              <p className="text-sm text-on-surface-variant">Chỉ số hiệu suất thời gian thực</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-xs font-medium text-on-surface-variant">Lưu lượng</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-tertiary-container"></div>
                <span className="text-xs font-medium text-on-surface-variant">Chuyển đổi</span>
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 px-2 relative">
            {/* Simulated Chart Content */}
            <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
              <div className="border-b border-slate-50 w-full"></div>
              <div className="border-b border-slate-50 w-full"></div>
              <div className="border-b border-slate-50 w-full"></div>
              <div className="border-b border-slate-50 w-full"></div>
            </div>
            <div className="w-full h-full flex items-end gap-1 group">
              <div className="flex-1 primary-gradient rounded-t-xl" style={{ height: "45%" }}></div>
              <div className="flex-1 bg-surface-container-high rounded-t-xl" style={{ height: "25%" }}></div>
            </div>
            <div className="w-full h-full flex items-end gap-1">
              <div className="flex-1 primary-gradient rounded-t-xl" style={{ height: "65%" }}></div>
              <div className="flex-1 bg-surface-container-high rounded-t-xl" style={{ height: "35%" }}></div>
            </div>
            <div className="w-full h-full flex items-end gap-1">
              <div className="flex-1 primary-gradient rounded-t-xl" style={{ height: "55%" }}></div>
              <div className="flex-1 bg-surface-container-high rounded-t-xl" style={{ height: "30%" }}></div>
            </div>
            <div className="w-full h-full flex items-end gap-1">
              <div className="flex-1 primary-gradient rounded-t-xl" style={{ height: "85%" }}></div>
              <div className="flex-1 bg-surface-container-high rounded-t-xl" style={{ height: "45%" }}></div>
            </div>
            <div className="w-full h-full flex items-end gap-1">
              <div className="flex-1 primary-gradient rounded-t-xl" style={{ height: "75%" }}></div>
              <div className="flex-1 bg-surface-container-high rounded-t-xl" style={{ height: "40%" }}></div>
            </div>
            <div className="w-full h-full flex items-end gap-1">
              <div className="flex-1 primary-gradient rounded-t-xl" style={{ height: "95%" }}></div>
              <div className="flex-1 bg-surface-container-high rounded-t-xl" style={{ height: "55%" }}></div>
            </div>
            <div className="w-full h-full flex items-end gap-1">
              <div className="flex-1 primary-gradient rounded-t-xl opacity-80" style={{ height: "60%" }}></div>
              <div className="flex-1 bg-surface-container-high rounded-t-xl opacity-80" style={{ height: "30%" }}></div>
            </div>
          </div>
          <div className="flex justify-between mt-4 px-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Thứ 2</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Thứ 3</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Thứ 4</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Thứ 5</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Thứ 6</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Thứ 7</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Chủ nhật</span>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-surface-container-low p-6 rounded-xl">
          <h3 className="text-lg font-bold text-on-surface mb-6">Recent Activity</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm text-blue-600">visibility</span>
              </div>
              <div>
                <p className="text-sm font-medium text-on-surface">Customer A viewed <span className="font-bold">Pricing</span></p>
                <p className="text-xs text-on-surface-variant">2 minutes ago</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm text-purple-600">psychology</span>
              </div>
              <div>
                <p className="text-sm font-medium text-on-surface">AI answered <span className="font-bold">Customer B</span></p>
                <p className="text-xs text-on-surface-variant">15 minutes ago</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm text-emerald-600">task_alt</span>
              </div>
              <div>
                <p className="text-sm font-medium text-on-surface">Flow <span className="font-bold">Onboarding</span> completed</p>
                <p className="text-xs text-on-surface-variant">24 minutes ago</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm text-amber-600">warning</span>
              </div>
              <div>
                <p className="text-sm font-medium text-on-surface">High-value lead detected</p>
                <p className="text-xs text-on-surface-variant">1 hour ago</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-8 py-2 text-sm font-semibold text-primary hover:bg-primary/5 rounded-xl transition-all">
            View Full Logs
          </button>
        </div>
      </div>

      {/* Bottom Section: Top Segments & Promotion */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
        {/* Top Segments */}
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10">
          <h3 className="text-lg font-bold text-on-surface mb-6">Top Performing Segments</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined">shopping_cart</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">E-commerce Leads</p>
                  <p className="text-xs text-on-surface-variant">High intent buyers</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-on-surface">4.2k</p>
                <p className="text-xs text-emerald-600">+18%</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600">
                  <span className="material-symbols-outlined">business</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">SaaS Enterprise</p>
                  <p className="text-xs text-on-surface-variant">Fortune 500 focus</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-on-surface">1.8k</p>
                <p className="text-xs text-on-surface-variant">Stable</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Card */}
        <div className="bg-primary-container p-8 rounded-xl flex flex-col justify-between text-on-primary-container relative overflow-hidden">
             <div className="relative z-10">
              <span className="bg-primary/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Tính năng Pro</span>
              <h2 className="text-2xl font-extrabold mb-2 text-primary">AI Dự đoán đang hoạt động</h2>
              <p className="text-on-surface-variant text-sm max-w-sm mb-6">
                  AutoFlow đang phân tích các mô hình hành vi để dự đoán rủi ro rời bỏ cho các phân khúc hàng đầu của bạn. 
              </p>
            </div>
            <div className="relative z-10 flex gap-4">
              <button className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:bg-primary-dim transition-all">
                Xem chi tiết
              </button>
              <button className="bg-transparent border border-primary/30 text-primary px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-primary/5 transition-all">
                Cấu hình AI
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
