"use client";

import { useMemo, useState } from "react";
import {
  Stethoscope,
  GraduationCap,
  Star,
  Calendar,
  Search,
  ListFilter,
  X,
} from "lucide-react";
import { doctors, Doctor } from "@/utils/doctorsData";
import Link from "next/link";
import DoctorDetailsModal from "./DoctorDetailsModal";

function DoctorsDeatials() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [activeDoctor, setActiveDoctor] = useState<Doctor | null>(null);

  const specialties = useMemo(() => {
    const uniqueSpecialties = new Set(doctors.map((doctor) => doctor.specialty));
    return ["All", ...Array.from(uniqueSpecialties)];
  }, []);

  const filteredDoctors = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return doctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(query) ||
        doctor.specialty.toLowerCase().includes(query) ||
        doctor.qualification.toLowerCase().includes(query);

      const matchesSpecialty =
        selectedSpecialty === "All" ||
        doctor.specialty === selectedSpecialty;

      return matchesSearch && matchesSpecialty;
    });
  }, [searchTerm, selectedSpecialty]);

  const hasActiveFilters =
    searchTerm.trim() !== "" || selectedSpecialty !== "All";

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedSpecialty("All");
  };

  return (
    <div className="bg-linear-to-b from-white via-[#e0f7fa]/30 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#b2ebf2] bg-linear-to-br from-[#e0f7fa] via-white to-white">
        <div className="pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full bg-[#b2ebf2]/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-[#e0f7fa]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-[#b2ebf2] bg-white/80 px-4 py-1.5 text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#4bb1c8] shadow-sm backdrop-blur-sm">
              Meet Our Experts
            </span>

            <h1 className="mx-auto mt-6 max-w-3xl text-[30px] font-bold leading-tight tracking-tight text-slate-900 sm:text-[46px] lg:text-[54px]">
              Trusted Specialists,{" "}
              <span className="text-[#4bb1c8]">Dedicated to Your Care</span>.
            </h1>

            <p className="mt-3 text-[14px] leading-7 text-slate-600 sm:text-[16px]">
              Meet the skilled professionals dedicated to delivering thoughtful,
              trusted care at every stage of your health journey.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-10">
        <div className="flex flex-col items-center justify-center gap-3 lg:flex-row">
          <div className="relative w-full max-w-65">
            <ListFilter
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400"
            />

            <select
              value={selectedSpecialty}
              onChange={(event) => setSelectedSpecialty(event.target.value)}
              className="w-full cursor-pointer appearance-none rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-10 text-[13px] font-semibold text-slate-700 shadow-sm outline-none transition-all hover:border-[#4bb1c8] focus:border-[#4bb1c8] focus:ring-2 focus:ring-[#e0f7fa]"
            >
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty === "All" ? "All Specialties" : specialty}
                </option>
              ))}
            </select>

            <svg
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          <div className="relative w-full max-w-105">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search doctor or specialty..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-10 text-[13px] text-slate-700 shadow-sm outline-none transition-all hover:border-[#4bb1c8] focus:border-[#4bb1c8] focus:ring-2 focus:ring-[#e0f7fa] placeholder:text-slate-400"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="mt-3 flex justify-center">
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#4bb1c8] transition-colors hover:text-[#1aa3bf]"
            >
              <X size={14} />
              Clear filters
            </button>
          )}
        </div>
      </section>

      {/* Doctors grid */}
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:px-10">
        {filteredDoctors.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-18 text-center">
            <div className="flex h-18 w-18 items-center justify-center rounded-full bg-[#e0f7fa] shadow-sm">
              <Search size={24} className="text-[#4bb1c8]" />
            </div>

            <p className="mt-4 text-[15px] font-bold text-slate-700">
              No doctors found
            </p>

            <p className="mt-1.5 text-[13px] text-slate-500">
              Try another name or specialty, or reset your filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 rounded-xl bg-[#4bb1c8] px-4 py-2 text-[12px] font-bold text-white shadow-sm transition-all hover:bg-[#33b6d3] hover:shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-[0_8px_25px_rgb(0,0,0,0.08)]"
              >
                <div className="p-4">
                  <div className="flex items-start gap-3.5">
                    <div className="shrink-0">
                      <div className="h-16 w-16 overflow-hidden rounded-full ring-2 ring-[#e0f7fa] ring-offset-2 shadow-sm">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="truncate text-[14px] font-extrabold text-[#282828]">
                        {doctor.name}
                      </h3>
                      <p className="truncate text-[12px] font-bold text-[#4bb1c8]">
                        {doctor.specialty}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col items-center text-center">
                    <div className="flex items-center gap-1.5 rounded-lg bg-[#e0f7fa] px-2.5 py-1 shadow-sm">
                      <Star
                        size={12}
                        className="fill-[#4bb1c8] text-[#4bb1c8]"
                      />
                      <span className="text-[12px] font-bold text-[#1aa3bf]">
                        {doctor.rating}
                      </span>
                    </div>

                    <div className="mt-3 w-full space-y-2">
                      <div className="flex items-center justify-center gap-2 text-[12px] text-gray-600">
                        <GraduationCap
                          size={14}
                          className="shrink-0 text-gray-400"
                        />
                        <span className="truncate font-semibold">
                          {doctor.qualification}
                        </span>
                      </div>

                      <div className="flex items-center justify-center gap-2 text-[12px] text-gray-600">
                        <Stethoscope
                          size={14}
                          className="shrink-0 text-gray-400"
                        />
                        <span className="truncate font-semibold">
                          {doctor.experience}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex w-full flex-col gap-2">
                      <Link
                        href="/booking"
                        className="flex items-center justify-center gap-1.5 rounded-lg bg-[#4bb1c8] py-2 text-[12px] font-bold text-white shadow-sm transition-all hover:bg-[#33b6d3] hover:shadow-md"
                      >
                        <Calendar size={13} />
                        Book Appointment
                      </Link>

                      <button
                        type="button"
                        onClick={() => setActiveDoctor(doctor)}
                        className="flex justify-center rounded-lg border border-gray-200 py-2 text-[12px] font-bold text-[#282828] transition-all hover:border-[#4bb1c8] hover:bg-[#e0f7fa]/40 hover:text-[#4bb1c8]"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {activeDoctor && (
        <DoctorDetailsModal
          doctor={activeDoctor}
          onClose={() => setActiveDoctor(null)}
        />
      )}
    </div>
  );
}

export default DoctorsDeatials;