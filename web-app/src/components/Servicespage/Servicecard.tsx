"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "./data";

type ServiceCardProps = {
    service: Service;
};

function ServiceCard({ service }: ServiceCardProps) {
    const Icon = service.icon;

    return (
        <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl sm:p-5">
            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-emerald-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
                <div className="flex items-start justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100 transition-all duration-300 group-hover:bg-emerald-600 group-hover:shadow-lg group-hover:shadow-emerald-600/20">
                        <Icon
                            size={17}
                            strokeWidth={1.8}
                            className="text-emerald-600 transition-colors duration-300 group-hover:text-white"
                        />
                    </div>

                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-slate-500">
                        {service.category}
                    </span>
                </div>

                <h3 className="mt-3 text-[14px] font-bold text-slate-900 sm:text-[16px]">
                    {service.title}
                </h3>

                <p className="mt-1.5 line-clamp-2 min-h-[34px] text-[11px] leading-relaxed text-slate-600 sm:text-[13px]">
                    {service.desc}
                </p>

                <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
                    <span className="text-[11px] font-bold text-emerald-600">{service.price}</span>

                    <Link
                        href="/appointment"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 transition-colors duration-300 group-hover:text-emerald-600"
                    >
                        Book
                        <ArrowRight
                            size={12}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default ServiceCard;