"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Calendar, Sparkles } from "lucide-react";
import Booking from "./Booking";
import { Doctor } from "@/utils/doctorsData";

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctor?: Doctor | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedDoctor,
}: BookingModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-slate-950/65 p-2 min-[400px]:p-3 sm:p-5 md:p-6 backdrop-blur-md animate-[fadeIn_0.2s_ease-out] overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Book Appointment"
    >
      <div
        className="relative w-full max-w-3xl lg:max-w-4xl max-h-[94dvh] sm:max-h-[90vh] flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-[0_30px_70px_-15px_rgba(15,143,168,0.3),0_15px_35px_rgba(0,0,0,0.15)] border border-slate-100 animate-[popIn_0.25s_ease-out]"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        {/* Top Gradient Aesthetic Accent Line */}
        <div className="h-1.5 w-full bg-linear-to-r from-[#0f8fa8] via-[#33b6d3] to-[#4bb1c8] shrink-0" />

        {/* Sticky Header Bar with Title and Accessible Close Button */}
        <div className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-100 bg-white/95 px-4 py-3 sm:px-6 sm:py-3.5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-linear-to-br from-[#e0f7fa] to-[#b2ebf2] text-[#0f8fa8] shadow-xs">
              <Calendar size={19} className="text-[#0f8fa8]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                  Hospital Management System (HMS)
                </h3>
                <span className="hidden min-[480px]:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#0f8fa8] bg-[#e0f7fa] px-2 py-0.5 rounded-full">
                  <Sparkles size={10} /> Instant OPD Slot
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-medium text-slate-500 truncate max-w-62.5 sm:max-w-md">
                {preselectedDoctor ? (
                  <>
                    Booking with <span className="font-semibold text-slate-700">{preselectedDoctor.name}</span> ({preselectedDoctor.specialty})
                  </>
                ) : (
                  "Official Outpatient Department (OPD) Slot Reservation"
                )}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking modal"
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8] active:scale-95 shrink-0"
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
          <Booking preselectedDoctor={preselectedDoctor} isModal={true} onClose={onClose} />
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
    </div>,
    document.body
  );
}
