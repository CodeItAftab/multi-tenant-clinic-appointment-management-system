"use client";

import { CheckCircle2 } from "lucide-react";
import { quickFacts } from "../../utils/timing&locationData";

function QuickInfoSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#4bb1c8]">
          Good To Know
        </p>

        <h2 className="mt-1.5 text-[23px] font-bold tracking-tight text-slate-900 sm:text-[28px]">
          Before you visit
        </h2>
      </div>

      {/* Quick information cards */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {quickFacts.map((fact) => (
          <div
            key={fact.label}
            className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b2ebf2] hover:shadow-md sm:p-4"
          >
            <CheckCircle2
              size={17}
              className="mt-0.5 shrink-0 text-[#4bb1c8]"
            />

            <div className="min-w-0">
              <p className="text-[13px] font-bold text-slate-900 sm:text-[14px]">
                {fact.label}
              </p>

              <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500 sm:text-[12px]">
                {fact.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuickInfoSection;