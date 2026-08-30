"use client";

import React from "react";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import { locationInfo } from "./data";

function LocationSection() {
    return (
        <section className="border-y border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                        Find Us
                    </p>
                    <h2 className="mt-2 text-[24px] font-bold text-slate-900 sm:text-[30px]">
                        One address, easy to reach
                    </h2>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:gap-8">
                    <div className="flex flex-col justify-between rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/50 p-7 shadow-sm sm:p-8">
                        <div>
                            <h3 className="text-[18px] font-bold text-slate-900 sm:text-[20px]">
                                {locationInfo.name}
                            </h3>

                            <div className="mt-5 space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin size={17} className="mt-0.5 shrink-0 text-emerald-600" />
                                    <span className="text-[13px] leading-relaxed text-slate-700 sm:text-[14px]">
                                        {locationInfo.addressLine1}
                                        <br />
                                        {locationInfo.addressLine2}
                                    </span>
                                </div>

                                <a
                                    href={locationInfo.phoneHref}
                                    className="flex items-start gap-3 text-[13px] font-semibold text-slate-700 transition-colors hover:text-emerald-600 sm:text-[14px]"
                                >
                                    <Phone size={17} className="mt-0.5 shrink-0 text-emerald-600" />
                                    {locationInfo.phone}
                                </a>

                                <a
                                    href={`mailto:${locationInfo.email}`}
                                    className="flex items-start gap-3 text-[13px] font-semibold text-slate-700 transition-colors hover:text-emerald-600 sm:text-[14px]"
                                >
                                    <Mail size={17} className="mt-0.5 shrink-0 text-emerald-600" />
                                    {locationInfo.email}
                                </a>
                            </div>
                        </div>

                        <a
                            href={locationInfo.mapDirectionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-[13px] font-bold text-white shadow-sm transition-all duration-300 hover:bg-emerald-500"
                        >
                            <Navigation size={15} />
                            Open in Google Maps
                        </a>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                        <iframe
                            title={`Map showing ${locationInfo.name}`}
                            src={locationInfo.mapEmbedSrc}
                            className="h-[320px] w-full sm:h-full sm:min-h-[380px]"
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