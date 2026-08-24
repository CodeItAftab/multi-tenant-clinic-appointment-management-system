# Features & Requirements

## 1. Patient-Facing Website (per clinic)

### 1.1 Public Pages
- **Home** — clinic name/branding, quick "Book Appointment" call-to-action,
  optionally today's doctor availability at a glance.
- **About** — clinic info, doctor profiles (name, qualification,
  specialization, photo).
- **Services** — list of services/specialties offered.
- **Timings & Location** — working hours, address, map, phone number.
- **Contact** — phone number, simple contact form.

All of the above must be driven by the same clinic-configured data used in
the booking flow (doctors, hours, services) — not separately maintained
content.

### 1.2 Booking Flow (No Login Required)
1. Patient clicks "Book Appointment."
2. Fills a simple form: name, phone number, **age**, doctor/department,
   **problem/reason for visit**, preferred date.
3. Picks a **session** for that date (e.g. a doctor's 9 AM–2 PM or
   3 PM–5 PM session) — patients do **not** pick a specific time. They
   receive a **token number within that session** instead of a fixed
   appointment time.
4. **Pays online, upfront** (mandatory — no pay-at-clinic option).
5. On successful payment, a **ticket number** is generated and shown /
   sent via SMS. The ticket number + phone number are the patient's
   ongoing reference for everything afterward: reschedule, no-show
   rollover, and **follow-up bookings** (see 1.3a).

### 1.3 Self-Service Reschedule
- Patient enters ticket number + phone number.
- OTP sent to phone for verification (no manual staff verification needed).
- On success, patient can pick a new date/session (no fixed time, per 1.2).

### 1.3a Follow-Up Booking
- A returning patient enters their existing ticket number + phone number
  (same lookup as reschedule) to start a **new** appointment rather than
  editing the old one.
- Name, age, and phone are pulled from their existing record so they
  don't have to re-enter them; they just confirm/update details, pick a
  problem/reason and a new date/session.
- The new appointment's ticket number is linked back to the original
  (e.g. `SFC-045` → `SFC-045-02`), so staff can see it's a continuation of
  the same patient while still having a distinct reference per visit.
- Staff should be able to look up a patient's full visit history via
  their ticket number.

### 1.4 No-Show Handling
- If a patient does not show up, they are not required to rebook or pay
  again.
- Staff marks them as a no-show (single tap/click action).
- System automatically rolls them into the **next day's queue** and
  generates a new (linked) ticket number for that day.

### 1.5 Walk-In / Offline Bookings
- Clinics also take walk-in (in-person) patients, so the system must
  prevent walk-ins and online bookings from colliding — both must draw
  from the **same session capacity**, not separate lists.
- Staff can add a walk-in directly through the staff panel using the same
  session/token logic as online booking (no payment required for a
  walk-in entered by staff).
- Optional safety net: reserve a small buffer of tokens per session that
  are only usable by staff for walk-ins, in case staff don't enter a
  walk-in into the system in time (see `06-open-decisions.md`).

## 2. Clinic Staff Panel (Shared Login per Clinic)
- Must work well on **phone, tablet, and desktop** — many clinics may not
  have a computer, so staff could be managing appointments entirely from
  a phone. Layout and touch targets should be designed for that first,
  not adapted afterward.
- View today's / upcoming appointments in a simple, large-format list —
  should feel like a paper register, not a "dashboard."
- Mark each appointment: **Visited / Consulted** (simple tick/checkbox).
- Mark **No-show** (auto-triggers next-day queue rollover, see 1.4).
- **Print Day's List** — generates a clean printable table: session,
  token number, ticket number, patient name, phone, doctor. Should work
  from a connected printer where available; on phone-only setups, also
  offer a shareable/viewable version (e.g. downloadable image or PDF)
  since printing directly from a phone isn't always practical.
- Optional: **Queue/Token display** — toggle-able per clinic. Clinics that
  don't want this can leave it off.

## 3. Clinic Admin Panel (One Admin Login per Clinic)
- Also must work well on phone, tablet, and desktop (see note in section 2)
  — a clinic admin may be setting the clinic up entirely from a phone.
- Everything staff can do, plus:
  - Manage doctors (add/remove, working hours, holidays)
  - Manage services offered
  - Manage clinic info/content shown on public pages
  - Toggle optional feature modules (queue management, etc.)
  - View basic stats (bookings per day/week, revenue)
  - View subscription/billing status (see `05-subscription-model.md`)

## 4. Payments
- Payment is collected **upfront, at booking time**, always — no
  pay-at-clinic option.
- Preferred method: **UPI**, given high adoption even among users with low
  general digital literacy, alongside standard card support.
- A token (session capacity) should be held temporarily during payment
  and released if payment fails/times out, so it doesn't get permanently
  blocked.
- Refund/cancellation policy needs to be defined (see
  `06-open-decisions.md`).

## 5. Language Support
- English and Hindi at launch.
- Built using a proper i18n framework (not hardcoded strings) so more
  languages can be added later with minimal engineering work.

## 6. Multi-Tenancy / Customization
- Each clinic should be configurable via data/config rather than custom
  code: doctors, services, hours, branding, and which optional features
  (queue management, etc.) are enabled.
- Goal: onboarding a new clinic should be a config/data-entry task, not a
  development task.