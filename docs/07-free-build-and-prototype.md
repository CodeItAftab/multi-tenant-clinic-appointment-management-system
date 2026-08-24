# Building for Free (Until the Product Sells)

This doc covers how to build and run the platform with **zero ongoing
cost** during development and early pilots, and what changes once you
start onboarding paying clinics.

## Working Prototype
`prototype/clinic-booking-prototype.html` is a complete, working, free
demo of the core product — open it directly in any browser, no install,
no server, no hosting cost. It includes:

- Patient home page with clinic info, doctors, and services
- Booking flow (doctor → date → slot → patient details → confirm)
- Ticket number generation on confirmation
- Self-service reschedule via ticket number + phone + **demo OTP**
  (the OTP is shown on screen instead of sent by SMS, since real SMS
  costs money — see "OTP/SMS" below for the free-then-cheap path)
- Staff panel (demo password: `staff123`) — today's list, mark
  Visited/No-show, print list
- No-show → automatic next-day ticket rollover
- Admin panel (demo password: `admin123`) — manage doctors/services,
  basic stats
- English + Hindi language toggle
- Data is saved automatically (survives closing/reopening) using
  built-in browser storage — no database to set up

This is meant as a **proof of concept to show clinics and to test the
flows** — not the final production app. Passwords are hardcoded for
demo purposes only and are not real authentication.

## Free-Tier Path for Each Piece

| Piece | Free option during dev/pilot | When you'll need to pay |
|---|---|---|
| Hosting (website) | Vercel free tier, Netlify free tier, or GitHub Pages | Once traffic/usage grows past free-tier limits |
| Database | Supabase free tier or Neon free tier (Postgres) | Past free-tier storage/row limits |
| OTP / SMS | Firebase Phone Auth free quota; or demo-mode (show OTP on screen, as in the prototype) during early pilot | Once sending real SMS at volume — cost is small and can be folded into subscription pricing |
| Payments | Razorpay/PayU integration itself is free to set up (only a small per-transaction fee when a real payment is processed) — use their **test mode** during development, which costs nothing | Only when you go live and start accepting real payments (their fee, not a platform fee) |
| Domain | Use a free subdomain from your host (e.g. `yourapp.vercel.app`) initially | When you want a custom domain (`yourapp.com`) — a small yearly cost |

## Suggested Order of Work
1. Use the prototype to validate the flows with 1-2 real clinics —
   walk through booking, staff marking visited/no-show, and printing
   with actual clinic staff to see what confuses them.
2. Rebuild as a proper multi-tenant app (see `03-tech-stack.md`) on free
   hosting + free-tier database, keeping OTP in demo mode and payments in
   test mode.
3. Once ready for a real pilot clinic to go live, switch OTP to a real
   SMS provider (Firebase free quota is often enough for a single clinic's
   volume at first) and payments to live mode.
4. Once subscription billing starts (see `05-subscription-model.md`),
   ongoing costs (SMS, hosting past free tier) can be covered by
   subscription revenue rather than paid out of pocket up front.