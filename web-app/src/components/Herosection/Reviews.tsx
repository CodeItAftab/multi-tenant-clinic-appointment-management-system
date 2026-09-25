"use client"
import React, { useState } from "react";
import {
  Star,
  Quote,
  CheckCircle2,
  HeartHandshake,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import ReviewModal from "./ReviewModals";

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
  featureUsed: string;
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
  }
];

export default function Reviews() {
  const [reviewOpen, setReviewOpen] = useState(false);
  const displayedReviews = reviewsData.slice(0, 4);

  return (
    <section className="bg-white py-15 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#b2ebf2] bg-[#e0f7fa] text-[#0f8fa8] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#4bb1c8]"></span>
            Patient & Doctor Testimonials
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Our{" "}
            <span className="text-[#4bb1c8]">Patients Say</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Real experiences from patients, doctors, and hospital staff.
          </p>
        </div>

        {/* ================= REVIEWS GRID (4 Cards) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] hover:border-[#b2ebf2] transition-all duration-200 flex flex-col justify-between relative group"
            >
              {/* Quote Watermark Icon */}
              <Quote className="absolute top-4 right-4 w-7 h-7 text-slate-100 group-hover:text-[#b2ebf2] transition-colors pointer-events-none" />

              <div>
                {/* Rating Stars & Feature Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                </div>

                {/* Review Headline & Body */}
                <h3 className="font-bold text-slate-900 text-sm mb-2 group-hover:text-[#4bb1c8] transition-colors line-clamp-2">
                  "{review.title}"
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-4">
                  {review.comment}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5">
                <img
                  src={review.avatar}
                  alt={review.authorName}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#e0f7fa]"
                />
                <div>
                  <div className="flex items-center gap-1 font-bold text-slate-900 text-xs">
                    {review.authorName}
                    {review.verified && (
                      <CheckCircle2 className="w-3 h-3 text-[#4bb1c8] fill-[#e0f7fa]" />
                    )}
                  </div>
                  <span className="text-[10px] text-slate-500 block">
                    {review.roleOrSpecialty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/reviews"
            className="group inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-[#4bb1c8] to-[#1aa3bf] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#e0f7fa]/60 transition-all hover:shadow-xl hover:shadow-[#b2ebf2]/60 hover:scale-[1.02]"
          >
            View All Reviews
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* ================= BOTTOM CTA BANNER ================= */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0a1628] px-6 py-12 text-center sm:px-12 sm:py-20 mt-20">
          {/* Subtle glow accent */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#4bb1c8]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#1aa3bf]/10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-center gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4bb1c8]/20 border border-[#4bb1c8]/30 text-[#4bb1c8] text-xs font-semibold uppercase tracking-wider mb-3">
                <HeartHandshake className="w-4 h-4" />
                Patient-First Healthcare
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Ready to experience effortless hospital care?
              </h3>
              <p className="mt-2 text-slate-300 text-sm sm:text-base">
                Book your appointment now or consult our top specialists online in just a few taps.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full md:w-auto">
              <Link
                href={"/booking"}
                className="inline-flex items-center justify-center gap-2 bg-[#4bb1c8] hover:bg-[#33b6d3] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-[#4bb1c8]/30 transition text-sm"
              >
                📅 Book Appointment
              </Link>
              <button
                type="button"
                onClick={() => setReviewOpen(true)}
                className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl transition text-sm"
              >
                Leave a Review
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ================= REVIEW POPUP ================= */}
      <ReviewModal
        open={reviewOpen}
        onClose={() => setReviewOpen(false)}
        onSubmit={async (review: any) => {
          // Wire this up to your API, e.g.:
          // await fetch("/api/reviews", { method: "POST", body: JSON.stringify(review) });
          setReviewOpen(false);
        }}
      />
    </section>
  )
}