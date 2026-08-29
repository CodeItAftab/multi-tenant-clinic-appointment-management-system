"use client";

import React, { useEffect, useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { locationInfo } from "./data";


const OPD_WINDOWS = [
    { start: 9 * 60, end: 13 * 60 },
    { start: 17 * 60, end: 20 * 60 },
];
const SUNDAY_WINDOW = { start: 9 * 60, end: 12 * 60 };

function getOpenStatus(now: Date) {
    const day = now.getDay(); // 0 = Sunday
    const minutes = now.getHours() * 60 + now.getMinutes();
    const windows = day === 0 ? [SUNDAY_WINDOW] : OPD_WINDOWS;
    const isOpen = windows.some((w) => minutes >= w.start && minutes < w.end);
    return isOpen;
}

function HeroSection() {
    const [isOpen, setIsOpen] = useState<boolean | null>(null);

    useEffect(() => {
        const update = () => setIsOpen(getOpenStatus(new Date()));
        update();
        const id = setInterval(update, 60 * 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="border-b border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-slate-50">
            <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-10">
               
                <h1 className="mx-auto mt-5 max-w-4xl text-[30px] font-bold leading-tight tracking-tight text-slate-900 sm:text-[46px] lg:text-[54px]">
                    Know before you <span className="text-emerald-600">walk in</span>
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-[16px]">
                    General OPD hours, specialist schedules, and everything you need to find
                    us — with directions that actually get you here.
                </p>

                <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm">
                    <span className="relative flex h-2.5 w-2.5">
                        {isOpen && (
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        )}
                        <span
                            className={`relative inline-flex h-2.5 w-2.5 rounded-full ${isOpen === null ? "bg-slate-300" : isOpen ? "bg-emerald-500" : "bg-slate-400"
                                }`}
                        />
                    </span>
                    <span className="text-[13px] font-bold text-slate-800">
                        {isOpen === null ? "Checking OPD status…" : isOpen ? "OPD Open Now" : "OPD Closed Now"}
                    </span>
                    <span className="text-[12px] text-slate-400">·</span>
                    <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-slate-500">
                        <Clock size={13} />
                        Emergency always open
                    </span>
                </div>

                <div className="mx-auto mt-6 flex max-w-xl flex-col items-center justify-center gap-3 sm:flex-row">
                    <a
                        href={locationInfo.mapDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-[13px] font-bold text-white shadow-sm transition-all duration-300 hover:bg-emerald-500"
                    >
                        <MapPin size={15} />
                        Get Directions
                    </a>
                    <a
                        href={locationInfo.phoneHref}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-[13px] font-bold text-slate-700 transition-all duration-300 hover:border-emerald-300 hover:text-emerald-600"
                    >
                        Call Reception
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;