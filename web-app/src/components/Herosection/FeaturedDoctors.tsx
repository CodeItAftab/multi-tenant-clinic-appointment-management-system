"use client";

import { useState } from "react";
import Link from "next/link";
import { Stethoscope, GraduationCap, Star, Calendar, ArrowRight } from "lucide-react";
import { doctors, Doctor } from "@/utils/doctorsData";
import DoctorDetailsModal from "../Doctors/DoctorDetailsModal";
import BookingModal from "../Forms/BookingModal";

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
                        className="doctor-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#4bb1c8] hover:shadow-lg hover:shadow-[#4bb1c8]/20"
                        style={{
                            transition:
                                "box-shadow 300ms ease-out, border-color 300ms ease-out",
                        }}
                    >
                        {/* Soft glow sweep on hover */}
                        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-b from-[#e0f7fa]/0 via-[#e0f7fa]/0 to-[#e0f7fa]/40 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

                        <div className="relative p-5">
                            <div className="flex items-start gap-3.5">
                                <div className="shrink-0">
                                    <div className="h-18 w-18 overflow-hidden rounded-full ring-2 ring-[#e0f7fa] ring-offset-2 shadow-md transition-all duration-300 ease-out group-hover:ring-[#4bb1c8]/60 group-hover:shadow-md">
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-110"
                                        />
                                    </div>
                                </div>

                                <div className="min-w-0 flex-1 pt-1">
                                    <h3 className="truncate text-sm font-bold text-slate-900 transition-colors duration-300 ease-out group-hover:text-[#0f8fa8]">
                                        {doctor.name}
                                    </h3>
                                    <p className="truncate text-[11px] font-bold text-[#4bb1c8]">
                                        {doctor.specialty}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-col items-center text-center">
                                {/* Rating Badge */}
                                <div className="flex items-center gap-1.5 rounded-lg bg-[#e0f7fa] px-2.5 py-1.5 shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:shadow-[#4bb1c8]/20">
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
                                        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#0f8fa8] via-[#33b6d3] to-[#4bb1c8] hover:from-[#0d7d93] hover:to-[#389cb3] py-2.5 text-[12px] font-extrabold text-white shadow-lg shadow-[#4bb1c8]/25 hover:shadow-xl hover:shadow-[#4bb1c8]/35 hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8] focus-visible:ring-offset-2"
                                    >
                                        <Calendar size={13} className="transition-transform group-hover:rotate-[-10deg]" />
                                        Book Appointment
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setActiveDoctor(doctor)}
                                        className="flex justify-center items-center rounded-xl border border-slate-200 bg-white py-2.5 text-[12px] font-bold text-slate-700 shadow-xs hover:border-[#4bb1c8] hover:bg-[#e0f7fa]/30 hover:text-[#0f8fa8] hover:shadow-md hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8] focus-visible:ring-offset-2"
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
                    className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-xs hover:border-[#4bb1c8] hover:bg-[#e0f7fa]/30 hover:text-[#0f8fa8] hover:shadow-md hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
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
                    onBookAppointment={(doc) => {
                        setActiveDoctor(null);
                        setBookingDoctor(doc);
                    }}
                />
            )}

            {/* Booking Modal — rendered once, outside the grid loop, tied to the clicked doctor */}
            <BookingModal
                isOpen={Boolean(bookingDoctor)}
                onClose={() => setBookingDoctor(null)}
                preselectedDoctor={bookingDoctor}
            />
        </section>
    );
}

export default FeaturedDoctors;