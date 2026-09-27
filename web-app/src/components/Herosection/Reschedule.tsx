"use client";
import React, { useState, useEffect } from "react";
import ReschedulePage from "../Forms/RescheduleForm";
import { CalendarClock, RotateCcw, ArrowRight, X, Sparkles } from "lucide-react";

export default function Reschedule() {
    const [reschedule, setReschedule] = useState<boolean | null>(false);

    useEffect(() => {
        if (!reschedule) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setReschedule(false);
        };

        document.addEventListener("keydown", handleKeyDown);
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = originalOverflow;
        };
    }, [reschedule]);

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
                        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#b2ebf2] bg-[#e0f7fa] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#0f8fa8] lg:mx-0">
                            <RotateCcw className="h-3.5 w-3.5 text-[#0f8fa8]" />
                            Zero-Penalty Rescheduling
                        </div>

                        <h1 className="mx-auto text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:mx-0 lg:text-5xl">
                            Reschedule in{" "}
                            <span className="bg-linear-to-r from-[#0f8fa8] via-[#33b6d3] to-[#4bb1c8] bg-clip-text text-transparent">
                                seconds
                            </span>
                        </h1>

                        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 sm:text-base lg:mx-0">
                            Change your slot instantly with zero extra charge. Instant digital token pass delivered.
                        </p>

                        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                            <button
                                type="button"
                                onClick={() => setReschedule(true)}
                                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-linear-to-r from-[#0f8fa8] via-[#33b6d3] to-[#4bb1c8] hover:from-[#0d7d93] hover:to-[#389cb3] px-8 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#4bb1c8]/30 hover:shadow-xl hover:shadow-[#4bb1c8]/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer"
                            >
                                <CalendarClock className="h-4 w-4 transition-transform group-hover:rotate-[-10deg]" />
                                Reschedule Now
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </button>
                            <span className="text-xs font-semibold text-slate-500">
                                OTP verified • Instant updated token pass
                            </span>
                        </div>
                    </div>

                    {/* Right: Minimal visual accent */}
                    <div className="mx-auto flex items-center justify-center lg:col-span-4">
                        <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-linear-to-br from-[#e0f7fa] to-[#b2ebf2]/50 p-6 ring-1 ring-[#b2ebf2] sm:h-48 sm:w-48 shadow-inner">
                            <div className="text-center">
                                <RotateCcw className="mx-auto h-10 w-10 text-[#0f8fa8] sm:h-12 sm:w-12 animate-[spin_12s_linear_infinite]" />
                                <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-slate-700 sm:text-[11px]">100% Free</p>
                                <p className="text-[9px] font-bold text-[#0f8fa8] sm:text-[10px]">Instant Pass</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== MODAL OVERLAY ===== */}
            {reschedule && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-2 min-[400px]:p-3 sm:p-5 md:p-6 backdrop-blur-md animate-[fadeIn_0.2s_ease-out] overflow-y-auto"
                    onClick={() => setReschedule(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Reschedule Appointment"
                >
                    <div
                        className="relative w-full max-w-3xl lg:max-w-4xl max-h-[94dvh] sm:max-h-[90vh] flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-[0_30px_70px_-15px_rgba(15,143,168,0.3),0_15px_35px_rgba(0,0,0,0.15)] border border-slate-100 animate-[popIn_0.25s_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                        data-lenis-prevent
                    >
                        {/* Top Gradient Aesthetic Accent Line */}
                        <div className="h-1.5 w-full bg-linear-to-r from-[#0f8fa8] via-[#33b6d3] to-[#4bb1c8] shrink-0" />

                        {/* Sticky Header with Accessible Close Button */}
                        <div className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-100 bg-white/95 px-4 py-3 sm:px-6 sm:py-3.5 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-linear-to-br from-[#e0f7fa] to-[#b2ebf2] text-[#0f8fa8] shadow-xs">
                                    <RotateCcw size={19} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                                            Reschedule Appointment
                                        </h3>
                                        <span className="hidden min-[480px]:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#0f8fa8] bg-[#e0f7fa] px-2 py-0.5 rounded-full">
                                            <Sparkles size={10} /> Zero Penalty
                                        </span>
                                    </div>
                                    <p className="text-[11px] sm:text-xs font-medium text-slate-500">
                                        Hospital Management System (HMS) • Update your consultation slot instantly
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setReschedule(false)}
                                aria-label="Close reschedule modal"
                                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8] active:scale-95 shrink-0 cursor-pointer"
                            >
                                <X size={18} strokeWidth={2.5} />
                            </button>
                        </div>

                        {/* Scrollable Form Body with momentum scrolling & Lenis isolation */}
                        <div
                            className="flex-1 overflow-y-auto p-3 sm:p-5 overscroll-contain"
                            data-lenis-prevent
                            style={{ WebkitOverflowScrolling: "touch" }}
                        >
                            <ReschedulePage isModal={true} onClose={() => setReschedule(false)} />
                        </div>
                    </div>

                    <style jsx global>{`
                        @keyframes fadeIn {
                          from {
                            opacity: 0;
                          }
                          to {
                            opacity: 1;
                          }
                        }
                        @keyframes popIn {
                          from {
                            opacity: 0;
                            transform: scale(0.97) translateY(8px);
                          }
                          to {
                            opacity: 1;
                            transform: scale(1) translateY(0);
                          }
                        }
                    `}</style>
                </div>
            )}
        </section>
    );
}