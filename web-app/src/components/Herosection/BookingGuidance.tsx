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
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-10 lg:px-10">
            {/* Single Card Container */}
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                {/* Subtle cyan glow accents */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#e0f7fa]/60 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#b2ebf2]/40 blur-3xl" />

                <div className="relative z-10 p-8 sm:p-12 lg:p-14">
                    <div className="mx-auto max-w-2xl text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#b2ebf2] bg-[#e0f7fa] px-4 py-1.5">
                            <CalendarCheck className="h-3.5 w-3.5 text-[#4bb1c8]" />
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0f8fa8]">
                                How It Works
                            </p>
                        </div>

                        {/* Heading */}
                        <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-5xl">
                            Booking Made{" "}
                            <span className="bg-linear-to-r from-[#4bb1c8] to-[#1aa3bf] bg-clip-text text-transparent">
                                Simple
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mt-3 max-w-lg text-sm text-slate-600">
                            From finding a doctor to your visit — seamless care in four easy steps.
                        </p>
                    </div>

                    {/* Steps Grid */}
                    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map(({ icon: Icon, title, desc }, index) => (
                            <div
                                key={title}
                                className="group relative flex flex-col items-center text-center"
                            >
                                {/* Icon Circle */}
                                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_8px_24px_rgb(75,177,200,0.2)] ring-1 ring-[#e0f7fa] transition-transform duration-300 group-hover:-translate-y-1">
                                    <Icon size={26} className="text-[#4bb1c8]" strokeWidth={2} />

                                    {/* Step Number */}
                                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#4bb1c8] text-[11px] font-bold text-white shadow-sm">
                                        {index + 1}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="mt-5 text-base font-bold text-slate-900 sm:text-lg">
                                    {title}
                                </h3>

                                {/* Description */}
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
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