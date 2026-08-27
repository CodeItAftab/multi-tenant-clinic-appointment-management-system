import React from 'react'
import {Users, Clock, Stethoscope,  Building2,  } from "lucide-react";
function Story() {
    return (
        <div className='w-full bg-white'>

           
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                    <div>
                        <span className="inline-block text-[11px] sm:text-[30px] font-bold tracking-wide text-emerald-600">
                            OUR STORY
                        </span>
                        <h2 className="mt-3 text-[24px] sm:text-[32px] font-bold text-[#282828] leading-tight">
                            Built on a simple idea
                        </h2>

                        <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-gray-600 border-l-2 border-emerald-200 pl-4">
                            HMS was founded with a simple goal — make quality healthcare
                            accessible, honest, and comfortable for every patient who
                            walks through our doors.
                        </p>
                        <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-gray-600">
                            Today, we bring together experienced doctors, modern
                            equipment, and a genuinely caring staff to serve our
                            community every single day.
                        </p>
                    </div>

                    <div className="relative rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/40 ring-1 ring-emerald-100 p-8 sm:p-10 shadow-sm">
                      
                      
                        <div className="pointer-events-none absolute -top-6 -right-6 h-28 w-28 rounded-full bg-emerald-200/30 blur-2xl" />

                        <div className="relative grid grid-cols-2 gap-8 text-center">
                            <div>
                                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-white ring-1 ring-emerald-100">
                                    <Clock size={16} className="text-emerald-600" />
                                </div>
                                <p className="mt-3 text-[28px] sm:text-[34px] font-bold text-emerald-600">
                                    15+
                                </p>
                                <p className="mt-1 text-[12px] sm:text-[13px] font-medium text-[#282828]">
                                    Years of Service
                                </p>
                            </div>

                            <div>
                                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-white ring-1 ring-emerald-100">
                                    <Stethoscope size={16} className="text-emerald-600" />
                                </div>
                                <p className="mt-3 text-[28px] sm:text-[34px] font-bold text-emerald-600">
                                    30+
                                </p>
                                <p className="mt-1 text-[12px] sm:text-[13px] font-medium text-[#282828]">
                                    Expert Doctors
                                </p>
                            </div>

                            <div>
                                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-white ring-1 ring-emerald-100">
                                    <Users size={16} className="text-emerald-600" />
                                </div>
                                <p className="mt-3 text-[28px] sm:text-[34px] font-bold text-emerald-600">
                                    50K+
                                </p>
                                <p className="mt-1 text-[12px] sm:text-[13px] font-medium text-[#282828]">
                                    Patients Treated
                                </p>
                            </div>

                            <div>
                                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-white ring-1 ring-emerald-100">
                                    <Building2 size={16} className="text-emerald-600" />
                                </div>
                                <p className="mt-3 text-[28px] sm:text-[34px] font-bold text-emerald-600">
                                    12+
                                </p>
                                <p className="mt-1 text-[12px] sm:text-[13px] font-medium text-[#282828]">
                                    Departments
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Story