"use client";

import React from "react";

function HeroSection() {
    return (
        <section className="border-b border-[#cef1f5] bg-gradient-to-br from-[#e0f7fa] via-white to-slate-50">
            <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 sm:py-20 lg:px-10">
                <span className="inline-flex items-center rounded-full border border-[#b2ebf2] bg-white/80 px-4 py-1.5 text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#4bb1c8] shadow-sm backdrop-blur-sm">
                    Explore Our care
                </span>

                <h1 className="mx-auto mt-6 max-w-3xl text-[30px] font-bold leading-tight tracking-tight text-slate-900 sm:text-[46px] lg:text-[54px]">
                    Complete care,{" "}
                    <span className="text-[#4bb1c8]">under one roof</span>.
                </h1>

                <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-7 text-slate-600 sm:text-[16px]">
                    From routine check-ups to specialized treatment, explore our
                    full range of medical services delivered by verified,
                    experienced specialists.
                </p>

                <div className="mx-auto mt-5 flex flex-wrap items-center justify-center gap-2.5 text-[12px] font-semibold text-slate-600">
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
            </div>
        </section>
    );
}

export default HeroSection;