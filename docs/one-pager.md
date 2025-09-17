# QueueUp — Realtime DJ Vote Rooms

**Problem**  
Parties and study sessions devolve into “who’s putting on the music”. People want a fair, lightweight way to queue music together.

**Audience**  
Small groups on mobile (house parties, study rooms, road trips).

**Solution**  
Host a room → friends join with a code → add YouTube tracks → vote to reorder → host can start/skip. Chat + presence. Mobile-first.

**Success Criteria (MVP)**  
- Create/join room, add tracks, vote reorder, host start/skip  
- Live chat & presence  
- Auth, RLS, basic rate limits  
- E2E test: two users flow  
- Deployed demo + seeded room

**Tech**  
Next.js (TS), Supabase (Auth/Postgres/Realtime), Prisma, Zod, Tailwind, Vitest, Playwright, Vercel.
