---
phase: 2
plan: 2
wave: 1
---

# Plan 2.2: AI RAG Module & Gemini Integration

## Objective
Tích hợp `pgvector` vào cơ sở dữ liệu và xây dựng Layer AI trong NestJS. Nạp kiến thức bằng upload thủ công văn bản, dùng Gemini `@google/genai` để sinh Embeddings (số chiều 768) lưu vào PostgreSQL và khởi tạo phương thức tra cứu vector cơ bản `$queryRaw`. 

## Context
- .gsd/ROADMAP.md
- backend/prisma/schema.prisma
- backend/.env

## Tasks

<task type="auto">
  <name>Database Vector Storage Setup</name>
  <files>
    backend/prisma/schema.prisma
    backend/prisma/migrations/
  </files>
  <action>
    - Mở `backend/prisma/schema.prisma`, thêm model `Document` với nội dung text và cột `embedding Unsupported("vector(768)")?`. (Chỉ định rõ chiều 768 của Gemini).
    - Chạy command `prisma migrate dev --create-only --name init_vector`.
    - Mở thủ công file migration `.sql` vừa tạo và THÊM dòng `CREATE EXTENSION IF NOT EXISTS vector;` ở ĐẦU file.
    - Cuối cùng, gọi `npx prisma migrate deploy` để tạo bản lưu vào CSDL (yêu cầu pgvector extension).
    - Tránh các lỗi liên quan đến việc Prisma không hiểu `Unsupported` bằng cách không dùng nó trong các câu lệnh `create`/`update` trực tiếp của ORM, mà sẽ dùng raw SQL ở task sau.
  </action>
  <verify>Dùng bash chạy `psql` (hoặc lệnh tương tự) kết nối vào DB, kiểm tra xem extension vector đã có và bảng Document đã có kiểu vector chưa.</verify>
  <done>Prisma schema chứa `Unsupported("vector(768)")` và database thực tế đã cài pgvector thành công.</done>
</task>

<task type="auto">
  <name>Gemini & RAG Core Services</name>
  <files>
    backend/src/ai/ai.module.ts
    backend/src/ai/ai.service.ts
    backend/src/ai/ai.controller.ts
  </files>
  <action>
    - Tạo `AiModule`. Cài đặt `@google/genai` trong thư mục backend.
    - Trong `AiService`: 
      1. Khởi tạo Gemini client với `API Key` lấy từ `.env`.
      2. Viết hàm `generateEmbedding(text: string)` dùng model `text-embedding-004`.
      3. Viết hàm `saveDocument(text: string)`: gọi `generateEmbedding`, sau đó dùng `prisma.$queryRaw` chèn `text` và `vector` vào bảng `Document` bằng cú pháp `"${vector}::vector"`.
      4. Viết hàm `searchSimilar(queryText: string)`: Sinh embedding cho query, dùng `prisma.$queryRaw` thực hiện `<=>` tìm 3 document gần nhất.
    - Cung cấp API Test Upload Text (ở controller `POST /ai/docs/text`). Tạm chưa cần logic PDF phức tạp nếu text hoạt động tốt. (Bảo mật bằng JWT guard nội bộ).
  </action>
  <verify>Viết script NestJS E2E hoặc gọi trực tiếp API `POST /ai/docs/text` với text body mẫu, kiểm tra raw DB xem vector 768 chiều có insert thành công không.</verify>
  <done>Hàm lưu embedding và hàm search vector `similarity` hoạt động không ném lỗi.</done>
</task>

## Success Criteria
- [ ] Tính năng nạp Dữ liệu tĩnh (thủ công) vào DB tạo ra record chứa Vector768.
- [ ] Tính năng tìm kiếm Similar Documents chạy thành công bằng PostgreSQL query.
