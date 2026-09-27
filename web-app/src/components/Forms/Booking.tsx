"use client";

import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { doctors, Doctor } from "@/utils/doctorsData";
import {
  User,
  Phone,
  Calendar as CalendarIcon,
  Clock,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Download,
  Printer,
  ShieldCheck,
  Smartphone,
  Sun,
  Sunset,
  AlertCircle,
  Stethoscope,
  Activity,
  FileText,
  MapPin,
  Building2,
  Sparkles,
  QrCode,
  Check,
} from "lucide-react";

export interface BookingProps {
  preselectedDoctor?: Doctor | null;
  onClose?: () => void;
  isModal?: boolean;
}

interface BookingFormState {
  fullName: string;
  phoneNumber: string;
  age: string;
  reason: string;
  doctor: string;
  preferredDate: string;
  session: "morning" | "evening";
  paymentMethod: "upi" | "card" | "netbanking";
  upiId?: string;
}

interface ConfirmedTicket {
  ticketNumber: string;
  tokenNumber: number;
  fullName: string;
  phoneNumber: string;
  age: string;
  reason: string;
  doctor: string;
  doctorSpecialty: string;
  doctorQualification: string;
  date: string;
  sessionText: string;
  sessionType: "morning" | "evening";
  amountPaid: number;
  paymentMethod: string;
  bookingTime: string;
  bookingDate: string;
  hospitalName: string;
  hospitalAddress: string;
  hospitalContact: string;
  referenceId: string;
}

