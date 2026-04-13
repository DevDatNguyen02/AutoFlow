---
phase: 1
plan: 2
wave: 1
---

# Plan 1.2: Tailwind CSS Setup & Global Layout Migration

## Objective
Trích xuất cấu hình màu từ template HTML vào `globals.css` và biến đổi file `dashboard_overview/code.html` thành một Shell Layout tái sử dụng (Sidebar, Topbar) ở mức Next.js App Router root layout.

## Context
- `template/dashboard_overview/code.html`
- `frontend/app/globals.css`
- `frontend/app/layout.tsx`

## Tasks

<task type="auto">
  <name>Migrate CSS Configuration</name>
  <files>
    - frontend/app/globals.css
  </files>
  <action>
    - Mở `template/dashboard_overview/code.html`, copy các hex color code trong mảng `tailwind.config = { theme: { extend: { colors: {...} }}}`.
    - Chuyển tiếp (Map) các key này vào `frontend/app/globals.css` thông qua cú pháp `@theme: { --color-<key>: <value>; }` chuẩn của Tailwind v4, hoặc thiết lập CSS variables (VD: `--color-primary-fixed: #dbe1ff`).
    - Copy các custom classes như `.glass-card`, `.primary-gradient` vào `globals.css`.
  </action>
  <verify>grep "primary-gradient" frontend/app/globals.css</verify>
  <done>File `globals.css` chứa đầy đủ mã màu của template và không gây lỗi build.</done>
</task>

<task type="auto">
  <name>Extract Root Layout (Shell)</name>
  <files>
    - frontend/app/layout.tsx
    - frontend/components/ui/SideNavBar.tsx
    - frontend/components/ui/TopNavBar.tsx
  </files>
  <action>
    - Tạo Component `SideNavBar` và `TopNavBar` bằng cách cắt thẻ `<aside>` và `<header>` từ HTML của template `dashboard_overview`.
    - Thay thế các class gốc SVG của Google Material Symbols.
    - Setup `layout.tsx` hiển thị `SideNavBar`, `TopNavBar` và chừa phần `<main>` cho `children`.
  </action>
  <verify>cd frontend && npm run build</verify>
  <done>Next.js build thành công layout mới mà không có thẻ HTML đóng sai cú pháp trong JSX.</done>
</task>

## Success Criteria
- [ ] CSS Theme được load full.
- [ ] UI Shell (Sidebar, TopNav) hiện diện được render chính xác khi chạy dev.
