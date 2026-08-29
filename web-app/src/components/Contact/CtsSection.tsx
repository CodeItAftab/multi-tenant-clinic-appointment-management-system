"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

function CtsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-10">
      <div className="relative overflow-hidden rounded-3xl bg-[#0a1628] px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-1/3 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-300">
            Prefer to Talk?
          </p>

          <h2 className="mt-3 text-[24px] font-bold text-white sm:text-[32px]">
            Some things are easier over the phone
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-[13px] leading-relaxed text-slate-300 sm:text-[15px]">
            Call our reception team directly, or check our timings and location
            before you plan your visit.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3 text-[14px] font-bold text-white shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:bg-emerald-500 hover:shadow-emerald-500/20"
            >
              <Phone size={16} />
              Call Reception
            </a>

            <Link
              href="/visit-us"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-[14px] font-bold text-white transition-all duration-300 hover:bg-white/10"
            >
              <MapPin size={16} />
              Timings & Location
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtsSection;