"use client";

import { useState, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";
import { services, categories } from "../../utils/servicesData";
import ServiceCard from "./ServiceCard";
import BookingModal from "../Forms/BookingModal";

type ServicesSectionProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  activeCategory: string;
  setActiveCategory: (value: string) => void;
};

const INITIAL_VISIBLE_COUNT = 12; // 3 lines in 4-column grid (3 rows x 4 cols = 12 cards)

function ServicesSection({
  searchTerm,
  setSearchTerm,
  activeCategory,
  setActiveCategory,
}: ServicesSectionProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [bookingOpen, setBookingOpen] = useState(false);

  // Reset to 3 lines (12 cards) when filter or search changes
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [searchTerm, activeCategory]);

  const filteredServices = services.filter((service) => {
    const query = searchTerm.trim().toLowerCase();

    const serviceTitle = service.title.toLowerCase();
    const serviceCategory = service.category.toLowerCase();
    const serviceDescription = service.desc.toLowerCase();

    const matchesSearch =
      serviceTitle.includes(query) ||
      serviceCategory.includes(query) ||
      serviceDescription.includes(query);

    const matchesCategory =
      activeCategory === "All" || service.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const displayedServices = filteredServices.slice(0, visibleCount);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-10">
      {/* Filters + Search */}
      <div className="mt-8 flex flex-col items-center justify-center gap-4 lg:flex-row">
        {/* Category buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${activeCategory === cat
                  ? "border-[#4bb1c8] bg-[#4bb1c8] text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#b2ebf2] hover:text-[#4bb1c8]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="flex w-full max-w-112.5 items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-shadow focus-within:border-[#4bb1c8] focus-within:shadow-md lg:w-112.5">
          <Search size={19} className="ml-2 shrink-0 text-slate-400" />

          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search for a service (e.g. Cardiology, Dental...)"
            className="w-full bg-transparent px-1 py-2 text-[14px] text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="mt-10">
        {filteredServices.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 py-16 text-center">
            <p className="text-[14px] font-semibold text-slate-500">
              No services found matching &quot;{searchTerm}&quot;
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
              className="mt-4 rounded-xl bg-linear-to-r from-[#0f8fa8] via-[#33b6d3] to-[#4bb1c8] hover:from-[#0d7d93] hover:to-[#389cb3] px-5 py-2.5 text-[13px] font-extrabold text-white shadow-lg shadow-[#4bb1c8]/25 hover:shadow-xl hover:shadow-[#4bb1c8]/35 hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
              {displayedServices.map((service) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  onBook={() => setBookingOpen(true)}
                />
              ))}
            </div>

            {/* Show More Button for Services (3 lines / 12 cards initial) */}
            {filteredServices.length > visibleCount && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 12)}
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-xs hover:border-[#4bb1c8] hover:bg-[#e0f7fa]/30 hover:text-[#0f8fa8] hover:shadow-md hover:scale-[1.02] active:scale-98 transition-all duration-300 ease-out cursor-pointer focus:outline-none"
                >
                  <span>Show More Services</span>
                  <ChevronDown
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </section>
  );
}

export default ServicesSection;