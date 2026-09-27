"use client";

import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {
  Ticket,
  Phone,
  ArrowRight,
  ArrowLeft,
  Calendar as CalendarIcon,
  CheckCircle2,
  Sun,
  Sunset,
  Download,
  Printer,
  RotateCcw,
  ShieldCheck,
  AlertCircle,
  Clock,
  Sparkles,
  QrCode,
  Check,
  MapPin,
  FileText,
  User,
  Stethoscope,
} from "lucide-react";

export interface ReschedulePageProps {
  onClose?: () => void;
  isModal?: boolean;
}

interface RescheduleFormData {
  ticketID: string;
  phone: string;
  newDate: string;
  newSession: "morning" | "evening";
}

interface RescheduleResult {
  ticketNumber: string;
  newTokenNumber: number;
  doctorName: string;
  doctorSpecialty: string;
  doctorQualification: string;
  patientName: string;
  patientAge: string;
  phoneNumber: string;
  newDate: string;
  sessionText: string;
  sessionType: "morning" | "evening";
  smsTime: string;
  bookingDate: string;
  hospitalName: string;
  hospitalAddress: string;
  hospitalContact: string;
  referenceId: string;
}

export default function ReschedulePage({
  onClose,
  isModal = false,
}: ReschedulePageProps = {}) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [formData, setFormData] = useState<RescheduleFormData>({
    ticketID: "",
    phone: "",
    newDate: "",
    newSession: "morning",
  });

  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState<number>(30);
  const [isResendActive, setIsResendActive] = useState<boolean>(false);
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [confirmedData, setConfirmedData] = useState<RescheduleResult | null>(null);
  const receiptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsResendActive(true);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleInputChange = (field: keyof RescheduleFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMessage("");
  };

  const handleSendOTP = () => {
    if (!formData.ticketID.trim()) {
      setErrorMessage("Please enter your existing Ticket Number (e.g. SFC-045-01).");
      return;
    }
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage("Please enter your registered 10-digit mobile number.");
      return;
    }
    setErrorMessage("");
    setTimer(30);
    setIsResendActive(false);
    setOtp(["", "", "", "", "", ""]);
    setStep(2);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    setErrorMessage("");

    if (value && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 6) {
      setErrorMessage("Please enter the complete 6-digit verification OTP.");
      return;
    }
    setErrorMessage("");
    // Default new date to tomorrow or today
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setFormData((prev) => ({
      ...prev,
      newDate: prev.newDate || tomorrow.toISOString().split("T")[0],
    }));
    setStep(3);
  };

  const handleResendOtp = () => {
    setTimer(30);
    setIsResendActive(false);
    setOtp(["", "", "", "", "", ""]);
    setErrorMessage("");
  };

  const handleConfirmReschedule = () => {
    if (!formData.newDate) {
      setErrorMessage("Please pick your preferred new appointment date.");
      return;
    }

    const newGeneratedToken = Math.floor(8 + Math.random() * 16);
    const now = new Date();

    setConfirmedData({
      ticketNumber: formData.ticketID.trim().toUpperCase(),
      newTokenNumber: newGeneratedToken,
      patientName: "Rahul Sharma",
      patientAge: "29",
      phoneNumber: formData.phone.trim(),
      doctorName: "Dr. Ananya Sharma",
      doctorSpecialty: "Cardiologist & OPD Consultant",
      doctorQualification: "MBBS, MD (Cardiology)",
      newDate: formData.newDate,
      sessionText:
        formData.newSession === "morning"
          ? "Morning Session (9:00 AM – 2:00 PM)"
          : "Evening Session (3:00 PM – 5:00 PM)",
      sessionType: formData.newSession,
      smsTime: now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      bookingDate: now.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      hospitalName: "Hospital Management System (HMS)",
      hospitalAddress:
        "Dehri-on-sone, Near Bus Stand Chowk, Rohtas, Bihar 821308",
      hospitalContact: "+91 12345 67890 | hms@care.exampe",
      referenceId: `TXN-RES-${Math.floor(100000 + Math.random() * 900000)}`,
    });

    setStep(4);
  };

  // High-Resolution Print / Download Handler via react-to-print
  const handlePrintReceipt = useReactToPrint({
    contentRef: receiptRef,
    documentTitle: confirmedData
      ? `Rescheduled-Slip-HMS-${confirmedData.ticketNumber}`
      : "Rescheduled-Appointment-Slip",
  });

  return (
    <div
      className={`w-full bg-white font-sans antialiased text-slate-800 ${
        isModal ? "p-0 mb-0" : "rounded-2xl mb-5"
      }`}
    >
      <div
        className={`max-w-4xl mx-auto ${
          isModal ? "px-1 sm:px-3 py-2 sm:py-4" : "px-4 py-8 sm:px-6 lg:px-8"
        }`}
      >
        {/* ================= TOP BRANDING ================= */}
        {!isModal && (
          <div className="mb-8 text-center">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#b2ebf2] bg-[#e0f7fa] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#0f8fa8]">
              <RotateCcw className="h-3.5 w-3.5" />
              Zero-Penalty Reschedule
            </div>
            <h1 className="tracking-tight text-3xl sm:text-4xl font-extrabold text-slate-900">
              Hospital Management System (HMS)
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Update your consultation slot instantly with zero fees • Instant SMS Token
            </p>
          </div>
        )}

        {/* ================= STEPPER PROGRESS BAR ================= */}
        <div className={`max-w-lg mx-auto ${isModal ? "mb-5 mt-1" : "mt-4 mb-8"}`}>
          <div className="flex items-center justify-between relative">
            {[
              { num: 1, label: "Ticket & Phone" },
              { num: 2, label: "OTP Verification" },
              { num: 3, label: "New Slot" },
              { num: 4, label: "Rescheduled Slip" },
            ].map((s, idx) => {
              const isActive = step === s.num;
              const isDone = step > s.num;

              return (
                <React.Fragment key={s.num}>
                  <div className="flex flex-col items-center z-10">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm ${
                        isActive
                          ? "bg-linear-to-r from-[#0f8fa8] to-[#4bb1c8] text-white ring-4 ring-[#e0f7fa] shadow-md shadow-[#4bb1c8]/30 scale-105"
                          : isDone
                          ? "bg-[#0f8fa8] text-white"
                          : "bg-slate-100 text-slate-400 border border-slate-200"
                      }`}
                    >
                      {isDone ? <Check size={16} strokeWidth={3} /> : s.num}
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs font-semibold mt-1.5 transition-colors text-center ${
                        isActive
                          ? "text-[#0f8fa8] font-bold"
                          : isDone
                          ? "text-slate-700"
                          : "text-slate-400"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>

                  {idx < 3 && (
                    <div className="flex-1 h-1 mx-1.5 sm:mx-2.5 -mt-5 rounded-full overflow-hidden bg-slate-100">
                      <div
                        className={`h-full transition-all duration-500 ${
                          step > idx + 1 ? "w-full bg-[#0f8fa8]" : "w-0 bg-transparent"
                        }`}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3.5 sm:p-4 text-xs sm:text-sm font-semibold text-red-700 animate-[fadeIn_0.2s_ease-out]">
            <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* ================= STEP 1: ENTER TICKET & PHONE ================= */}
        {step === 1 && (
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 min-[420px]:p-5 sm:p-7 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-3.5">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0f8fa8] bg-[#e0f7fa] px-2.5 py-0.5 rounded-md inline-block mb-1">
                Step 1 of 4
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                1. Enter Existing Ticket & Phone
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">
                Enter your booking ticket number and registered mobile number to fetch your appointment
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-700">
                  Existing Ticket Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Ticket className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={formData.ticketID}
                    onChange={(e) => handleInputChange("ticketID", e.target.value)}
                    placeholder="e.g. SFC-045-01"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-3.5 text-sm font-mono uppercase text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#4bb1c8] focus:ring-4 focus:ring-[#4bb1c8]/15 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-700">
                  Registered Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-xs font-bold text-slate-500">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) =>
                      handleInputChange("phone", e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="9876543210"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-12 pr-3.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#4bb1c8] focus:ring-4 focus:ring-[#4bb1c8]/15 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero reschedule fee • Instant SMS verification</span>
              </div>

              <button
                type="button"
                onClick={handleSendOTP}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-linear-to-r from-[#0f8fa8] via-[#33b6d3] to-[#4bb1c8] hover:from-[#0d7d93] hover:to-[#389cb3] px-8 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-lg shadow-[#4bb1c8]/25 hover:shadow-xl hover:shadow-[#4bb1c8]/35 hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
              >
                Send Verification OTP <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 2: OTP VERIFICATION ================= */}
        {step === 2 && (
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 min-[420px]:p-5 sm:p-7 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-3.5 text-center sm:text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0f8fa8] bg-[#e0f7fa] px-2.5 py-0.5 rounded-md inline-block mb-1">
                Step 2 of 4
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                2. Enter SMS OTP
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">
                We sent a 6-digit security code to{" "}
                <strong className="text-slate-800">+91 {formData.phone}</strong>
              </p>
            </div>

            <div className="my-6 flex items-center justify-center gap-2 sm:gap-3">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => {
                    otpInputRefs.current[idx] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                  className="h-12 w-11 sm:h-14 sm:w-13 rounded-xl border-2 border-slate-200 bg-slate-50/50 text-center text-xl font-black text-slate-900 outline-none transition focus:border-[#4bb1c8] focus:bg-white focus:ring-4 focus:ring-[#4bb1c8]/15"
                />
              ))}
            </div>

            <div className="text-center text-xs text-slate-500">
              {isResendActive ? (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="font-bold text-[#0f8fa8] hover:text-[#0d7d93] underline cursor-pointer"
                >
                  Resend OTP Code Now
                </button>
              ) : (
                <span>
                  Resend code in{" "}
                  <strong className="text-slate-700 font-mono">
                    00:{timer < 10 ? `0${timer}` : timer}
                  </strong>
                </span>
              )}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-slate-700 shadow-xs hover:border-[#4bb1c8] hover:bg-[#e0f7fa]/30 hover:text-[#0f8fa8] hover:shadow-md hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" /> Change Details
              </button>

              <button
                type="button"
                onClick={handleVerifyOtp}
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#0f8fa8] via-[#33b6d3] to-[#4bb1c8] hover:from-[#0d7d93] hover:to-[#389cb3] px-7 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-lg shadow-[#4bb1c8]/25 hover:shadow-xl hover:shadow-[#4bb1c8]/35 hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
              >
                Verify & Choose New Slot <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 3: CHOOSE NEW DATE & SESSION ================= */}
        {step === 3 && (
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 min-[420px]:p-5 sm:p-7 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-3.5">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0f8fa8] bg-[#e0f7fa] px-2.5 py-0.5 rounded-md inline-block mb-1">
                Step 3 of 4
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                3. Choose New Date & Session Window
              </h2>
              <p className="mt-0.5 text-xs text-slate-500">
                Pick your convenient new appointment slot (100% Free with zero penalty fee)
              </p>
            </div>

            {/* Existing Ticket Verified Snapshot */}
            <div className="flex flex-wrap items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5 sm:p-4 text-xs gap-3">
              <div>
                <span className="font-semibold text-slate-400 block text-[10px] uppercase">
                  Verified Ticket
                </span>
                <span className="font-mono font-bold text-slate-900 text-sm">
                  {formData.ticketID.toUpperCase()}
                </span>
              </div>
              <div>
                <span className="font-semibold text-slate-400 block text-[10px] uppercase">
                  Patient Name
                </span>
                <span className="font-bold text-slate-900">Rahul Sharma</span>
              </div>
              <div>
                <span className="font-semibold text-slate-400 block text-[10px] uppercase">
                  Doctor
                </span>
                <span className="font-bold text-[#0f8fa8]">
                  Dr. Ananya Sharma (Cardiologist)
                </span>
              </div>
              <div>
                <span className="font-semibold text-slate-400 block text-[10px] uppercase">
                  Reschedule Fee
                </span>
                <span className="font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md text-[11px]">
                  ₹0 (Zero Charge)
                </span>
              </div>
            </div>

            {/* Select New Date */}
            <div>
              <label className="mb-1.5 block text-xs font-bold text-slate-700">
                Select New Appointment Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <CalendarIcon className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.newDate}
                  onChange={(e) => handleInputChange("newDate", e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-3.5 text-sm font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-[#4bb1c8] focus:ring-4 focus:ring-[#4bb1c8]/15 transition-all"
                />
              </div>
            </div>

            {/* Select Session Window */}
            <div>
              <label className="mb-2 block text-xs font-bold text-slate-700">
                Select Consultation Slot Window
              </label>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {/* Morning Session */}
                <div
                  onClick={() => handleInputChange("newSession", "morning")}
                  className={`flex cursor-pointer items-start justify-between rounded-2xl border-2 p-4 transition-all duration-200 sm:p-5 ${
                    formData.newSession === "morning"
                      ? "border-[#4bb1c8] bg-linear-to-br from-[#e0f7fa]/60 via-white to-white shadow-md shadow-[#4bb1c8]/15 ring-2 ring-[#4bb1c8]/20"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                      <Sun className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-slate-900">
                        Morning Session
                      </h3>
                      <p className="mt-0.5 text-xs font-bold text-slate-700">
                        9:00 AM – 2:00 PM
                      </p>
                      <span className="mt-1.5 inline-block rounded-full bg-[#e0f7fa] px-2.5 py-0.5 text-[10px] font-bold text-[#0f8fa8]">
                        ● Tokens #1 to #25 Available
                      </span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="newSession"
                    checked={formData.newSession === "morning"}
                    onChange={() => {}}
                    className="mt-1 h-4 w-4 accent-[#4bb1c8] cursor-pointer"
                  />
                </div>

                {/* Evening Session */}
                <div
                  onClick={() => handleInputChange("newSession", "evening")}
                  className={`flex cursor-pointer items-start justify-between rounded-2xl border-2 p-4 transition-all duration-200 sm:p-5 ${
                    formData.newSession === "evening"
                      ? "border-[#4bb1c8] bg-linear-to-br from-[#e0f7fa]/60 via-white to-white shadow-md shadow-[#4bb1c8]/15 ring-2 ring-[#4bb1c8]/20"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600">
                      <Sunset className="h-5 w-5 text-indigo-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-slate-900">
                        Evening Session
                      </h3>
                      <p className="mt-0.5 text-xs font-bold text-slate-700">
                        3:00 PM – 5:00 PM
                      </p>
                      <span className="mt-1.5 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600">
                        ● Tokens #26 to #40 Available
                      </span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="newSession"
                    checked={formData.newSession === "evening"}
                    onChange={() => {}}
                    className="mt-1 h-4 w-4 accent-[#4bb1c8] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-slate-700 shadow-xs hover:border-[#4bb1c8] hover:bg-[#e0f7fa]/30 hover:text-[#0f8fa8] hover:shadow-md hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>

              <button
                type="button"
                onClick={handleConfirmReschedule}
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#0f8fa8] via-[#33b6d3] to-[#4bb1c8] hover:from-[#0d7d93] hover:to-[#389cb3] px-8 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-lg shadow-[#4bb1c8]/25 hover:shadow-xl hover:shadow-[#4bb1c8]/35 hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
              >
                Confirm Reschedule (Zero Fee) <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 4: CONFIRMATION & OFFICIAL RESCHEDULED APPOINTMENT LETTER ================= */}
        {step === 4 && confirmedData && (
          <div className="space-y-6">
            
            {/* Top Success Banner with Main Download Button */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e0f7fa] text-[#0f8fa8] rounded-2xl flex items-center justify-center shrink-0 shadow-xs">
                  <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9 text-[#0f8fa8]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                      Appointment Rescheduled!
                    </h2>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Zero Penalty
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Your consultation slot has been updated. Download the official slip below.
                  </p>
                </div>
              </div>

              {/* HIGH-CONVERTING DOWNLOAD BUTTON ("AUR DOWNLOD BUTTON KO AACHA KARO") */}
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handlePrintReceipt()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-linear-to-r from-[#0f8fa8] via-[#1aa3bf] to-[#4bb1c8] hover:from-[#0d7d93] hover:to-[#389cb3] text-white font-extrabold text-xs sm:text-sm py-3 px-5 sm:px-6 rounded-xl shadow-lg shadow-[#4bb1c8]/30 hover:shadow-xl hover:shadow-[#4bb1c8]/40 hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
                >
                  <Printer className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  <span>Download / Print Rescheduled Slip</span>
                </button>
              </div>
            </div>

            {/* Grid Layout: Official Printable Slip Preview + Mobile SMS Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left / Center: Complete Official Medical-Grade Rescheduled Slip (8 cols) */}
              <div className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <FileText className="w-4 h-4 text-[#0f8fa8]" />
                    <span>Official Rescheduled Letter Preview</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#0f8fa8] bg-[#e0f7fa] px-2.5 py-0.5 rounded-full">
                    Updated OPD Pass
                  </span>
                </div>

                {/* Printable Document Container (Referenced by receiptRef for 100% vector print fidelity) */}
                <div
                  ref={receiptRef}
                  className="reschedule-slip-container bg-white border border-slate-300 rounded-xl p-4 sm:p-6 text-slate-800 shadow-xs relative"
                >
                  {/* Clean Dedicated Print Style */}
                  <style>{`
                    @media print {
                      @page {
                        size: A4 portrait;
                        margin: 10mm;
                      }
                      body {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                        background: #ffffff !important;
                      }
                      .reschedule-slip-container {
                        border: 2px solid #0f8fa8 !important;
                        padding: 24px !important;
                        border-radius: 12px !important;
                        margin: 0 auto !important;
                        width: 100% !important;
                        box-shadow: none !important;
                      }
                    }
                  `}</style>

                  {/* 1. CLINIC HEADING & ADDRESS ("UPPAR ME HEADING ME USHME HOSPITAL KA NAME AUR ADDRESS HONA CHAHIYE") */}
                  <div className="text-center pb-4 border-b-2 border-slate-800/80">
                    <div className="inline-flex items-center justify-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-lg bg-[#0f8fa8] text-white flex items-center justify-center font-black text-sm">
                        +
                      </div>
                      <h1 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
                        {confirmedData.hospitalName}
                      </h1>
                    </div>
                    <p className="text-[11px] sm:text-xs font-bold text-[#0f8fa8] tracking-wide uppercase">
                      Multi-Speciality Outpatient Department (OPD) & Healthcare Centre
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-1 max-w-xl mx-auto font-medium">
                      <MapPin className="w-3.5 h-3.5 inline mr-1 text-slate-400" />
                      {confirmedData.hospitalAddress}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">
                      Phone: <span className="font-semibold text-slate-700">+91 12345 67890</span> | 
                      Email: <span className="font-semibold text-slate-700">hms@care.exampe</span> | 
                      Govt Reg: <span className="font-semibold text-slate-700">DL-OPD-2024/9941</span>
                    </p>
                  </div>

                  {/* Official Sub-Banner */}
                  <div className="bg-[#0f8fa8] text-white py-1.5 px-4 my-3 text-center rounded-md flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider">
                    <span>Official Rescheduled Appointment Slip</span>
                    <span>Updated Token Pass</span>
                  </div>

                  {/* 2. TICKET & TOKEN HIGHLIGHT BOX */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-3 bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                    <div className="border-r border-slate-200">
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase block">
                        Ticket Number
                      </span>
                      <span className="text-sm sm:text-base font-black text-slate-900 font-mono">
                        {confirmedData.ticketNumber}
                      </span>
                    </div>

                    <div className="sm:border-r border-slate-200">
                      <span className="text-[9px] sm:text-[10px] font-bold text-[#0f8fa8] uppercase block">
                        New Token Number
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-[#0f8fa8]">
                        #{confirmedData.newTokenNumber}
                      </span>
                    </div>

                    <div className="border-r border-slate-200 pt-2 sm:pt-0">
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase block">
                        Rescheduled At
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-slate-800 block mt-1">
                        {confirmedData.bookingDate}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {confirmedData.smsTime}
                      </span>
                    </div>

                    <div className="pt-2 sm:pt-0">
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase block">
                        Reschedule Fee
                      </span>
                      <span className="text-[11px] sm:text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mt-1">
                        ₹0 (Zero Charge)
                      </span>
                    </div>
                  </div>

                  {/* 3. PATIENT & CLINICAL DATA */}
                  <div className="my-3 space-y-2 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2 border-b border-slate-200">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">
                          Patient Full Name
                        </span>
                        <span className="text-sm font-extrabold text-slate-900">
                          {confirmedData.patientName}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">
                          Patient Age
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                          {confirmedData.patientAge} Years
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2 border-b border-slate-200">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">
                          Registered Mobile Number
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                          +91 {confirmedData.phoneNumber}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">
                          Fee Status
                        </span>
                        <span className="text-xs font-bold text-emerald-700">
                          Already Paid Online (Zero Reschedule Fee)
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2 border-b border-slate-200">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">
                          Consulting Doctor
                        </span>
                        <span className="text-sm font-extrabold text-[#0f8fa8]">
                          {confirmedData.doctorName}
                        </span>
                        <p className="text-[10px] font-medium text-slate-500">
                          {confirmedData.doctorSpecialty} • {confirmedData.doctorQualification}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">
                          Updated Consultation Date & Slot
                        </span>
                        <span className="text-xs font-extrabold text-slate-900">
                          {confirmedData.newDate}
                        </span>
                        <p className="text-[10px] font-bold text-[#0f8fa8]">
                          {confirmedData.sessionText}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2 border-b border-slate-200">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">
                          Transaction Reference
                        </span>
                        <span className="text-xs font-semibold text-slate-700">
                          {confirmedData.referenceId}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">
                          OPD Chamber
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                          Consultation Room 104, 1st Floor OPD Block
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 4. DIGITAL VERIFICATION, SEAL & BARCODE */}
                  <div className="my-3 pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left bg-slate-50/70 p-3 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-1 shrink-0">
                        <QrCode className="w-9 h-9 text-slate-800" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-slate-900 block font-mono">
                          VALIDATED RESCHEDULED TOKEN
                        </span>
                        <span className="text-[9px] text-slate-500 block">
                          Scan at Clinic Reception Terminal to verify updated queue
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="inline-block border border-dashed border-[#0f8fa8] px-3 py-1 rounded bg-[#e0f7fa]/30 text-center">
                        <span className="text-[9px] font-extrabold uppercase text-[#0f8fa8] block">
                          HMS Digital Stamp
                        </span>
                        <span className="text-[10px] font-black text-slate-800 font-mono">
                          UPDATED OPD PASS
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 5. PATIENT GUIDELINES & INSTRUCTIONS */}
                  <div className="mt-3 pt-2 text-[10px] text-slate-500 border-t border-slate-200 space-y-1">
                    <p className="font-bold text-slate-700 uppercase tracking-wide">
                      Important Instructions for Rescheduled Appointment:
                    </p>
                    <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                      <li>
                        Your earlier consultation slot has been released; this updated token pass is now active.
                      </li>
                      <li>
                        Please arrive at the clinic reception 15 minutes prior to your new session slot.
                      </li>
                      <li>
                        Kindly show this updated slip (or SMS on your phone) at the OPD desk.
                      </li>
                      <li>
                        Helpline: +91 12345 67890 quoting Ticket #{confirmedData.ticketNumber}.
                      </li>
                    </ul>
                  </div>

                  {/* Footer note */}
                  <div className="mt-4 pt-2 text-center border-t border-slate-200 text-[9px] text-slate-400">
                    This is an electronically generated OPD appointment reschedule letter issued by Hospital Management System (HMS). No physical signature is required.
                  </div>
                </div>

                {/* Additional Action Buttons */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setOtp(["", "", "", "", "", ""]);
                      setConfirmedData(null);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-700 shadow-xs hover:border-[#4bb1c8] hover:bg-[#e0f7fa]/30 hover:text-[#0f8fa8] hover:shadow-md hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
                  >
                    Reschedule Another Appointment
                  </button>

                  {isModal && onClose && (
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-xs sm:text-sm font-bold text-slate-700 shadow-xs hover:border-[#4bb1c8] hover:bg-[#e0f7fa]/30 hover:text-[#0f8fa8] hover:shadow-md hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
                    >
                      Done / Close
                    </button>
                  )}
                </div>
              </div>

              {/* Right: Instant Mobile SMS Preview Card (4 cols) */}
              <div className="lg:col-span-4 bg-slate-900 rounded-3xl p-4 shadow-2xl border-4 border-slate-800 flex flex-col justify-between w-full max-w-sm mx-auto">
                <div className="flex justify-between items-center px-2 py-1 text-slate-400 text-[10px] font-mono border-b border-slate-800 pb-2 mb-3">
                  <span>{confirmedData.smsTime}</span>
                  <span className="w-10 h-3 bg-slate-800 rounded-full mx-auto"></span>
                  <span>SMS 100%</span>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-center mb-3">
                    <div className="w-9 h-9 rounded-full bg-[#0f8fa8] text-white flex items-center justify-center mx-auto text-xs font-bold mb-1 shadow-md shadow-[#0f8fa8]/40">
                      HMS
                    </div>
                    <span className="text-[12px] font-bold text-slate-100 block">
                      Hospital Management System
                    </span>
                    <span className="text-[9px] text-[#4bb1c8] font-semibold flex items-center justify-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4bb1c8] animate-ping" /> SMS
                      Delivered Just Now
                    </span>
                  </div>

                  <div className="bg-slate-800/90 text-slate-100 rounded-2xl rounded-tl-none p-3.5 border border-slate-700 text-xs leading-relaxed shadow-md">
                    <p className="font-bold text-[#4bb1c8] mb-1.5 text-xs">
                      HMS: Appointment Rescheduled!
                    </p>
                    <div className="text-[11px] text-slate-300 space-y-1">
                      <p>
                        <strong className="text-slate-100">Ticket:</strong>{" "}
                        <span className="font-mono text-amber-300 font-bold">
                          {confirmedData.ticketNumber}
                        </span>
                      </p>
                      <p>
                        <strong className="text-slate-100">New Token:</strong>{" "}
                        <span className="text-emerald-400 font-bold">
                          #{confirmedData.newTokenNumber}
                        </span>
                      </p>
                      <p>
                        <strong className="text-slate-100">Doctor:</strong>{" "}
                        {confirmedData.doctorName}
                      </p>
                      <p>
                        <strong className="text-slate-100">New Date:</strong>{" "}
                        {confirmedData.newDate}
                      </p>
                      <p>
                        <strong className="text-slate-100">Session:</strong>{" "}
                        {confirmedData.sessionText}
                      </p>
                      <p>
                        <strong className="text-slate-100">Fee:</strong> ₹0 (Zero Penalty)
                      </p>
                    </div>
                    <p className="mt-2.5 text-[10px] text-[#4bb1c8] font-medium border-t border-slate-700/60 pt-1.5">
                      Please carry this SMS or printed slip. Clinic: +91 12345 67891
                    </p>
                  </div>
                </div>

                <div className="w-16 h-1 bg-slate-700 rounded-full mx-auto mt-4"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
