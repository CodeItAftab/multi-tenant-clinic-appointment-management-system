import { HeartHandshake, Lock } from "lucide-react";

function Info() {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Problem */}
          <div
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-rose-300 hover:shadow-lg hover:shadow-rose-500/10 sm:p-6"
            style={{
              transition:
                "box-shadow 300ms ease-out, border-color 300ms ease-out",
            }}
          >
            {/* Soft glow sweep on hover */}
            <div className="pointer-events-none absolute -inset-px rounded-xl bg-linear-to-b from-rose-50/0 via-rose-50/0 to-rose-50/40 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

            <span className="relative text-[10px] font-bold tracking-wide text-rose-500 sm:text-[11px]">
              THE PROBLEM
            </span>

            <h3 className="relative mt-2 text-[18px] font-bold text-[#282828] transition-colors duration-300 ease-out group-hover:text-rose-600 sm:text-[20px]">
              Opacity and long waits.
            </h3>

            <p className="relative mt-3 text-[12px] leading-relaxed text-gray-600 sm:text-[13px]">
              Finding a specialist often means multiple calls, unclear fees,
              crowded waiting rooms, and long delays. This lack of clarity
              affects both patients and doctors.
            </p>
          </div>

          {/* Solution */}
          <div
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-[#4bb1c8] hover:shadow-lg hover:shadow-[#4bb1c8]/20 sm:p-6"
            style={{
              transition:
                "box-shadow 300ms ease-out, border-color 300ms ease-out",
            }}
          >
            {/* Soft glow sweep on hover */}
            <div className="pointer-events-none absolute -inset-px rounded-xl bg-linear-to-b from-[#e0f7fa]/0 via-[#e0f7fa]/0 to-[#e0f7fa]/40 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

            <span className="relative text-[10px] font-bold tracking-wide text-[#4bb1c8] sm:text-[11px]">
              THE SOLUTION
            </span>

            <h3 className="relative mt-2 text-[18px] font-bold text-[#282828] transition-colors duration-300 ease-out group-hover:text-[#0f8fa8] sm:text-[20px]">
              Clarity and convenience.
            </h3>

            <p className="relative mt-3 text-[12px] leading-relaxed text-gray-600 sm:text-[13px]">
              HMS shows verified doctor details, transparent consultation fees,
              and available slots—so you can book with confidence.
            </p>
          </div>

          {/* Business model */}
          <div
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-[#4bb1c8] hover:shadow-lg hover:shadow-[#4bb1c8]/20 sm:p-6"
            style={{
              transition:
                "box-shadow 300ms ease-out, border-color 300ms ease-out",
            }}
          >
            {/* Soft glow sweep on hover */}
            <div className="pointer-events-none absolute -inset-px rounded-xl bg-linear-to-b from-[#e0f7fa]/0 via-[#e0f7fa]/0 to-[#e0f7fa]/40 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-[#e0f7fa] ring-1 ring-[#b2ebf2] transition-all duration-300 ease-out group-hover:bg-[#4bb1c8] group-hover:ring-[#4bb1c8] group-hover:shadow-md group-hover:shadow-[#4bb1c8]/20">
              <HeartHandshake size={17} className="text-[#4bb1c8] transition-colors duration-300 ease-out group-hover:text-white" />
            </div>

            <h3 className="relative mt-3 text-[18px] font-bold text-[#282828] transition-colors duration-300 ease-out group-hover:text-[#0f8fa8] sm:text-[20px]">
              Complete honesty
            </h3>

            <p className="relative mt-3 text-[12px] leading-relaxed text-gray-600 sm:text-[13px]">
              <span className="font-semibold text-[#282828]">
                HMS is free for patients.
              </span>{" "}
              We do not add hidden convenience fees or inflate clinic charges.
              Partner clinics pay a predictable software fee.
            </p>
          </div>

          {/* Privacy */}
          <div
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-[#4bb1c8] hover:shadow-lg hover:shadow-[#4bb1c8]/20 sm:p-6"
            style={{
              transition:
                "box-shadow 300ms ease-out, border-color 300ms ease-out",
            }}
          >
            {/* Soft glow sweep on hover */}
            <div className="pointer-events-none absolute -inset-px rounded-xl bg-linear-to-b from-[#e0f7fa]/0 via-[#e0f7fa]/0 to-[#e0f7fa]/40 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-[#e0f7fa] ring-1 ring-[#b2ebf2] transition-all duration-300 ease-out group-hover:bg-[#4bb1c8] group-hover:ring-[#4bb1c8] group-hover:shadow-md group-hover:shadow-[#4bb1c8]/20">
              <Lock size={17} className="text-[#4bb1c8] transition-colors duration-300 ease-out group-hover:text-white" />
            </div>

            <h3 className="relative mt-3 text-[18px] font-bold text-[#282828] transition-colors duration-300 ease-out group-hover:text-[#0f8fa8] sm:text-[20px]">
              Privacy and security
            </h3>

            <p className="relative mt-3 text-[12px] leading-relaxed text-gray-600 sm:text-[13px]">
              Your health information is personal. We protect your booking
              details and preferences with strong security practices and never
              sell or share data without your consent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;