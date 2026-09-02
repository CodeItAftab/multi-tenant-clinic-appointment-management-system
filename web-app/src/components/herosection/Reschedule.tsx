"use client";

import React from "react";
import Link from "next/link";
import { 
  HeartPulse, 
  Bone, 
  Baby, 
  Brain, 
  ArrowRight, 
  CalendarClock, 
  RotateCcw, 
  CheckCircle2, 
  ShieldCheck, 
  Stethoscope, 
  Eye, 
  Activity 
} from "lucide-react";

export default function ServicesAndReschedule() {
  const services = [
    {
      icon: HeartPulse,
      title: "Cardiology",
      desc: "Comprehensive heart care including ECG, 2D echo, blood pressure management, and preventive cardiac screening.",
      price: "Starts at ₹500",
      category: "Specialist",
      slug: "cardiology",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      desc: "Expert treatment for bone fractures, joint arthritis, sports injuries, and spine rehabilitation.",
      price: "Starts at ₹600",
      category: "Specialist",
      slug: "orthopedics",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      desc: "Complete child healthcare covering routine vaccinations, growth milestones, and pediatric acute care.",
      price: "Starts at ₹400",
      category: "General",
      slug: "pediatrics",
    },
    {
      icon: Brain,
      title: "Neurology",
      desc: "Advanced diagnosis and specialized treatment for chronic migraines, nerve disorders, and spinal conditions.",
      price: "Starts at ₹700",
      category: "Specialist",
      slug: "neurology",
    },
  ];

  return (
    <section className="bg-slate-50/60 py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-800">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* ================= 1. RESCHEDULE APPOINTMENT BANNER ================= */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white shadow-xl border border-emerald-700/50">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs font-bold uppercase tracking-wider">
                <RotateCcw className="w-3.5 h-3.5 text-emerald-300 animate-spin-slow" />
                Zero-Fee Appointment Rescheduling
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Can’t make it to your scheduled visit?{" "}
                <span className="text-emerald-300">Reschedule in seconds.</span>
              </h2>

              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                Plans changed? No worries. Enter your ticket ID to select a new consultation session with your doctor. Your existing payment is transferred automatically with no penalty.
              </p>

              {/* Feature Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-emerald-100 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>No cancellation or penalty fee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Instant updated Token via SMS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Choose Morning or Evening session</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Secure 6-digit OTP verification</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/reschedule"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-950/30 transition-all duration-200 text-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <CalendarClock className="w-4 h-4" />
                  Reschedule Appointment
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <span className="text-xs text-emerald-200/80 font-medium">
                  Takes less than 1 minute
                </span>
              </div>
            </div>

            {/* Right Column: Visual Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-slate-800/50 backdrop-blur group">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                  alt="Doctor consulting schedule"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating badge over image */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                      <RotateCcw className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-100">Flexible OPD Slots</p>
                      <p className="text-[11px] text-emerald-400">Available 6 Days a Week</p>
                    </div>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-300 font-bold px-2 py-1 rounded-md text-[10px]">
                    100% Online
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= 2. CLINICAL SERVICES SECTION ================= */}
        <div>
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
              Specialized Healthcare
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core Medical <span className="text-emerald-600">Specialties</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Book consultation sessions with certified specialists across diverse medical departments.
            </p>
          </div>

          {/* Responsive Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Category Pill & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition-colors">
                        {service.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {service.desc}
                    </p>
                  </div>

                  {/* Pricing & Booking Link */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Consultation</span>
                      <span className="text-xs sm:text-sm font-extrabold text-emerald-700">
                        {service.price}
                      </span>
                    </div>

                    <Link
                      href={`/booking?dept=${service.slug}`}
                      className="inline-flex items-center gap-1.5 bg-slate-900 group-hover:bg-emerald-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all duration-300 shadow-sm"
                    >
                      Book
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* See All Services CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold px-7 py-3.5 rounded-xl shadow-sm hover:shadow-md transition text-sm"
            >
              Explore All Clinical Services
              <ArrowRight className="w-4 h-4 text-emerald-600" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}