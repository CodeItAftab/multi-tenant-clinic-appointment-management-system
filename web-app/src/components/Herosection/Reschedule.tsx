"use client";
import React, { useState } from "react";
import ReschedulePage from "../Forms/RescheduleForm";
import { CalendarClock, RotateCcw, ArrowRight, X } from "lucide-react";

export default function Reschedule() {
    const [reschedule, setReschedule] = useState<boolean | null>(false);

    return (
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            {/* Card Container */}
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#e0f7fa]/60 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#b2ebf2]/40 blur-3xl" />

                <div className="relative z-10 grid grid-cols-1 items-center gap-10 p-8 text-center sm:gap-12 sm:p-12 lg:grid-cols-12 lg:gap-14 lg:p-14 lg:text-left">
                    <div className="absolute inset-0 rounded-3xl bg-white/90 lg:bg-linear-to-r lg:from-white/95 lg:via-white/80 lg:to-white/40" />

                    {/* Left: Content */}
                    <div className="relative lg:col-span-8">
                        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#b2ebf2] bg-[#e0f7fa] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#4bb1c8] lg:mx-0">
                            <RotateCcw className="h-3.5 w-3.5 text-[#4bb1c8]" />
                            Zero-Fee Rescheduling
                        </div>

                        <h1 className="mx-auto text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:mx-0 lg:text-5xl">
                            Reschedule in{" "}
                            <span className="bg-linear-to-r from-[#4bb1c8] to-[#1aa3bf] bg-clip-text text-transparent">
                                seconds
                            </span>
                        </h1>

                        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 sm:text-base lg:mx-0">
                            Change your slot instantly. No fees. No hassle.
                        </p>

                        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                            <button
                                type="button"
                                onClick={() => setReschedule(true)}
                                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#4bb1c8] px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#33b6d3] hover:scale-[1.03] active:scale-[0.98]"
                            >
                                <CalendarClock className="h-4 w-4 transition-transform group-hover:rotate-[-10deg]" />
                                Reschedule Now
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </button>
                            <span className="text-xs font-medium text-slate-500">
                                OTP verified • Updated token via SMS
                            </span>
                        </div>
                    </div>

                    {/* Right: Minimal visual accent */}
                    <div className="mx-auto flex items-center justify-center lg:col-span-4">
                        <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-linear-to-br from-[#e0f7fa] to-[#b2ebf2]/50 p-6 ring-1 ring-[#b2ebf2] sm:h-48 sm:w-48">
                            <div className="text-center">
                                <RotateCcw className="mx-auto h-10 w-10 text-[#4bb1c8] sm:h-12 sm:w-12" />
                                <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-600 sm:text-[11px]">Free</p>
                                <p className="text-[9px] font-semibold text-[#4bb1c8] sm:text-[10px]">Anytime</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== MODAL OVERLAY ===== */}
            {reschedule && (
                <div
                    className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-sm"
                    onClick={(e) => { if (e.target === e.currentTarget) setReschedule(false); }}
                >
                    <div className="flex min-h-full items-start justify-center px-4 py-8 sm:py-12">
                        <div className="relative w-full max-w-3xl">
                            {/* X Close button pinned to top-right corner */}
                            <button
                                onClick={() => setReschedule(false)}
                                aria-label="Close reschedule form"
                                className="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white border border-slate-200 shadow-lg text-neutral-500 hover:text-neutral-900 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8]"
                            >
                                <X className="h-6 w-6" strokeWidth={4} />
                            </button>
                            <ReschedulePage />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}