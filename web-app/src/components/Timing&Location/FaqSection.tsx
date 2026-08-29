"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { visitFaqs } from "./data";

function FaqSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <section className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
                <div className="text-center">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                        FAQs
                    </p>
                    <h2 className="mt-2 text-[24px] font-bold text-slate-900 sm:text-[30px]">
                        Visit-related questions
                    </h2>
                </div>

                <div className="mt-8 space-y-3">
                    {visitFaqs.map((faq, index) => (
                        <div
                            key={faq.q}
                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                            >
                                <span className="text-[14px] font-semibold text-slate-900 sm:text-[15px]">
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    size={18}
                                    className={`shrink-0 text-emerald-600 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openFaq === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="px-5 pb-4 text-[13px] leading-relaxed text-slate-600 sm:text-[14px]">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FaqSection;