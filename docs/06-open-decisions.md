# Open Decisions

These are things the team still needs to decide before/during build. Update
this doc as decisions are made — move resolved items into the relevant
requirements doc.

**Resolved:**
- ~~Slot-based vs. token-only booking~~ → Decided: session-based (e.g.
  9 AM–2 PM, 3 PM–5 PM), patients get a token number within a session,
  not a fixed time.
- ~~Device support~~ → Decided: must work well on phone, tablet, and
  desktop — not phone-only or desktop-only.

**Still open:**
1. **Refund/cancellation policy** — since payment is always upfront, what
   happens if a patient cancels, or a doctor is unavailable? Full refund
   window, no-refund cutoff, etc.
2. **No-show grace period** — how long after a session starts (or after a
   patient's estimated turn) is a patient considered a no-show?
3. **Payment gateway choice** — Razorpay vs PayU vs other; depends on
   business KYC and fee structure.
4. **Subdomain vs path-based routing per clinic.**
5. **Subscription pricing model** — flat / commission / hybrid (see
   `05-subscription-model.md`), and specific plan tiers/pricing.
6. **Additional languages beyond Hindi** — worth confirming which
   region(s)/language(s) are the actual target audience beyond
   English/Hindi, since the i18n system will support this cheaply if
   planned for now.
7. **Print list generation** — auto-generated each morning vs. on-demand
   staff action; also whether the phone-friendly (image/PDF) fallback is
   needed at launch or can come later.
8. **Session capacity** — how is each session's token capacity set? Fixed
   number entered by admin, or calculated from session length ÷ average
   consult time?
9. **Walk-in safety net** — should a small buffer of tokens per session be
   reserved for staff-entered walk-ins (in case staff don't enter a
   walk-in into the system right away), or is relying on staff to always
   enter walk-ins into the system sufficient?
10. **Follow-up ticket numbering** — exact format for linking a follow-up
    visit's ticket number back to the original (e.g. `SFC-045-02`).