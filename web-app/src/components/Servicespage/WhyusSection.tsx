"use client";

import { whyUs } from "../../utils/servicesData";

function WhyUsSection() {
    return (
        <section className="border-y border-slate-200 bg-slate-50 mt-15">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-10 lg:px-10">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4bb1c8]">
                        Why Choose Us
                    </p>
                    <h2 className="mt-2 text-[24px] font-bold text-slate-900 sm:text-[30px]">
                        Care you can trust
                    </h2>
                    <p className="mt-3 text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
                        Quality, safety, and transparency built into every service we offer.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                    {whyUs.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm hover:border-[#4bb1c8] hover:shadow-lg hover:shadow-[#4bb1c8]/20 sm:p-8"
                                style={{
                                    transition:
                                        "box-shadow 300ms ease-out, border-color 300ms ease-out",
                                }}
                            >
                                {/* Soft glow sweep on hover */}
                                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-b from-[#e0f7fa]/0 via-[#e0f7fa]/0 to-[#e0f7fa]/40 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

                                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e0f7fa] ring-1 ring-[#b2ebf2] transition-all duration-300 ease-out group-hover:bg-[#4bb1c8] group-hover:ring-[#4bb1c8] group-hover:shadow-md group-hover:shadow-[#4bb1c8]/20">
                                    <Icon size={24} strokeWidth={1.8} className="text-[#4bb1c8] transition-colors duration-300 ease-out group-hover:text-white" />
                                </div>

                                <h3 className="relative mt-5 text-[16px] font-bold text-slate-900 transition-colors duration-300 ease-out group-hover:text-[#0f8fa8] sm:text-[18px]">
                                    {item.title}
                                </h3>

                                <p className="relative mt-2.5 text-[13px] leading-relaxed text-slate-600 sm:text-[14px]">
                                    {item.desc}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default WhyUsSection;