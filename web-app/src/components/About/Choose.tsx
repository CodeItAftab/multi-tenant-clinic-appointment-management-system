import React from 'react'
import { Heart, Users, Award, Clock, Banknote, Star, ShieldCheck } from "lucide-react";
function Choose() {

    const features = [
        {
            icon: Heart,
            title: "Patient-Centered Care",
            desc: "Every treatment plan is built around your comfort and needs.",
        },
        {
            icon: Users,
            title: "Expert Team",
            desc: "Experienced doctors and specialists across every department.",
        },
        {
            icon: Award,
            title: "Quality Assurance",
            desc: "Modern equipment and strict hygiene and safety standards.",
        },
        {
            icon: Clock,
            title: "Always Available",
            desc: "Round-the-clock support for emergencies and queries.",
        },
        {
            icon: Clock,
            title: "Zero Waiting Time",
            desc: "Your time is valuable. Book a specific slot and walk in just in time for your consultation.",
        },
        {
            icon: Banknote,
            title: "No Price Shock",
            desc: "See the exact consultation fee before you book. No hidden charges or surprise bills.",
        },
        {
            icon: Star,
            title: "Authentic Reviews",
            desc: "Read reviews from real, verified patients who have actually visited the clinic through our platform.",
        },
        {
            icon: ShieldCheck,
            title: "Hygiene Standards",
            desc: "Partner clinics follow strict cleanliness and safety protocols for every visit.",
        },
    ];

    return (
        <div className='w-full bg-white'>

            <section className="border-t border-gray-200 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
                    <h2 className="text-center text-[22px] sm:text-[28px] font-bold text-[#282828]">
                        Why Choose Us
                    </h2>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map(({ icon: Icon, title, desc }) => (
                            <div
                                key={title}
                                className="flex flex-col items-center rounded-2xl bg-white border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
                                    <Icon size={22} className="text-emerald-600" />
                                </div>
                                <h3 className="mt-4 text-[15px] font-semibold text-[#282828]">
                                    {title}
                                </h3>
                                <p className="mt-2 text-[13px] leading-relaxed text-gray-600">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Choose