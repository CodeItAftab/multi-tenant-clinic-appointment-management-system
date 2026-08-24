# Clinic Appointment Booking Platform — Project Overview

## Problem Statement
Many local doctor clinics have no website or online booking system. Patients
living 3-4+ km or farther from a clinic often have to travel there early in
the morning just to book an appointment in person. This is especially hard
on patients in rural/semi-rural areas.

## Goal
Build a **multi-tenant appointment booking platform** — one system that can
power a customizable booking website for many clinics, each with minimal
setup (config, not custom code per clinic).

## Who This Is For
- **Patients** — many are not comfortable with technology. Booking must be
  extremely simple, require no account/login, and support Hindi as well as
  English.
- **Clinic staff** — mostly from rural areas, low familiarity with digital
  tools. The admin experience must be as close to "using a paper register"
  as possible: big, clear, minimal-click actions.
- **Clinic admin** — one admin account per clinic with full visibility into
  that clinic's doctors, schedules, bookings, and payments.
- **Us (platform owner)** — this is also a business: clinics pay a
  subscription to use the platform.

## Core Product Principles
1. **No login for patients.** Booking is phone number + OTP based, no
   account creation.
2. **One shared staff login + one admin login per clinic.** No per-staff
   individual accounts (keeps it simple, avoids user-management overhead).
3. **Config over code.** Every clinic's doctors, services, hours, and
   enabled features should be data-driven — spinning up a new clinic should
   not require writing new code.
4. **Optional feature modules.** Some things (queue management, payments —
   see decisions below) can be toggled per clinic rather than being forced
   on everyone.
5. **Offline fallback.** Staff can always print the day's appointment list.
   Digital tools should support their existing paper workflow, not replace
   it outright.
6. **Multilingual.** English + Hindi at launch, built on a proper i18n
   system so more languages can be added later without rework.

## Documents in This Folder
- `01-features-and-requirements.md` — full functional requirement list
- `02-data-model.md` — entities and relationships
- `03-tech-stack.md` — recommended technology choices
- `04-user-flows.md` — step-by-step flows for each user type
- `05-subscription-model.md` — how clinics are billed to use the platform
- `06-open-decisions.md` — things still to be decided/discussed
- `07-free-build-and-prototype` — a free prototype build for demo