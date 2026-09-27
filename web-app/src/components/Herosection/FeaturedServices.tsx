"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";
import { services } from "@/utils/servicesData";
import BookingModal from "../Forms/BookingModal";

function FeaturedServices() {
    const featuredServices = services.slice(0, 4);
    const [bookingOpen, setBookingOpen] = useState(false);

    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-15 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#b2ebf2] bg-[#e0f7fa] px-4 py-1.5">
                    <Stethoscope className="h-3.5 w-3.5 text-[#4bb1c8]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0f8fa8]">
                        Our Services
                    </p>
                </div>

                {/* Single Line Heading */}
                <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-5xl">
                    Advanced Care Across{" "}
                    <span className="bg-linear-to-r from-[#4bb1c8] to-[#1aa3bf] bg-clip-text text-transparent">
                        All Departments
                    </span>
                </h2>

                {/* Single Line Description */}
                <p className="mx-auto mt-3 max-w-md text-sm text-slate-600">
                    Specialized treatments and services for complete healthcare.
                </p>
            </div>

            {/* Services Grid */}
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
                {featuredServices.map(({ icon: Icon, title, desc, price, category }) => (
                    <div
                        key={title}
                        className="service-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#4bb1c8] hover:shadow-lg hover:shadow-[#4bb1c8]/20 flex flex-col justify-between"
                        style={{
                            transition:
                                "box-shadow 300ms ease-out, border-color 300ms ease-out",
                        }}
                    >
                        {/* Soft glow sweep on hover */}
                        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-b from-[#e0f7fa]/0 via-[#e0f7fa]/0 to-[#e0f7fa]/40 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

                        <div>
                            <div className="flex items-start justify-between">
                                {/* Icon */}
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e0f7fa] ring-1 ring-[#b2ebf2] transition-all duration-300 ease-out group-hover:bg-[#4bb1c8] group-hover:ring-[#4bb1c8] group-hover:shadow-md group-hover:shadow-[#4bb1c8]/20">
                                    <Icon size={22} className="text-[#4bb1c8] transition-colors duration-300 ease-out group-hover:text-white" />
                                </div>

                                {/* Category Badge */}
                                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                                    {category}
                                </span>
                            </div>

                            <h3 className="mt-4 text-base font-bold text-slate-900 transition-colors duration-300 ease-out group-hover:text-[#0f8fa8]">
                                {title}
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                {desc}
                            </p>
                        </div>

                        {/* Price & Book */}
                        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                            <span className="text-sm font-bold text-[#4bb1c8]">
                                {price}
                            </span>

                            <button
                                type="button"
                                onClick={() => setBookingOpen(true)}
                                className="group inline-flex items-center gap-1.5 rounded-lg bg-linear-to-r from-[#0f8fa8] via-[#33b6d3] to-[#4bb1c8] hover:from-[#0d7d93] hover:to-[#389cb3] px-3.5 py-1.5 text-xs font-extrabold text-white shadow-md shadow-[#4bb1c8]/20 hover:shadow-lg hover:shadow-[#4bb1c8]/30 hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
                            >
                                Book
                                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="mt-12 flex justify-center">
                <Link
                    href="/services"
                    className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-xs hover:border-[#4bb1c8] hover:bg-[#e0f7fa]/30 hover:text-[#0f8fa8] hover:shadow-md hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
                >
                    View All Services
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Booking Modal */}
            <BookingModal
                isOpen={bookingOpen}
                onClose={() => setBookingOpen(false)}
            />
        </section>
    );
}

export default FeaturedServices;