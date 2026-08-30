"use client";
import { Phone } from "lucide-react";
import { departmentContacts } from "./contactdata";

function DepartmentSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                    Direct Lines
                </p>
                <h2 className="mt-2 text-[24px] font-bold text-slate-900 sm:text-[30px]">
                    Reach the right department
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
                    Skip the wait — call the department that can actually help.
                </p>
            </div>

            <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <ul>
                    {departmentContacts.map((dept) => (
                        <li
                            key={dept.department}
                            className="flex flex-col gap-2 border-b border-slate-100 px-6 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div>
                                <p className="text-[13px] font-bold text-slate-900 sm:text-[14px]">
                                    {dept.department}
                                </p>
                                <p className="mt-0.5 text-[12px] text-slate-500">{dept.hours}</p>
                            </div>

                            <a
                                href={`tel:${dept.phone.replace(/\s+/g, "")}`}
                                className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[12.5px] font-bold text-slate-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 sm:self-auto"
                            >
                                <Phone size={13} />
                                {dept.phone}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default DepartmentSection;