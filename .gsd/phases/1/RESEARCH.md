---
phase: 1
level: 2
researched_at: 2026-04-13
---

# Phase 1 Research

## Questions Investigated
1. Quản lý extension `pgvector` trong `prisma/schema.prisma` như thế nào để tốt nhất cho PostgreSQL?
2. Chuyển hoá cấu hình tuỳ chỉnh Tailwind CSS từ thẻ `<script>` trong HTML của template sang dự án Next.js (Tailwind v4) như thế nào?

## Findings

### Prisma & pgvector Integration
Prisma hỗ trợ PostgreSQL extensions thông qua preview feature `postgresqlExtensions`. Điều này cho phép khai báo `vector` trực tiếp trong config DB mà không phải cấu hình raw SQL thủ công mỗi lần migrate bằng schema nữa. Các trường lưu trữ vector (ví dụ lưu embeddings của tài liệu) sẽ dùng kiểu `Unsupported("vector(1536)")`.

**Recommendation:** Kích hoạt `previewFeatures = ["postgresqlExtensions"]` tại `generator` và `extensions = [vector]` tại `datasource db`.

### UI Template to Tailwind v4 Migration
Frontend đang dùng Tailwind CSS bản v4 (tra cứu trong package.json). Trong bản update này, file `tailwind.config.js` đã bị lược bỏ bớt vai trò. Thay vào đó, tất cả theme và design tokens được cấu hình trực tiếp qua `@theme` block nằm trong `globals.css`. 
Tất cả các token từ thẻ `<script id="tailwind-config">` của các tệp HTML gốc (ví dụ các thuộc tính mang màu `on-primary-fixed`, `surface-variant`) cần phải được chuyển đổi thành các custom properties (CSS variables) hoặc đưa vào block `@theme` trong `globals.css` của frontend.

**Recommendation:** Loại bỏ thẻ `<script>` trong HTML lúc chuyển React Component. Trích xuất mảng `theme.extend.colors` từ template sang `globals.css` theo cú pháp của Tailwind v4.

## Decisions Made
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Prisma Extension | Native Prisma Extension Block | Giảm thiểu script tạo Schema thủ công. |
| Tailwind Config | CSS-first config (v4) | Frontend đang chạy Tailwind v4, không cần file config JS trung gian. |

## Patterns to Follow
- **UI Structure:** Trích xuất Layout components (TopNav, SideNav) thành `app/layout.tsx`. Tách UI logic vào `components/ui/`.
- **Naming Conventions:** Giữ chuẩn React component: PascalCase (`SideNavBar.tsx`).

## Dependencies Identified
| Package | Version | Purpose |
|---------|---------|---------|
| pgvector | native | Cài đặt trong DB PostgreSQL để được Prisma hỗ trợ |

## Risks
- **Tailwind Version Mismatch:** Việc tự động áp dụng code JS styling cũ vào bản v4 có thể gãy nếu syntax bị đổi cấu trúc. Cần test layout Dashboard đầu tiên làm mốc tham chiếu chuẩn.
- **Migrate Issue:** Lần setup Db đầu tiên sẽ bị crash nếu Container PostgreSQL chưa thực sự setup pgvector thành công trước đó.

## Ready for Planning
- [x] Questions answered
- [x] Approach selected
- [x] Dependencies identified
