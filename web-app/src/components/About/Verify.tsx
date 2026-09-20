import React from "react";
import { FileText, Stethoscope, BadgeCheck } from "lucide-react";

function Verify() {
    return (
        <div className="w-full bg-white">
            <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-0 lg:px-10">
                <div className="rounded-3xl border border-gray-200 bg-gray-50/60 px-6 py-14 sm:px-10 sm:py-16 text-center">
                    <h2 className="text-[22px] font-bold text-[#282828] sm:text-[32px]">
                        How We Verify Clinics
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-[14px] text-gray-500 sm:text-[16px]">
                        We don&apos;t let just anyone on our platform. Every single doctor
                        goes through a rigorous 3-step verification process to ensure
                        your safety.
                    </p>

                    <div className="relative mt-14 grid gap-10 sm:grid-cols-3">
                        <div className="absolute left-[16.5%] right-[16.5%] top-8 hidden h-px bg-[#b2ebf2] sm:block" />

                        <div className="relative">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white">
                                <FileText size={24} className="text-[#4bb1c8]" />
                            </div>
                            <h3 className="mt-5 text-[16px] font-bold text-[#282828] sm:text-[18px]">
                                1. Document Collection
                            </h3>
                            <p className="mx-auto mt-2.5 max-w-xs text-[13px] leading-relaxed text-gray-500 sm:text-[14px]">
                                Clinics must submit official registration certificates,
                                doctor IDs, and medical licenses.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white">
                                <Stethoscope size={24} className="text-[#4bb1c8]" />
                            </div>
                            <h3 className="mt-5 text-[16px] font-bold text-[#282828] sm:text-[18px]">
                                2. Medical Council Check
                            </h3>
                            <p className="mx-auto mt-2.5 max-w-xs text-[13px] leading-relaxed text-gray-500 sm:text-[14px]">
                                We cross-reference submitted credentials with official
                                state and national medical registries.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white">
                                <BadgeCheck size={24} className="text-[#4bb1c8]" />
                            </div>
                            <h3 className="mt-5 text-[16px] font-bold text-[#282828] sm:text-[18px]">
                                3. Final Approval
                            </h3>
                            <p className="mx-auto mt-2.5 max-w-xs text-[13px] leading-relaxed text-gray-500 sm:text-[14px]">
                                Only after a thorough background and credential check
                                is a clinic listed on HMS.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Verify;