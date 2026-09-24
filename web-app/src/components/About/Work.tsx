import { Clock, Search, CalendarCheck } from "lucide-react";

function Work() {
    return (
        <div className="w-full bg-white">
            <section className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-10">
                <h2 className="text-[22px] font-bold text-[#282828] sm:text-[32px]">
                    How HMS Works
                </h2>
                <p className="mt-3 text-[14px] text-gray-500 sm:text-[16px]">
                    Three simple steps to a hassle-free clinic visit.
                </p>

                <div className="mt-12 grid gap-10 sm:grid-cols-3">
                    <div>
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm">
                            <Search size={26} className="text-[#4bb1c8]" />
                        </div>
                        <h3 className="mt-5 text-[16px] font-bold text-[#282828] sm:text-[18px]">
                            1. Search &amp; Compare
                        </h3>
                        <p className="mx-auto mt-2.5 max-w-xs text-[13px] leading-relaxed text-gray-500 sm:text-[14px]">
                            Enter your location and specialty. We show you verified
                            clinics nearby along with their actual consultation fees.
                        </p>
                    </div>

                    <div>
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm">
                            <CalendarCheck size={26} className="text-[#4bb1c8]" />
                        </div>
                        <h3 className="mt-5 text-[16px] font-bold text-[#282828] sm:text-[18px]">
                            2. Choose Your Slot
                        </h3>
                        <p className="mx-auto mt-2.5 max-w-xs text-[13px] leading-relaxed text-gray-500 sm:text-[14px]">
                            See real-time availability directly from the clinic&apos;s
                            calendar and pick a slot that fits your schedule perfectly.
                        </p>
                    </div>

                    <div>
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm">
                            <Clock size={26} className="text-[#4bb1c8]" />
                        </div>
                        <h3 className="mt-5 text-[16px] font-bold text-[#282828] sm:text-[18px]">
                            3. Book &amp; Visit
                        </h3>
                        <p className="mx-auto mt-2.5 max-w-xs text-[13px] leading-relaxed text-gray-500 sm:text-[14px]">
                            Confirm your booking instantly. Walk into the clinic at
                            your designated time and skip the endless waiting room
                            queues.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Work;