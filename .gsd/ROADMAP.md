# ROADMAP.md

> **Current Phase**: Không bắt đầu (Not started)
> **Milestone**: v1.0

## Must-Haves (from SPEC)
- [ ] Tích hợp giao diện CSS/HTML có sẵn vào React/Next.js cho tất cả luồng.
- [ ] Quản lý User (Nội bộ) & Customer (End-user) 360.
- [ ] AI Chat Widget sử dụng RAG với `pgvector` và Gemini.
- [ ] Tracking & Auto-segmentation.
- [ ] Flow Builder (React Flow) và Queue Execution (BullMQ).
- [ ] Voucher Hub & Campaign Execution.

### Phase 1: Database Schema & Frontend Template Integration
**Status**: ✅ Complete and Verified
**Objective**: Thiết kế và hoàn thiện toàn bộ Database model trong `backend/prisma/schema.prisma`. Chuyển đổi và tích hợp tất cả các mẫu HTML/CSS từ thư mục `/template` vào ứng dụng Next.js.
**Requirements**: REQ-01, REQ-02, REQ-09

### Phase 2: User/Customer Core & AI Widget MVP
**Status**: ✅ Complete and Verified
**Objective**: Phát triển các API cốt lõi về Authentication, quản lý Customer và ra mắt Web Widget hiển thị với khả năng kết nối Gemini RAG để tư vấn tự động.
**Requirements**: REQ-01, REQ-02, REQ-03, REQ-04, REQ-05

### Phase 3: Web Tracking & Automation Flow Engine
**Status**: ⬜ Not Started
**Objective**: Cài đặt Tracking Script nhận event về hệ thống, xây dựng giao diện Flow Builder (Xyflow), và tích hợp Redis+BullMQ để xử lý event trigger.
**Requirements**: REQ-06, REQ-07, REQ-08

### Phase 4: Campaign Execution & Voucher Hub
**Status**: ⬜ Not Started
**Objective**: Hoàn thiện hệ thống quản lý Voucher, đẩy chiến dịch tự động qua kênh Email/Zalo từ các Automation Flows.
**Requirements**: REQ-10
