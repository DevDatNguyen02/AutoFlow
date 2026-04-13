---
phase: 1
plan: 3
wave: 2
---

# Plan 1.3: Core Pages Integration

## Objective
Tích hợp HTML/CSS tĩnh của các trang quản trị còn lại (Dashboard Overview, Audience Management, Automation Builder, AI Center, Voucher Hub) thành các Page Component trong thư mục `app/` của Next.js. Không thực hiện code logic (fetching DB), ở mức độ này chỉ làm layout và UI tĩnh để review đồng bộ Tailwind.

## Context
- Folders trong `/template/` (ai_center, audience_management, autoflow_slate, automation_builder, login, voucher_hub)
- Next.js `app/` folder.

## Tasks

<task type="auto">
  <name>Integrate Dashboard & Login Templates</name>
  <files>
    - frontend/app/page.tsx
    - frontend/app/login/page.tsx
  </files>
  <action>
    - Tạo `app/login/page.tsx`. Lấy HTML từ `template/login/code.html` (chỉ lấy phần thẻ `<main>` hoặc nội dung bên trong `<body>`), xoá thẻ `<script>` config của Tailwind.
    - Cập nhật `app/page.tsx` thành content của Dashboard. Tương tự, cắt lấy nội dung chính của `<main>` từ `template/dashboard_overview/code.html`.
    - Thay thế các class như `class=` thành `className=`, đóng thẻ `<input />`, `<img />`.
  </action>
  <verify>test -f frontend/app/login/page.tsx</verify>
  <done>2 Page được tạo thành công không vướng JSX errors.</done>
</task>

<task type="auto">
  <name>Integrate Domain Specific Pages</name>
  <files>
    - frontend/app/audience/page.tsx
    - frontend/app/automation/page.tsx
    - frontend/app/ai/page.tsx
    - frontend/app/voucher/page.tsx
  </files>
  <action>
    - Chuyển `template/audience_management/code.html` vào `app/audience/page.tsx`.
    - Chuyển `template/automation_builder/code.html` vào `app/automation/page.tsx` (dựng React Flow UI fake tĩnh ban đầu nếu có, hoặc chỉ đắp HTML layout canvas của template).
    - Chuyển `template/ai_center/code.html` vào `app/ai/page.tsx`.
    - Chuyển `template/voucher_hub/code.html` vào `app/voucher/page.tsx`.
  </action>
  <verify>cd frontend && npm run build</verify>
  <done>Tất cả các trang build thành công.</done>
</task>

## Success Criteria
- [ ] 6 màn hình template đã được đưa vào Next.js.
- [ ] Next.js dev server chạy hiển thị giao diện đẹp, sử dụng đúng theme Tailwind.