export default function Booking({
  preselectedDoctor,
  onClose,
  isModal = false,
}: BookingProps = {}) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const receiptRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<BookingFormState>({
    fullName: "",
    phoneNumber: "",
    age: "",
    reason: "",
    doctor: preselectedDoctor?.name || doctors[0]?.name || "",
    preferredDate: new Date().toISOString().split("T")[0],
    session: "morning",
    paymentMethod: "upi",
    upiId: "",
  });

  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedTicket | null>(null);

  useEffect(() => {
    if (preselectedDoctor) {
      setFormData((prev) => ({ ...prev, doctor: preselectedDoctor.name }));
    }
  }, [preselectedDoctor]);

  const selectedDoctorObj = doctors.find((d) => d.name === formData.doctor) || doctors[0];

  const handleInputChange = (field: keyof BookingFormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMessage("");
  };

  const handleProceedToPayment = () => {
    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter patient full name.");
      return;
    }
    if (!formData.phoneNumber.trim() || formData.phoneNumber.replace(/\D/g, "").length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.age.trim() || Number(formData.age) <= 0 || Number(formData.age) > 120) {
      setErrorMessage("Please enter a valid patient age (1 - 120).");
      return;
    }
    if (!formData.preferredDate) {
      setErrorMessage("Please choose a preferred appointment date.");
      return;
    }

    setErrorMessage("");
    setStep(2);
  };

  const handlePayAndConfirm = () => {
    setIsProcessingPayment(true);

    setTimeout(() => {
      const generatedTicket = `SFC-${Math.floor(100 + Math.random() * 900)}-${Math.floor(
        10 + Math.random() * 90
      )}`;
      const generatedToken = Math.floor(4 + Math.random() * 22);
      const now = new Date();

      setConfirmedBooking({
        ticketNumber: generatedTicket,
        tokenNumber: generatedToken,
        fullName: formData.fullName.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        age: formData.age.trim(),
        reason: formData.reason.trim() || "General Consultation / Routine OPD Checkup",
        doctor: formData.doctor,
        doctorSpecialty: selectedDoctorObj?.specialty || "General Medicine",
        doctorQualification: selectedDoctorObj?.qualification || "MBBS",
        date: formData.preferredDate,
        sessionText:
          formData.session === "morning"
            ? "Morning Session (9:00 AM – 2:00 PM)"
            : "Evening Session (3:00 PM – 5:00 PM)",
        sessionType: formData.session,
        amountPaid: parseFeesToNumber(selectedDoctorObj?.fees),
        paymentMethod:
          formData.paymentMethod === "upi"
            ? "UPI (Instant Online)"
            : formData.paymentMethod === "card"
              ? "Debit / Credit Card"
              : "Net Banking",
        bookingTime: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true }),
        bookingDate: now.toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        hospitalName: "Hospital Management System (HMS)",
        hospitalAddress: "Dehri-on-sone, Near Bus Stand Chowk, Rohtas, Bihar 821308",
        hospitalContact: "+91 12345 67890 | hms@care.exampe",
        referenceId: `TXN-HMS-${Math.floor(100000 + Math.random() * 900000)}`,
      });

      setIsProcessingPayment(false);
      setStep(3);
    }, 1100);
  };

  // High-Resolution Print / Download Handler via react-to-print
  const handlePrintSlip = useReactToPrint({
    contentRef: receiptRef,
    documentTitle: confirmedBooking
      ? `Appointment-Letter-HMS-${confirmedBooking.ticketNumber}`
      : "Appointment-Letter-HMS",
  });

  return (
    <div className={`w-full bg-white font-sans antialiased text-slate-800 ${isModal ? "p-0 mb-0" : "rounded-2xl mb-5"}`}>
      <div className={`max-w-4xl mx-auto ${isModal ? "px-1 sm:px-3 py-2 sm:py-4" : "px-4 py-8 sm:px-6 lg:px-8"}`}>

        {/* ================= TOP BRANDING (FOR STANDALONE PAGE) ================= */}
        {!isModal && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0f7fa] border border-[#b2ebf2] text-[#0f8fa8] text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#4bb1c8] animate-pulse"></span>
              Online OPD Slot Booking
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hospital Management System (HMS)
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Book your consultation slot • Guaranteed instant digital token via SMS & PDF slip
            </p>
          </div>
        )}

        {/* ================= STEPPER PROGRESS BAR ================= */}
        <div className={`max-w-md mx-auto ${isModal ? "mb-5 mt-1" : "mt-4 mb-8"}`}>
          <div className="flex items-center justify-between relative">
            {[
              { num: 1, label: "Patient & Slot" },
              { num: 2, label: "Review & Pay" },
              { num: 3, label: "Letter & Token" },
            ].map((s, idx) => {
              const isActive = step === s.num;
              const isDone = step > s.num;

              return (
                <React.Fragment key={s.num}>
                  <div className="flex flex-col items-center z-10">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm ${isActive
                          ? "bg-linear-to-r from-[#0f8fa8] to-[#4bb1c8] text-white ring-4 ring-[#e0f7fa] shadow-md shadow-[#4bb1c8]/30 scale-105"
                          : isDone
                            ? "bg-[#0f8fa8] text-white"
                            : "bg-slate-100 text-slate-400 border border-slate-200"
                        }`}
                    >
                      {isDone ? <Check size={16} strokeWidth={3} /> : s.num}
                    </div>
                    <span
                      className={`text-[11px] sm:text-xs font-semibold mt-1.5 transition-colors text-center ${isActive
                          ? "text-[#0f8fa8] font-bold"
                          : isDone
                            ? "text-slate-700"
                            : "text-slate-400"
                        }`}
                    >
                      {s.label}
                    </span>
                  </div>

                  {idx < 2 && (
                    <div className="flex-1 h-1 mx-2 sm:mx-3 -mt-5 rounded-full overflow-hidden bg-slate-100">
                      <div
                        className={`h-full transition-all duration-500 ${step > idx + 1 ? "w-full bg-[#0f8fa8]" : "w-0 bg-transparent"
                          }`}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ================= ERROR BANNER ================= */}
        {errorMessage && (
          <div className="mb-5 p-3.5 sm:p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold flex items-center gap-2.5 animate-[fadeIn_0.2s_ease-out]">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* ================= STEP 1: PATIENT DETAILS & SESSION SLOT ================= */}
        {step === 1 && (
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-4 min-[420px]:p-5 sm:p-7 space-y-6">
            <div className="border-b border-slate-100 pb-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0f8fa8] bg-[#e0f7fa] px-2.5 py-0.5 rounded-md inline-block mb-1">
                  Step 1 of 3
                </span>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  Fill Patient Information & Slot
                </h2>
                <p className="text-xs text-slate-500">
                  Provide patient details and choose your consulting doctor and time
                </p>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Patient Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#4bb1c8] focus:ring-4 focus:ring-[#4bb1c8]/15 transition-all"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Mobile Number (For SMS Token) <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-xs font-bold text-slate-500 pl-1">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="9876543210"
                    className="w-full pl-12 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#4bb1c8] focus:ring-4 focus:ring-[#4bb1c8]/15 transition-all"
                  />
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Patient Age <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min={1}
                    max={120}
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    placeholder="e.g. 29"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#4bb1c8] focus:ring-4 focus:ring-[#4bb1c8]/15 transition-all"
                  />
                  <span className="absolute right-3.5 top-2.5 text-xs text-slate-400 font-semibold">
                    Yrs
                  </span>
                </div>
              </div>

              {/* Select Doctor */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Select Consulting Doctor
                </label>
                <div className="relative">
                  <select
                    value={formData.doctor}
                    onChange={(e) => handleInputChange("doctor", e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-semibold text-slate-800 focus:bg-white focus:outline-none focus:border-[#4bb1c8] focus:ring-4 focus:ring-[#4bb1c8]/15 transition-all cursor-pointer"
                  >
                    {doctors.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} — {doc.specialty} ({doc.fees})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Preferred Appointment Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <CalendarIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-[#4bb1c8] focus:ring-4 focus:ring-[#4bb1c8]/15 transition-all"
                  />
                </div>
              </div>

              {/* Symptoms / Medical Reason */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Problem / Symptoms / Medical Reason
                </label>
                <div className="relative">
                  <Activity className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={formData.reason}
                    onChange={(e) => handleInputChange("reason", e.target.value)}
                    placeholder="e.g. Fever, body pain, routine BP checkup"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#4bb1c8] focus:ring-4 focus:ring-[#4bb1c8]/15 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Session Slot Picker */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <label className="block text-sm font-bold text-slate-900">
                    Choose OPD Consultation Slot
                  </label>
                  <p className="text-xs text-slate-500">
                    Live tokens are announced in sequence during the designated session window
                  </p>
                </div>
                <span className="text-xs font-bold text-[#0f8fa8] bg-[#e0f7fa] px-3 py-1 rounded-lg border border-[#b2ebf2]">
                  {formData.preferredDate}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Morning Session Card */}
                <div
                  onClick={() => handleInputChange("session", "morning")}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex items-start justify-between ${formData.session === "morning"
                      ? "border-[#4bb1c8] bg-linear-to-br from-[#e0f7fa]/60 via-white to-white shadow-md shadow-[#4bb1c8]/15 ring-2 ring-[#4bb1c8]/20"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mt-0.5 shrink-0">
                      <Sun className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm">Morning Session</h3>
                      <p className="text-xs font-bold text-slate-700 mt-0.5">
                        9:00 AM – 2:00 PM
                      </p>
                      <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold text-[#0f8fa8] bg-[#e0f7fa] px-2.5 py-0.5 rounded-full">
                        ● Tokens #1 to #25 Available
                      </span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="session"
                    checked={formData.session === "morning"}
                    onChange={() => { }}
                    className="w-4 h-4 accent-[#4bb1c8] mt-1 cursor-pointer"
                  />
                </div>

                {/* Evening Session Card */}
                <div
                  onClick={() => handleInputChange("session", "evening")}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex items-start justify-between ${formData.session === "evening"
                      ? "border-[#4bb1c8] bg-linear-to-br from-[#e0f7fa]/60 via-white to-white shadow-md shadow-[#4bb1c8]/15 ring-2 ring-[#4bb1c8]/20"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mt-0.5 shrink-0">
                      <Sunset className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm">Evening Session</h3>
                      <p className="text-xs font-bold text-slate-700 mt-0.5">
                        3:00 PM – 5:00 PM
                      </p>
                      <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        ● Tokens #26 to #40 Available
                      </span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="session"
                    checked={formData.session === "evening"}
                    onChange={() => { }}
                    className="w-4 h-4 accent-[#4bb1c8] mt-1 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Proceed Action Button */}
            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero queue waiting • Instant slot reservation</span>
              </div>

              <button
                type="button"
                onClick={handleProceedToPayment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-linear-to-r from-[#0f8fa8] via-[#33b6d3] to-[#4bb1c8] hover:from-[#0d7d93] hover:to-[#389cb3] text-white text-xs sm:text-sm font-extrabold px-8 py-3.5 rounded-xl shadow-lg shadow-[#4bb1c8]/25 hover:shadow-xl hover:shadow-[#4bb1c8]/35 hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
              >
                Proceed to Payment ({selectedDoctorObj.fees}){" "}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 2: REVIEW & ONLINE PAYMENT ================= */}
        {step === 2 && (
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-4 min-[420px]:p-5 sm:p-7 space-y-6">
            <div className="border-b border-slate-100 pb-3.5 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0f8fa8] bg-[#e0f7fa] px-2.5 py-0.5 rounded-md inline-block mb-1">
                  Step 2 of 3
                </span>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  Review & Online Payment
                </h2>
                <p className="text-xs text-slate-500">
                  Confirm reservation details and pay upfront consultation fee
                </p>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-bold text-slate-400 block uppercase">
                  Consultation Fee
                </span>
                <span className="text-xl sm:text-2xl font-black text-[#0f8fa8]">
                  {selectedDoctorObj.fees}
                </span>
              </div>
            </div>

            {/* Summary Box */}
            <div className="bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-2.5">
              <div className="flex justify-between items-center text-xs sm:text-sm text-slate-600 pb-2 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Patient Details</span>
                <span className="font-bold text-slate-900">
                  {formData.fullName} ({formData.age} Yrs) • +91 {formData.phoneNumber}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm text-slate-600 pb-2 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Doctor & Specialty</span>
                <span className="font-bold text-slate-900">
                  {formData.doctor} ({selectedDoctorObj.specialty})
                </span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm text-slate-600 pb-2 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Date & Slot</span>
                <span className="font-bold text-[#0f8fa8]">
                  {formData.preferredDate} •{" "}
                  {formData.session === "morning"
                    ? "Morning (9:00 AM – 2:00 PM)"
                    : "Evening (3:00 PM – 5:00 PM)"}
                </span>
              </div>
              {formData.reason && (
                <div className="flex justify-between items-center text-xs text-slate-600 pb-2 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Chief Complaint</span>
                  <span className="font-semibold text-slate-800">{formData.reason}</span>
                </div>
              )}
              <div className="pt-2 flex justify-between items-center text-sm sm:text-base">
                <span className="font-extrabold text-slate-900">Total Upfront Amount</span>
                <span className="text-xl sm:text-2xl font-black text-[#0f8fa8]">
                  {selectedDoctorObj.fees}
                </span>
              </div>
            </div>

            {/* Payment Options */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2.5">
                Choose Payment Method
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div
                  onClick={() => handleInputChange("paymentMethod", "upi")}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition flex items-center justify-between ${formData.paymentMethod === "upi"
                      ? "border-[#4bb1c8] bg-[#e0f7fa]/60 shadow-xs"
                      : "border-slate-200 bg-white"
                    }`}
                >
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                    <Smartphone className="w-4 h-4 text-[#0f8fa8]" />
                    <span>UPI (GPay / PhonePe)</span>
                  </div>
                  <input
                    type="radio"
                    checked={formData.paymentMethod === "upi"}
                    onChange={() => { }}
                    className="accent-[#4bb1c8]"
                  />
                </div>

                <div
                  onClick={() => handleInputChange("paymentMethod", "card")}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition flex items-center justify-between ${formData.paymentMethod === "card"
                      ? "border-[#4bb1c8] bg-[#e0f7fa]/60 shadow-xs"
                      : "border-slate-200 bg-white"
                    }`}
                >
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                    <CreditCard className="w-4 h-4 text-[#0f8fa8]" />
                    <span>Debit / Credit Card</span>
                  </div>
                  <input
                    type="radio"
                    checked={formData.paymentMethod === "card"}
                    onChange={() => { }}
                    className="accent-[#4bb1c8]"
                  />
                </div>

                <div
                  onClick={() => handleInputChange("paymentMethod", "netbanking")}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition flex items-center justify-between ${formData.paymentMethod === "netbanking"
                      ? "border-[#4bb1c8] bg-[#e0f7fa]/60 shadow-xs"
                      : "border-slate-200 bg-white"
                    }`}
                >
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-[#0f8fa8]" />
                    <span>Net Banking</span>
                  </div>
                  <input
                    type="radio"
                    checked={formData.paymentMethod === "netbanking"}
                    onChange={() => { }}
                    className="accent-[#4bb1c8]"
                  />
                </div>
              </div>

              {formData.paymentMethod === "upi" && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
                  <label className="font-bold text-slate-700 block">
                    Enter UPI ID / VPA (Optional for Demo)
                  </label>
                  <input
                    type="text"
                    value={formData.upiId}
                    onChange={(e) => handleInputChange("upiId", e.target.value)}
                    placeholder="e.g. mobileNumber@okaxis / user@upi"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#4bb1c8]"
                  />
                  <p className="text-[11px] text-slate-400">
                    Accepts Google Pay, PhonePe, Paytm, BHIM, Cred & all UPI Apps
                  </p>
                </div>
              )}

              {formData.paymentMethod === "card" && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Card Number</label>
                    <input
                      type="text"
                      placeholder="4532 •••• •••• ••••"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#4bb1c8]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#4bb1c8]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">CVV</label>
                      <input
                        type="password"
                        maxLength={3}
                        placeholder="•••"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#4bb1c8]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-slate-700 shadow-xs hover:border-[#4bb1c8] hover:bg-[#e0f7fa]/30 hover:text-[#0f8fa8] hover:shadow-md hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Edit Details
              </button>

              <button
                type="button"
                disabled={isProcessingPayment}
                onClick={handlePayAndConfirm}
                className="inline-flex items-center gap-2 bg-linear-to-r from-[#0f8fa8] via-[#33b6d3] to-[#4bb1c8] hover:from-[#0d7d93] hover:to-[#389cb3] text-white text-xs sm:text-sm font-extrabold px-7 py-3.5 rounded-xl shadow-lg shadow-[#4bb1c8]/25 hover:shadow-xl hover:shadow-[#4bb1c8]/35 hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out disabled:opacity-60 cursor-pointer"
              >
                {isProcessingPayment ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Processing Payment & Generating Slip...
                  </>
                ) : (
                  <>
                    Pay {selectedDoctorObj.fees} & Generate Appointment Slip{" "}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 3: CONFIRMATION & OFFICIAL APPOINTMENT LETTER ================= */}
        {step === 3 && confirmedBooking && (
          <div className="space-y-6">

            {/* Top Success Banner with Main Action Buttons */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e0f7fa] text-[#0f8fa8] rounded-2xl flex items-center justify-center shrink-0 shadow-xs">
                  <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9 text-[#0f8fa8]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                      Appointment Confirmed!
                    </h2>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Paid Online
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Your appointment letter and token are generated below. An SMS has been dispatched.
                  </p>
                </div>
              </div>

              {/* HIGH-CONVERTING DOWNLOAD BUTTON ("AUR DOWNLOD BUTTON KO AACHA KARO") */}
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handlePrintSlip()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-linear-to-r from-[#0f8fa8] via-[#1aa3bf] to-[#4bb1c8] hover:from-[#0d7d93] hover:to-[#389cb3] text-white font-extrabold text-xs sm:text-sm py-3 px-5 sm:px-6 rounded-xl shadow-lg shadow-[#4bb1c8]/30 hover:shadow-xl hover:shadow-[#4bb1c8]/40 hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
                >
                  <Printer className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  <span>Download / Print Appointment Slip</span>
                </button>
              </div>
            </div>

            {/* Grid Layout: Official Printable Slip Preview + Mobile SMS Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

              {/* Left / Center: Complete Official Medical-Grade Appointment Slip (9 cols) */}
              <div className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <FileText className="w-4 h-4 text-[#0f8fa8]" />
                    <span>Official Appointment Letter Preview</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#0f8fa8] bg-[#e0f7fa] px-2.5 py-0.5 rounded-full">
                    Medical OPD Pass
                  </span>
                </div>

                {/* Printable Document Container (Referenced by receiptRef for 100% vector print fidelity) */}
                <div
                  ref={receiptRef}
                  className="appointment-slip-container bg-white border border-slate-300 rounded-xl p-4 sm:p-6 text-slate-800 shadow-xs relative"
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
                      .appointment-slip-container {
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
                        {confirmedBooking.hospitalName}
                      </h1>
                    </div>
                    <p className="text-[11px] sm:text-xs font-bold text-[#0f8fa8] tracking-wide uppercase">
                      Multi-Speciality Outpatient Department (OPD) & Healthcare Centre
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-1 max-w-xl mx-auto font-medium">
                      <MapPin className="w-3.5 h-3.5 inline mr-1 text-slate-400" />
                      {confirmedBooking.hospitalAddress}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">
                      Phone: <span className="font-semibold text-slate-700">+91 12345 67890</span> |
                      Email: <span className="font-semibold text-slate-700">hms@care.exampe</span> |
                      Govt Reg: <span className="font-semibold text-slate-700">DL-OPD-2024/9941</span>
                    </p>
                  </div>

                  {/* Official Sub-Banner */}
                  <div className="bg-[#0f8fa8] text-white py-1.5 px-4 my-3 text-center rounded-md flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider">
                    <span>Official OPD Appointment Slip</span>
                    <span>Patient Token Pass</span>
                  </div>

                  {/* 2. TICKET & TOKEN HIGHLIGHT BOX ("JO TICKET NUMBER GENERETE HOGA YE SB BHI HONA CHAHIYE") */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-3 bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
                    <div className="border-r border-slate-200">
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase block">
                        Ticket Number
                      </span>
                      <span className="text-sm sm:text-base font-black text-slate-900 font-mono">
                        {confirmedBooking.ticketNumber}
                      </span>
                    </div>

                    <div className="sm:border-r border-slate-200">
                      <span className="text-[9px] sm:text-[10px] font-bold text-[#0f8fa8] uppercase block">
                        Token Number
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-[#0f8fa8]">
                        #{confirmedBooking.tokenNumber}
                      </span>
                    </div>

                    <div className="border-r border-slate-200 pt-2 sm:pt-0">
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase block">
                        Booking Date & Time
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-slate-800 block mt-1">
                        {confirmedBooking.bookingDate}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {confirmedBooking.bookingTime}
                      </span>
                    </div>

                    <div className="pt-2 sm:pt-0">
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase block">
                        Payment Status
                      </span>
                      <span className="text-[11px] sm:text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mt-1">
                        ₹{confirmedBooking.amountPaid} (Paid Online)
                      </span>
                    </div>
                  </div>

                  {/* 3. PATIENT & CLINICAL DATA ("USHME MAINE JO BHI DATA FILL KIYA HAI O HONA CHAHIYE") */}
                  <div className="my-3 space-y-2 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2 border-b border-slate-200">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">
                          Patient Full Name
                        </span>
                        <span className="text-sm font-extrabold text-slate-900">
                          {confirmedBooking.fullName}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">
                          Patient Age & Gender
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                          {confirmedBooking.age} Years
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2 border-b border-slate-200">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">
                          Registered Mobile Number
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                          +91 {confirmedBooking.phoneNumber}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">
                          Chief Complaint / Reason for Visit
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                          {confirmedBooking.reason}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2 border-b border-slate-200">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">
                          Consulting Doctor
                        </span>
                        <span className="text-sm font-extrabold text-[#0f8fa8]">
                          {confirmedBooking.doctor}
                        </span>
                        <p className="text-[10px] font-medium text-slate-500">
                          {confirmedBooking.doctorSpecialty} • {confirmedBooking.doctorQualification}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">
                          Consultation Date & Slot Window
                        </span>
                        <span className="text-xs font-extrabold text-slate-900">
                          {confirmedBooking.date}
                        </span>
                        <p className="text-[10px] font-bold text-[#0f8fa8]">
                          {confirmedBooking.sessionText}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2 border-b border-slate-200">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">
                          Payment Mode & Ref
                        </span>
                        <span className="text-xs font-semibold text-slate-700">
                          {confirmedBooking.paymentMethod} • Ref: {confirmedBooking.referenceId}
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
                          VALIDATED DIGITAL TOKEN
                        </span>
                        <span className="text-[9px] text-slate-500 block">
                          Scan at Clinic Reception Terminal to check live queue
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="inline-block border border-dashed border-[#0f8fa8] px-3 py-1 rounded bg-[#e0f7fa]/30 text-center">
                        <span className="text-[9px] font-extrabold uppercase text-[#0f8fa8] block">
                          HMS Digital Stamp
                        </span>
                        <span className="text-[10px] font-black text-slate-800 font-mono">
                          AUTHORIZED OPD PASS
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 5. PATIENT GUIDELINES & INSTRUCTIONS */}
                  <div className="mt-3 pt-2 text-[10px] text-slate-500 border-t border-slate-200 space-y-1">
                    <p className="font-bold text-slate-700 uppercase tracking-wide">
                      Important Instructions for Patient:
                    </p>
                    <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                      <li>
                        Please arrive at the clinic reception 15 minutes prior to your session time.
                      </li>
                      <li>
                        Tokens are displayed sequentially on the clinic digital monitors in the waiting lounge.
                      </li>
                      <li>
                        Kindly show this slip (or SMS on your phone) at the OPD desk.
                      </li>
                      <li>
                        For assistance or rescheduling, please contact Helpline: +91 12345 67890.
                      </li>
                    </ul>
                  </div>

                  {/* Footer note */}
                  <div className="mt-4 pt-2 text-center border-t border-slate-200 text-[9px] text-slate-400">
                    This is an electronically generated OPD appointment letter issued by Hospital Management System (HMS). No physical signature is required.
                  </div>
                </div>

                {/* Additional Action Buttons */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setConfirmedBooking(null);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-700 shadow-xs hover:border-[#4bb1c8] hover:bg-[#e0f7fa]/30 hover:text-[#0f8fa8] hover:shadow-md hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
                  >
                    Book Another Appointment
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
                  <span>{confirmedBooking.bookingTime}</span>
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
                      HMS: OPD Appointment Confirmed!
                    </p>
                    <div className="text-[11px] text-slate-300 space-y-1">
                      <p>
                        <strong className="text-slate-100">Patient:</strong> {confirmedBooking.fullName} ({confirmedBooking.age}y)
                      </p>
                      <p>
                        <strong className="text-slate-100">Ticket:</strong>{" "}
                        <span className="font-mono text-amber-300 font-bold">
                          {confirmedBooking.ticketNumber}
                        </span>
                      </p>
                      <p>
                        <strong className="text-slate-100">Token:</strong>{" "}
                        <span className="text-emerald-400 font-bold">
                          #{confirmedBooking.tokenNumber}
                        </span>
                      </p>
                      <p>
                        <strong className="text-slate-100">Doctor:</strong> {confirmedBooking.doctor}
                      </p>
                      <p>
                        <strong className="text-slate-100">Date:</strong> {confirmedBooking.date}
                      </p>
                      <p>
                        <strong className="text-slate-100">Session:</strong> {confirmedBooking.sessionText}
                      </p>
                      <p>
                        <strong className="text-slate-100">Fee:</strong> ₹{confirmedBooking.amountPaid} (Paid Online)
                      </p>
                    </div>
                    <p className="mt-2.5 text-[10px] text-[#4bb1c8] font-medium border-t border-slate-700/60 pt-1.5">
                      Please carry this SMS or printed slip. Clinic: +91 12345 67890
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

const parseFeesToNumber = (fees: unknown): number => {
  if (typeof fees === "number") return fees;
  if (typeof fees === "string") {
    const numeric = Number(fees.replace(/[^0-9.]/g, ""));
    return Number.isNaN(numeric) ? 500 : numeric;
  }
  return 500;
};
