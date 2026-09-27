"use client";

import { Search, CalendarCheck, UserCheck, Stethoscope } from "lucide-react";
import Link from "next/link";

const steps = [
    {
        icon: Search,
        title: "Find a Doctor",
        desc: "Search by specialty, name, or condition to find the right doctor for you.",
    },
    {
        icon: CalendarCheck,
        title: "Choose a Slot",
        desc: "Pick a convenient date and time from the doctor's real-time availability.",
    },
    {
        icon: UserCheck,
        title: "Confirm Details",
        desc: "Add your details and confirm — no paperwork, no waiting in line.",
    },
    {
        icon: Stethoscope,
        title: "Visit & Consult",
        desc: "Show up at your slot and get seen by your doctor, right on time.",
    },
];

function BookingGuidance() {
    return (
        <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
            {/* Single Card Container */}
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:rounded-3xl">
                {/* Subtle cyan glow accents */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#e0f7fa]/60 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#b2ebf2]/40 blur-3xl" />

                <div className="relative z-10 p-5 sm:p-12 lg:p-14">
                    <div className="mx-auto max-w-2xl text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#b2ebf2] bg-[#e0f7fa] px-3 py-1 sm:px-4 sm:py-1.5">
                            <CalendarCheck className="h-3 w-3 text-[#4bb1c8] sm:h-3.5 sm:w-3.5" />
                            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0f8fa8] sm:text-[10px]">
                                How It Works
                            </p>
                        </div>

                        {/* Heading */}
                        <h2 className="mt-3 text-2xl font-black text-slate-900 sm:mt-4 sm:text-3xl lg:text-5xl">
                            Booking Made{" "}
                            <span className="bg-linear-to-r from-[#4bb1c8] to-[#1aa3bf] bg-clip-text text-transparent">
                                Simple
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mt-2 max-w-lg text-xs text-slate-600 sm:mt-3 sm:text-sm">
                            From finding a doctor to your visit — seamless care in four easy steps.
                        </p>
                    </div>

                    {/* Steps Grid */}
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
                        {steps.map(({ icon: Icon, title, desc }, index) => (
                            <div
                                key={title}
                                className="group relative flex flex-col items-center text-center"
                            >
                                {/* Icon Circle */}
                                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-[0_8px_24px_rgb(75,177,200,0.2)] ring-1 ring-[#e0f7fa] transition-transform duration-300 group-hover:-translate-y-1 sm:h-16 sm:w-16 sm:rounded-2xl">
                                    <Icon size={20} className="text-[#4bb1c8] sm:hidden" strokeWidth={2} />
                                    <Icon size={26} className="hidden text-[#4bb1c8] sm:block" strokeWidth={2} />

                                    {/* Step Number */}
                                    <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#4bb1c8] text-[10px] font-bold text-white shadow-sm sm:-right-2 sm:-top-2 sm:h-6 sm:w-6 sm:text-[11px]">
                                        {index + 1}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="mt-3 text-sm font-bold text-slate-900 sm:mt-5 sm:text-base lg:text-lg">
                                    {title}
                                </h3>

                                {/* Description */}
                                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:mt-2 sm:text-sm">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookingGuidance;