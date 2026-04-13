'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { customerApi } from '../../../lib/api';

export default function AudiencePage() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '' });
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      const data = await customerApi.list();
      setCustomers(data);
      if (data.length > 0 && !selectedCustomer) {
        setSelectedCustomer(data[0]);
      }
    } catch (error) {
      console.error('Failed to load customers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddCustomer = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await customerApi.create(newCustomer);
      setNewCustomer({ name: '', email: '', phone: '' });
      setIsAdding(false);
      loadCustomers();
    } catch (error) {
      alert('Không thể thêm khách hàng. Vui lòng thử lại.');
    }
  };

  return (
    <main className="p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-on-surface tracking-tight">Quản lý Khách hàng</h2>
            <p className="text-on-surface-variant mt-1">Quản lý và phân tích {customers.length} hồ sơ khách hàng của bạn.</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsAdding(true)}
              className="primary-gradient text-on-primary px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-95"
            >
              Thêm khách hàng
            </button>
          </div>
        </div>

        {/* Add Customer Modal (Simple) */}
        {isAdding && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-surface-container-lowest rounded-2xl w-full max-w-md p-8 shadow-2xl">
              <h3 className="text-xl font-bold mb-6">Thêm khách hàng mới</h3>
              <form onSubmit={handleAddCustomer} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Họ và tên</label>
                  <input 
                    className="w-full h-11 px-4 rounded-lg bg-surface-container-low border border-outline-variant/30 outline-none focus:border-primary" 
                    required
                    value={newCustomer.name}
                    onChange={e => setNewCustomer({...newCustomer, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Email</label>
                  <input 
                    className="w-full h-11 px-4 rounded-lg bg-surface-container-low border border-outline-variant/30 outline-none focus:border-primary" 
                    type="email"
                    required
                    value={newCustomer.email}
                    onChange={e => setNewCustomer({...newCustomer, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Số điện thoại</label>
                  <input 
                    className="w-full h-11 px-4 rounded-lg bg-surface-container-low border border-outline-variant/30 outline-none focus:border-primary" 
                    value={newCustomer.phone}
                    onChange={e => setNewCustomer({...newCustomer, phone: e.target.value})}
                  />
                </div>
                <div className="flex gap-3 mt-8">
                  <button 
                    type="button"
                    onClick={() => setIsAdding(false)}
                    className="flex-1 py-2.5 rounded-xl font-bold bg-surface-container-high text-on-surface"
                  >
                    Hủy
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl font-bold primary-gradient text-on-primary"
                  >
                    Lưu
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Customer List Stage */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden glass-card min-h-[400px]">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-container-low border-none">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-on-surface-variant">Khách hàng</th>
                    <th className="px-6 py-4 font-semibold text-on-surface-variant">Số điện thoại</th>
                    <th className="px-6 py-4 font-semibold text-on-surface-variant">Ngày tạo</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y-0">
                  {isLoading ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-10 text-center text-on-surface-variant">Đang tải dữ liệu...</td>
                    </tr>
                  ) : customers.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-10 text-center text-on-surface-variant">Chưa có khách hàng nào.</td>
                    </tr>
                  ) : (
                    customers.map((customer) => (
                      <tr 
                        key={customer.id}
                        onClick={() => setSelectedCustomer(customer)}
                        className={`group hover:bg-surface-container-low/50 transition-colors cursor-pointer border-b border-surface-container-low ${selectedCustomer?.id === customer.id ? 'bg-surface-container-low' : ''}`}
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">
                              {customer.name.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <div className="font-bold text-on-surface">{customer.name}</div>
                              <div className="text-xs text-on-surface-variant">{customer.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-on-surface-variant">
                          {customer.phone || 'N/A'}
                        </td>
                        <td className="px-6 py-5 text-on-surface-variant">
                          {new Date(customer.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-5 text-right">
                          <span className="material-symbols-outlined text-primary italic text-sm">chevron_right</span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Customer 360 Detail Sidebar */}
          {selectedCustomer && (
            <div className="lg:col-span-1 glass-card rounded-2xl border border-white/40 shadow-2xl shadow-primary/5 p-6 flex flex-col h-[calc(100vh-12rem)] sticky top-24">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center text-secondary text-2xl font-bold shadow-lg">
                    {selectedCustomer.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-on-surface leading-tight">{selectedCustomer.name}</h3>
                    <p className="text-xs text-on-surface-variant">{selectedCustomer.email}</p>
                    <div className="mt-2 flex gap-1">
                      <span className="px-2 py-0.5 bg-primary-container text-on-primary-container text-[10px] font-bold rounded-full">Khách lẻ</span>
                    </div>
                  </div>
                </div>
                <button className="text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined italic">more_vert</span>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto pr-2 space-y-8 scrollbar-hide">
                <section>
                  <h4 className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-widest mb-4">Thông tin chi tiết</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] text-on-surface-variant uppercase font-bold">Số điện thoại</p>
                      <p className="text-sm font-medium">{selectedCustomer.phone || 'Chưa cập nhật'}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-on-surface-variant uppercase font-bold">Ngày đăng ký</p>
                      <p className="text-sm font-medium">{new Date(selectedCustomer.createdAt).toLocaleString()}</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h4 className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-widest mb-4">Dòng thời gian</h4>
                  <div className="space-y-6 relative ml-2">
                    <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-outline-variant opacity-20"></div>
                    <div className="relative pl-6">
                      <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-primary ring-4 ring-primary/10"></div>
                      <p className="text-xs font-bold text-on-surface leading-none">Khởi tạo hồ sơ</p>
                      <p className="text-[11px] text-on-surface-variant mt-1">Hồ sơ khách hàng được tạo tự động</p>
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
          )}
        </div>
      </div>
    </main>
  );
}
