# SPEC.md — Project Specification

> **Status**: `FINALIZED`
> **Date**: 2026-04-13

## Vision
Hệ sinh thái tự động hóa AutoFlow là giải pháp quản trị tập trung (Internal Tool/SaaS-ready) giúp doanh nghiệp tự động hóa toàn bộ hành trình khách hàng: từ lúc truy cập website cho đến khi chuyển đổi thành đơn hàng thông qua trợ lý ảo AI và Marketing đa kênh.

## Goals
1. Cung cấp hệ thống quản trị người dùng và khách hàng (Customer 360) tập trung.
2. Triển khai AI Chat Widget tích hợp RAG (dùng trực tiếp PostgreSQL + pgvector) hỗ trợ tư vấn tự động chuyên sâu.
3. Xây dựng phân hệ Web Tracking và Flow Builder (sử dụng React Flow/Xyflow) để cá nhân hóa chiến dịch qua Redis + BullMQ.
4. Tích hợp trọn vẹn toàn bộ các template giao diện gốc đã được thiết kế sẵn cho các màn hình.

## Non-Goals (Out of Scope)
- Không sử dụng các cơ sở dữ liệu Vector chuyên dụng riêng biệt (như Pinecone, Milvus) mà tích hợp thẳng qua `pgvector`.
- Không sử dụng Kafka/RabbitMQ cho hàng đợi sự kiện (chỉ dùng Redis + BullMQ cho MVP).
- Không tự Build các thành phần Flow UI từ đầu (sẽ sử dụng Xyflow/React Flow).

## Users
- **Owner**: Quản trị tài khoản, API keys.
- **Admin**: Thiết lập Automation, nạp dữ liệu RAG, cấu hình Tracking.
- **Marketer**: Chăm sóc Campaigns (Vouchers, Email, Zalo).
- **Agent**: Tư vấn viên hỗ trợ khách hàng.
- **End-user**: Khách truy cập web tương tác qua Widget.

## Constraints
- **Công nghệ Frontend**: Next.js, React Flow, tích hợp mã HTML/CSS/JS template gốc từ thư mục `/template`.
- **Công nghệ Backend**: NestJS, PostgreSQL (JSONB + pgvector), Redis, BullMQ, Gemini API.
- **Hiệu năng**: Các kịch bản Automation xử lý với độ trễ < 5 giây.

## Success Criteria
- [ ] Tracking chính xác các sự kiện người dùng từ web.
- [ ] Giao diện admin và widget hiển thị chuẩn xác dựa theo UI Template mẫu.
- [ ] AI trả lời khách hàng đạt % chính xác > 90% dựa trên tài liệu đã cấu hình trong RAG.
- [ ] Luồng tự động hóa chạy ổn định trên BullMQ.
