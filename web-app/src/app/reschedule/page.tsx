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
  RotateCcw, 
  ShieldCheck, 
  AlertCircle,
  Clock,
  Sparkles
} from "lucide-react";

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
  patientName: string;
  newDate: string;
  sessionText: string;
  smsTime: string;
}

export default function ReschedulePage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Form State
  const [formData, setFormData] = useState<RescheduleFormData>({
    ticketID: "SFC-045-01",
    phone: "9876543210",
    newDate: "2026-05-28",
    newSession: "morning",
  });

  // Step 2 OTP State (6 Digits)
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState<number>(30);
  const [isResendActive, setIsResendActive] = useState<boolean>(false);
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Step 4 Confirmed Data
  const [confirmedData, setConfirmedData] = useState<RescheduleResult | null>(null);

  // Ref for the printable receipt block
  const receiptRef = useRef<HTMLDivElement>(null);

  // OTP Countdown Timer
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

  // --- Step 1 Validation ---
  const handleSendOTP = () => {
    if (!formData.ticketID.trim()) {
      setErrorMessage("Please enter your existing Ticket Number (e.g. SFC-045-01).");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage("Please enter your registered 10-digit phone number.");
      return;
    }
    setErrorMessage("");
    setTimer(30);
    setIsResendActive(false);
    setOtp(["", "", "", "", "", ""]);
    setStep(2);
  };

  // --- Step 2 OTP Input Handling ---
  const handleOtpChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    setErrorMessage("");

    // Auto-focus next input
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
      setErrorMessage("Please enter the complete 6-digit OTP.");
      return;
    }
    setErrorMessage("");
    setStep(3);
  };

  const handleResendOtp = () => {
    setTimer(30);
    setIsResendActive(false);
    setOtp(["", "", "", "", "", ""]);
    setErrorMessage("");
  };

  // --- Step 3 Confirm Reschedule ---
  const handleConfirmReschedule = () => {
    if (!formData.newDate) {
      setErrorMessage("Please pick a new appointment date.");
      return;
    }

    const newGeneratedToken = Math.floor(15 + Math.random() * 10); // e.g. Token #17

    setConfirmedData({
      ticketNumber: formData.ticketID,
      newTokenNumber: newGeneratedToken,
      patientName: "Rahul Sharma",
      doctorName: "Dr. Anjali Verma",
      newDate: formData.newDate,
      sessionText: formData.newSession === "morning" ? "9:00 AM – 2:00 PM (Morning)" : "3:00 PM – 5:00 PM (Evening)",
      smsTime: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    });

    setStep(4);
  };

  // Print only the receipt block, styled like a billing slip
  const handlePrintReceipt = useReactToPrint({
    contentRef: receiptRef,
    documentTitle: confirmedData ? `Receipt-${confirmedData.ticketNumber}-Rescheduled` : "Receipt",
  });

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-800">
      <div className="max-w-3xl mx-auto">
        
        {/* ================= HEADER & STEPPER ================= */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
            <RotateCcw className="w-3.5 h-3.5" />
            Flow 2: Reschedule Appointment
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Sunrise Family Clinic
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Easily update your consultation slot with zero penalty fees
          </p>

          {/* Stepper Progress (4 Steps) */}
          <div className="flex items-center justify-center max-w-lg mx-auto mt-6">
            {[
              { num: 1, label: "Ticket & Phone" },
              { num: 2, label: "OTP Verification" },
              { num: 3, label: "New Slot" },
              { num: 4, label: "Rescheduled" },
            ].map((s, idx) => (
              <React.Fragment key={s.num}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      step === s.num
                        ? "bg-emerald-600 text-white ring-4 ring-emerald-100"
                        : step > s.num
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {step > s.num ? "✓" : s.num}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 mt-1.5 hidden sm:block">
                    {s.label}
                  </span>
                </div>
                {idx < 3 && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded ${
                      step > s.num ? "bg-emerald-500" : "bg-slate-200"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* ================= STEP 1: ENTER TICKET & PHONE ================= */}
        {step === 1 && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold text-slate-900">1. Enter Ticket & Phone</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Provide your existing ticket number and registered mobile number to fetch your booking
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Ticket ID */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Existing Ticket Number *</label>
                <div className="relative">
                  <Ticket className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={formData.ticketID}
                    onChange={(e) => handleInputChange("ticketID", e.target.value)}
                    placeholder="e.g. SFC-045-01"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Registered Phone Number *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleSendOTP}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-xl shadow-md shadow-emerald-200 transition"
              >
                Send OTP <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 2: OTP VERIFICATION ================= */}
        {step === 2 && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-100 pb-4 text-center sm:text-left">
              <h2 className="text-xl font-bold text-slate-900">2. OTP Verification</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Enter the 6-digit OTP sent to <strong className="text-slate-800">+91 {formData.phone}</strong>
              </p>
            </div>

            {/* 6 Digit Inputs */}
            <div className="flex justify-center items-center gap-2 sm:gap-3 my-6">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => { otpInputRefs.current[idx] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                  className="w-11 h-12 sm:w-13 sm:h-14 text-center text-xl font-bold rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 focus:outline-none transition"
                />
              ))}
            </div>

            {/* Resend OTP & Countdown */}
            <div className="text-center text-xs text-slate-500">
              {isResendActive ? (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="font-bold text-emerald-600 hover:text-emerald-700 underline"
                >
                  Resend OTP Now
                </button>
              ) : (
                <span>
                  Resend OTP in <strong className="text-slate-800">00:{timer < 10 ? `0${timer}` : timer}</strong>
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900"
              >
                <ArrowLeft className="w-4 h-4" /> Change Details
              </button>

              <button
                type="button"
                onClick={handleVerifyOtp}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-7 py-3 rounded-xl shadow-md shadow-emerald-200 transition"
              >
                Verify & Choose New Slot <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 3: CHOOSE NEW DATE & SESSION ================= */}
        {step === 3 && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold text-slate-900">3. Choose New Date & Session</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Pick your preferred new date and consultation window (No additional payment required)
              </p>
            </div>

            {/* Patient Context Badge */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400 font-medium">Ticket:</span>
                <span className="font-bold text-slate-900 font-mono ml-1">{formData.ticketID}</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium">Patient:</span>
                <span className="font-bold text-slate-900 ml-1">Rahul Sharma</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium">Doctor:</span>
                <span className="font-bold text-emerald-700 ml-1">Dr. Anjali Verma</span>
              </div>
            </div>

            {/* Pick New Date */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Select New Date *</label>
              <div className="relative">
                <CalendarIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="date"
                  value={formData.newDate}
                  onChange={(e) => handleInputChange("newDate", e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Pick Session */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Select Session Window</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Morning Session */}
                <div
                  onClick={() => handleInputChange("newSession", "morning")}
                  className={`p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition flex items-start justify-between ${
                    formData.newSession === "morning"
                      ? "border-emerald-600 bg-emerald-50/50 shadow-sm"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                      <Sun className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Morning Session</h3>
                      <p className="text-xs font-bold text-slate-700 mt-0.5">9:00 AM – 2:00 PM</p>
                      <span className="inline-block mt-1.5 text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                        ● Tokens #1 to #25
                      </span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    checked={formData.newSession === "morning"}
                    onChange={() => {}}
                    className="w-4 h-4 text-emerald-600 accent-emerald-600 mt-1"
                  />
                </div>

                {/* Evening Session */}
                <div
                  onClick={() => handleInputChange("newSession", "evening")}
                  className={`p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition flex items-start justify-between ${
                    formData.newSession === "evening"
                      ? "border-emerald-600 bg-emerald-50/50 shadow-sm"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                      <Sunset className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Evening Session</h3>
                      <p className="text-xs font-bold text-slate-700 mt-0.5">3:00 PM – 5:00 PM</p>
                      <span className="inline-block mt-1.5 text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                        ● Tokens #26 to #40
                      </span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    checked={formData.newSession === "evening"}
                    onChange={() => {}}
                    className="w-4 h-4 text-emerald-600 accent-emerald-600 mt-1"
                  />
                </div>

              </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>

              <button
                type="button"
                onClick={handleConfirmReschedule}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-7 py-3 rounded-xl shadow-md shadow-emerald-200 transition"
              >
                Confirm Reschedule <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 4: RESCHEDULE CONFIRMED & TICKET GENERATION ================= */}
        {step === 4 && confirmedData && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left 2 Cols: Rescheduled Ticket */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-center pb-5 border-b border-slate-100">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">Appointment Rescheduled!</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Your appointment has been successfully updated at Sunrise Family Clinic.
                  </p>
                </div>

                {/* Token & Ticket Badge */}
                <div className="my-5 bg-slate-50 rounded-2xl border border-slate-200 p-4 grid grid-cols-2 gap-4 text-center">
                  <div className="border-r border-slate-200 pr-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Ticket Number</span>
                    <div className="text-lg font-black text-slate-900 mt-1 font-mono">
                      {confirmedData.ticketNumber}
                    </div>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-700 uppercase">New Token Number</span>
                    <div className="text-3xl font-black text-emerald-600">
                      #{confirmedData.newTokenNumber}
                    </div>
                  </div>
                </div>

                {/* Reschedule Details */}
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">Patient Name</span>
                    <span className="font-bold text-slate-800">{confirmedData.patientName}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">Doctor</span>
                    <span className="font-bold text-slate-800">{confirmedData.doctorName}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">New Date & Session</span>
                    <span className="font-bold text-emerald-700">
                      {confirmedData.newDate} • {confirmedData.sessionText}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">Payment Status</span>
                    <span className="font-bold text-slate-800">Already Paid (No Extra Fee)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">SMS Confirmation Sent To</span>
                    <span className="font-bold text-slate-800">+91 {formData.phone}</span>
                  </div>
                </div>
              </div>

              {/* Hidden printable receipt (billing-slip style) */}
              <div style={{ display: "none" }}>
                <div ref={receiptRef} className="receipt-print">
                  <style>{`
                    .receipt-print {
                      font-family: 'Courier New', monospace;
                      width: 300px;
                      margin: 0 auto;
                      padding: 16px;
                      color: #1e293b;
                      font-size: 12px;
                    }
                    .receipt-print .center { text-align: center; }
                    .receipt-print .header {
                      border-bottom: 2px dashed #94a3b8;
                      padding-bottom: 10px;
                      margin-bottom: 10px;
                    }
                    .receipt-print .header h1 { font-size: 15px; letter-spacing: 1px; }
                    .receipt-print .header p { font-size: 10px; color: #64748b; margin-top: 2px; }
                    .receipt-print .badges {
                      display: flex;
                      justify-content: space-between;
                      border-bottom: 2px dashed #94a3b8;
                      padding-bottom: 10px;
                      margin-bottom: 10px;
                    }
                    .receipt-print .badges div { text-align: center; flex: 1; }
                    .receipt-print .badges .label { font-size: 9px; color: #64748b; }
                    .receipt-print .badges .value { font-size: 16px; font-weight: bold; }
                    .receipt-print .row {
                      display: flex;
                      justify-content: space-between;
                      padding: 5px 0;
                      border-bottom: 1px dotted #cbd5e1;
                    }
                    .receipt-print .label { color: #64748b; }
                    .receipt-print .value { font-weight: bold; text-align: right; }
                    .receipt-print .paid { color: #047857; }
                    .receipt-print .footer {
                      border-top: 2px dashed #94a3b8;
                      margin-top: 12px;
                      padding-top: 10px;
                      font-size: 10px;
                      color: #64748b;
                    }
                  `}</style>

                  <div className="header center">
                    <h1>SUNRISE FAMILY CLINIC</h1>
                    <p>Rescheduled Receipt • {confirmedData.smsTime}</p>
                  </div>

                  <div className="badges">
                    <div>
                      <div className="label">TICKET NO.</div>
                      <div className="value">{confirmedData.ticketNumber}</div>
                    </div>
                    <div>
                      <div className="label">NEW TOKEN NO.</div>
                      <div className="value">#{confirmedData.newTokenNumber}</div>
                    </div>
                  </div>

                  <div className="row">
                    <span className="label">Patient Name</span>
                    <span className="value">{confirmedData.patientName}</span>
                  </div>
                  <div className="row">
                    <span className="label">Doctor</span>
                    <span className="value">{confirmedData.doctorName}</span>
                  </div>
                  <div className="row">
                    <span className="label">New Date &amp; Session</span>
                    <span className="value">{confirmedData.newDate} &bull; {confirmedData.sessionText}</span>
                  </div>
                  <div className="row">
                    <span className="label">Payment Status</span>
                    <span className="value paid">Already Paid (No Extra Fee)</span>
                  </div>
                  <div className="row">
                    <span className="label">SMS Sent To</span>
                    <span className="value">+91 {formData.phone}</span>
                  </div>

                  <div className="footer center">
                    Thank you for booking with us.<br />
                    Please carry this receipt to your appointment.
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handlePrintReceipt()}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 rounded-xl shadow-sm transition"
                >
                  <Download className="w-4 h-4" /> Download / Print Updated Ticket
                </button>
                <button
                  onClick={() => {
                    setStep(1);
                    setOtp(["", "", "", "", "", ""]);
                  }}
                  className="border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold py-3 px-4 rounded-xl transition text-center"
                >
                  Reschedule Another
                </button>
              </div>
            </div>

            {/* Right Col: Phone Mockup with SMS Notification */}
            <div className="bg-slate-900 rounded-3xl p-4 shadow-2xl border-4 border-slate-800 flex flex-col justify-between max-w-xs mx-auto w-full">
              <div className="flex justify-between items-center px-3 py-1 text-slate-400 text-[10px] font-mono border-b border-slate-800 pb-2 mb-3">
                <span>{confirmedData.smsTime}</span>
                <span className="w-10 h-3 bg-slate-800 rounded-full mx-auto"></span>
                <span>SMS 100%</span>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="text-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xs font-bold mb-1">
                    SC
                  </div>
                  <span className="text-[11px] font-bold text-slate-200 block">Sunrise Clinic</span>
                  <span className="text-[9px] text-emerald-400 font-medium">SMS Delivered Just Now</span>
                </div>

                {/* SMS Bubble */}
                <div className="bg-slate-800 text-slate-100 rounded-2xl rounded-tl-none p-3.5 border border-slate-700 text-xs leading-relaxed shadow-md">
                  <p className="font-semibold text-emerald-400 mb-1">
                    Sunrise Clinic: Your appointment has been rescheduled.
                  </p>
                  <div className="text-[11px] text-slate-300 space-y-0.5">
                    <p><strong>Ticket:</strong> {confirmedData.ticketNumber}</p>
                    <p><strong>New Date:</strong> {confirmedData.newDate}</p>
                    <p><strong>Session:</strong> {formData.newSession === "morning" ? "9 AM–2 PM" : "3 PM–5 PM"}</p>
                    <p><strong>Token:</strong> #{confirmedData.newTokenNumber}</p>
                  </div>
                  <p className="mt-2 text-[10px] text-emerald-300 font-medium">Thank you!</p>
                </div>
              </div>

              <div className="w-16 h-1 bg-slate-700 rounded-full mx-auto mt-4"></div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}