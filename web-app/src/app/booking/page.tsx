"use client"
import React, { useState } from "react";
import { doctors } from "@/utils/doctors";
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
  Share2, 
  ShieldCheck, 
  Smartphone, 
  Sun, 
  Sunset,
  Sparkles,
  Stethoscope,
  Receipt,
  MessageSquare,
  AlertCircle
} from "lucide-react";

// ================= TYPES =================
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
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
}

interface ConfirmedTicket {
  ticketNumber: string;
  tokenNumber: number;
  fullName: string;
  phoneNumber: string;
  doctor: string;
  date: string;
  sessionText: string;
  amountPaid: number;
  bookingTime: string;
}

export default function Booking() {
  // Step tracker: 1 = Form & Session, 2 = Online Payment, 3 = Ticket & Token Confirmed
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Form State
  const [formData, setFormData] = useState<BookingFormState>({
    fullName: "Rahul Sharma",
    phoneNumber: "9876543210",
    age: "28",
    reason: "Fever and headache",
    doctor: "Dr. Anjali Verma",
    preferredDate: new Date().toISOString().split("T")[0],
    session: "morning",
    paymentMethod: "upi",
    upiId: "rahul@okaxis",
  });

  // Generated Ticket Result on Success
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedTicket | null>(null);

  // Selected Doctor Object
  const selectedDoctorObj = doctors.find(d => d.name === formData.doctor) || doctors[0];

  const handleInputChange = (field: keyof BookingFormState, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrorMessage("");
  };

  // Step 1 Validation
  const handleProceedToPayment = () => {
    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter patient full name.");
      return;
    }
    if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.age.trim()) {
      setErrorMessage("Please enter patient age.");
      return;
    }
    if (!formData.preferredDate) {
      setErrorMessage("Please choose a preferred appointment date.");
      return;
    }
    setErrorMessage("");
    setStep(2);
  };

  // Step 2: Payment Execution & Token Generation
  const handlePayAndConfirm = () => {
    setIsProcessingPayment(true);

    // Simulate online payment verification delay
    setTimeout(() => {
      const generatedTicket = `SFC-${Math.floor(100 + Math.random() * 900)}-${Math.floor(10 + Math.random() * 90)}`;
      const generatedToken = Math.floor(5 + Math.random() * 20); // e.g. Token #12

      const ticketData: ConfirmedTicket = {
        ticketNumber: generatedTicket,
        tokenNumber: generatedToken,
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        doctor: formData.doctor,
        date: formData.preferredDate,
        sessionText: formData.session === "morning" ? "Morning Session (9:00 AM – 2:00 PM)" : "Evening Session (3:00 PM – 5:00 PM)",
        amountPaid: selectedDoctorObj.rating,
        bookingTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setConfirmedBooking(ticketData);
      setIsProcessingPayment(false);
      setStep(3);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-800">
      <div className="max-w-3xl mx-auto">
        
        {/* ================= TOP BRANDING ================= */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Online OPD Slot Booking
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Sunrise Family Clinic
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Book session slot • No fixed time waiting • Instant Token via SMS
          </p>

          {/* Stepper Progress */}
          <div className="flex items-center justify-center max-w-md mx-auto mt-6">
            {[
              { num: 1, label: "Details & Session" },
              { num: 2, label: "Online Payment" },
              { num: 3, label: "Ticket & Token" },
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
                  <span className="text-[11px] font-semibold text-slate-500 mt-1.5">
                    {s.label}
                  </span>
                </div>
                {idx < 2 && (
                  <div
                    className={`flex-1 h-1 mx-3 rounded ${
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
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* ================= STEP 1: FORM & SESSION SELECTION ================= */}
        {step === 1 && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold text-slate-900">1. Fill Appointment Details</h2>
              <p className="text-xs text-slate-500 mt-0.5">Please provide patient information and preferred date</p>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Enter patient full name"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (For SMS Token) *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    maxLength={10}
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Age *</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  placeholder="e.g. 28"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Doctor Select */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Select Doctor</label>
                <select
                  value={formData.doctor}
                  onChange={(e) => handleInputChange("doctor", e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {doctors.map((doc) => (
                    <option key={doc.id} value={doc.name}>
                      {doc.name} — {doc.specialty} (₹{doc.rating})
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date *</label>
                <div className="relative">
                  <CalendarIcon className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Problem / Reason */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Problem / Symptoms</label>
                <input
                  type="text"
                  value={formData.reason}
                  onChange={(e) => handleInputChange("reason", e.target.value)}
                  placeholder="e.g. Fever, headache, body pain"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

            </div>

            {/* Session Selection Section (No fixed time, wide consultation session) */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <label className="block text-sm font-bold text-slate-900">
                    2. Choose Session Slot
                  </label>
                  <p className="text-xs text-slate-500">
                    Tokens are called in order during the session window (no fixed minute slot)
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  {formData.preferredDate}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Morning Session Card */}
                <div
                  onClick={() => handleInputChange("session", "morning")}
                  className={`p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition flex items-start justify-between ${
                    formData.session === "morning"
                      ? "border-emerald-600 bg-emerald-50/50 shadow-sm"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mt-0.5">
                      <Sun className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Morning Session</h3>
                      <p className="text-xs font-bold text-slate-700 mt-0.5">9:00 AM – 2:00 PM</p>
                      <span className="inline-block mt-2 text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                        ● Tokens #1 to #25
                      </span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="session"
                    checked={formData.session === "morning"}
                    onChange={() => {}}
                    className="w-4 h-4 text-emerald-600 accent-emerald-600 mt-1"
                  />
                </div>

                {/* Evening Session Card */}
                <div
                  onClick={() => handleInputChange("session", "evening")}
                  className={`p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition flex items-start justify-between ${
                    formData.session === "evening"
                      ? "border-emerald-600 bg-emerald-50/50 shadow-sm"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mt-0.5">
                      <Sunset className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Evening Session</h3>
                      <p className="text-xs font-bold text-slate-700 mt-0.5">3:00 PM – 5:00 PM</p>
                      <span className="inline-block mt-2 text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                        ● Tokens #26 to #40
                      </span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="session"
                    checked={formData.session === "evening"}
                    onChange={() => {}}
                    className="w-4 h-4 text-emerald-600 accent-emerald-600 mt-1"
                  />
                </div>

              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 flex justify-end">
              <button
                onClick={handleProceedToPayment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-xl shadow-md shadow-emerald-200 transition"
              >
                Proceed to Online Payment (₹{selectedDoctorObj.rating}) <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* ================= STEP 2: UPFRONT ONLINE PAYMENT ================= */}
        {step === 2 && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-100 pb-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Make Upfront Payment</h2>
                <p className="text-xs text-slate-500">Fast & secure token reservation</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md">
                Step 2 of 3
              </span>
            </div>

            {/* Order Bill Summary */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Patient</span>
                <span className="font-bold text-slate-900">{formData.fullName} ({formData.age} yrs)</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600">
                <span>Doctor</span>
                <span className="font-bold text-slate-900">{formData.doctor}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600">
                <span>Date & Session</span>
                <span className="font-bold text-slate-900">
                  {formData.preferredDate} • {formData.session === "morning" ? "9 AM–2 PM" : "3 PM–5 PM"}
                </span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-sm">
                <span className="font-extrabold text-slate-900">Total Upfront Amount</span>
                <span className="text-xl font-black text-emerald-700">₹{selectedDoctorObj.rating}</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Select Payment Method</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                
                {/* UPI */}
                <div
                  onClick={() => handleInputChange("paymentMethod", "upi")}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition flex items-center justify-between ${
                    formData.paymentMethod === "upi"
                      ? "border-emerald-600 bg-emerald-50/40 text-emerald-900 font-bold"
                      : "border-slate-200 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs">
                    <Smartphone className="w-4 h-4 text-emerald-600" />
                    <span>UPI (GPay / PhonePe)</span>
                  </div>
                  <input type="radio" checked={formData.paymentMethod === "upi"} onChange={() => {}} className="accent-emerald-600" />
                </div>

                {/* Card */}
                <div
                  onClick={() => handleInputChange("paymentMethod", "card")}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition flex items-center justify-between ${
                    formData.paymentMethod === "card"
                      ? "border-emerald-600 bg-emerald-50/40 text-emerald-900 font-bold"
                      : "border-slate-200 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs">
                    <CreditCard className="w-4 h-4 text-emerald-600" />
                    <span>Debit / Credit Card</span>
                  </div>
                  <input type="radio" checked={formData.paymentMethod === "card"} onChange={() => {}} className="accent-emerald-600" />
                </div>

                {/* NetBanking */}
                <div
                  onClick={() => handleInputChange("paymentMethod", "netbanking")}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition flex items-center justify-between ${
                    formData.paymentMethod === "netbanking"
                      ? "border-emerald-600 bg-emerald-50/40 text-emerald-900 font-bold"
                      : "border-slate-200 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Net Banking</span>
                  </div>
                  <input type="radio" checked={formData.paymentMethod === "netbanking"} onChange={() => {}} className="accent-emerald-600" />
                </div>

              </div>

              {/* UPI Input / Card Input Mock */}
              {formData.paymentMethod === "upi" && (
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                  <label className="font-bold text-slate-700 block">Enter UPI ID / VPA</label>
                  <input
                    type="text"
                    value={formData.upiId}
                    onChange={(e) => handleInputChange("upiId", e.target.value)}
                    placeholder="e.g. mobileNumber@upi"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                  />
                  <p className="text-[11px] text-slate-400">Accepts Google Pay, PhonePe, Paytm, BHIM</p>
                </div>
              )}

              {formData.paymentMethod === "card" && (
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Card Number</label>
                    <input
                      type="text"
                      placeholder="4532 •••• •••• ••••"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Expiry Date</label>
                      <input type="text" placeholder="MM/YY" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white" />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">CVV</label>
                      <input type="password" maxLength={3} placeholder="•••" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation buttons */}
            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900"
              >
                <ArrowLeft className="w-4 h-4" /> Edit Details
              </button>

              <button
                type="button"
                disabled={isProcessingPayment}
                onClick={handlePayAndConfirm}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-7 py-3 rounded-xl shadow-lg shadow-emerald-200 transition disabled:opacity-50"
              >
                {isProcessingPayment ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Verifying Payment...
                  </>
                ) : (
                  <>Pay ₹{selectedDoctorObj.rating} Now & Get Token <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 3: TICKET NUMBER + TOKEN NUMBER & SMS NOTIFICATION ================= */}
        {step === 3 && confirmedBooking && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left 2 Cols: Confirmed Ticket */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-center pb-5 border-b border-slate-100">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">Appointment Confirmed!</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Your spot is reserved at Sunrise Family Clinic.
                  </p>
                </div>

                {/* Big Token & Ticket Badge */}
                <div className="my-5 bg-slate-50 rounded-2xl border border-slate-200 p-4 grid grid-cols-2 gap-4 text-center">
                  <div className="border-r border-slate-200 pr-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Ticket Number</span>
                    <div className="text-lg font-black text-slate-900 mt-1 font-mono">
                      {confirmedBooking.ticketNumber}
                    </div>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-700 uppercase">Your Token Number</span>
                    <div className="text-3xl font-black text-emerald-600">
                      #{confirmedBooking.tokenNumber}
                    </div>
                  </div>
                </div>

                {/* Booking Key Facts */}
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">Patient Name</span>
                    <span className="font-bold text-slate-800">{confirmedBooking.fullName}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">Doctor</span>
                    <span className="font-bold text-slate-800">{confirmedBooking.doctor}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">Date & Session</span>
                    <span className="font-bold text-slate-800">
                      {confirmedBooking.date} • {confirmedBooking.sessionText}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">Payment Status</span>
                    <span className="font-bold text-emerald-700">₹{confirmedBooking.amountPaid} (Paid Online)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">SMS Sent To</span>
                    <span className="font-bold text-slate-800">+91 {confirmedBooking.phoneNumber}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.print()}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 rounded-xl shadow-sm transition"
                >
                  <Download className="w-4 h-4" /> Download / Share Ticket
                </button>
                <button
                  onClick={() => setStep(1)}
                  className="border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold py-3 px-4 rounded-xl transition text-center"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>

            {/* Right Col: Simulated SMS Notification Received on Phone */}
            <div className="bg-slate-900 rounded-3xl p-4 shadow-2xl border-4 border-slate-800 flex flex-col justify-between max-w-xs mx-auto w-full">
              <div className="flex justify-between items-center px-3 py-1 text-slate-400 text-[10px] font-mono border-b border-slate-800 pb-2 mb-3">
                <span>{confirmedBooking.bookingTime}</span>
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

                {/* SMS Message Bubble */}
                <div className="bg-slate-800 text-slate-100 rounded-2xl rounded-tl-none p-3.5 border border-slate-700 text-xs leading-relaxed shadow-md">
                  <p className="font-semibold text-emerald-400 mb-1">
                    Sunrise Clinic: Your appointment is confirmed!
                  </p>
                  <div className="text-[11px] text-slate-300 space-y-0.5">
                    <p><strong>Ticket:</strong> {confirmedBooking.ticketNumber}</p>
                    <p><strong>Token:</strong> #{confirmedBooking.tokenNumber}</p>
                    <p><strong>Doctor:</strong> {confirmedBooking.doctor}</p>
                    <p><strong>Date:</strong> {confirmedBooking.date}</p>
                    <p><strong>Session:</strong> {formData.session === "morning" ? "9 AM–2 PM" : "3 PM–5 PM"}</p>
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