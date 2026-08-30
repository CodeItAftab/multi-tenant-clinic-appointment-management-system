"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { formSubjects } from "./contactdata";

function ContactFormSection() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        subject: formSubjects[0],
        message: "",
    });

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Static placeholder — wire this up to your real submission
        // endpoint (API route / email service) once ready.
        setSubmitted(true);
    }

    return (
        <section className="border-y border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                        Send a Message
                    </p>
                    <h2 className="mt-2 text-[24px] font-bold text-slate-900 sm:text-[30px]">
                        Fill the form, we&apos;ll take it from here
                    </h2>
                </div>

                <div className="mx-auto mt-10 max-w-3xl">
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
                        {submitted ? (
                            <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
                                    <CheckCircle2 size={30} className="text-emerald-600" />
                                </div>
                                <h3 className="mt-5 text-[18px] font-bold text-slate-900">
                                    Message received
                                </h3>
                                <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-slate-500">
                                    Thanks for reaching out — our team will get back to you within 24
                                    hours.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-[13px] font-bold text-emerald-600 hover:text-emerald-700"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-[13px] font-bold text-slate-700">
                                            Full Name
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            className="w-full rounded-xl border border-slate-200 px-5 py-3.5 text-[15px] text-slate-700 outline-none transition-colors focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[13px] font-bold text-slate-700">
                                            Phone Number
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+91 00000 00000"
                                            className="w-full rounded-xl border border-slate-200 px-5 py-3.5 text-[15px] text-slate-700 outline-none transition-colors focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-[13px] font-bold text-slate-700">
                                        Email Address
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="w-full rounded-xl border border-slate-200 px-5 py-3.5 text-[15px] text-slate-700 outline-none transition-colors focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-[13px] font-bold text-slate-700">
                                        Subject
                                    </label>
                                    <select
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-[15px] text-slate-700 outline-none transition-colors focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                                    >
                                        {formSubjects.map((subject) => (
                                            <option key={subject} value={subject}>
                                                {subject}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="mb-2 block text-[13px] font-bold text-slate-700">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={6}
                                        placeholder="How can we help?"
                                        className="w-full resize-none rounded-xl border border-slate-200 px-5 py-3.5 text-[15px] text-slate-700 outline-none transition-colors focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-[15px] font-bold text-white shadow-sm transition-all duration-300 hover:bg-emerald-500 sm:w-auto"
                                >
                                    <Send size={17} />
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactFormSection;