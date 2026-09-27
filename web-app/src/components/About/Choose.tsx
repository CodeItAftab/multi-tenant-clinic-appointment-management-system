import React from "react";
import {
  Heart,
  Users,
  Award,
  Clock,
  Banknote,
  Star,
  ShieldCheck,
} from "lucide-react";

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
    <div className="w-full bg-white">
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
          <h2 className="text-center text-[22px] font-bold text-[#282828] sm:text-[28px]">
            Why Choose Us
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative overflow-hidden flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:border-[#4bb1c8] hover:shadow-lg hover:shadow-[#4bb1c8]/20"
                style={{
                  transition:
                    "box-shadow 300ms ease-out, border-color 300ms ease-out",
                }}
              >
                {/* Soft glow sweep on hover */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-b from-[#e0f7fa]/0 via-[#e0f7fa]/0 to-[#e0f7fa]/40 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e0f7fa] ring-1 ring-[#b2ebf2] transition-all duration-300 ease-out group-hover:bg-[#4bb1c8] group-hover:ring-[#4bb1c8] group-hover:shadow-md group-hover:shadow-[#4bb1c8]/20">
                  <Icon size={22} className="text-[#4bb1c8] transition-colors duration-300 ease-out group-hover:text-white" />
                </div>
                <h3 className="relative mt-4 text-[15px] font-semibold text-[#282828] transition-colors duration-300 ease-out group-hover:text-[#0f8fa8]">
                  {title}
                </h3>
                <p className="relative mt-2 text-[13px] leading-relaxed text-gray-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Choose;