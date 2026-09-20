"use client";

import {
    CalendarClock,
    Siren,
    PillBottle,
    Microscope,
    Stethoscope,
    Building2,
} from "lucide-react";
import { generalOpd, otherHours, floorDirectory } from "../../utils/timing&locationData";

const otherHoursIcons = [Siren, PillBottle, Microscope, Stethoscope];

function TimingsSection() {
    const today = new Date().getDay();
    const todayIndex = today === 0 ? 6 : today - 1;

    return (
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
            {/* Main heading */}
            <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-8">
                <h2 className="text-[27px] font-bold tracking-tight text-slate-900 sm:text-[33px] lg:text-[37px]">
                    Timings and Hospital Directory
                </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-7">
                <div className="flex flex-col gap-5 lg:h-full">
                    {/* Weekly Schedule */}
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                        <div className="flex items-center gap-2.5 border-b border-slate-100 bg-slate-50 px-5 py-3.5 sm:px-6">
                            <CalendarClock size={17} className="text-[#4bb1c8]" />

                            <span className="text-[12px] font-extrabold uppercase tracking-wide text-slate-700">
                                Weekly Schedule
                            </span>
                        </div>

                        <ul>
                            {generalOpd.map((day, index) => {
                                const isToday = index === todayIndex;

                                return (
                                    <li
                                        key={day.day}
                                        className={`flex flex-col gap-1 border-b border-slate-100 px-5 py-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:px-6 ${isToday ? "bg-[#e0f7fa]/60" : ""
                                            }`}
                                    >
                                        <span className="flex items-center gap-2 text-[13px] font-bold text-slate-900 sm:text-[14px]">
                                            {day.day}

                                            {isToday && (
                                                <span className="rounded-full bg-[#4bb1c8] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                                                    Today
                                                </span>
                                            )}
                                        </span>

                                        <span className="text-[13px] font-medium text-slate-600 sm:text-[14px]">
                                            {day.hours}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Other department hours */}
                    <div>
                        <h3 className="text-[16px] font-bold text-slate-900 sm:text-[18px]">
                            Other department hours
                        </h3>

                        <div className="mt-3.5 grid grid-cols-2 gap-3">
                            {otherHours.map((item, index) => {
                                const Icon =
                                    otherHoursIcons[index % otherHoursIcons.length];

                                return (
                                    <article
                                        key={item.title}
                                        className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                                    >
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e0f7fa] ring-1 ring-[#b2ebf2]">
                                                <Icon
                                                    size={14}
                                                    strokeWidth={1.9}
                                                    className="text-[#4bb1c8]"
                                                />
                                            </div>

                                            {item.alwaysOpen && (
                                                <span className="rounded-full bg-[#e0f7fa] px-2 py-0.5 text-[8px] font-bold uppercase tracking-wide text-[#4bb1c8]">
                                                    24/7
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="mt-2.5 text-[13px] font-bold leading-snug text-slate-900 sm:text-[13.5px]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-[12px] font-bold text-[#4bb1c8]">
                                            {item.hours}
                                        </p>

                                        <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">
                                            {item.note}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Floor Directory */}
                <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:h-full">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 bg-slate-50 px-5 py-3.5 sm:px-6">
                        <span className="flex items-center gap-2.5">
                            <Building2 size={18} className="text-[#4bb1c8]" />

                            <span className="text-[12px] font-extrabold uppercase tracking-wide text-slate-700">
                                Floor Directory
                            </span>
                        </span>

                        <span className="hidden text-[12px] text-slate-400 sm:block">
                            Lifts &amp; stairs near lobby
                        </span>
                    </div>

                    <ul className="flex flex-1 flex-col">
                        {floorDirectory.map((floor) => (
                            <li
                                key={floor.floor}
                                className="flex flex-1 gap-3.5 border-b border-slate-100 px-5 py-3.5 last:border-b-0 sm:px-6"
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e0f7fa] text-[13px] font-bold text-[#4bb1c8] ring-1 ring-[#b2ebf2]">
                                    {floor.floor}
                                </span>

                                <div className="min-w-0">
                                    <h3 className="text-[14px] font-bold text-slate-900 sm:text-[15px]">
                                        {floor.label}
                                    </h3>

                                    <p className="mt-0.5 text-[12px] leading-relaxed text-slate-500 sm:text-[13px]">
                                        {floor.tagline}
                                    </p>

                                    <div className="mt-2.5 flex flex-wrap gap-2">
                                        {floor.services.map((service) => (
                                            <span
                                                key={service}
                                                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 sm:text-[12px]"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default TimingsSection;