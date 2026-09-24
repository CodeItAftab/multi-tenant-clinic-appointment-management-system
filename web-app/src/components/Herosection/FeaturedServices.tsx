"use client";

import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";
import { services } from "@/utils/servicesData";

function FeaturedServices() {
    const featuredServices = services.slice(0, 4);

    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-15 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#b2ebf2] bg-[#e0f7fa] px-4 py-1.5">
                    <Stethoscope className="h-3.5 w-3.5 text-[#4bb1c8]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0f8fa8]">
                        Our Services
                    </p>
                </div>

                {/* Single Line Heading */}
                <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-5xl">
                    Advanced Care Across{" "}
                    <span className="bg-linear-to-r from-[#4bb1c8] to-[#1aa3bf] bg-clip-text text-transparent">
                        All Departments
                    </span>
                </h2>

                {/* Single Line Description */}
                <p className="mx-auto mt-3 max-w-md text-sm text-slate-600">
                    Specialized treatments and services for complete healthcare.
                </p>
            </div>

            {/* Services Grid */}
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
                {featuredServices.map(({ icon: Icon, title, desc, price, category }) => (
                    <div
                        key={title}
                        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] hover:-translate-y-1"
                    >
                        <div className="flex items-start justify-between">
                            {/* Icon */}
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e0f7fa] transition-colors">
                                <Icon size={22} className="text-[#4bb1c8]" />
                            </div>

                            {/* Category Badge */}
                            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                                {category}
                            </span>
                        </div>

                        <h3 className="mt-4 text-base font-bold text-slate-900">
                            {title}
                        </h3>

                        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                            {desc}
                        </p>

                        {/* Price & Book */}
                        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                            <span className="text-sm font-bold text-[#4bb1c8]">
                                {price}
                            </span>

                            <Link
                                href="/booking"
                                className="group inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 transition-colors hover:text-[#4bb1c8]"
                            >
                                Book
                                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="mt-12 flex justify-center">
                <Link
                    href="/services"
                    className="group inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-[#4bb1c8] to-[#1aa3bf] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#e0f7fa]/60 transition-all hover:shadow-xl hover:shadow-[#b2ebf2]/60 hover:scale-[1.02]"
                >
                    View All Services
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    );
}

export default FeaturedServices;