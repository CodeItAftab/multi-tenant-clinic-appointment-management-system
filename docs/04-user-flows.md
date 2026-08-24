# User Flows

## Flow 1: Patient Books an Appointment
1. Patient visits clinic's page → clicks "Book Appointment."
2. Fills form: name, phone, age, problem/reason, doctor, preferred date.
3. Picks a session for that date (e.g. 9 AM–2 PM or 3 PM–5 PM) — no fixed
   time.
4. Pays upfront online (UPI/card).
5. On success: ticket number + token number generated, shown on screen
   and sent via SMS.

## Flow 1a: Returning Patient Books a Follow-Up
1. Patient goes to "Follow-up Booking."
2. Enters existing ticket number + phone number (same lookup as
   reschedule).
3. Name, age, and phone are pre-filled from their existing record.
4. Patient updates problem/reason, picks a new date/session.
5. Pays upfront online. New ticket number generated, linked back to the
   original (e.g. `SFC-045-02`).

## Flow 2: Patient Reschedules
1. Patient goes to "Reschedule" page.
2. Enters ticket number + phone number.
3. OTP sent to phone → patient enters OTP.
4. On verification: patient picks a new available date/session.
5. Ticket updated with new date/session and token number.

## Flow 3: Patient No-Show → Next Day Rollover
1. Staff reviews today's list, marks a patient as "No-show."
2. System automatically creates a new ticket for the next day's session,
   linked back to the original ticket.
3. New ticket/token number generated; patient notified via SMS.
4. No additional payment required (already paid).

## Flow 3a: Staff Adds a Walk-In
1. Staff (or admin) opens "Add Walk-in" from the staff panel.
2. Picks doctor, date, and session — same session capacity as online
   booking, so it can't be double-booked with an online patient.
3. Enters patient name, phone, age, problem/reason.
4. Token generated; no online payment required (handled in person by the
   clinic, outside the app).

## Flow 4: Staff Manages the Day
1. Staff logs in with shared clinic staff login, on whatever device is
   available (phone, tablet, or desktop).
2. Sees today's appointment list (session, token/ticket number, patient,
   doctor).
3. Optionally prints the day's list, or views/downloads a phone-friendly
   version if no printer is available.
4. As patients arrive: taps "Visited/Consulted" to mark completion.
5. For patients who don't show: taps "No-show" (triggers Flow 3).

## Flow 5: Admin Sets Up / Manages the Clinic
1. Admin logs in with clinic admin account.
2. Adds/edits doctors, their working hours, and holidays.
3. Adds/edits services offered.
4. Toggles optional features (e.g. queue management) on/off.
5. Views bookings, basic stats, and subscription/billing status.

## Flow 6: Platform Onboards a New Clinic
1. Platform admin (us) creates a new clinic record with basic info.
2. Clinic admin account created; admin logs in and completes setup
   (doctors, services, hours, branding).
3. Clinic selects/confirms a subscription plan.
4. Clinic's public pages and booking flow go live — ideally without any
   custom development work.