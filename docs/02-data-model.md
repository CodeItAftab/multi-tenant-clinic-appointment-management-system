# Data Model (Draft)

This is a starting point to refine into actual schema
(tables/collections). Field lists are indicative, not final.

## Clinic
- id
- name
- address, map location
- contact phone/email
- branding (logo, colors — optional)
- enabled_features (queue_management: bool, etc.)
- subscription_plan_id
- language(s) enabled

## Doctor
- id
- clinic_id (FK)
- name, qualification, specialization, photo
- holidays / leave dates
- sessions (see **Doctor Session** below — a doctor can have more than
  one session per day, e.g. 9 AM–2 PM and 3 PM–5 PM)

## Doctor Session
- id
- doctor_id (FK)
- days_of_week (which days this session runs)
- start_time, end_time
- capacity (max tokens/patients for this session — e.g. derived from
  session length ÷ average consult time, set per doctor)
- walk_in_reserved_capacity (optional — tokens held back from online
  booking for staff-entered walk-ins, see `06-open-decisions.md`)

## Service
- id
- clinic_id (FK)
- name, description
- price (if service-specific pricing is needed)

## Staff / Admin Accounts
- id
- clinic_id (FK)
- role (staff | admin)
- shared credentials per clinic for "staff", one dedicated login for
  "admin"

## Session Booking (capacity tracking)
- id
- doctor_session_id (FK)
- date
- tokens_booked (count, online + walk-in combined)
- Used to check whether a session is full before allowing a new booking,
  regardless of whether it comes from the patient website or a staff
  walk-in entry — this is what prevents online/offline collisions.

## Ticket / Booking
- id
- ticket_number (patient-facing reference; see note below on follow-up
  linking)
- clinic_id, doctor_id (FK)
- patient_name, patient_phone, patient_age, problem_reason
- doctor_session_id, date (no fixed time — patient is assigned a token
  number within the session instead)
- token_number (patient's position within that session's capacity)
- source (online | walk_in)
- status (booked | visited | no_show | rescheduled | cancelled)
- payment_id (FK, nullable for walk-ins entered by staff)
- rolled_over_from_ticket_id (nullable — set when created via no-show
  rollover)
- follow_up_of_ticket_number (nullable — set when this ticket is a
  follow-up visit tied to an earlier ticket)
- created_at, updated_at

## Payment
- id
- ticket_id (FK)
- amount
- status (pending | success | failed | refunded)
- payment_gateway_reference

## Subscription (Clinic ↔ Platform)
- id
- clinic_id (FK)
- plan_id
- status (active | past_due | cancelled)
- billing_cycle_start / next_billing_date

## Subscription Plan
- id
- name (e.g. Basic, Pro)
- price, billing_interval
- feature_limits (e.g. max doctors, queue management included y/n)

## Notes for the Team
- `Ticket` is the central entity — it represents a booking whether or not
  it has a fixed time slot (see open decision on slot vs. token-only
  booking in `06-open-decisions.md`).
- No-show rollover should create a **new** ticket linked back to the
  original (`rolled_over_from_ticket_id`) rather than mutating the old one,
  so history stays intact.
- Reschedule via OTP should update the existing ticket's slot/date rather
  than creating a new ticket.