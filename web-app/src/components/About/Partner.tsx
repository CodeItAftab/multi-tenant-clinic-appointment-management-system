import React from 'react'
import { Building2, ArrowRight, Mail, MapPin,  } from "lucide-react";
function Partner() {
    return (
        <div> 
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
                <div className="relative overflow-hidden rounded-3xl bg-[#0a1628] px-6 sm:px-12 py-12 sm:py-16">
                    <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-3xl" />

                    <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
                        <div>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-[11px] sm:text-[12px] font-semibold text-white">
                                <Building2 size={13} />
                                For Healthcare Providers
                            </span>

                            <h2 className="mt-5 text-[24px] sm:text-[32px] font-bold text-white max-w-lg">
                                Are you a clinic owner or doctor?
                            </h2>

                            <p className="mt-3 text-[13px] sm:text-[15px] leading-relaxed text-gray-300 max-w-lg">
                                Join our network of transparent healthcare providers.
                                Digitize your appointment scheduling, reach more
                                patients, and reduce waiting room crowding with our
                                dedicated clinic dashboard.
                            </p>
                        </div>

                        <button className="shrink-0 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-emerald-500">
                            Partner With Us
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </section>

         

            <section className="border-t border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 text-center">
                    <h2 className="text-[20px] sm:text-[24px] font-bold text-[#282828]">
                        Get in Touch
                    </h2>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                        <div className="flex items-center gap-2.5">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                                <Mail size={15} className="text-emerald-600" />
                            </div>
                            <span className="text-[13px] sm:text-[14px] text-gray-600">
                                support@hms.in
                            </span>
                        </div>

                        <div className="flex items-center gap-2.5">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                                <MapPin size={15} className="text-emerald-600" />
                            </div>
                            <span className="text-[13px] sm:text-[14px] text-gray-600">
                                Bihar, India
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Partner