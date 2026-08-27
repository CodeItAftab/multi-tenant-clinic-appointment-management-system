"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, ChevronDown, Menu, X } from "lucide-react";

function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [language, setLanguage] = useState("English");

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/aboutus" },
        { name: "Doctors", href: "/doctors" },
        { name: "Services", href: "/services" },
        { name: "Timings & Location", href: "/location" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                <div className="flex h-[88px] items-center justify-between">


                    <Link href="/" className="flex items-center gap-3 sm:gap-4">
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100 shadow-sm">
                            <Plus
                                size={26}
                                strokeWidth={5}
                                absoluteStrokeWidth
                                className="text-emerald-600 sm:w-[30px] sm:h-[30px]"
                            />
                        </div>

                        <div className="leading-tight">
                            <h1 className="text-[20px] sm:text-[24px] font-bold text-[#282828]">
                                HMS
                            </h1>
                            <p className="text-[11px] sm:text-[12px] font-medium tracking-wide text-[#282828]">
                                Your Health, Our Priority
                            </p>
                        </div>
                    </Link>


                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="group relative py-6 text-[14px] font-medium text-[#282828] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:text-emerald-600"
                            >
                                {link.name}

                                <span
                                    className="absolute left-1/2 bottom-[18px] h-[2px] w-0 -translate-x-1/2 rounded-full bg-emerald-600 transition-all duration-300 ease-out group-hover:w-full"
                                />
                            </Link>
                        ))}
                    </div>



                    <div className="flex items-center gap-2 sm:gap-3">


                        <div className="relative">
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className=" font-medium appearance-none cursor-pointer  rounded-xl border border-gray-200 bg-white/90 py-2 sm:py-2.5 lg:py-3 pl-3 sm:pl-4 pr-8 sm:pr-10 text-[12px] sm:text-[14px] text-[#282828] shadow-sm outline-none transition-all hover:border-emerald-400 hover:shadow-md focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                            >
                                <option value="English">English</option>
                                <option value="Hindi">हिंदी</option>
                            </select>

                            <ChevronDown
                                size={14}
                                className="pointer-events-none absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            />
                        </div>


                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="p-2 text-[#282828] hover:text-emerald-600 lg:hidden rounded-lg focus:outline-none"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>



                {mobileMenu && (
                    <div className="border-t border-gray-100 py-4 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenu(false)}
                                    className="rounded-lg px-4 py-3 text-[15px] font-medium text-[#282828] hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;