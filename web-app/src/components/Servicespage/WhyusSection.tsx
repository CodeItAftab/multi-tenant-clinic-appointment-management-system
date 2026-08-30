"use client";
import { whyUs } from "./data";

function WhyUsSection() {
    return (
        <section className="border-y border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600">
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
                                className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                            >
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
                                    <Icon size={24} strokeWidth={1.8} className="text-emerald-600" />
                                </div>

                                <h3 className="mt-5 text-[16px] font-bold text-slate-900 sm:text-[18px]">
                                    {item.title}
                                </h3>

                                <p className="mt-2.5 text-[13px] leading-relaxed text-slate-600 sm:text-[14px]">
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