# Subscription Model (Draft — Needs Business Decisions)

Clinics pay to use the platform. This doc lays out common approaches so the
business decision can be made deliberately; it is not a final pricing plan.

## Possible Billing Models
1. **Flat monthly/yearly subscription per clinic**
   - Simple, predictable revenue and predictable cost for the clinic.
   - Can have tiers (e.g. Basic vs Pro) based on number of doctors,
     whether queue management is included, support level, etc.
2. **Per-booking commission**
   - Platform takes a small percentage or flat fee per completed booking
     (deducted from the upfront payment).
   - Scales with clinic usage — low-volume clinics pay less, which may
     help early adoption, but revenue is less predictable.
3. **Hybrid**
   - Small flat monthly fee + small per-booking fee. Balances predictable
     baseline revenue with usage-based scaling.

## Things to Decide
- Which model (flat / commission / hybrid)?
- If tiered, what differs between tiers? (e.g. number of doctors, queue
  management included, priority support, custom branding)
- Free trial period for new clinics?
- What happens if a clinic doesn't pay / subscription lapses — booking
  disabled, read-only access, grace period?

## Data Model Tie-In
See `02-data-model.md` — `Subscription` and `Subscription Plan` entities
already sketch out the fields needed to support any of the above models
(plan, billing cycle, status), so the engineering side can proceed while
the exact pricing is finalized.