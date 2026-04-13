# DECISIONS.md

## Log
| ID | Date | Status | Context | Decision | Consequence |
|----|------|--------|---------|----------|-------------|
| ADR-01 | 2026-04-13 | Accepted | Need vector DB for RAG. | Use PGVector integrated into PostgreSQL instead of specific vector DBs. | Reduces infrastructure complexity but requires maintaining pgvector extension in PG server. |
| ADR-02 | 2026-04-13 | Accepted | Need message broker for queue. | Use Redis + BullMQ instead of Kafka. | Simpler stack for MVP, appropriate scaling. |
| ADR-03 | 2026-04-13 | Accepted | Need a flow builder UI. | Use Xyflow/React Flow. | Fast time to market, industry standard, but need to adapt existing templates. |
