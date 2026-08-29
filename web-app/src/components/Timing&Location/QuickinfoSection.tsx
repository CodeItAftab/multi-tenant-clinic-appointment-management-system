"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { quickFacts } from "./data";

function QuickInfoSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                    Good To Know
                </p>
                <h2 className="mt-2 text-[24px] font-bold text-slate-900 sm:text-[30px]">
                    Before you visit
                </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {quickFacts.map((fact) => (
                    <div
                        key={fact.label}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
                    >
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                        <div>
                            <p className="text-[13px] font-bold text-slate-900 sm:text-[14px]">{fact.label}</p>
                            <p className="mt-1 text-[12px] leading-relaxed text-slate-500 sm:text-[13px]">
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