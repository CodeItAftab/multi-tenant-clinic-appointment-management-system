import React from 'react'
import { FileText, Stethoscope, BadgeCheck,} from "lucide-react";
function Verify() {
    return (
        <div className='w-full bg-white'>  


            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
                <div className="rounded-3xl border border-gray-200 bg-gray-50/60 px-6 sm:px-10 py-14 sm:py-16 text-center">
                    <h2 className="text-[22px] sm:text-[32px] font-bold text-[#282828]">
                        How We Verify Clinics
                    </h2>
                    <p className="mt-3 text-[14px] sm:text-[16px] text-gray-500 max-w-2xl mx-auto">
                        We don't let just anyone on our platform. Every single doctor
                        goes through a rigorous 3-step verification process to ensure
                        your safety.
                    </p>

                    <div className="mt-14 grid gap-10 sm:grid-cols-3 relative">
                        <div className="hidden sm:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-gray-300" />

                        <div className="relative">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white border border-gray-200">
                                <FileText size={24} className="text-emerald-600" />
                            </div>
                            <h3 className="mt-5 text-[16px] sm:text-[18px] font-bold text-[#282828]">
                                1. Document Collection
                            </h3>
                            <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-gray-500 max-w-xs mx-auto">
                                Clinics must submit official registration certificates,
                                doctor IDs, and medical licenses.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white border border-gray-200">
                                <Stethoscope size={24} className="text-emerald-600" />
                            </div>
                            <h3 className="mt-5 text-[16px] sm:text-[18px] font-bold text-[#282828]">
                                2. Medical Council Check
                            </h3>
                            <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-gray-500 max-w-xs mx-auto">
                                We cross-reference submitted credentials with official
                                state and national medical registries.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white border border-gray-200">
                                <BadgeCheck size={24} className="text-emerald-600" />
                            </div>
                            <h3 className="mt-5 text-[16px] sm:text-[18px] font-bold text-[#282828]">
                                3. Final Approval
                            </h3>
                            <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-gray-500 max-w-xs mx-auto">
                                Only after a thorough background and credential check
                                is a clinic listed on HMS.
                            </p>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default Verify