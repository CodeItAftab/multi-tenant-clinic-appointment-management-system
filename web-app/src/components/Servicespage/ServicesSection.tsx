"use client";

import { Search } from "lucide-react";
import { services, categories } from "../../utils/servicesData";
import ServiceCard from "./Servicecard";

type ServicesSectionProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  activeCategory: string;
  setActiveCategory: (value: string) => void;
};

function ServicesSection({
  searchTerm,
  setSearchTerm,
  activeCategory,
  setActiveCategory,
}: ServicesSectionProps) {
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

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-2 lg:px-10">
      {/* Filters + Search */}
      <div className="mt-8 flex flex-col items-center justify-center gap-4 lg:flex-row">
        {/* Category buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "border-[#4bb1c8] bg-[#4bb1c8] text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#b2ebf2] hover:text-[#4bb1c8]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="flex w-full max-w-[450px] items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-shadow focus-within:border-[#4bb1c8] focus-within:shadow-md lg:w-[450px]">
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
              className="mt-4 rounded-full bg-[#4bb1c8] px-5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#33b6d3]"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {filteredServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ServicesSection;