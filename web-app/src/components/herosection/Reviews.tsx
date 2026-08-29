"use client"
import React, { useState } from "react";
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  ThumbsUp, 
  Stethoscope, 
  UserCheck, 
  Building2, 
  ArrowLeft, 
  ArrowRight,
  HeartHandshake
} from "lucide-react";
import Link from "next/link";

// Review item interface
interface Review {
  id: number;
  authorName: string;
  roleOrSpecialty: string;
  category: "patient" | "doctor" | "admin";
  avatar: string;
  rating: number;
  title: string;
  comment: string;
  featureUsed: string; // e.g., "Teleconsultation", "OPD Queue System", "EHR Cloud"
  date: string;
  verified: boolean;
  likes: number;
}

const reviewsData: Review[] = [
  {
    id: 1,
    authorName: "Marcus Sterling",
    roleOrSpecialty: "Cardiology Patient",
    category: "patient",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    title: "Zero waiting line and seamless appointment booking!",
    comment: "Booking Dr. Sarah was done in under a minute on my phone. When I arrived at the clinic, my token was already recognized on the digital board. I didn't have to fill out any paper forms — all my previous reports were already loaded in their EHR!",
    featureUsed: "Smart Queue & OPD Booking",
    date: "3 days ago",
    verified: true,
    likes: 24
  },
  {
    id: 2,
    authorName: "Dr. Arvind Patel",
    roleOrSpecialty: "Head of Orthopedics",
    category: "doctor",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    title: "Cut down clinical documentation time by 40%",
    comment: "As a practicing surgeon, pulling up previous MRI scans and writing e-prescriptions during rounds used to take hours. The HMS centralized portal provides instantaneous access to vitals and lab results directly from my tablet.",
    featureUsed: "Doctor EHR Dashboard",
    date: "1 week ago",
    verified: true,
    likes: 41
  },
  {
    id: 3,
    authorName: "Eleanor Vance",
    roleOrSpecialty: "Pediatrics Parent",
    category: "patient",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    title: "Prescription reminders and lab test tracking are life-savers",
    comment: "I used the online teleconsultation for my son's fever late at night. The doctor was attentive, the e-prescription went straight to the pharmacy, and medicines were delivered within 2 hours. Incredible care!",
    featureUsed: "24/7 Teleconsultation & Pharmacy",
    date: "2 weeks ago",
    verified: true,
    likes: 19
  },
  {
    id: 4,
    authorName: "Rachel Chen",
    roleOrSpecialty: "Hospital Operations Director",
    category: "admin",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    title: "Streamlined 500+ daily patient flows effortlessly",
    comment: "Managing inpatient bed occupancy, emergency triage dispatch, and cashless insurance claims used to create bottlenecks. With this HMS, our patient turnaround time and billing speed improved by over 60%.",
    featureUsed: "Bed & Billing Management",
    date: "3 weeks ago",
    verified: true,
    likes: 38
  },
  {
    id: 5,
    authorName: "David K. Miller",
    roleOrSpecialty: "Chronic Care Patient",
    category: "patient",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    title: "No more carrying heavy physical medical report files",
    comment: "Having 5 years of blood test reports and diabetic checkup histories accessible in one mobile portal gives me immense peace of mind. Any doctor in the hospital network can review my case immediately.",
    featureUsed: "Digital Health Records (EMR)",
    date: "1 month ago",
    verified: true,
    likes: 15
  },
  {
    id: 6,
    authorName: "Dr. Jessica Hayes",
    roleOrSpecialty: "Consultant Neurologist",
    category: "doctor",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    title: "Smooth multi-department consultations",
    comment: "Collaborating with radiologists and pathology specialists on critical neurology cases is seamless. Video consults and live report sharing function without any lag or downtime.",
    featureUsed: "Inter-Department Tele-Radiology",
    date: "1 month ago",
    verified: true,
    likes: 29
  }
];

export default function Reviews() {
  const [activeTab, setActiveTab] = useState<"all" | "patient" | "doctor" | "admin">("all");

  const filteredReviews = activeTab === "all" 
    ? reviewsData 
    : reviewsData.filter(r => r.category === activeTab);

  return (
    <section className="bg-slate-50 py-20 border-t border-slate-200/70 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER & TRUST STATS ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Patient & Doctor Testimonials
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Trusted by <span className="text-emerald-600">50,000+ Patients</span> and Healthcare Providers
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Discover how our Hospital Management System is elevating clinical excellence, eliminating wait times, and making healthcare accessible.
            </p>
          </div>

          {/* Quick Rating Summary Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-6 self-start lg:self-auto">
            <div className="text-center pr-6 border-r border-slate-100">
              <div className="text-4xl font-black text-slate-900 tracking-tight">4.9</div>
              <div className="flex items-center justify-center gap-1 text-amber-400 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-500 font-medium">Over 10k+ reviews</span>
            </div>

            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span><strong>98.5%</strong> On-time consultations</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span><strong>15 mins</strong> Average wait time saved</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span><strong>100%</strong> Verified healthcare audits</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CATEGORY FILTER TABS ================= */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "all"
                ? "bg-emerald-600 text-white shadow-sm shadow-emerald-200"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Feedback ({reviewsData.length})
          </button>

          <button
            onClick={() => setActiveTab("patient")}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "patient"
                ? "bg-emerald-600 text-white shadow-sm shadow-emerald-200"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <UserCheck className="w-4 h-4" />
            Patient Experiences
          </button>

          <button
            onClick={() => setActiveTab("doctor")}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "doctor"
                ? "bg-emerald-600 text-white shadow-sm shadow-emerald-200"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            Doctor & Specialist Reviews
          </button>

          <button
            onClick={() => setActiveTab("admin")}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "admin"
                ? "bg-emerald-600 text-white shadow-sm shadow-emerald-200"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Building2 className="w-4 h-4" />
            Hospital Administration
          </button>
        </div>

        {/* ================= REVIEWS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between relative group"
            >
              {/* Quote Watermark Icon */}
              <Quote className="absolute top-5 right-5 w-8 h-8 text-slate-100 group-hover:text-emerald-50 transition-colors pointer-events-none" />

              <div>
                {/* Rating Stars & Feature Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                    {review.featureUsed}
                  </span>
                </div>

                {/* Review Headline & Body */}
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition-colors">
                  "{review.title}"
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {review.comment}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.authorName}
                    className="w-11 h-11 rounded-full object-cover border-2 border-emerald-100"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                      {review.authorName}
                      {review.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                      )}
                    </div>
                    <span className="text-xs text-slate-500 block">
                      {review.roleOrSpecialty}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400">
                  {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM CTA BANNER ================= */}
        <div className="mt-16 bg-linear-to-r from-emerald-700 via-emerald-600 to-teal-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-3">
              <HeartHandshake className="w-4 h-4" />
              Patient-First Healthcare
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to experience effortless hospital care?
            </h3>
            <p className="mt-2 text-emerald-100 text-sm sm:text-base">
              Book your appointment now or consult our top specialists online in just a few taps.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 w-full md:w-auto">
            <Link href={"/booking"} className="bg-white hover:bg-slate-100 text-emerald-800 font-bold px-6 py-3.5 rounded-xl shadow-md transition text-sm text-center">
              📅 Book Appointment
            </Link>
            <button className="border border-white/40 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl transition text-sm text-center">
              Leave a Review
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}