import React from 'react'
import { HeartHandshake, Lock,   } from "lucide-react";
function Info() {
    return (
        <div className='w-full bg-white'>
            <section className="border-t border-gray-200 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
                    <div className="grid gap-6 sm:grid-cols-2">
                      
                        <div className="rounded-2xl bg-white border border-gray-200 p-8 sm:p-10 shadow-sm">
                            <span className="text-[11px] sm:text-[12px] font-bold tracking-wide text-rose-500">
                                THE PROBLEM (WHY WE EXIST)
                            </span>
                            <h3 className="mt-3 text-[20px] sm:text-[24px] font-bold text-[#282828]">
                                Opacity and endless waiting.
                            </h3>
                            <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-gray-600">
                                Historically, finding a specialist meant calling multiple
                                clinics, relying on word-of-mouth, and turning up without
                                knowing the consultation fee. Once there, patients often
                                faced crowded waiting rooms and indefinite delays. We
                                realized this broken, opaque system hurt both patients
                                and well-meaning doctors.
                            </p>
                        </div>

                       
                        <div className="rounded-2xl bg-white border border-gray-200 p-8 sm:p-10 shadow-sm">
                            <span className="text-[11px] sm:text-[12px] font-bold tracking-wide text-emerald-600">
                                THE SOLUTION (WHAT WE DO)
                            </span>
                            <h3 className="mt-3 text-[20px] sm:text-[24px] font-bold text-[#282828]">
                                Clarity, respect, and convenience.
                            </h3>
                            <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-gray-600">
                                HMS brings the entire booking process online with
                                absolute transparency. You see the doctor's verified
                                credentials, the exact consultation fee, and real-time
                                slot availability. You book, you walk in, you get
                                treated. It's healthcare scheduling designed with
                                respect for your time and wallet.
                            </p>
                        </div>

                        
                        <div className="rounded-2xl bg-white border border-gray-200 p-8 sm:p-10 shadow-sm">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                                <HeartHandshake size={20} className="text-emerald-600" />
                            </div>
                            <h3 className="mt-5 text-[20px] sm:text-[24px] font-bold text-[#282828]">
                                Our Business Model: Complete Honesty
                            </h3>
                            <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-gray-600">
                                <span className="font-semibold text-[#282828]">
                                    HMS is completely free for patients.
                                </span>{" "}
                                We do not charge hidden convenience fees, nor do we
                                inflate clinic fees. We charge partner clinics a
                                predictable software (SaaS) fee to use our booking
                                system.
                            </p>

                            <div className="mt-6 rounded-xl bg-gray-50 p-5">
                                <p className="text-[14px] sm:text-[15px] font-semibold text-[#282828]">
                                    We do NOT sell rankings.
                                </p>
                                <p className="mt-1.5 text-[13px] sm:text-[14px] leading-relaxed text-gray-600">
                                    Clinics cannot pay to appear higher in searches.
                                    Rankings are 100% organic, driven by patient
                                    preference and reviews.
                                </p>
                            </div>
                        </div>

                        
                        <div className="rounded-2xl bg-white border border-gray-200 p-8 sm:p-10 shadow-sm">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                                <Lock size={20} className="text-emerald-600" />
                            </div>
                            <h3 className="mt-5 text-[20px] sm:text-[24px] font-bold text-[#282828]">
                                Your Privacy &amp; Data Security
                            </h3>
                            <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-gray-600">
                                Healthcare data is deeply personal. We implement
                                strict, industry-standard encryption and security
                                protocols to ensure your booking history, personal
                                information, and medical preferences are never
                                compromised, sold, or shared without your explicit
                                consent. Your health data belongs exclusively to you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Info