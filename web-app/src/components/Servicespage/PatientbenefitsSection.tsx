"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { includedItems } from "../../utils/servicesData";

function PatientbenefitsSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-10">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#4bb1c8]">
                        Patient Benefits
                    </p>
                    <h2 className="mt-2 text-[21px] font-bold text-slate-900 sm:text-[27px]">
                        Every visit includes
                    </h2>
                    <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-slate-600 sm:text-[14px]">
                        No matter which service you book, every patient gets the same standard of
                        transparent, respectful, and personalized care.
                    </p>

                    <ul className="mt-5 space-y-2.5">
                        {includedItems.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <CheckCircle2
                                    size={16}
                                    className="mt-0.5 shrink-0 text-[#4bb1c8]"
                                />
                                <span className="text-[13px] text-slate-700 sm:text-[14px]">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="group relative overflow-hidden rounded-3xl border border-[#b2ebf2] bg-linear-to-br from-[#e0f7fa] via-white to-[#b2ebf2]/50 p-6 shadow-sm hover:border-[#4bb1c8] hover:shadow-lg hover:shadow-[#4bb1c8]/20 transition-all duration-300 ease-out sm:p-8">
                    <div className="mb-6">
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#4bb1c8]">
                            Our Healthcare Promise
                        </p>
                        <h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
                            Better care, better experience
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-center">
                        <div>
                            <p className="text-[24px] font-bold text-[#4bb1c8] sm:text-[30px]">
                                18+
                            </p>
                            <p className="mt-1 text-[11px] font-semibold text-slate-700 sm:text-[12px]">
                                Service Categories
                            </p>
                        </div>

                        <div>
                            <p className="text-[24px] font-bold text-[#4bb1c8] sm:text-[30px]">
                                50K+
                            </p>
                            <p className="mt-1 text-[11px] font-semibold text-slate-700 sm:text-[12px]">
                                Patients Served
                            </p>
                        </div>

                        <div>
                            <p className="text-[24px] font-bold text-[#4bb1c8] sm:text-[30px]">
                                4.8★
                            </p>
                            <p className="mt-1 text-[11px] font-semibold text-slate-700 sm:text-[12px]">
                                Average Rating
                            </p>
                        </div>

                        <div>
                            <p className="text-[24px] font-bold text-[#4bb1c8] sm:text-[30px]">
                                24/7
                            </p>
                            <p className="mt-1 text-[11px] font-semibold text-slate-700 sm:text-[12px]">
                                Emergency Support
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PatientbenefitsSection;