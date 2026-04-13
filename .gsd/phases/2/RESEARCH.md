---
phase: 2
level: 3
researched_at: 2026-04-13
---

# Phase 2 Research: User/Customer Core & AI Widget MVP (Level 3 Deep Dive)

## Questions Investigated
1. **Authentication:** NestJS + Passport + JWT implementation patterns?
2. **Customer 360 Scope:** Extensibility of MVP data?
3. **AI Widget Architecture:** Best practice for SaaS independent JS library injection?
4. **RAG implementation:** How to integrate `pgvector` with Prisma (which lacks native vector support) and Gemini via `@google/genai` inside NestJS?

## Findings

### Topic 1: Authentication Approach
- **Recommendation:** Implement standard JWT Auth with `@nestjs/passport`. It gives complete control over the token lifecycle and fits the current stack without any vendor limitations. Use a simple `/auth/login` endpoint that issues the token. It's lightweight and secure.

### Topic 2: Customer 360 Scope
- **Recommendation:** Start with basic fields (`name`, `email`, `phone`) and a `metadata JsonB` column. The `JsonB` column is crucial for AutoFlow as it allows us to store arbitrary dimensions (tags, origin, custom widget state) per customer before the heavy Tracking feature in Phase 3.

### Topic 3: AI Web Widget Architecture
- **Recommendation:** **Iframe Injection**. To fulfill the requirement of "thư viện JS độc lập chèn vào web bất kỳ", we cannot risk relying on injecting Tailwind classes directly into the host's DOM (they will be overridden or break the host site). 
  - Solution: An `embed.js` (vanilla JS) that creates an `<iframe>` targeting `https://[our-domain]/widget/chat`. This isolates our React/Next component from the host DOM entirely.
  - Interaction: Use `window.postMessage` if the host site needs to send user identity to our iframe.

### Topic 4: RAG Implementation Strategy (Prisma + pgvector + Gemini)
- **Context:** Prisma v6/v7 does not have native distance operators for `pgvector`.
- **Finding:** We must use `Unsupported` types in the Prisma schema and Raw SQL strings.
- **Implementation Path:**
  1. **Schema:** Define embedding field as `Unsupported("vector(768)")` (Gemini's `text-embedding-004` output dimension is 768).
  2. **Migration:** Run `prisma migrate dev --create-only` and add `CREATE EXTENSION IF NOT EXISTS vector;` manually.
  3. **Embedding Generation:** Use `@google/genai` SDK `client.models.embedContent({ model: 'text-embedding-004', contents: text })` inside a NestJS service.
  4. **Vector Search:** Use Prisma's `$queryRaw` to do similarity search:
     ```typescript
     await prisma.$queryRaw`
       SELECT id, content, 1 - (embedding <=> ${vector}::vector) AS similarity
       FROM "Document"
       ORDER BY similarity DESC
       LIMIT 5;
     `;
     ```

## Decisions Made
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Authentication | Custom JWT (NestJS) | As confirmed by user, gives full internal control. |
| Widget Architecture | JS Library -> Iframe | Safest SaaS embedding method. Isolates React/Tailwind styling from external host pages. |
| RAG Storage | pgvector in Prisma | Keeps infrastructure simple (no external pinecone). Raw SQL queries needed but manageable. |
| GenAI SDK | `@google/genai` | Official Google wrapper, API key `AIzaSy...` added to backend environment. |

## Patterns to Follow
- **Raw SQL Encapsulation:** All Prisma `$queryRaw` logic for pgvector MUST be encapsulated in a dedicated NestJS Service (e.g. `VectorService` or `KnowledgeBaseService`). Controllers should never write Raw SQL.
- **Iframe CSS:** Ensure the Next.js widget path doesn't have the standard dashboard layout, but a transparent/floating layout.

## Anti-Patterns to Avoid
- **Generating Embeddings on Frontend:** Do not expose the Gemini API key. All RAG logic happens on NestJS.
- **Shadow DOM for React:** Avoid using complex Shadow DOM injectors for the entire Next.js app in the widget. Iframe is drastically simpler and more reliable.

## Dependencies Identified
| Package | Version | Purpose |
|---------|---------|---------|
| @nestjs/passport | ^11.0.0 | NestJS Auth wrapper |
| passport-jwt | ^4.0.0 | JWT validation strategy |
| @google/genai | latest | Google Gemini Official SDK |
| pgvector | database extension | PostgreSQL Vector Search |

## Risks
- **Dimension Mismatch:** Gemini text-embedding-004 uses 768 dimensions. If `vector(1536)` is set in Prisma, the database will throw errors.
  - *Mitigation:* Ensure Prisma column definition strictly matches Gemini embedding output length (`vector(768)`).

## Ready for Planning
- [x] Questions answered
- [x] Approach selected
- [x] Dependencies identified
