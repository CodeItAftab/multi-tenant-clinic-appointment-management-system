"use client";

import { useEffect } from "react";
import {
    Stethoscope,
    GraduationCap,
    Star,
    Calendar,
    Clock,
    IndianRupee,
} from "lucide-react";
import { Doctor } from "@/utils/doctorsData";
import Link from "next/link";

interface DoctorDetailsModalProps {
    doctor: Doctor;
    onClose: () => void;
    onBookAppointment?: (doctor: Doctor) => void;
}

function DoctorDetailsModal({ doctor, onClose, onBookAppointment }: DoctorDetailsModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeyDown);
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = originalOverflow;
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-3 min-[420px]:p-4 sm:p-6 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out] overflow-y-auto"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`${doctor.name} details`}
        >
            <div
                className="relative w-full max-w-lg sm:max-w-2xl lg:max-w-3xl max-h-[90dvh] sm:max-h-[85vh] flex flex-col sm:grid sm:grid-cols-[250px_1fr] md:grid-cols-[280px_1fr] overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] animate-[popIn_0.25s_ease-out]"
                onClick={(e) => e.stopPropagation()}
                data-lenis-prevent
            >
                {/* Left (Desktop) / Top Banner (Mobile) Photo & Doctor Info */}
                <div className="relative flex flex-row items-center gap-3.5 p-4 sm:flex-col sm:justify-center sm:text-center sm:gap-4 sm:p-7 md:p-8 bg-linear-to-br from-[#4bb1c8] via-[#33b6d3] to-[#1aa3bf] text-white shrink-0 overflow-hidden">
                    {/* Glowing background decor circles */}
                    <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-white/10 blur-2xl" />
                    <div className="pointer-events-none absolute -right-8 bottom-0 h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-white/10 blur-2xl" />

                    {/* Doctor Image */}
                    <div className="relative h-16 w-16 min-[400px]:h-20 min-[400px]:w-20 sm:h-36 sm:w-36 md:h-40 md:w-40 shrink-0 overflow-hidden rounded-full ring-2.5 sm:ring-4 ring-white/95 shadow-md sm:shadow-xl">
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="h-full w-full object-cover object-top"
                        />
                    </div>

                    {/* Doctor Name, Specialty & Rating */}
                    <div className="relative min-w-0 flex-1 pr-8 sm:pr-0 sm:flex-initial">
                        <h2 className="text-base min-[400px]:text-lg sm:text-xl font-bold text-white leading-tight truncate sm:whitespace-normal">
                            {doctor.name}
                        </h2>
                        <p className="mt-0.5 text-xs min-[400px]:text-[13px] font-semibold text-white/95 truncate sm:whitespace-normal">
                            {doctor.specialty}
                        </p>

                        <div className="mt-1.5 sm:mt-2.5 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 sm:px-3 sm:py-1 shadow-xs">
                            <Star size={12} className="fill-[#4bb1c8] text-[#4bb1c8] sm:h-3.5 sm:w-3.5" />
                            <span className="text-[11px] sm:text-xs font-bold text-slate-900">
                                {doctor.rating}
                            </span>
                            <span className="text-[10px] sm:text-[11px] text-slate-500">rating</span>
                        </div>
                    </div>
                </div>

                {/* Details Panel - Scrollable with smooth touch scrolling */}
                <div
                    className="flex-1 overflow-y-auto p-4 min-[400px]:p-5 sm:p-6 md:p-7 max-h-[calc(90dvh-100px)] sm:max-h-[85vh] overscroll-contain"
                    data-lenis-prevent
                    style={{ WebkitOverflowScrolling: "touch" }}
                >
                    <div className="flex items-center justify-between">
                        <p className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#4bb1c8]">
                            Doctor Profile
                        </p>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="mt-3 sm:mt-4 grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5 sm:gap-3">
                        {/* Qualification */}
                        <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/80 p-2.5 sm:p-3 transition-colors hover:border-[#b2ebf2] hover:bg-[#e0f7fa]/20">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e0f7fa]">
                                <GraduationCap size={16} className="text-[#4bb1c8]" />
                            </span>
                            <div className="min-w-0 flex-1">
                                <p className="text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-wide text-slate-400">
                                    Qualification
                                </p>
                                <p className="truncate text-xs sm:text-[12.5px] font-bold leading-tight text-slate-900" title={doctor.qualification}>
                                    {doctor.qualification}
                                </p>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/80 p-2.5 sm:p-3 transition-colors hover:border-[#b2ebf2] hover:bg-[#e0f7fa]/20">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e0f7fa]">
                                <Stethoscope size={16} className="text-[#4bb1c8]" />
                            </span>
                            <div className="min-w-0 flex-1">
                                <p className="text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-wide text-slate-400">
                                    Experience
                                </p>
                                <p className="truncate text-xs sm:text-[12.5px] font-bold leading-tight text-slate-900">
                                    {doctor.experience}
                                </p>
                            </div>
                        </div>

                        {/* Timings */}
                        <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/80 p-2.5 sm:p-3 transition-colors hover:border-[#b2ebf2] hover:bg-[#e0f7fa]/20">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e0f7fa]">
                                <Clock size={16} className="text-[#4bb1c8]" />
                            </span>
                            <div className="min-w-0 flex-1">
                                <p className="text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-wide text-slate-400">
                                    Timings
                                </p>
                                <p className="truncate text-xs sm:text-[12.5px] font-bold leading-tight text-slate-900" title={doctor.timings ?? "Mon–Sat, 10 AM – 6 PM"}>
                                    {doctor.timings ?? "Mon–Sat, 10 AM – 6 PM"}
                                </p>
                            </div>
                        </div>

                        {/* Consultation Fee */}
                        <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/80 p-2.5 sm:p-3 transition-colors hover:border-[#b2ebf2] hover:bg-[#e0f7fa]/20">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e0f7fa]">
                                <IndianRupee size={16} className="text-[#4bb1c8]" />
                            </span>
                            <div className="min-w-0 flex-1">
                                <p className="text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-wide text-slate-400">
                                    Consultation Fee
                                </p>
                                <p className="truncate text-xs sm:text-[12.5px] font-bold leading-tight text-slate-900">
                                    {doctor.fees ?? "₹600"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="mt-4 sm:mt-5 rounded-xl bg-slate-50/60 p-3 sm:p-3.5 border border-slate-100">
                        <p className="text-xs sm:text-[12.5px] font-bold text-slate-900">About Doctor</p>
                        <p className="mt-1 text-xs sm:text-[12.5px] leading-relaxed text-slate-600">
                            {doctor.about ??
                                `${doctor.name} brings ${doctor.experience} of dedicated experience in ${doctor.specialty.toLowerCase()}, delivering thoughtful, patient-first care.`}
                        </p>
                    </div>

                    {/* Bottom Actions: Book Appointment FIRST, then Close */}
                    <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-100 flex flex-col min-[420px]:flex-row items-stretch min-[420px]:items-center justify-end gap-2 sm:gap-2.5">
                        {onBookAppointment ? (
                            <button
                                type="button"
                                onClick={() => onBookAppointment(doctor)}
                                className="flex-1 min-[420px]:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#0f8fa8] via-[#33b6d3] to-[#4bb1c8] hover:from-[#0d7d93] hover:to-[#389cb3] px-6 py-2.5 text-xs sm:text-[13px] font-extrabold text-white shadow-lg shadow-[#4bb1c8]/25 hover:shadow-xl hover:shadow-[#4bb1c8]/35 hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
                            >
                                <Calendar size={14} />
                                Book Appointment
                            </button>
                        ) : (
                            <Link
                                href="/booking"
                                onClick={onClose}
                                className="flex-1 min-[420px]:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#0f8fa8] via-[#33b6d3] to-[#4bb1c8] hover:from-[#0d7d93] hover:to-[#389cb3] px-6 py-2.5 text-xs sm:text-[13px] font-extrabold text-white shadow-lg shadow-[#4bb1c8]/25 hover:shadow-xl hover:shadow-[#4bb1c8]/35 hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
                            >
                                <Calendar size={14} />
                                Book Appointment
                            </Link>
                        )}

                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 min-[420px]:flex-initial inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs sm:text-[13px] font-bold text-slate-700 shadow-xs hover:border-[#4bb1c8] hover:bg-[#e0f7fa]/30 hover:text-[#0f8fa8] hover:shadow-md hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
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
            transform: scale(0.96) translateY(8px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
        </div>
    );
}

export default DoctorDetailsModal;