# Recommended Tech Stack (Draft)

This is a suggested starting stack — meant to be simple enough for a small
team to build and maintain, while being production-capable. See
`07-free-build-and-prototype.md` for the free-tier option for each piece
below, so the whole stack can run at zero cost until the product starts
generating subscription revenue.

## Frontend
- **Next.js (React)** — server-rendered pages for good SEO/performance on
  public clinic pages, plus easy routing for admin/staff panels.
- **Tailwind CSS** — fast styling, easy to keep the staff/admin UI simple
  and consistent, and to build responsive layouts efficiently.
- **i18next / next-intl** — for English + Hindi (and future languages).
- **Fully responsive, mobile-first** — staff/admin panels must work
  properly on phone, tablet, and desktop, since some clinics may not have
  a computer available. Design and test the staff/admin UI on phone
  screen sizes first, then confirm it holds up on larger screens, rather
  than the reverse.

## Backend
- **Node.js** — via Next.js API routes, or a separate Express/NestJS
  service if the team prefers separating frontend and backend deployments.
- **PostgreSQL** — relational data (clinics, doctors, tickets, payments)
  fits a relational model well; also handles multi-tenant data cleanly
  with a `clinic_id` column pattern.
- **Prisma** — ORM for schema management and type-safe queries.

## Auth
- **Staff/Admin login:** simple email+password or phone+OTP, scoped per
  clinic (shared staff login + one admin login per clinic).
- **Patient verification:** phone number + OTP only, no account/password.
- OTP delivery via SMS gateway (see Integrations).

## Payments
- **Razorpay** or **PayU** (support UPI + cards, widely used in India,
  good docs) — final choice depends on business/KYC requirements.
- Webhook-based payment status updates rather than polling.

## SMS / OTP
- **Twilio**, **MSG91**, or similar SMS gateway with good India coverage
  for OTP and booking confirmations.

## Hosting / Infra
- **Vercel** (for Next.js) or a simple VPS, depending on budget.
- **Managed Postgres** (e.g. Supabase, Neon, or a cloud provider's managed
  DB) to avoid the team managing database ops early on.

## Multi-Tenancy Approach
- Single codebase, single database, `clinic_id` scoping on all
  clinic-owned tables — simplest to build and maintain for a small team,
  and sufficient isolation for this use case.
- Each clinic can be served via a subdomain (e.g. `clinicname.platform.com`)
  or a path-based route (`platform.com/clinicname`) — subdomain is
  cleaner for branding, path-based is simpler to set up initially.

## Print Feature
- Generate a printable HTML view (print-optimized CSS) — works from the
  browser's native print dialog on desktop/tablet where a printer is
  connected.
- Also provide a phone-friendly fallback (e.g. a clean downloadable
  image/PDF of the day's list) for clinics where staff are working from a
  phone with no direct printer access.

## Notes for the Team
- Keep the staff/admin UI intentionally minimal — resist the urge to add
  dashboards/analytics beyond what's specified in the requirements doc.
  Simplicity for non-technical users is a core product requirement, not
  just a nice-to-have.
- Everything clinic-specific (doctors, hours, services, enabled features)
  must be data, not code — this is what makes the "customizable per
  clinic with minimal changes" goal achievable.