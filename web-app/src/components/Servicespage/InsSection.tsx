"use client";

import React from "react";
import { BadgeCheck } from "lucide-react";
import { insurancePartners } from "./data";

function InsuranceSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10">
            <div className="text-center">
                <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                    <BadgeCheck size={16} />
                    Cashless Insurance
                </p>
                <h2 className="mt-2 text-[22px] font-bold text-slate-900 sm:text-[28px]">
                    We accept all major insurance providers
                </h2>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                {insurancePartners.map((name) => (
                    <span
                        key={name}
                        className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-[13px] font-semibold text-slate-600 shadow-sm"
                    >
                        {name}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default InsuranceSection;