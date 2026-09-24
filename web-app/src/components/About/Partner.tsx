import React from "react";
import { Building2, ArrowRight, Mail, MapPin } from "lucide-react";

function Partner() {
  return (
    <div>
      {/* Partner CTA */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-10 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[#0a1628] px-6 py-12 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#4bb1c8]/20 blur-3xl" />

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold text-white sm:text-[12px]">
                <Building2 size={13} />
                For Healthcare Providers
              </span>

              <h2 className="mt-5 max-w-lg text-[24px] font-bold text-white sm:text-[32px]">
                Are you a clinic owner or doctor?
              </h2>

              <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-gray-300 sm:text-[15px]">
                Join our network of transparent healthcare providers.
                Digitize your appointment scheduling, reach more
                patients, and reduce waiting room crowding with our
                dedicated clinic dashboard.
              </p>
            </div>

            <button className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#4bb1c8] px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#33b6d3]">
              Partner With Us
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-10 lg:px-10">
          <h2 className="text-[20px] font-bold text-[#282828] sm:text-[24px]">
            Get in Touch
          </h2>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0f7fa]">
                <Mail size={15} className="text-[#4bb1c8]" />
              </div>
              <span className="text-[13px] text-gray-600 sm:text-[14px]">
                support@hms.in
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0f7fa]">
                <MapPin size={15} className="text-[#4bb1c8]" />
              </div>
              <span className="text-[13px] text-gray-600 sm:text-[14px]">
                Bihar, India
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partner;