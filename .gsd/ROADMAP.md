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

## Phases

### Phase 1: Foundation, User/Customer Core & AI Widget MVP
**Status**: ⬜ Not Started
**Objective**: Khởi tạo Core Model, Authentication, quản lý Customer và ra mắt Web Widget kết nối Gemini RAG để tư vấn tự động.
**Requirements**: REQ-01, REQ-02, REQ-03, REQ-04, REQ-05, REQ-09

### Phase 2: Web Tracking & Automation Flow Engine
**Status**: ⬜ Not Started
**Objective**: Cài đặt Tracking Script nhận event về hệ thống, xây dựng giao diện Flow Builder, tích hợp Redis+BullMQ để xử lý event.
**Requirements**: REQ-06, REQ-07, REQ-08, REQ-09

### Phase 3: Campaign Execution & Voucher Hub
**Status**: ⬜ Not Started
**Objective**: Hệ thống quản lý Voucher, đẩy chiến dịch tự động qua kênh Email/Zalo.
**Requirements**: REQ-09, REQ-10
