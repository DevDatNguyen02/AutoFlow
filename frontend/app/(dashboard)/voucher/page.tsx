import Image from 'next/image';

export default function VoucherPage() {
  return (
    <main className="p-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Hero Header Section */}
        <section className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2">Trung tâm Mã giảm giá</h1>
            <p className="text-on-surface-variant max-w-md">Điều phối và theo dõi các ưu đãi kỹ thuật số trên tất cả các quy trình tự động hóa từ một trung tâm điều khiển duy nhất.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-secondary-container text-on-secondary-container rounded-xl font-semibold text-sm hover:opacity-90 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm italic">download</span>
              Xuất Báo cáo
            </button>
            <button className="px-6 py-3 primary-gradient text-on-primary rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm italic">add_circle</span>
              Tạo Chiến dịch
            </button>
          </div>
        </section>

        {/* Performance Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-transparent hover:border-outline-variant/20 transition-all group glass-card">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary-fixed rounded-lg text-primary">
                <span className="material-symbols-outlined italic">verified</span>
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12.4%</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Tỷ lệ Thành công</p>
            <h3 className="text-3xl font-extrabold text-on-surface">94.8%</h3>
            <div className="mt-4 h-1 w-full bg-surface-container-low rounded-full overflow-hidden">
              <div className="h-full primary-gradient w-[94.8%]"></div>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-transparent hover:border-outline-variant/20 transition-all group glass-card">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-tertiary-fixed rounded-lg text-tertiary">
                <span className="material-symbols-outlined italic">mail_lock</span>
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+5.2%</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Tỷ lệ Mở</p>
            <h3 className="text-3xl font-extrabold text-on-surface">42.1%</h3>
            <div className="mt-4 flex gap-1 h-16 items-end">
              <div className="h-8 flex-1 bg-tertiary/10 rounded-sm"></div>
              <div className="h-10 flex-1 bg-tertiary/20 rounded-sm"></div>
              <div className="h-12 flex-1 bg-tertiary/40 rounded-sm"></div>
              <div className="h-14 flex-1 bg-tertiary/60 rounded-sm"></div>
              <div className="h-full flex-1 bg-tertiary/80 rounded-sm"></div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl border border-transparent hover:border-outline-variant/20 transition-all group glass-card">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-secondary-container rounded-lg text-on-secondary-container">
                <span className="material-symbols-outlined italic">ads_click</span>
              </div>
              <span className="text-xs font-bold text-error bg-error-container/10 px-2 py-1 rounded-full">-1.2%</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Tỷ lệ Nhấp (CTR)</p>
            <h3 className="text-3xl font-extrabold text-on-surface">18.5%</h3>
            <p className="mt-4 text-[10px] text-on-surface-variant leading-tight">Chuyển đổi trung bình trên mỗi lần nhấp vào liên kết duy nhất được theo dõi trên tất cả các kênh đang hoạt động.</p>
          </div>
        </section>

        {/* Main Data Table Container */}
        <section className="bg-surface-container-low rounded-3xl p-1 overflow-hidden glass-card">
          <div className="bg-surface-container-lowest rounded-[22px] overflow-hidden">
            <div className="px-8 py-6 flex justify-between items-center border-b border-surface-container">
              <h2 className="text-xl font-bold text-on-surface">Quản lý Mã giảm giá</h2>
              <div className="flex items-center gap-4">
                <div className="flex bg-surface-container-low p-1 rounded-lg">
                  <button className="px-4 py-1.5 text-xs font-bold bg-white text-primary rounded-md shadow-sm">Tất cả</button>
                  <button className="px-4 py-1.5 text-xs font-bold text-on-surface-variant hover:text-on-surface">Hoạt động</button>
                  <button className="px-4 py-1.5 text-xs font-bold text-on-surface-variant hover:text-on-surface">Hết hạn</button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low/50">
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Mã Voucher</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Trạng thái</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant text-center">Số lượt dùng</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Ngày hết hạn</th>
                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant text-right">Hành động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  <tr className="hover:bg-surface-container-low/30 transition-colors">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-dim">
                          <span className="material-symbols-outlined text-sm italic">confirmation_number</span>
                        </div>
                        <span className="font-mono font-bold text-on-surface">WINTER-2024-OFF</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        Hoạt động
                      </span>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <span className="text-sm font-semibold text-on-surface">1,240</span>
                      <span className="text-[10px] text-on-surface-variant ml-1">/ 2000</span>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-sm text-on-surface-variant">31 thg 12, 2024</span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl italic">edit_note</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Channels & Form */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight">Kênh Tự động hóa đang chạy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white shadow-sm border-2 border-primary-fixed flex flex-col gap-4 glass-card">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl italic">alternate_email</span>
                  </div>
                  <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">STABLE</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Quy trình Email</h4>
                  <p className="text-xs text-on-surface-variant">Phân phối cá nhân hóa cho các nhóm đối tượng quy mô lớn.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-3xl p-8 shadow-2xl shadow-primary/5 border border-white">
            <h3 className="text-xl font-bold text-on-surface mb-6">Bản thảo Chiến dịch Nhanh</h3>
            <form className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Tên Chiến dịch</label>
                <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none" placeholder="VD: Black Friday 2024" type="text" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Chọn Kênh</label>
                  <select className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none">
                    <option>Email Marketing</option>
                    <option>Zalo OA</option>
                  </select>
                </div>
              </div>
              <div className="pt-4">
                <button className="w-full py-4 primary-gradient text-on-primary rounded-xl font-bold text-sm shadow-xl shadow-primary/30 flex items-center justify-center gap-2" type="submit">
                  <span className="material-symbols-outlined italic">rocket_launch</span>
                  Kích hoạt Chiến dịch
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
