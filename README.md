# Clinic Appointment Booking Platform

A multi-tenant, customizable appointment booking website for local doctor
clinics that currently have no online booking system — built for clinics
where staff have low digital literacy and patients often travel long
distances just to book in person.

## Why This Project Exists
Many clinics in the target area don't have a website or any online booking
option. Patients living 3-4+ km or farther from a clinic often have to
travel there early in the morning just to secure an appointment. This
platform lets patients book from home while keeping the experience simple
enough for clinic staff who are mostly from rural backgrounds and not used
to digital tools.

## Who This Is Built For
- **Patients** — no login required, phone + OTP based, minimal-friction
  form, Hindi + English support.
- **Clinic staff** — one shared login per clinic, UI as close to a paper
  register as possible, ability to print the day's list.
- **Clinic admin** — one admin login per clinic with full visibility and
  control over that clinic's doctors, services, hours, and settings.
- **Us (platform owner)** — clinics pay a subscription to use the
  platform; this is a real product, not just a tool.

## Core Product Principles
1. No login for patients — phone number + OTP only.
2. One shared staff login + one admin login per clinic (no individual
   staff accounts).
3. Config over code — every clinic's doctors, services, hours, and
   enabled features are data-driven so new clinics can be onboarded
   without custom development.
4. Optional feature modules — e.g. queue management can be toggled per
   clinic rather than forced on everyone.
5. Offline fallback — staff can always print the day's appointment list.
6. Multilingual — English + Hindi at launch, built on a proper i18n system.

## Feature Summary
- Public clinic pages: Home, About/Doctors, Services, Timings & Location,
  Contact — all driven by the same clinic-configured data used in booking.
- Patient booking flow: form → slot selection → **mandatory upfront
  payment** → ticket number generated (shown + sent via SMS).
- Self-service reschedule: ticket number + phone + OTP, no staff needed.
- No-show handling: staff marks no-show → patient automatically rolled
  into next day's queue with a new ticket, no re-payment required.
- Staff panel: simple day list, "Visited/Consulted" tick, "No-show"
  action, print day's list.
- Admin panel: manage doctors/services/hours, toggle optional features,
  view stats, view subscription/billing status.
- Payments: always upfront at booking (no pay-at-clinic option),
  UPI-first, with slot hold/release on payment failure.
- Language: English + Hindi, extensible i18n system.
- Subscription: clinics pay to use the platform (model TBD — see
  `docs/05-subscription-model.md`).

## Try It Now — Free Working Prototype
Open `docs/prototype/clinic-booking-prototype.html` in any browser — no
install, no hosting, no cost. It demonstrates the full booking, staff, and
admin flows end to end. See `docs/07-free-build-and-prototype.md` for
details and the free-tier path for everything else (hosting, database,
OTP, payments).

## Documentation
All detailed docs live in the `docs/` folder:

| File | Contents |
|---|---|
| `docs/00-overview.md` | Project overview and product principles |
| `docs/01-features-and-requirements.md` | Full functional requirements |
| `docs/02-data-model.md` | Entities and relationships (draft schema) |
| `docs/03-tech-stack.md` | Recommended technology choices |
| `docs/04-user-flows.md` | Step-by-step flows per user type |
| `docs/05-subscription-model.md` | How clinics are billed |
| `docs/06-open-decisions.md` | Unresolved questions the team needs to close out |
| `docs/07-free-build-and-prototype.md` | How to build/run everything for free until the product sells |

## Where to Start
1. Read this README, then `docs/00-overview.md` for the "why."
2. Read `docs/01-features-and-requirements.md` for the full feature list.
3. Read `docs/02-data-model.md` and `docs/03-tech-stack.md` before writing
   any code.
4. Check `docs/06-open-decisions.md` — some things need to be decided
   before certain features can be finalized; flag these in discussion
   rather than assuming an answer.