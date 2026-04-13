---
phase: 2
plan: 3
wave: 2
---

# Plan 2.3: AI Widget Engine & UI

## Objective
Xây dựng Endpoint AI Chat (kết hợp với logic RAG của Plan 2) ở Backend và triển khai phương án nhúng Frontend Widget bằng file tĩnh sinh ra Iframe ở phía Client ngoại.

## Context
- .gsd/ROADMAP.md
- backend/src/ai/ai.service.ts
- frontend/app/layout.tsx

## Tasks

<task type="auto">
  <name>Backend AI Chat RAG Controller</name>
  <files>
    backend/src/ai/ai.service.ts
    backend/src/ai/ai.controller.ts
  </files>
  <action>
    - Trong `AiController`, thêm `POST /ai/chat` (API này sẽ Public cho Widget). 
      (Lưu ý: CORS của NestJS phải được config cho phép origin bên ngoài hoặc '*').
    - Hàm xử lý chat (có truyền `sessionId`, `message`):
      1. Viết `AiService.answerQuestion(question)`
      2. Gọi `searchSimilar(question)` (Task trước) lấy về tối đa chuỗi nội dung relevant.
      3. Gắn context đó vào Prompt gửi `client.models.generateContent` với role `system`. Và gài câu hỏi user để Gemini trả lời dựa hoàn toàn vào dữ liệu.
      4. Trả kết quả về Frontend.
  </action>
  <verify>Dùng POST /ai/chat với câu hỏi chứa từ khoá liên quan đến text đã nạp vào DB và kì vọng kết quả AI trả lời khớp.</verify>
  <done>API Public `/ai/chat` chạy thành công cùng RAG.</done>
</task>

<task type="auto">
  <name>Frontend Independent JS Library & Iframe Route</name>
  <files>
    frontend/public/widget.js
    frontend/app/widget/chat/page.tsx
    frontend/app/widget/chat/layout.tsx
  </files>
  <action>
    - Xây dựng `frontend/public/widget.js`: Một file script đơn giản DOM chèn một button góc phải dùng `document.createElement`. Khi ấn sẽ toggle một Iframe đè lên CSS. Iframe URL là `<host>/widget/chat`.
    - Tạo `frontend/app/widget/chat/page.tsx` và `layout.tsx` riêng: Loại bỏ RootLayout dùng chung của dashboard (để iframe rỗng và chỉ có giao diện hộp Live Chat). Code Tailwind UI cho một khung Chatbot UI.
    - Component Chatbot này gọi Fetch trực tiếp sang API Public Backend `POST /ai/chat` để giao tiếp.
    - Không lưu JWT hay bắt login ở Route Widget này (Anonymous Chat).
  </action>
  <verify>Mở `<host>/widget.js` trong HTML trống ở bên ngoài và kiểm chứng button góc phải hiển thị UI chatbot hoàn chỉnh bên trong iframe.</verify>
  <done>Có script nhúng động (embed.js/widget.js), Iframe Chat UI chạy Tailwind độc lập với Dashboard mượt mà.</done>
</task>

## Success Criteria
- [ ] Backend chặn CORS an toàn nhưng vẫn mở đường cho Chat Widget API.
- [ ] Giao tiếp Iframe hoàn chỉnh: Chèn 1 dòng script `<script src=".../widget.js">` sẽ thiết lập ngay Widget RAG AI tại góc màn hình.
