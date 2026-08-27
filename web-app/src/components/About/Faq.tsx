import React from 'react'
import { HelpCircle } from "lucide-react";

function Faq() {
    const faqs = [
        {
            question: "Is HMS really free for patients?",
            answer: "Yes, 100%. We do not charge any booking fees, convenience fees, or hidden charges to patients. The fee you see is exactly what you pay at the clinic.",
        },
        {
            question: "How do you verify the clinics?",
            answer: "Our onboarding team manually checks the medical registration and credentials of every doctor and clinic before they are allowed to list on our platform.",
        },
        {
            question: "Can clinics pay to rank higher?",
            answer: "Absolutely not. Search rankings on HMS are strictly organic and driven by patient preference, booking volume, and verified reviews.",
        },
        {
            question: "Can I cancel or reschedule?",
            answer: "Yes, you can easily cancel or reschedule your appointment from your dashboard without any penalty, giving flexibility to both you and the doctor.",
        },
    ];

    return (
        <div className='w-full bg-white'>
            {/* FAQ */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-20 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50">
                    <HelpCircle size={20} className="text-emerald-600" />
                </div>
                <h2 className="mt-5 text-[22px] sm:text-[32px] font-bold text-[#282828]">
                    Frequently Asked Questions
                </h2>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 text-left">
                    {faqs.map(({ question, answer }) => (
                        <div
                            key={question}
                            className="rounded-2xl bg-white border border-gray-200 p-7 sm:p-8 shadow-sm"
                        >
                            <h3 className="text-[15px] sm:text-[18px] font-bold text-[#282828]">
                                {question}
                            </h3>
                            <p className="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-gray-500">
                                {answer}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Faq