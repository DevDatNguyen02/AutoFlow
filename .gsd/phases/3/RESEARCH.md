---
phase: 3
level: 2
researched_at: 2026-04-13
---

# Phase 3 Research

## Questions Investigated
1. How to handle Xyflow (React Flow) installation in Next.js?
2. How to implement the tracking API endpoint efficiently without blocking backend?
3. What changes are needed for Prisma Schema to support anonymous tracking and 30-day cron deletion?

## Findings

### Topic 1: Xyflow Configuration for Next.js App Router
Xyflow `@xyflow/react` is the modern package for React Flow. It is not currently installed in the `frontend` `package.json`.
**Sources:**
- `frontend/package.json` inspection.
**Recommendation:** Install `@xyflow/react` in frontend. Create wrapper components for Trigger, Condition, and Action nodes.

### Topic 2: BullMQ and Redis Integration
`@nestjs/bullmq` and `bullmq` are already installed in `backend` `package.json` (Phase 1 structure setup). Redis is configured in the docker-compose.
**Sources:**
- `backend/package.json` inspection.
**Recommendation:** Configure NestJS `BullModule` with the Redis connection string. We will create an `events` queue. The Tracking REST API will just push jobs (`queue.add`) to this queue and return 200 OK immediately. A worker class (`Processor`) will consume these jobs, evaluate the node flows, and trigger actions.

### Topic 3: Database Schema Enhancements
The `Event` model currently requires a `customerId`. To support anonymous users with `af_id`, we need to make `customerId` optional and add `sessionId` (or `af_id`).
**Sources:**
- `backend/prisma/schema.prisma`
**Recommendation:**
- Change `customerId` to `String?` in `Event` model.
- Add `sessionId String?` to `Event` model.
- Update `Customer` or create logic so when a form submits, all `Event`s matching the `sessionId` get their `customerId` updated.

## Decisions Made
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Xyflow Library | `@xyflow/react` | Standard React Flow wrapper, supports Next.js. |
| DB Schema updates | Modify `Event` table | Support `af_id` tracking for anonymous users. |
| Event Storage | Drop directly to DB via Queue | BullMQ worker will batch insert or insert immediately to Prisma. |

## Patterns to Follow
- Offload all intense logic (Flow trigger evaluation) to BullMQ processor.
- Use `JSONB` in `Event.eventData` for flexibility.

## Anti-Patterns to Avoid
- Synchronous processing on tracking REST API: The API should respond in <50ms and put work in the queue.

## Dependencies Identified
| Package | Version | Purpose |
|---------|---------|---------|
| `@xyflow/react` | latest | Flow Builder UI for Frontend |
| `@nestjs/schedule` | latest | Cron jobs for 30-day log deletion |

## Risks
- Mac Intel performance with high Redis traffic: Mitigation is filtering out noise events (scroll, mousemove) at the script level and using a 30-day cron limit.

## Ready for Planning
- [x] Questions answered
- [x] Approach selected
- [x] Dependencies identified
