import { Users, Clock, Stethoscope, Building2 } from "lucide-react";

function Story() {
  return (
    <div className="w-full bg-white">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div>
            <span className="inline-block text-[11px] font-bold tracking-wide text-[#4bb1c8] sm:text-[12px]">
              OUR STORY
            </span>

            <h2 className="mt-3 text-[24px] font-bold leading-tight text-[#282828] sm:text-[32px]">
              Built on a simple idea
            </h2>

            <p className="mt-5 border-l-2 border-[#b2ebf2] pl-4 text-[15px] leading-relaxed text-gray-600 sm:text-[16px]">
              HMS was founded with a simple goal — make quality healthcare
              accessible, honest, and comfortable for every patient who walks
              through our doors.
            </p>

            <p className="mt-4 text-[14px] leading-relaxed text-gray-600 sm:text-[15px]">
              Today, we bring together experienced doctors, modern equipment,
              and a genuinely caring staff to serve our community every single
              day.
            </p>
          </div>

          {/* Right stats card */}
          <div className="relative mx-auto w-full max-w-md rounded-2xl bg-gradient-to-br from-[#e0f7fa] to-[#b2ebf2]/40 p-5 shadow-sm ring-1 ring-[#b2ebf2] sm:p-6">
            <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#b2ebf2]/30 blur-2xl" />

            <div className="relative grid grid-cols-2 gap-x-5 gap-y-6 text-center">
              <div>
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-white ring-1 ring-[#b2ebf2]">
                  <Clock size={14} className="text-[#4bb1c8]" />
                </div>

                <p className="mt-2 text-[24px] font-bold text-[#4bb1c8] sm:text-[28px]">
                  15+
                </p>

                <p className="mt-0.5 text-[11px] font-medium text-[#282828] sm:text-[12px]">
                  Years of Service
                </p>
              </div>

              <div>
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-white ring-1 ring-[#b2ebf2]">
                  <Stethoscope size={14} className="text-[#4bb1c8]" />
                </div>

                <p className="mt-2 text-[24px] font-bold text-[#4bb1c8] sm:text-[28px]">
                  30+
                </p>

                <p className="mt-0.5 text-[11px] font-medium text-[#282828] sm:text-[12px]">
                  Expert Doctors
                </p>
              </div>

              <div>
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-white ring-1 ring-[#b2ebf2]">
                  <Users size={14} className="text-[#4bb1c8]" />
                </div>

                <p className="mt-2 text-[24px] font-bold text-[#4bb1c8] sm:text-[28px]">
                  50K+
                </p>

                <p className="mt-0.5 text-[11px] font-medium text-[#282828] sm:text-[12px]">
                  Patients Treated
                </p>
              </div>

              <div>
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-white ring-1 ring-[#b2ebf2]">
                  <Building2 size={14} className="text-[#4bb1c8]" />
                </div>

                <p className="mt-2 text-[24px] font-bold text-[#4bb1c8] sm:text-[28px]">
                  12+
                </p>

                <p className="mt-0.5 text-[11px] font-medium text-[#282828] sm:text-[12px]">
                  Departments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Story;