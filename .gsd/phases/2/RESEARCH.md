---
phase: 2
level: 2
researched_at: 2026-04-13
---

# Phase 2 Research: User/Customer Core & AI Widget MVP

## Questions Investigated
1. **Authentication:** Should we build custom Auth (NestJS+Passport) or integrate a third-party service (Clerk/Auth0)?
2. **Customer 360 Scope:** For Phase 2 MVP, what data should be managed for Customers?
3. **AI Widget Architecture:** How should the AI Widget be embedded into any website?
4. **RAG implementation:** Manual document upload vs Auto Web Crawl for MVP?

## Findings

### Topic 1: Authentication Approach
- **Context:** AutoFlow aims to be an internal tool / SaaS platform.
- **Finding:** A custom JWT-based authentication using `@nestjs/passport` and `passport-jwt` on the NestJS backend keeps the platform fully self-hosted without vendor lock-in or recurring user-based fees. 
- **Recommendation:** Implement standard JWT Auth (Login/Register, Token Validation).

### Topic 2: Customer 360 Scope for Phase 2
- **Context:** Phase 3 introduces Web Tracking (events).
- **Finding:** Currently, we only need the Customer's base profile to link them with the AI chat sessions. Interactions and event streams will be introduced later.
- **Recommendation:** Define the `Customer` table with basic fields (Name, Email, Phone) and a `metadata` JSONB column for future extensibility before full tracking is ready.

### Topic 3: AI Web Widget Architecture
- **Context:** The Widget needs to be embeddable on external websites without CSS conflicts.
- **Finding:** Compiling a React component directly as a `.js` library can be complex (CSS scoping, bundle size). The simplest, most robust method for SaaS widgets is an **iframe injection script**. A lightweight JS file (e.g., `widget.js`) simply creates an `<iframe>` pointing to a publicly accessible Next.js route (e.g., `/widget/[id]`). 
- **Recommendation:** Build the Widget UI in Next.js as a standalone page (e.g., `app/widget/page.tsx`). Serve an `embed.js` script that creates an iframe pointing to this page.

### Topic 4: RAG Implementation Strategy
- **Context:** Building the AI assistant using Gemini and `pgvector`.
- **Finding:** Web crawling is complex (anti-bots, parsing errors). For an MVP, taking raw text or PDF documents, chunking them, and converting them to vectors is much more controlled and reliable.
- **Recommendation:** Start with Manual Text/Document Upload. Ensure `pgvector` indexing (`HNSW` or `IVFFlat`) is set up correctly in Prisma.

## Decisions Made
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Authentication | Custom JWT (NestJS) | Zero vendor lock-in, customizable RBAC, fits current stack. |
| Widget Architecture | Iframe Injection | Guarantees CSS isolation from the host website and allows leveraging Next.js React components directly. |
| RAG Input | Manual Upload | Lower complexity for MVP, ensures high relevance of context data. |

## Patterns to Follow
- **Iframe Message Passing:** Use `window.postMessage` to communicate between the host site and the Next.js iframe if needed (e.g., to pass a customer identifier).
- **Service Layer (NestJS):** Keep the Gemini LLM and `pgvector` embedding logic completely inside NestJS services securely.

## Anti-Patterns to Avoid
- **Leaking API Keys:** Do not put the Gemini API key anywhere near the Next.js frontend code. All requests must go through the NestJS backend.
- **Injecting React into host DOM:** Avoid serving a fat React bundle for direct DOM injection on client sites unless using proper Shadow DOM, as host CSS will break the widget layout.

## Dependencies Identified
| Package | Version | Purpose |
|---------|---------|---------|
| @nestjs/passport | ^11.0.0 | NestJS Auth wrapper |
| passport-jwt | ^4.0.0 | JWT validation strategy |
| @google/genai | latest | Google Gemini Official SDK |
| pgvector | database extension | PostgreSQL Vector Search |
| multer (types) | latest | For NestJS file upload handling (if PDFs) |

## Risks
- **Vector Search Performance:** Unoptimized vector searches can lock up the DB.
  - *Mitigation:* Limit chunk sizes and implement HNSW index on the vector column.
- **Cross-Origin Embeds (Iframe):** Browsers might block cookies in cross-origin iframes.
  - *Mitigation:* Pass session identifiers via URL parameters for the chat widget, avoiding reliance on 3rd-party cookies for anonymous widget users.

## Ready for Planning
- [x] Questions answered
- [x] Approach selected
- [x] Dependencies identified
