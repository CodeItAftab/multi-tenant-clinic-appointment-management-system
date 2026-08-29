"use client"

import React, { useEffect, useState } from "react"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { images } from "./Herodata"

const Hero1 = () => {
  const [current, setCurrent] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev < images.length - 1 ? prev + 1 : 0))
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full text-[#282828] min-h-screen bg-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

     
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-4 py-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="font-medium text-sm text-emerald-700 tracking-wide">
              Trusted Healthcare Services
            </span>
          </div>

          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
            alt="Modern clinic reception area"
            className="w-full max-w-md h-56 sm:h-64 rounded-2xl object-cover mb-8 lg:hidden shadow-lg shadow-neutral-900/10"
          />

          <h1 className="font-bold text-neutral-900 text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight">
            Book Your Appointment
            <span className="block text-emerald-700 mt-1 sm:mt-2">
              Easily, Anytime, Anywhere
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-500 leading-relaxed max-w-xl mt-6">
            Book an appointment from your phone with your trusted doctors from anywhere, in just a few taps.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-9 w-full sm:w-auto">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 text-base sm:text-lg font-semibold px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-xl shadow-lg shadow-emerald-600/20 transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
            >
              <Calendar size={20} strokeWidth={2.5} />
              Book Appointment
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 text-base sm:text-lg font-medium px-6 py-3.5 text-neutral-700 hover:text-neutral-900 rounded-xl border border-neutral-200 hover:border-neutral-300 bg-white transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              Meet our doctors
              <ArrowRight size={18} strokeWidth={2} />
            </Link>
          </div>

          <div className="flex items-center gap-6 mt-10 text-neutral-500 text-sm">
            <div>
              <span className="text-neutral-900 font-semibold text-lg">50k+</span>{" "}
              patients served
            </div>
            <div className="h-4 w-px bg-neutral-200" />
            <div>
              <span className="text-neutral-900 font-semibold text-lg">200+</span>{" "}
              verified doctors
            </div>
          </div>
        </div>

       
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-end">
          <div className="relative w-full max-w-sm md:max-w-lg xl:max-w-xl">
            <div className="relative w-full h-[420px] xl:h-[520px] overflow-hidden rounded-3xl shadow-2xl shadow-neutral-900/20 ring-1 ring-black/5">

              {images.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.alt}
                  className={`absolute inset-0 w-full h-full object-cover rounded-3xl transition-opacity duration-1000 ease-in-out ${current === index ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}

              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-3xl" />

              <div className="absolute bottom-0 left-0 right-0 p-6 xl:p-8">
                <h3 className="font-poppins text-2xl xl:text-3xl font-bold mb-2 text-white drop-shadow-sm">
                  Smart Hospital Management
                </h3>

                <p className="font-poppins text-sm xl:text-base font-medium leading-relaxed text-neutral-100/90">
                  Streamline hospital operations, manage patients, doctors,
                  appointments, and medical records — all in one secure platform.
                </p>
              </div>

          
              <div className="absolute top-5 right-5 flex gap-1.5">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-500 ${current === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero1