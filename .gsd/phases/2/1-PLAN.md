---
phase: 2
plan: 1
wave: 1
---

# Plan 2.1: Authentication & Customer Core

## Objective
Thiết lập API bảo mật với JWT cho hệ thống (NestJS) và cung cấp core service cho Customer CRUD. Liên kết các trang tĩnh của Frontend (Login, Audience) vào DB thật, đảm bảo quản trị viên có thể đăng nhập và quản lý danh sách Customer với siêu dữ liệu `metadata` (JsonB).

## Context
- .gsd/ROADMAP.md
- .gsd/ARCHITECTURE.md
- backend/prisma/schema.prisma
- frontend/app/login/page.tsx
- frontend/app/(dashboard)/audience/page.tsx

## Tasks

<task type="auto">
  <name>Setup Backend Auth & Customer CRUD</name>
  <files>
    backend/src/auth/auth.module.ts
    backend/src/auth/auth.service.ts
    backend/src/auth/auth.controller.ts
    backend/src/auth/strategies/jwt.strategy.ts
    backend/src/customer/customer.module.ts
    backend/src/customer/customer.service.ts
    backend/src/customer/customer.controller.ts
    backend/prisma/schema.prisma
  </files>
  <action>
    - Mở `backend/prisma/schema.prisma`, thêm field `metadata` (Json) cho model Customer. Đảm bảo model User có trường email và password (hashed). Chạy `prisma migrate dev --name init_auth`.
    - Tạo AuthModule với `@nestjs/passport` (jwt). Cung cấp `POST /auth/login` (nhận email/pass, trả về `{ accessToken }`) và một hàm khởi tạo user admin đầu tiên `POST /auth/init`.
    - Tạo CustomerModule với `GET /customer` và `POST /customer`. Các API này phải được bảo vệ bởi `JwtAuthGuard`. 
    - LƯU Ý: Không commit mã plain-text password, sử dụng bcrypt (hoặc tương tự) để hash password của User.
  </action>
  <verify>curl -X POST http://localhost:3001/auth/login -H "Content-Type: application/json" -d '{"email":"test","password":"test"}' -v (Cần trả về 401 hoặc token nếu user tồn tại)</verify>
  <done>API Login trả về JWT hợp lệ; API Customer hoạt động (yêu cầu JWT guard).</done>
</task>

<task type="auto">
  <name>Frontend Auth Integration</name>
  <files>
    frontend/app/login/page.tsx
    frontend/app/(dashboard)/audience/page.tsx
    frontend/lib/api.ts
  </files>
  <action>
    - Tạo `frontend/lib/api.ts` để cấu hình fetch client tự đính kèm JWT (lấy từ localStorage hoặc cookie).
    - Mở `frontend/app/login/page.tsx`: Gắn hành động submit form gọi vào API `http://localhost:3001/auth/login`. Thành công -> lưu token, chuyển hướng sang `/`.
    - Mở `frontend/app/(dashboard)/audience/page.tsx`: Gỡ bỏ dữ liệu tĩnh. Thay bằng `useEffect` gọi API `GET http://localhost:3001/customer`. Render danh sách trả về. Cập nhật nút Add Customer để đẩy POST request.
    - LƯU Ý: Phải xử lý lỗi UI khi login thất bại (Sai password).
  </action>
  <verify>Mở frontend localhost:3000/login, thử nhập tài khoản và login thành công để chuyển hướng tới dashboard.</verify>
  <done>Form login và màn hình quản lý Audience kết nối thành công với Backend.</done>
</task>

## Success Criteria
- [ ] User có thể đăng nhập từ Frontend và nhận mã cấu hình JWT.
- [ ] Tính năng "Audience" fetch list Customer động thông qua JWT của trang chủ hệ thống.
