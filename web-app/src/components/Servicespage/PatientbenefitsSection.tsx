"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { includedItems } from "./data";

function PatientBenefitsSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                        Patient Benefits
                    </p>
                    <h2 className="mt-2 text-[24px] font-bold text-slate-900 sm:text-[30px]">
                        Every visit includes
                    </h2>
                    <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                        No matter which service you book, every patient gets the same standard of
                        transparent, respectful, and personalized care.
                    </p>

                    <ul className="mt-6 space-y-3">
                        {includedItems.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                                <span className="text-[14px] text-slate-700 sm:text-[15px]">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/50 p-7 shadow-sm sm:p-10">
                    <div className="mb-7">
                        <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-emerald-600">
                            Our Healthcare Promise
                        </p>
                        <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                            Better care, better experience
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-x-5 gap-y-8 text-center">
                        <div>
                            <p className="text-[28px] font-bold text-emerald-600 sm:text-[34px]">18+</p>
                            <p className="mt-1 text-[12px] font-semibold text-slate-700 sm:text-[13px]">
                                Service Categories
                            </p>
                        </div>

                        <div>
                            <p className="text-[28px] font-bold text-emerald-600 sm:text-[34px]">50K+</p>
                            <p className="mt-1 text-[12px] font-semibold text-slate-700 sm:text-[13px]">
                                Patients Served
                            </p>
                        </div>

                        <div>
                            <p className="text-[28px] font-bold text-emerald-600 sm:text-[34px]">4.8★</p>
                            <p className="mt-1 text-[12px] font-semibold text-slate-700 sm:text-[13px]">
                                Average Rating
                            </p>
                        </div>

                        <div>
                            <p className="text-[28px] font-bold text-emerald-600 sm:text-[34px]">24/7</p>
                            <p className="mt-1 text-[12px] font-semibold text-slate-700 sm:text-[13px]">
                                Emergency Support
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PatientBenefitsSection;