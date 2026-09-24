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
    Sparkles,
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

    const [formData, setFormData] = useState<RescheduleFormData>({
        ticketID: "SFC-045-01",
        phone: "9876543210",
        newDate: "2026-05-28",
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

    const handleConfirmReschedule = () => {
        if (!formData.newDate) {
            setErrorMessage("Please pick a new appointment date.");
            return;
        }

        const newGeneratedToken = Math.floor(15 + Math.random() * 10);

        setConfirmedData({
            ticketNumber: formData.ticketID,
            newTokenNumber: newGeneratedToken,
            patientName: "Rahul Sharma",
            doctorName: "Dr. Anjali Verma",
            newDate: formData.newDate,
            sessionText:
                formData.newSession === "morning"
                    ? "9:00 AM – 2:00 PM (Morning)"
                    : "3:00 PM – 5:00 PM (Evening)",
            smsTime: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
        });

        setStep(4);
    };

    const handlePrintReceipt = useReactToPrint({
        contentRef: receiptRef,
        documentTitle: confirmedData
            ? `Receipt-${confirmedData.ticketNumber}-Rescheduled`
            : "Receipt",
    });

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4 font-sans antialiased text-slate-800 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                {/* ================= HEADER & STEPPER ================= */}
                <div className="mb-8 text-center">
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#b2ebf2] bg-[#e0f7fa] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#4bb1c8]">
                        <RotateCcw className="h-3.5 w-3.5" />
                        Flow 2: Reschedule Appointment
                    </div>
                    <h1 className="tracking-tight text-3xl font-extrabold text-slate-900">
                        Sunrise Family Clinic
                    </h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Easily update your consultation slot with zero penalty fees
                    </p>

                    {/* Stepper */}
                    <div className="mx-auto mt-6 flex max-w-lg items-center justify-center">
                        {[
                            { num: 1, label: "Ticket & Phone" },
                            { num: 2, label: "OTP Verification" },
                            { num: 3, label: "New Slot" },
                            { num: 4, label: "Rescheduled" },
                        ].map((s, idx) => (
                            <React.Fragment key={s.num}>
                                <div className="flex flex-col items-center">
                                    <div
                                        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-all ${step === s.num
                                            ? "bg-[#4bb1c8] text-white ring-4 ring-[#e0f7fa]"
                                            : step > s.num
                                                ? "bg-[#e0f7fa] text-[#4bb1c8]"
                                                : "bg-slate-200 text-slate-500"
                                            }`}
                                    >
                                        {step > s.num ? "✓" : s.num}
                                    </div>
                                    <span className="mt-1.5 hidden text-[11px] font-semibold text-slate-500 sm:block">
                                        {s.label}
                                    </span>
                                </div>
                                {idx < 3 && (
                                    <div
                                        className={`mx-2 flex-1 h-1 rounded ${step > s.num ? "bg-[#4bb1c8]" : "bg-slate-200"
                                            }`}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Error Alert */}
                {errorMessage && (
                    <div className="mb-6 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-xs font-semibold text-red-700">
                        + <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
                        <span>{errorMessage}</span>
                    </div>
                )}

                {/* ================= STEP 1 ================= */}
                {step === 1 && (
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <div className="space-y-6">
                            <div className="border-b border-slate-100 pb-4">
                                <h2 className="text-xl font-bold text-slate-900">
                                    1. Enter Ticket & Phone
                                </h2>
                                <p className="mt-0.5 text-xs text-slate-500">
                                    Provide your existing ticket number and registered mobile
                                    number to fetch your booking
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1.5 block text-xs font-bold text-slate-700">
                                        Existing Ticket Number *
                                    </label>
                                    <div className="relative">
                                        <Ticket className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                                        <input
                                            type="text"
                                            value={formData.ticketID}
                                            onChange={(e) => handleInputChange("ticketID", e.target.value)}
                                            placeholder="e.g. SFC-045-01"
                                            className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-3.5 text-sm font-mono outline-none focus:ring-2 focus:ring-[#4bb1c8]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-xs font-bold text-slate-700">
                                        Registered Phone Number *
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                                        <input
                                            type="tel"
                                            maxLength={10}
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange("phone", e.target.value)}
                                            placeholder="e.g. 9876543210"
                                            className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-3.5 text-sm outline-none focus:ring-2 focus:ring-[#4bb1c8]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleSendOTP}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#4bb1c8] px-8 py-3 font-bold text-white shadow-md shadow-[#4bb1c8]/20 transition hover:bg-[#33b6d3] sm:w-auto"
                                >
                                    Send OTP <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ================= STEP 2 ================= */}
                {step === 2 && (
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <div className="space-y-6">
                            <div className="border-b border-slate-100 pb-4 text-center sm:text-left">
                                <h2 className="text-xl font-bold text-slate-900">
                                    2. OTP Verification
                                </h2>
                                <p className="mt-0.5 text-xs text-slate-500">
                                    Enter the 6-digit OTP sent to{" "}
                                    <strong className="text-slate-800">
                                        +91 {formData.phone}
                                    </strong>
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
                                        className="h-12 w-11 rounded-xl border-2 border-slate-200 bg-slate-50 text-center text-xl font-bold text-slate-900 outline-none transition focus:border-[#4bb1c8] focus:bg-white focus:ring-2 focus:ring-[#e0f7fa] sm:h-14 sm:w-13"
                                    />
                                ))}
                            </div>

                            <div className="text-center text-xs text-slate-500">
                                {isResendActive ? (
                                    <button
                                        type="button"
                                        onClick={handleResendOtp}
                                        className="font-bold text-[#4bb1c8] underline hover:text-[#1aa3bf]"
                                    >
                                        Resend OTP Now
                                    </button>
                                ) : (
                                    <span>
                                        Resend OTP in{" "}
                                        <strong className="text-slate-800">
                                            00:{timer < 10 ? `0${timer}` : timer}
                                        </strong>
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center justify-between pt-4">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900"
                                >
                                    <ArrowLeft className="h-4 w-4" /> Change Details
                                </button>

                                <button
                                    type="button"
                                    onClick={handleVerifyOtp}
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#4bb1c8] px-7 py-3 text-xs font-bold text-white shadow-md shadow-[#4bb1c8]/20 transition hover:bg-[#33b6d3]"
                                >
                                    Verify & Choose New Slot{" "}
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ================= STEP 3 ================= */}
                {step === 3 && (
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <div className="space-y-6">
                            <div className="border-b border-slate-100 pb-4">
                                <h2 className="text-xl font-bold text-slate-900">
                                    3. Choose New Date & Session
                                </h2>
                                <p className="mt-0.5 text-xs text-slate-500">
                                    Pick your preferred new date and consultation window (No
                                    additional payment required)
                                </p>
                            </div>

                            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs">
                                <div>
                                    <span className="font-medium text-slate-400">Ticket:</span>
                                    <span className="ml-1 font-mono font-bold text-slate-900">
                                        {formData.ticketID}
                                    </span>
                                </div>
                                <div>
                                    <span className="font-medium text-slate-400">Patient:</span>
                                    <span className="ml-1 font-bold text-slate-900">
                                        Rahul Sharma
                                    </span>
                                </div>
                                <div>
                                    <span className="font-medium text-slate-400">Doctor:</span>
                                    <span className="ml-1 font-bold text-[#4bb1c8]">
                                        Dr. Anjali Verma
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-xs font-bold text-slate-700">
                                    Select New Date *
                                </label>
                                <div className="relative">
                                    <CalendarIcon className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                                    <input
                                        type="date"
                                        value={formData.newDate}
                                        onChange={(e) =>
                                            handleInputChange("newDate", e.target.value)
                                        }
                                        className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-3.5 text-sm outline-none focus:ring-2 focus:ring-[#4bb1c8]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-xs font-bold text-slate-700">
                                    Select Session Window
                                </label>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {/* Morning */}
                                    <div
                                        onClick={() => handleInputChange("newSession", "morning")}
                                        className={`flex cursor-pointer items-start justify-between rounded-2xl border-2 p-4 transition sm:p-5 ${formData.newSession === "morning"
                                            ? "border-[#4bb1c8] bg-[#e0f7fa]/50 shadow-sm"
                                            : "border-slate-200 bg-white hover:border-slate-300"
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                                                <Sun className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold text-slate-900">
                                                    Morning Session
                                                </h3>
                                                <p className="mt-0.5 text-xs font-bold text-slate-700">
                                                    9:00 AM – 2:00 PM
                                                </p>
                                                <span className="mt-1.5 inline-block rounded-full bg-[#e0f7fa] px-2 py-0.5 text-[10px] font-semibold text-[#4bb1c8]">
                                                    ● Tokens #1 to #25
                                                </span>
                                            </div>
                                        </div>
                                        <input
                                            type="radio"
                                            checked={formData.newSession === "morning"}
                                            onChange={() => { }}
                                            className="mt-1 h-4 w-4 accent-[#4bb1c8]"
                                        />
                                    </div>

                                    {/* Evening */}
                                    <div
                                        onClick={() => handleInputChange("newSession", "evening")}
                                        className={`flex cursor-pointer items-start justify-between rounded-2xl border-2 p-4 transition sm:p-5 ${formData.newSession === "evening"
                                            ? "border-[#4bb1c8] bg-[#e0f7fa]/50 shadow-sm"
                                            : "border-slate-200 bg-white hover:border-slate-300"
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                                                <Sunset className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold text-slate-900">
                                                    Evening Session
                                                </h3>
                                                <p className="mt-0.5 text-xs font-bold text-slate-700">
                                                    3:00 PM – 5:00 PM
                                                </p>
                                                <span className="mt-1.5 inline-block rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                                                    ● Tokens #26 to #40
                                                </span>
                                            </div>
                                        </div>
                                        <input
                                            type="radio"
                                            checked={formData.newSession === "evening"}
                                            onChange={() => { }}
                                            className="mt-1 h-4 w-4 accent-[#4bb1c8]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4">
                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900"
                                >
                                    <ArrowLeft className="h-4 w-4" /> Back
                                </button>

                                <button
                                    type="button"
                                    onClick={handleConfirmReschedule}
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#4bb1c8] px-7 py-3 text-xs font-bold text-white shadow-md shadow-[#4bb1c8]/20 transition hover:bg-[#33b6d3]"
                                >
                                    Confirm Reschedule{" "}
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ================= STEP 4 ================= */}
                {step === 4 && confirmedData && (
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {/* Left: Rescheduled Ticket */}
                        <div className="lg:col-span-2 flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                            <div>
                                <div className="border-b border-slate-100 pb-5 text-center">
                                    <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#e0f7fa] text-[#4bb1c8]">
                                        <CheckCircle2 className="h-9 w-9" />
                                    </div>
                                    <h2 className="text-2xl font-black text-slate-900">
                                        Appointment Rescheduled!
                                    </h2>
                                    <p className="mt-0.5 text-xs text-slate-500">
                                        Your appointment has been successfully updated at Sunrise
                                        Family Clinic.
                                    </p>
                                </div>

                                <div className="my-5 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                                    <div className="border-r border-slate-200 pr-2">
                                        <span className="text-[11px] font-bold uppercase text-slate-500">
                                            Ticket Number
                                        </span>
                                        <div className="mt-1 font-mono text-lg font-black text-slate-900">
                                            {confirmedData.ticketNumber}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-[11px] font-bold uppercase text-[#4bb1c8]">
                                            New Token Number
                                        </span>
                                        <div className="text-3xl font-black text-[#4bb1c8]">
                                            #{confirmedData.newTokenNumber}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2 text-xs text-slate-600">
                                    <div className="flex justify-between border-b border-slate-100 py-1.5">
                                        <span className="font-medium text-slate-400">
                                            Patient Name
                                        </span>
                                        <span className="font-bold text-slate-800">
                                            {confirmedData.patientName}
                                        </span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-100 py-1.5">
                                        <span className="font-medium text-slate-400">Doctor</span>
                                        <span className="font-bold text-slate-800">
                                            {confirmedData.doctorName}
                                        </span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-100 py-1.5">
                                        <span className="font-medium text-slate-400">
                                            New Date & Session
                                        </span>
                                        <span className="font-bold text-[#4bb1c8]">
                                            {confirmedData.newDate} • {confirmedData.sessionText}
                                        </span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-100 py-1.5">
                                        <span className="font-medium text-slate-400">
                                            Payment Status
                                        </span>
                                        <span className="font-bold text-slate-800">
                                            Already Paid (No Extra Fee)
                                        </span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-100 py-1.5">
                                        <span className="font-medium text-slate-400">
                                            SMS Confirmation Sent To
                                        </span>
                                        <span className="font-bold text-slate-800">
                                            +91 {formData.phone}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Hidden printable receipt */}
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
                                        <p>
                                            Rescheduled Receipt • {confirmedData.smsTime}
                                        </p>
                                    </div>

                                    <div className="badges">
                                        <div>
                                            <div className="label">TICKET NO.</div>
                                            <div className="value">{confirmedData.ticketNumber}</div>
                                        </div>
                                        <div>
                                            <div className="label">NEW TOKEN NO.</div>
                                            <div className="value">
                                                #{confirmedData.newTokenNumber}
                                            </div>
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
                                        <span className="value">
                                            {confirmedData.newDate} • {confirmedData.sessionText}
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">Payment Status</span>
                                        <span className="value paid">
                                            Already Paid (No Extra Fee)
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className="label">SMS Sent To</span>
                                        <span className="value">+91 {formData.phone}</span>
                                    </div>

                                    <div className="footer center">
                                        Thank you for booking with us.
                                        <br />
                                        Please carry this receipt to your appointment.
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row">
                                <button
                                    onClick={() => handlePrintReceipt()}
                                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#4bb1c8] py-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#33b6d3]"
                                >
                                    <Download className="h-4 w-4" /> Download / Print Updated
                                    Ticket
                                </button>
                                <button
                                    onClick={() => {
                                        setStep(1);
                                        setOtp(["", "", "", "", "", ""]);
                                    }}
                                    className="center rounded-xl border border-slate-200 px-4 py-3 text-center text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                                >
                                    Reschedule Another
                                </button>
                            </div>
                        </div>

                        {/* Right: Phone Mockup */}
                        <div className="mx-auto flex max-w-xs w-full flex-col justify-between rounded-3xl border-4 border-slate-800 bg-slate-900 p-4 shadow-2xl">
                            <div className="mb-3 flex justify-between items-center border-b border-slate-800 px-3 py-1 text-[10px] font-mono text-slate-400 pb-2">
                                <span>{confirmedData.smsTime}</span>
                                <span className="mx-auto h-3 w-10 rounded-full bg-slate-800"></span>
                                <span>SMS 100%</span>
                            </div>

                            <div className="flex-1 flex flex-col justify-center">
                                <div className="mb-3 text-center">
                                    <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#4bb1c8] text-xs font-bold text-white">
                                        SC
                                    </div>
                                    <span className="block text-[11px] font-bold text-slate-200">
                                        Sunrise Clinic
                                    </span>
                                    <span className="font-medium text-[9px] text-[#4bb1c8]">
                                        SMS Delivered Just Now
                                    </span>
                                </div>

                                <div className="rounded-2xl rounded-tl-none border border-slate-700 bg-slate-800 p-3.5 text-xs leading-relaxed text-slate-100 shadow-md">
                                    <p className="mb-1 font-semibold text-[#4bb1c8]">
                                        Sunrise Clinic: Your appointment has been rescheduled.
                                    </p>
                                    <div className="space-y-0.5 text-[11px] text-slate-300">
                                        <p>
                                            <strong>Ticket:</strong> {confirmedData.ticketNumber}
                                        </p>
                                        <p>
                                            <strong>New Date:</strong> {confirmedData.newDate}
                                        </p>
                                        <p>
                                            <strong>Session: </strong>
                                            {formData.newSession === "morning"
                                                ? "9 AM–2 PM"
                                                : "3 PM–5 PM"}
                                        </p>
                                        <p>
                                            <strong>Token:</strong> #{confirmedData.newTokenNumber}
                                        </p>
                                    </div>
                                    <p className="mt-2 text-[10px] font-medium text-[#4bb1c8]">
                                        Thank you!
                                    </p>
                                </div>
                            </div>

                            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-slate-700"></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}