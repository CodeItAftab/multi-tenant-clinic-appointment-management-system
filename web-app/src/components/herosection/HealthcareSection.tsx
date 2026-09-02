"use client"
import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  FileText,
  Activity,
  Pill,
  ShieldCheck,
  Clock,
  Star,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  PhoneCall,
  Search
} from "lucide-react";

// HMS Features Data
const hmsFeatures = [
  {
    id: 1,
    icon: <Calendar className="w-6 h-6 text-emerald-600" />,
    title: "Smart Scheduling & Queue Management",
    description: "Real-time doctor slot availability, instant token generation, and reduced waiting times with live queue tracking.",
    tag: "Patient Flow"
  },
  {
    id: 2,
    icon: <FileText className="w-6 h-6 text-emerald-600" />,
    title: "Centralized Digital Health Records (EHR/EMR)",
    description: "Encrypted, HIPAA-compliant patient medical histories, previous prescriptions, and lab reports accessible anywhere.",
    tag: "Cloud Records"
  },
  {
    id: 3,
    icon: <Activity className="w-6 h-6 text-emerald-600" />,
    title: "24/7 Emergency & Bed Management",
    description: "Real-time tracking of ICU beds, rapid ambulance dispatch integration, and immediate emergency doctor alerts.",
    tag: "Critical Care"
  },
  {
    id: 4,
    icon: <Pill className="w-6 h-6 text-emerald-600" />,
    title: "Integrated Pharmacy & Diagnostics",
    description: "Direct e-prescriptions sent to hospital pharmacy, automated stock updates, and door-step lab sample collection.",
    tag: "Diagnostic & Meds"
  },
  {
    id: 5,
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    title: "Cashless Insurance & Paperless Billing",
    description: "Instant claim verification across major insurance partners with transparent, itemized digital receipts.",
    tag: "Billing"
  },
  {
    id: 6,
    icon: <Clock className="w-6 h-6 text-emerald-600" />,
    title: "Teleconsultation & Remote Monitoring",
    description: "HD video consultations, automated medicine reminder push alerts, and post-discharge recovery follow-ups.",
    tag: "Telehealth"
  }
];

// Doctors Data
const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    degree: "MD, FACC - Harvard Medical",
    specialty: "Cardiology",
    experience: "14+ Years",
    rating: "4.9",
    reviewsCount: 142,
    availableToday: true,
    fee: "$75",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Dr. Robert Mitchell",
    degree: "MBBS, MS (Neuro) - Johns Hopkins",
    specialty: "Neurology",
    experience: "11+ Years",
    rating: "4.8",
    reviewsCount: 98,
    availableToday: true,
    fee: "$90",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Dr. Elena Rostova",
    degree: "MD (Pediatrics) - Stanford Health",
    specialty: "Pediatrics",
    experience: "9+ Years",
    rating: "5.0",
    reviewsCount: 210,
    availableToday: false,
    fee: "$60",
    image: "https://images.unsplash.com/photo-1594824813515-d91ec0b2b8c9?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    name: "Dr. Marcus Vance",
    degree: "MS (Orthopedics) - Mayo Clinic",
    specialty: "Orthopedics",
    experience: "16+ Years",
    rating: "4.9",
    reviewsCount: 180,
    availableToday: true,
    fee: "$85",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400"
  }
];

const specialties = ["All", "Cardiology", "Neurology", "Pediatrics", "Orthopedics"];

export default function HealthcareSections() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const filteredDoctors = selectedSpecialty === "All"
    ? doctorsData
    : doctorsData.filter(doc => doc.specialty === selectedSpecialty);

  return (
    <div className="bg-slate-50/50 py-10 space-y-20">

      {/* ================= SECTION 1: HMS FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Hospital Management System
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Integrated Healthcare Operations & <span className="text-emerald-600">Patient Care</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A seamless medical ecosystem connecting patients, doctors, labs, and administrative staff under one intelligent cloud platform.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hmsFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 group-hover:text-white transition-colors duration-200">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-emerald-600 text-sm font-semibold group-hover:translate-x-1 transition-transform cursor-pointer">
                <span>Explore feature</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ================= SECTION 2: MEET OUR DOCTORS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Verified Medical Specialists
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Consult With Our <span className="text-emerald-600">Top Doctors</span>
            </h2>
            <p className="mt-2 text-slate-600 text-base max-w-xl">
              Certified specialists with proven clinical excellence ready for in-clinic visits and instant online consultations.
            </p>
          </div>

          {/* Specialty Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedSpecialty === spec
                  ? "bg-emerald-600 text-white shadow-sm shadow-emerald-200"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              {/* Doctor Image & Availability Badge */}
              <div className="relative h-60 bg-slate-100 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  {doc.availableToday ? (
                    <span className="inline-flex items-center gap-1.5 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                      Available Today
                    </span>
                  ) : (
                    <span className="bg-slate-900/70 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      Next: Tomorrow
                    </span>
                  )}
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                      {doc.specialty}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{doc.rating}</span>
                      <span className="text-slate-400 font-normal">({doc.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg flex items-center gap-1.5">
                    {doc.name}
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{doc.degree}</p>

                  <div className="mt-3 flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span>Experience: <strong>{doc.experience}</strong></span>
                  </div>
                </div>

                {/* Booking Action */}
                <div className="mt-5 pt-3">
                  <button className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2.5 px-4 rounded-xl shadow-sm transition-colors">
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="justify-center text-center items-center">
        <button className="text-xl font-poppins font-bold px-5 py-3 text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl ">
          <Link href={"/doctors"}>View All Doctors →</Link>
        </button>
      </div>

    </div>
  );
}