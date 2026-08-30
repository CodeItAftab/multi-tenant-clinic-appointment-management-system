"use client";

import { ShieldCheck,} from "lucide-react";

function Healthcare() {
    return (
        <div className="w-full bg-white">
            <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-slate-50">
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
                <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-10">
                   

                    <h1 className="mx-auto mt-6 max-w-3xl text-[30px] font-bold leading-tight tracking-tight text-slate-900 sm:text-[46px] lg:text-[54px]">
                        Healthcare booking, <span className="text-emerald-600">built on transparency</span>.
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-[16px]">
                        Compassionate, modern healthcare built around you and your family. From
                        preventive care to specialized treatment, our dedicated team is here to
                        provide trusted expertise, personalized attention, and a better
                        healthcare experience at every stage.
                    </p>

                </div>
            </section>
        </div>
    );
}

export default Healthcare;