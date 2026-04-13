import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="bg-surface text-on-background min-h-screen flex items-center justify-center p-6 relative">
      <main className="w-full max-w-[480px]">
        {/* Brand Identity Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary-container mb-6">
            <span className="material-symbols-outlined text-primary text-4xl">smart_toy</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">AutoFlow</h1>
          <p className="text-on-surface-variant font-medium">Hệ sinh thái Tự động hóa</p>
        </div>

        {/* Authentication Card */}
        <div className="bg-surface-container-lowest rounded-xl shadow-ambient overflow-hidden">
          <div className="p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-on-surface mb-1">Chào mừng quay trở lại</h2>
              <p className="text-sm text-on-surface-variant">Vui lòng nhập thông tin để đăng nhập</p>
            </div>
            <form className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-on-surface" htmlFor="email">Địa chỉ Email</label>
                <div className="relative">
                  <input 
                    className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest border border-outline-variant/20 focus:border-primary focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all placeholder:text-outline/50 text-on-surface" 
                    id="email" 
                    name="email" 
                    placeholder="name@company.com" 
                    type="email"
                  />
                </div>
              </div>
              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-semibold text-on-surface" htmlFor="password">Mật khẩu</label>
                  <Link className="text-sm font-medium text-primary hover:text-primary-dim transition-colors" href="#">Quên mật khẩu?</Link>
                </div>
                <div className="relative">
                  <input 
                    className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest border border-outline-variant/20 focus:border-primary focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all placeholder:text-outline/50 text-on-surface" 
                    id="password" 
                    name="password" 
                    placeholder="••••••••" 
                    type="password"
                  />
                </div>
              </div>
              {/* Actions */}
              <div className="space-y-4 pt-2">
                <button 
                  className="w-full h-12 primary-gradient text-on-primary font-bold rounded-lg shadow-sm hover:opacity-95 active:scale-[0.98] transition-all" 
                  type="submit"
                >
                  Đăng nhập
                </button>
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-outline-variant/20"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-surface-container-lowest px-4 text-on-surface-variant font-medium uppercase tracking-wider">Hoặc tiếp tục với</span>
                  </div>
                </div>
                <button 
                  className="w-full h-12 flex items-center justify-center gap-3 bg-surface border border-outline-variant/20 rounded-lg text-on-surface font-semibold hover:bg-surface-container-low transition-colors active:scale-[0.98]" 
                  type="button"
                >
                  <div className="relative w-5 h-5">
                    <Image 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXXniJo3w0H6R4iSzTiO0qOM65QvTEjUB_HNyznNVeDIGhP522_K5EtdqIIbRMHzjhROO7pVn7RBGba0rAfAVCloEqLudVX9Ml5p3cdHjlULJ0tMr5nmBy5mn8P50VJNtNdLGx74jfRwsSxTC4USrRtZNjUbmS9ZPhLdnnT5exDH-v08ZxNmMedmAZ29S0THs7UfrZJ_KhC7sm2AVA2IMsezC_DqOxL5j2sCKbXc77JTqgIONzyJE_W9qPhkSb6uAHpTLxmORn2zrh"
                      alt="Google Logo"
                      fill
                    />
                  </div>
                  Sign nhập bằng Google
                </button>
              </div>
            </form>
          </div>
          {/* Footer Section */}
          <div className="bg-surface-container-low p-6 text-center">
            <p className="text-sm text-on-surface-variant">
              Chưa có tài khoản? 
              <Link className="text-primary font-bold hover:underline" href="#">Tạo tài khoản</Link>
            </p>
          </div>
        </div>
        {/* Auxiliary Links */}
        <div className="mt-8 flex justify-center gap-8">
          <Link className="text-xs font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Chính sách bảo mật</Link>
          <Link className="text-xs font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Điều khoản dịch vụ</Link>
          <Link className="text-xs font-medium text-on-surface-variant hover:text-primary transition-colors" href="#">Liên hệ hỗ trợ</Link>
        </div>
      </main>

      {/* Global Decorative Background Elements */}
      <div className="fixed -z-10 top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary-container/20 blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-secondary-container/20 blur-[120px]"></div>
      </div>
    </div>
  );
}
