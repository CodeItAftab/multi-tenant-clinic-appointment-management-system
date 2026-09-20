"use client";

import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const Hero1 = () => {
  return (
    <section className="mx-auto w-full max-w-7xl bg-white px-4 pb-5 pt-6 sm:px-6 sm:pb-6 sm:pt-8 lg:px-10 lg:pb-8 lg:pt-14">
      <div
        className="relative mx-auto min-h-[460px] overflow-hidden rounded-2xl border border-slate-200 bg-cover bg-center shadow-[0_12px_40px_rgba(15,23,42,0.10)] sm:min-h-[500px] md:min-h-[540px] lg:min-h-[580px]"
        style={{
          backgroundImage: "url('/images/heroimage.png')",
        }}
      >
        {/* Mobile: strong white overlay for readable content */}
        <div className="absolute inset-0 bg-white/90 md:hidden" />

        {/* Desktop: same fade as your existing design */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.96) 28%, rgba(255,255,255,0.86) 43%, rgba(255,255,255,0.58) 58%, rgba(255,255,255,0.22) 75%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex min-h-[460px] items-center sm:min-h-[500px] md:min-h-[540px] lg:min-h-[580px]">
          <div className="w-full max-w-3xl px-5 py-10 text-center sm:px-8 sm:py-12 md:px-12 md:text-left lg:px-16 xl:px-20">
            {/* Badge */}
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#b2ebf2] bg-[#e0f7fa] px-3 py-1.5 shadow-sm sm:mb-5 sm:px-4">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#4bb1c8]" />
              <span className="truncate text-[12px] font-medium tracking-wide text-[#0f8fa8] sm:text-sm">
                Trusted Healthcare Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-[30px] font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-[38px] md:text-[44px] lg:text-[50px]">
              Book Your Appointment
              <span className="mt-1.5 block text-[#4bb1c8] sm:mt-2">
                Easily, Anytime, Anywhere
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-neutral-600 sm:mt-5 sm:text-[16px] md:mx-0 md:text-[17px] lg:text-[18px]">
              Book an appointment from your phone with your trusted doctors from
              anywhere, in just a few taps.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex w-full flex-col items-stretch gap-3 sm:mt-7 sm:w-auto sm:flex-row sm:items-center sm:justify-center md:justify-start">
              <Link
                href="/booking"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#4bb1c8] px-5 py-3 text-[14px] font-semibold text-white shadow-lg shadow-[#4bb1c8]/25 transition-all duration-200 hover:bg-[#1d97b3] active:bg-[#1aa3bf] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8] focus-visible:ring-offset-2 sm:w-auto sm:px-6 sm:text-[16px]"
              >
                <Calendar size={18} strokeWidth={2.5} />
                Book Appointment
              </Link>

              <Link
                href="/doctors"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#4bb1c8] bg-white/85 px-5 py-3 text-[14px] font-medium text-neutral-700 backdrop-blur-sm transition-all duration-200 hover:border-[#b2ebf2] hover:bg-white hover:text-[#4bb1c8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8] focus-visible:ring-offset-2 sm:w-auto sm:px-6 sm:text-[16px]"
              >
                Meet our doctors
                <ArrowRight size={17} strokeWidth={2} />
              </Link>
            </div>

            {/* Statistics */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] text-neutral-600 sm:mt-7 sm:gap-x-5 sm:text-[13px] md:justify-start">
              <div className="whitespace-nowrap">
                <span className="text-[15px] font-semibold text-neutral-900 sm:text-[17px]">
                  50k+
                </span>{" "}
                patients served
              </div>

              <div className="hidden h-4 w-px bg-neutral-300 sm:block" />

              <div className="whitespace-nowrap">
                <span className="text-[15px] font-semibold text-neutral-900 sm:text-[17px]">
                  200+
                </span>{" "}
                verified doctors
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;