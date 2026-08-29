"use client";

import React from "react";
import { CalendarClock, Siren, PillBottle, Microscope, Stethoscope } from "lucide-react";
import { generalOpd, otherHours } from "./data";

const otherHoursIcons = [Siren, PillBottle, Microscope, Stethoscope];

function TimingsSection() {
    const today = new Date().getDay(); 
    
    const todayIndex = today === 0 ? 6 : today - 1;

    return (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                        Opening Hours
                    </p>
                    <h2 className="mt-2 text-[24px] font-bold tracking-tight text-slate-900 sm:text-[30px]">
                        General OPD, day by day
                    </h2>
                </div>

                <p className="max-w-md text-[13px] leading-relaxed text-slate-500 sm:text-right sm:text-[14px]">
                    Two sessions a day, six days a week, with a lighter Sunday window for
                    walk-ins.
                </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-6 py-4">
                        <CalendarClock size={16} className="text-emerald-600" />
                        <span className="text-[12px] font-bold uppercase tracking-wide text-slate-600">
                            Weekly Schedule
                        </span>
                    </div>

                    <ul>
                        {generalOpd.map((d, i) => {
                            const isToday = i === todayIndex;
                            return (
                                <li
                                    key={d.day}
                                    className={`flex flex-col gap-1 border-b border-slate-100 px-6 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between ${isToday ? "bg-emerald-50/60" : ""
                                        }`}
                                >
                                    <span className="flex items-center gap-2 text-[13px] font-bold text-slate-900 sm:text-[14px]">
                                        {d.day}
                                        {isToday && (
                                            <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                                                Today
                                            </span>
                                        )}
                                    </span>
                                    <span className="text-[13px] text-slate-600 sm:text-[14px]">{d.hours}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    {otherHours.map((item, idx) => {
                        const Icon = otherHoursIcons[idx % otherHoursIcons.length];
                        return (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                                        <Icon size={18} strokeWidth={1.8} className="text-emerald-600" />
                                    </div>
                                    {item.alwaysOpen && (
                                        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-emerald-700">
                                            24/7
                                        </span>
                                    )}
                                </div>

                                <h3 className="mt-3 text-[14px] font-bold text-slate-900 sm:text-[15px]">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-[13px] font-bold text-emerald-600">{item.hours}</p>
                                <p className="mt-1.5 text-[12px] leading-relaxed text-slate-500 sm:text-[13px]">
                                    {item.note}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default TimingsSection;