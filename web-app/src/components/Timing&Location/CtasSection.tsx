"use client";

import React from "react";
import { Phone, Navigation } from "lucide-react";
import { locationInfo } from "../../utils/timing&locationData";

function CtasSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-10">
      <div className="relative overflow-hidden rounded-3xl bg-[#0a1628] px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#4bb1c8]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-1/3 rounded-full bg-[#4bb1c8]/10 blur-3xl" />

        <div className="relative">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4bb1c8]">
            On Your Way?
          </p>

          <h2 className="mt-3 text-[24px] font-bold text-white sm:text-[32px]">
            We'll be here — day or night
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-[13px] leading-relaxed text-slate-300 sm:text-[15px]">
            Emergency care never closes. For everything else, check today's OPD
            window above before you head out.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={locationInfo.mapDirectionsUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#0f8fa8] via-[#33b6d3] to-[#4bb1c8] hover:from-[#0d7d93] hover:to-[#389cb3] px-7 py-3 text-[14px] font-extrabold text-white shadow-lg shadow-[#4bb1c8]/25 hover:shadow-xl hover:shadow-[#4bb1c8]/35 hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
            >
              <Navigation size={16} />
              Get Directions
            </a>

            <a
              href={locationInfo.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-7 py-3 text-[14px] font-bold text-white shadow-xs hover:border-white/40 hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtasSection;