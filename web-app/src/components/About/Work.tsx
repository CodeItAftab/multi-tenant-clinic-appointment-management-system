
import { Clock, Search, CalendarCheck, } from "lucide-react";
function Work() {
    return (
        <div className='w-full bg-white'>

         
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-20 text-center">
                <h2 className="text-[22px] sm:text-[32px] font-bold text-[#282828]">
                    How HMS Works
                </h2>
                <p className="mt-3 text-[14px] sm:text-[16px] text-gray-500">
                    Three simple steps to a hassle-free clinic visit.
                </p>

                <div className="mt-12 grid gap-10 sm:grid-cols-3">
                    <div>
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-gray-200 shadow-sm">
                            <Search size={26} className="text-emerald-600" />
                        </div>
                        <h3 className="mt-5 text-[16px] sm:text-[18px] font-bold text-[#282828]">
                            1. Search &amp; Compare
                        </h3>
                        <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-gray-500 max-w-xs mx-auto">
                            Enter your location and specialty. We show you verified
                            clinics nearby along with their actual consultation fees.
                        </p>
                    </div>

                    <div>
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-gray-200 shadow-sm">
                            <CalendarCheck size={26} className="text-emerald-600" />
                        </div>
                        <h3 className="mt-5 text-[16px] sm:text-[18px] font-bold text-[#282828]">
                            2. Choose Your Slot
                        </h3>
                        <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-gray-500 max-w-xs mx-auto">
                            See real-time availability directly from the clinic's
                            calendar and pick a slot that fits your schedule perfectly.
                        </p>
                    </div>

                    <div>
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-gray-200 shadow-sm">
                            <Clock size={26} className="text-emerald-600" />
                        </div>
                        <h3 className="mt-5 text-[16px] sm:text-[18px] font-bold text-[#282828]">
                            3. Book &amp; Visit
                        </h3>
                        <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-gray-500 max-w-xs mx-auto">
                            Confirm your booking instantly. Walk into the clinic at
                            your designated time and skip the endless waiting room
                            queues.
                        </p>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Work