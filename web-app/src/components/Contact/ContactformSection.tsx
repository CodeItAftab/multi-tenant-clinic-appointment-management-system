"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Phone } from "lucide-react";
import { formSubjects, departmentContacts } from "../../utils/contactdata";

function ContactformSection() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: formSubjects[0] ?? "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleSendAnotherMessage() {
    setSubmitted(false);

    setForm({
      name: "",
      phone: "",
      email: "",
      subject: formSubjects[0] ?? "",
      message: "",
    });
  }

  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        {/* Main heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4bb1c8]">
            Contact Us
          </p>

          <h2 className="mt-2 text-[26px] font-bold tracking-tight text-slate-900 sm:text-[32px]">
            How can we help?
          </h2>
        </div>

        {/* Form left + department contacts right */}
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 lg:grid-cols-2 lg:items-stretch lg:gap-6">
          {/* LEFT: Contact form card */}
          <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            {/* Centered form heading */}
            <div className="border-b border-slate-100 pb-3 text-center">
              <h3 className="text-[16px] font-bold text-slate-900 sm:text-[17px]">
                Send us a message
              </h3>
            </div>

            {submitted ? (
              <div className="mt-4 flex flex-1 flex-col items-center justify-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e0f7fa] ring-1 ring-[#b2ebf2]">
                  <CheckCircle2 size={24} className="text-[#4bb1c8]" />
                </div>

                <h3 className="mt-3 text-[15px] font-bold text-slate-900">
                  Message received
                </h3>

                <p className="mt-1.5 max-w-sm text-[12px] leading-relaxed text-slate-500">
                  Thanks for reaching out. Our team will get back to you within
                  24 hours.
                </p>

                <button
                  type="button"
                  onClick={handleSendAnotherMessage}
                  className="mt-4 text-[12px] font-bold text-[#4bb1c8] transition-colors hover:text-[#1aa3bf]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 flex flex-1 flex-col">
                {/* Name and phone */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-[12px] font-bold text-slate-700"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-[13px] text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#4bb1c8] focus:ring-1 focus:ring-[#4bb1c8]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1 block text-[12px] font-bold text-slate-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-[13px] text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#4bb1c8] focus:ring-1 focus:ring-[#4bb1c8]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mt-3">
                  <label
                    htmlFor="email"
                    className="mb-1 block text-[12px] font-bold text-slate-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-[13px] text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#4bb1c8] focus:ring-1 focus:ring-[#4bb1c8]"
                  />
                </div>

                {/* Subject */}
                <div className="mt-3">
                  <label
                    htmlFor="subject"
                    className="mb-1 block text-[12px] font-bold text-slate-700"
                  >
                    Subject
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-700 outline-none transition-colors focus:border-[#4bb1c8] focus:ring-1 focus:ring-[#4bb1c8]"
                  >
                    {formSubjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mt-3 flex flex-1 flex-col">
                  <label
                    htmlFor="message"
                    className="mb-1 block text-[12px] font-bold text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="min-h-22.5 w-full flex-1 resize-none rounded-lg border border-slate-200 px-3 py-2 text-[13px] text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#4bb1c8] focus:ring-1 focus:ring-[#4bb1c8]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4bb1c8] px-6 py-2.5 text-[13px] font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#33b6d3] sm:w-auto"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: Department contacts card */}
          <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            {/* Centered department heading */}
            <div className="border-b border-slate-100 pb-3 text-center">
              <h3 className="text-[16px] font-bold text-slate-900 sm:text-[17px]">
                Call the right department
              </h3>
            </div>

            {/* Department list */}
            <div className="mt-4 flex-1 overflow-hidden rounded-xl border border-slate-200">
              <ul className="flex h-full flex-col">
                {departmentContacts.map((dept) => (
                  <li
                    key={dept.department}
                    className="flex flex-1 items-center justify-between gap-3 border-b border-slate-100 px-3.5 py-2.5 last:border-b-0 sm:px-4"
                  >
                    <div className="min-w-0">
                      <p className="text-[12px] font-bold text-slate-900 sm:text-[13px]">
                        {dept.department}
                      </p>

                      <p className="mt-0.5 text-[11px] text-slate-500">
                        {dept.hours}
                      </p>
                    </div>

                    <a
                      href={`tel:${dept.phone.replace(/\s+/g, "")}`}
                      className="group flex shrink-0 items-center gap-2"
                    >
                      <span className="whitespace-nowrap text-[12px] font-bold text-slate-700 transition-colors group-hover:text-[#4bb1c8]">
                        {dept.phone}
                      </span>

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition-colors group-hover:border-[#b2ebf2] group-hover:bg-[#e0f7fa]">
                        <Phone size={12} className="text-[#4bb1c8]" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactformSection;