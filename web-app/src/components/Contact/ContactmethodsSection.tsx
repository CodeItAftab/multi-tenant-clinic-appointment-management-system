"use client";
import { contactMethods } from "./contactdata";

function ContactMethodsSection() {
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
                            rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className={`group relative overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${method.urgent
                                    ? "border-red-200 bg-red-50/60 hover:border-red-300"
                                    : "border-slate-200 bg-white hover:border-emerald-200"
                                }`}
                        >
                            <div
                                className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition-all duration-300 ${method.urgent
                                        ? "bg-red-100 ring-red-200 group-hover:bg-red-600"
                                        : "bg-emerald-50 ring-emerald-100 group-hover:bg-emerald-600"
                                    }`}
                            >
                                <Icon
                                    size={19}
                                    strokeWidth={1.8}
                                    className={`transition-colors duration-300 group-hover:text-white ${method.urgent ? "text-red-600" : "text-emerald-600"
                                        }`}
                                />
                            </div>

                            <h3 className="mt-4 text-[13px] font-bold uppercase tracking-wide text-slate-500">
                                {method.title}
                            </h3>
                            <p className="mt-1 text-[16px] font-bold text-slate-900">{method.value}</p>
                            <p className="mt-1 text-[12px] leading-relaxed text-slate-500">{method.subtitle}</p>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}

export default ContactMethodsSection;