"use client";

import { useState } from "react";
import Link from "next/link";
import { Stethoscope, GraduationCap, Star, Calendar, ArrowRight, X } from "lucide-react";
import { doctors, Doctor } from "@/utils/doctorsData";
import DoctorDetailsModal from "../Doctors/DoctorDetailsModal";
import Booking from "../Forms/Booking";

function FeaturedDoctors() {
    const featuredDoctors = doctors.slice(0, 4);
    const [activeDoctor, setActiveDoctor] = useState<Doctor | null>(null);
    const [bookingDoctor, setBookingDoctor] = useState<Doctor | null>(null);

    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-15 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#b2ebf2] bg-[#e0f7fa] px-4 py-1.5">
                    <Stethoscope className="h-3.5 w-3.5 text-[#4bb1c8]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0f8fa8]">
                        Meet Our Experts
                    </p>
                </div>

                {/* Short Classic Heading */}
                <h2 className="mt-4 text-2xl font-black text-slate-900 sm:text-5xl">
                    Expert Care You Can{" "}
                    <span className="bg-linear-to-r from-[#4bb1c8] to-[#1aa3bf] bg-clip-text text-transparent">
                        Trust
                    </span>
                </h2>

                {/* Short Description */}
                <p className="mx-auto mt-3 max-w-md text-md text-slate-600">
                    Skilled doctors dedicated to your health and well-being.
                </p>
            </div>

            {/* Doctors Grid */}
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
                {featuredDoctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] hover:-translate-y-1"
                    >
                        <div className="relative p-5">
                            <div className="flex items-start gap-3.5">
                                <div className="shrink-0">
                                    <div className="h-18 w-18 overflow-hidden rounded-full ring-2 ring-[#e0f7fa] ring-offset-2 shadow-md">
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                </div>

                                <div className="min-w-0 flex-1 pt-1">
                                    <h3 className="truncate text-sm font-bold text-slate-900">
                                        {doctor.name}
                                    </h3>
                                    <p className="truncate text-[11px] font-bold text-[#4bb1c8]">
                                        {doctor.specialty}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-col items-center text-center">
                                {/* Rating Badge */}
                                <div className="flex items-center gap-1.5 rounded-lg bg-[#e0f7fa] px-2.5 py-1.5 shadow-sm">
                                    <Star size={13} className="fill-[#4bb1c8] text-[#4bb1c8]" />
                                    <span className="text-[12px] font-bold text-[#0f8fa8]">
                                        {doctor.rating}
                                    </span>
                                </div>

                                {/* Qualification & Experience */}
                                <div className="mt-3 w-full space-y-2">
                                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-600">
                                        <GraduationCap size={13} className="shrink-0 text-[#4bb1c8]" />
                                        <span className="truncate font-semibold">
                                            {doctor.qualification}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-600">
                                        <Stethoscope size={13} className="shrink-0 text-[#4bb1c8]" />
                                        <span className="truncate font-semibold">
                                            {doctor.experience}
                                        </span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-5 flex w-full flex-col gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setBookingDoctor(doctor)}
                                        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#4bb1c8] py-2.5 text-[12px] font-bold text-white shadow-md shadow-[#e0f7fa] transition-all hover:bg-[#33b6d3] hover:shadow-lg hover:shadow-[#b2ebf2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8] focus-visible:ring-offset-2"
                                    >
                                        <Calendar size={13} className="transition-transform group-hover:rotate-[-10deg]" />
                                        Book Appointment
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setActiveDoctor(doctor)}
                                        className="flex justify-center rounded-xl border border-slate-200 py-2.5 text-[12px] font-bold text-slate-700 transition-all hover:border-[#b2ebf2] hover:bg-[#e0f7fa]/40 hover:text-[#4bb1c8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8] focus-visible:ring-offset-2"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="mt-12 flex justify-center">
                <Link
                    href="/doctors"
                    className="group inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-[#4bb1c8] to-[#1aa3bf] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#e0f7fa]/60 transition-all hover:shadow-xl hover:shadow-[#b2ebf2]/60 hover:scale-[1.02]"
                >
                    View All Doctors
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Details Modal — rendered once, outside the grid loop */}
            {activeDoctor && (
                <DoctorDetailsModal
                    doctor={activeDoctor}
                    onClose={() => setActiveDoctor(null)}
                />
            )}

            {/* Booking Modal — rendered once, outside the grid loop, tied to the clicked doctor */}
            {bookingDoctor && (
                <div
                    className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-sm"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setBookingDoctor(null);
                    }}
                >
                    <div className="flex min-h-full items-start justify-center px-4 py-8 sm:py-12">
                        <div className="relative w-full max-w-3xl">
                            <button
                                onClick={() => setBookingDoctor(null)}
                                aria-label="Close booking form"
                                className="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white border border-slate-200 shadow-lg text-neutral-500 hover:text-neutral-900 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8]"
                            >
                                <X className="h-4 w-4" strokeWidth={2.5} />
                            </button>
                            {/* Pass the selected doctor through if Booking accepts it */}
                            <Booking />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default FeaturedDoctors;