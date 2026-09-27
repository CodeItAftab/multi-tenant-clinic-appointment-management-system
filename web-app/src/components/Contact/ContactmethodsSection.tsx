"use client";

import { contactMethods } from "../../utils/contactdata";

function ContactmethodsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {contactMethods.map((method) => {
          const Icon = method.icon;
          return (
            <a
              key={method.title}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={
                method.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`service-card group relative overflow-hidden rounded-2xl border p-6 shadow-sm hover:shadow-lg ${
                method.urgent
                  ? "border-red-200 bg-red-50/60 hover:border-red-400 hover:shadow-red-500/20"
                  : "border-slate-200 bg-white hover:border-[#4bb1c8] hover:shadow-[#4bb1c8]/20"
              }`}
              style={{
                transition:
                  "box-shadow 300ms ease-out, border-color 300ms ease-out",
              }}
            >
              {/* Soft glow sweep on hover */}
              <div
                className={`pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 ${
                  method.urgent
                    ? "bg-linear-to-b from-red-100/0 via-red-100/0 to-red-100/50"
                    : "bg-linear-to-b from-[#e0f7fa]/0 via-[#e0f7fa]/0 to-[#e0f7fa]/40"
                }`}
              />

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition-all duration-300 ease-out ${
                  method.urgent
                    ? "bg-red-100 ring-red-200 group-hover:bg-red-600 group-hover:ring-red-600 group-hover:shadow-md group-hover:shadow-red-500/20"
                    : "bg-[#e0f7fa] ring-[#b2ebf2] group-hover:bg-[#4bb1c8] group-hover:ring-[#4bb1c8] group-hover:shadow-md group-hover:shadow-[#4bb1c8]/20"
                }`}
              >
                <Icon
                  size={19}
                  strokeWidth={1.8}
                  className={`transition-colors duration-300 ease-out group-hover:text-white ${
                    method.urgent ? "text-red-600" : "text-[#4bb1c8]"
                  }`}
                />
              </div>

              <h3 className="mt-4 text-[13px] font-bold uppercase tracking-wide text-slate-500">
                {method.title}
              </h3>
              <p
                className={`mt-1 text-[16px] font-bold transition-colors duration-300 ease-out ${
                  method.urgent
                    ? "text-slate-900 group-hover:text-red-600"
                    : "text-slate-900 group-hover:text-[#0f8fa8]"
                }`}
              >
                {method.value}
              </p>
              <p className="mt-1 text-[12px] leading-relaxed text-slate-500">
                {method.subtitle}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default ContactmethodsSection;