"use client";

import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import { locationInfo } from "../../utils/timing&locationData";

function LocationSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-[#4bb1c8]">
            Find Us
          </p>

          <h2 className="mt-2 text-[24px] font-bold text-slate-900 sm:text-[30px]">
            One Address, Easy to Reach
          </h2>
        </div>

        {/* Content */}
        <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_1.3fr] lg:items-stretch lg:gap-7">
          {/* Left: info card */}
          <div className="flex h-full flex-col justify-between rounded-2xl border border-[#b2ebf2] bg-linear-to-br from-[#e0f7fa] via-white to-[#b2ebf2]/50 p-6 shadow-sm sm:p-7">
            <div>
              <h3 className="text-[18px] font-bold text-slate-900 sm:text-[20px]">
                {locationInfo.name}
              </h3>

              <div className="mt-5 space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-[#4bb1c8]" />

                  <span className="text-[13px] leading-relaxed text-slate-700 sm:text-[14px]">
                    {locationInfo.addressLine1}
                    <br />
                    {locationInfo.addressLine2}
                  </span>
                </div>

                {/* Phone */}
                <a
                  href={locationInfo.phoneHref}
                  className="flex items-start gap-3 text-[13px] font-semibold text-slate-700 transition-colors hover:text-[#4bb1c8]"
                >
                  <Phone size={17} className="mt-0.5 shrink-0 text-[#4bb1c8]" />

                  <span>{locationInfo.phone}</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${locationInfo.email}`}
                  className="flex items-start gap-3 text-[13px] font-semibold text-slate-700 transition-colors hover:text-[#4bb1c8]"
                >
                  <Mail size={17} className="mt-0.5 shrink-0 text-[#4bb1c8]" />

                  <span>{locationInfo.email}</span>
                </a>
              </div>
            </div>

            {/* Map CTA */}
            <a
              href={locationInfo.mapDirectionsUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#4bb1c8] px-6 py-3 text-[13px] font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#33b6d3]"
            >
              <Navigation size={15} />
              Open in Google Maps
            </a>
          </div>

          {/* Right map */}
          <div className="h-full min-h-70 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:min-h-85 lg:min-h-0">
            <iframe
              title={`Map showing ${locationInfo.name}`}
              src={locationInfo.mapEmbedSrc}
              className="h-full min-h-70 w-full border-0 sm:min-h-85 lg:min-h-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;