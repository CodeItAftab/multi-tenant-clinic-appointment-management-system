"use client";

import React from "react";
import { services, categories } from "./data";
import ServiceCard from "./Servicecard";

type ServicesSectionProps = {
    searchTerm: string;
    activeCategory: string;
    setActiveCategory: (value: string) => void;
};

function ServicesSection({
    searchTerm,
    activeCategory,
    setActiveCategory,
}: ServicesSectionProps) {
    const filteredServices = services.filter((s) => {
        const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "All" || s.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                        Explore Our Care
                    </p>
                    <h2 className="mt-2 text-[24px] font-bold tracking-tight text-slate-900 sm:text-[30px]">
                        Medical services designed around you
                    </h2>
                </div>

                <p className="max-w-md text-[13px] leading-relaxed text-slate-500 sm:text-right sm:text-[14px]">
                    Get access to trusted healthcare services, experienced doctors, and modern
                    treatment facilities.
                </p>
            </div>

            <div className="mb-8 flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${activeCategory === cat
                            ? "border-emerald-600 bg-emerald-600 text-white shadow-sm"
                            : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-600"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {filteredServices.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-200 py-16 text-center">
                    <p className="text-[14px] font-semibold text-slate-500">
                        No services found matching &quot;{searchTerm}&quot;
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
                    {filteredServices.map((service) => (
                        <ServiceCard key={service.title} service={service} />
                    ))}
                </div>
            )}
        </section>
    );
}

export default ServicesSection;