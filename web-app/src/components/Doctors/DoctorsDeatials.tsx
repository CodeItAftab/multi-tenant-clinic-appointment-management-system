"use client";
import { Stethoscope, GraduationCap, Star, Calendar } from "lucide-react";
import { doctors } from "@/utils/doctors";
import Link from "next/link";
function DoctorsDeatials() {
    return (
        <div>
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {doctors.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="group rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                        >

                            <div className="h-40 w-full overflow-hidden bg-emerald-50">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-3.5">
                                <div className="flex items-start justify-between gap-2">
                                    <div className="min-w-0">
                                        <h3 className="text-[13.5px] font-extrabold text-[#282828] truncate ">
                                            {doctor.name}
                                        </h3>
                                        <p className="mt-0.5 text-[11.5px] font-bold text-emerald-600 truncate">
                                            {doctor.specialty}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-0.5 rounded-md bg-emerald-50 px-1.5 py-0.5 shrink-0">
                                        <Star
                                            size={10}
                                            className="fill-emerald-600 text-emerald-600"
                                        />
                                        <span className="text-[10.5px] font-semibold text-emerald-700">
                                            {doctor.rating}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-2.5 space-y-1">
                                    <div className="flex items-center gap-1.5 text-[11px] text-gray-600">
                                        <GraduationCap size={13} className="text-gray-400 shrink-0" />
                                        <span className="truncate font-medium">{doctor.qualification}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[11px] text-gray-600">
                                        <Stethoscope size={13} className="text-gray-400 shrink-0" />
                                        <span className="truncate font-medium">{doctor.experience}</span>
                                    </div>
                                </div>


                                <div className="mt-3 flex flex-col gap-1.5">

                                    <Link
                                        href={"/"}

                                        className="flex items-center justify-center gap-1 rounded-lg bg-emerald-600 py-1.5 text-[11.5px] font-bold text-white transition-colors hover:bg-emerald-700"
                                    >
                                        <Calendar size={12} />
                                        Book Appointment
                                    </Link>


                                    <Link
                                        href={"/"}

                                        className="rounded-lg border flex justify-center border-gray-200 py-1.5 text-[11.5px] font-bold text-[#282828] transition-colors hover:border-emerald-400 hover:text-emerald-600"
                                    >
                                        View Details
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section></div>
    )
}

export default DoctorsDeatials