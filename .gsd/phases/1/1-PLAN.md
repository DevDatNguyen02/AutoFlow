---
phase: 1
plan: 1
wave: 1
---

# Plan 1.1: Database Schema & Vector Extension

## Objective
Thiết lập toàn bộ cấu trúc cơ sở dữ liệu `schema.prisma` từ Requirement và BRD cho cả hệ thống AutoFlow, bao gồm cấu hình Provider để quản lý `pgvector`.

## Context
- `.gsd/SPEC.md`
- `.gsd/DECISIONS.md`
- `.gsd/phases/1/RESEARCH.md`
- `backend/prisma/schema.prisma`

## Tasks

<task type="auto">
  <name>Configure Prisma & Pgvector Extension</name>
  <files>
    - backend/prisma/schema.prisma
  </files>
  <action>
    - Thêm `previewFeatures = ["postgresqlExtensions"]` vào block `generator`.
    - Đổi block `datasource db` để có thêm tuỳ chọn `extensions = [vector]`.
    - Tạo model `User` với email, passwordHash, role, createdAt.
    - Tạo model `Customer` với id, name, email, phone, metadata (`Json`), createdAt.
    - Tạo model `Event` lưu lịch sử tương tác với customerId, actionType, timestamp, eventData (`Json`).
  </action>
  <verify>cd backend && npx prisma validate</verify>
  <done>Trình biên dịch Prisma không báo lỗi cấu hình.</done>
</task>

<task type="auto">
  <name>Create System Models (Flow, Voucher, AI)</name>
  <files>
    - backend/prisma/schema.prisma
  </files>
  <action>
    - Tạo model `AutomationFlow` và `FlowNode` (lưu JSON config cho Xyflow).
    - Tạo model `Voucher` và `Campaign`.
    - Tạo model `KnowledgeBase` cho AI RAG với các cột id, title, content (String) và embedding (`Unsupported("vector(1536)")`).
  </action>
  <verify>cd backend && npx prisma format && npx prisma validate</verify>
  <done>Prisma format thành công toàn bộ schema.</done>
</task>

## Success Criteria
- [ ] Schema.prisma định nghĩa đầy đủ 8 bảng (User, Customer, Event, AutomationFlow, FlowNode, Voucher, Campaign, KnowledgeBase).
- [ ] Chạy `prisma validate` thành công không lỗi syntax.
