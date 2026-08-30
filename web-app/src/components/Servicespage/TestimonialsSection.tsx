"use client";
import { Star } from "lucide-react";
import { testimonials } from "./data";

function TestimonialsSection() {
    return (
        <section className="border-y border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                        Patient Stories
                    </p>
                    <h2 className="mt-2 text-[24px] font-bold text-slate-900 sm:text-[30px]">
                        What our patients say
                    </h2>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                    {testimonials.map((t) => (
                        <article
                            key={t.name}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
                        >
                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={15}
                                        className={i < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}
                                    />
                                ))}
                            </div>

                            <p className="mt-4 text-[13px] leading-relaxed text-slate-600 sm:text-[14px]">
                                &quot;{t.quote}&quot;
                            </p>

                            <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-[13px] font-bold text-emerald-700">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-[13px] font-bold text-slate-900">{t.name}</p>
                                    <p className="text-[12px] text-slate-500">{t.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;