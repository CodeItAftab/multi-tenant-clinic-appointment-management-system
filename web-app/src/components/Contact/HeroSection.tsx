"use client";

import React from "react";
import { Siren, PhoneCall } from "lucide-react";

function HeroSection() {
    return (
        <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-slate-50">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-10">

                <h1 className="mx-auto mt-5 max-w-3xl text-[30px] font-bold leading-tight tracking-tight text-slate-900 sm:text-[46px] lg:text-[54px]">
                    We&apos;re here to <span className="text-emerald-600">help</span>
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-[16px]">
                    Questions about an appointment, a bill, or just want to talk to someone?
                    Reach the right department directly, or send us a message below.
                </p>

                {/* Emergency notice — important for a hospital site: steer urgent
            cases to a phone call instead of the contact form. */}
                <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-3.5 text-left shadow-sm">
                    <Siren size={20} className="shrink-0 text-red-600" />
                    <p className="flex-1 text-[12.5px] leading-relaxed text-red-800 sm:text-[13px]">
                        <span className="font-bold">Medical emergency?</span> Don&apos;t use this
                        form — call our 24/7 emergency line right away.
                    </p>
                    <a
                        href="tel:+919000000000"
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-red-600 px-4 py-2 text-[12px] font-bold text-white transition-colors hover:bg-red-500"
                    >
                        <PhoneCall size={13} />
                        Call Now
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;