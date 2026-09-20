"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is HMS really free for patients?",
      answer:
        "Yes, 100%. We do not charge any booking fees, convenience fees, or hidden charges to patients. The fee you see is exactly what you pay at the clinic.",
    },
    {
      question: "How do you verify the clinics?",
      answer:
        "Our onboarding team manually checks the medical registration and credentials of every doctor and clinic before they are allowed to list on our platform.",
    },
    {
      question: "Can clinics pay to rank higher?",
      answer:
        "Absolutely not. Search rankings on HMS are strictly organic and driven by patient preference, booking volume, and verified reviews.",
    },
    {
      question: "Can I cancel or reschedule?",
      answer:
        "Yes, you can easily cancel or reschedule your appointment from your dashboard without any penalty, giving flexibility to both you and the doctor.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4bb1c8]">
            FAQs
          </p>

          <h2 className="mt-1.5 text-[23px] font-bold tracking-tight text-slate-900 sm:text-[28px]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-5 space-y-2.5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                aria-expanded={openFaq === index}
              >
                <span className="text-[13px] font-bold text-slate-900 sm:text-[14px]">
                  {faq.question}
                </span>

                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[#4bb1c8] transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${openFaq === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-3.5 text-[12px] leading-relaxed text-slate-600 sm:px-6 sm:text-[13px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;