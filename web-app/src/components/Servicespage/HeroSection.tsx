"use client";

import React from "react";
import { Search } from "lucide-react";

type HeroSectionProps = {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
};

function HeroSection({ searchTerm, setSearchTerm }: HeroSectionProps) {
    return (
        <section className="border-b border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-slate-50">
            <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-10">

                <h1 className="mx-auto mt-5 max-w-4xl text-[30px] font-bold leading-tight tracking-tight text-slate-900 sm:text-[46px] lg:text-[54px]">
                    Complete care, <span className="text-emerald-600">under one roof</span>
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-[16px]">
                    From routine check-ups to specialized treatment, explore our full range of
                    medical services delivered by verified, experienced specialists.
                </p>

                <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3 text-[12px] font-semibold text-slate-600">
                    <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                        18+ Services
                    </span>
                    <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                        Verified Specialists
                    </span>
                    <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                        Patient-First Care
                    </span>
                </div>

                <div className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                    <Search size={18} className="ml-2 shrink-0 text-slate-400" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for a service (e.g. Cardiology, Dental...)"
                        className="w-full bg-transparent px-1 py-2 text-[14px] text-slate-700 outline-none placeholder:text-slate-400"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;