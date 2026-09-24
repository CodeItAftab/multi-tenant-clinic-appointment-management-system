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
}

function DoctorDetailsModal({ doctor, onClose }: DoctorDetailsModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4 py-8 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] animate-[popIn_0.25s_ease-out]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.3fr]">
                    {/* Left: photo panel */}
                    <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden bg-linear-to-br from-[#4bb1c8] via-[#33b6d3] to-[#1aa3bf] p-10 sm:p-8">
                        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                        <div className="pointer-events-none absolute -right-8 bottom-0 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

                        <div className="relative h-40 w-40 overflow-hidden rounded-full ring-4 ring-white/90 shadow-xl sm:h-44 sm:w-44">
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="h-full w-full object-cover object-top"
                            />
                        </div>

                        <div className="relative text-center">
                            <h2 className="text-[19px] font-bold text-white sm:text-[20px]">
                                {doctor.name}
                            </h2>
                            <p className="mt-1 text-[13px] font-semibold text-white/90">
                                {doctor.specialty}
                            </p>
                        </div>

                        <div className="relative flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 shadow-sm">
                            <Star size={13} className="fill-[#4bb1c8] text-[#4bb1c8]" />
                            <span className="text-[12.5px] font-bold text-slate-900">
                                {doctor.rating}
                            </span>
                            <span className="text-[11.5px] text-slate-500">rating</span>
                        </div>
                    </div>

                    {/* Right: details panel */}
                    <div className="max-h-[80vh] overflow-y-auto p-7 sm:p-8">
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#4bb1c8]">
                            Doctor Profile
                        </p>

                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <div className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-3">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e0f7fa]">
                                    <GraduationCap size={16} className="text-[#4bb1c8]" />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-[10.5px] font-semibold uppercase tracking-wide text-slate-400">
                                        Qualification
                                    </p>
                                    <p className="text-[12.5px] font-bold leading-snug text-slate-900">
                                        {doctor.qualification}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-3">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e0f7fa]">
                                    <Stethoscope size={16} className="text-[#4bb1c8]" />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-[10.5px] font-semibold uppercase tracking-wide text-slate-400">
                                        Experience
                                    </p>
                                    <p className="text-[12.5px] font-bold leading-snug text-slate-900">
                                        {doctor.experience}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-3">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e0f7fa]">
                                    <Clock size={16} className="text-[#4bb1c8]" />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-[10.5px] font-semibold uppercase tracking-wide text-slate-400">
                                        Timings
                                    </p>
                                    <p className="text-[12.5px] font-bold leading-snug text-slate-900">
                                        {doctor.timings ?? "Mon–Sat, 10 AM – 6 PM"}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-3">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e0f7fa]">
                                    <IndianRupee size={16} className="text-[#4bb1c8]" />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-[10.5px] font-semibold uppercase tracking-wide text-slate-400">
                                        Consultation Fee
                                    </p>
                                    <p className="text-[12.5px] font-bold leading-snug text-slate-900">
                                        {doctor.fees ?? "₹600"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-[12.5px] font-bold text-slate-900">About</p>
                            <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-600">
                                {doctor.about ??
                                    `${doctor.name} brings ${doctor.experience} of dedicated experience in ${doctor.specialty.toLowerCase()}, delivering thoughtful, patient-first care.`}
                            </p>
                        </div>

                        <div className="mt-7 flex flex-wrap justify-center gap-2.5">
                            <Link
                                href="/booking"
                                onClick={onClose}
                                className="inline-flex items-center gap-2 rounded-xl bg-[#4bb1c8] px-5 py-2.5 text-[12.5px] font-bold text-white shadow-sm transition-all hover:bg-[#33b6d3] hover:shadow-md"
                            >
                                <Calendar size={14} />
                                Book Appointment
                            </Link>

                            <button
                                type="button"
                                onClick={onClose}
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-2.5 text-[12.5px] font-bold text-slate-700 transition-all hover:border-[#4bb1c8] hover:text-[#4bb1c8]"
                            >
                                Close
                            </button>
                        </div>
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