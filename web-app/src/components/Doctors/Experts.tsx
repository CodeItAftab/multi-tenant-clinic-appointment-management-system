import React from 'react'

function Experts() {
    return (
        <div>
            <section className="relative overflow-hidden border-b border-slate-200 bg-[#f7f9fb] max-w-7xl mt-6 sm:mt-10 mx-4 sm:mx-auto rounded-2xl sm:rounded-4xl">

                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1755995083683-50d08cd83d09?w=2000&q=80&auto=format&fit=crop"
                        alt="Modern hospital corridor"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/72 via-teal-950/68 to-slate-950/82" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
                </div>


                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-28 text-center">
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-[12px] font-medium tracking-wide sm:tracking-[0.18em] text-teal-50 backdrop-blur-md shadow-lg shadow-black/10">
                        Trusted Healthcare Excellence
                    </span>

                    <h1 className="mt-4 sm:mt-5 text-[28px] sm:text-[52px] font-semibold tracking-tight text-white leading-tight">
                        Our Medical Experts
                    </h1>

                    <p className="mt-3 sm:mt-4 text-[13px] sm:text-[17px] text-slate-100/90 max-w-2xl mx-auto">
                        Meet our team of experienced specialists committed to delivering
                        compassionate, precise, and patient-first care.
                    </p>

                    <p className="hidden sm:block mt-5 text-[13px] sm:text-[15px] text-slate-100/78 max-w-3xl mx-auto leading-relaxed">
                        Our multidisciplinary team brings together decades of combined clinical
                        expertise across cardiology, neurology, pediatrics, orthopedics, and more.
                        Each specialist is chosen for medical excellence, empathy, and a strong
                        commitment to personalized care throughout your health journey.
                    </p>


                    <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:inline-flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 rounded-2xl border border-white/10 bg-white/8 px-3 py-4 sm:px-6 backdrop-blur-md shadow-2xl shadow-black/15">
                        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
                            <span className="text-[16px] sm:text-[20px] font-semibold text-white">30+</span>
                            <span className="text-[10px] sm:text-[12px] text-slate-100/80">Specialist Doctors</span>
                        </div>
                        <div className="hidden sm:block h-4 w-px bg-white/15" />
                        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
                            <span className="text-[16px] sm:text-[20px] font-semibold text-white">15+</span>
                            <span className="text-[10px] sm:text-[12px] text-slate-100/80">Specialties</span>
                        </div>
                        <div className="hidden sm:block h-4 w-px bg-white/15" />
                        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
                            <span className="text-[16px] sm:text-[20px] font-semibold text-white">4.8★</span>
                            <span className="text-[10px] sm:text-[12px] text-slate-100/80">Average Rating</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 pb-8">

                <div className="max-w-3xl mx-auto text-center">

                    <span className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-[15px] font-extrabold tracking-[0.16em] text-emerald-600 uppercase">
                        Meet Our Experts
                    </span>

                    <h2 className="mt-4 text-[28px] sm:text-[38px] font-semibold tracking-tight text-slate-900">
                        Trusted Specialists, Dedicated to Your Care
                    </h2>

                    <p className="mt-4 text-[14px] sm:text-[16px] leading-7 text-slate-500">
                        Get to know our experienced medical professionals who combine
                        clinical expertise, advanced knowledge, and compassionate care
                        to help you and your family make confident decisions about
                        your health.
                    </p>

                </div>

            </section>

        </div>
    )
}

export default Experts