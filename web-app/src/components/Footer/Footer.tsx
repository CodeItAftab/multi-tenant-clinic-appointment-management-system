"use client";

import Link from "next/link";
import {
    Plus,
    MapPin,
    Phone,
    Mail,
    Clock,
    PhoneCall,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/aboutus" },
        { name: "Doctors", href: "/doctors" },
        { name: "Services", href: "/services" },
        { name: "Timings & Location", href: "/location" },
        { name: "Contact Us", href: "/contact" },
    ];

    const departments = [
         { name: "General Physician", href: "/services#cardiology" },
        { name: "Cardiology", href: "/services#cardiology" },
        { name: "Neurology", href: "/services#neurology" },
        { name: "Pediatrics", href: "/services#pediatrics" },
        { name: "Orthopedics", href: "/services#orthopedics" },
        { name: "Dermatology", href: "/services#dermatology" },
    ];

    const socialLinks = [
        { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
        { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
        { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
        { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    ];

    return (
        <footer className="w-full border-t border-gray-200 bg-[#282828] text-gray-300">
            <div className="bg-[#282828] border-b border-gray-700">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                    <div className="flex items-center gap-2 text-white text-[13px] sm:text-[14px] font-medium">
                        <PhoneCall size={16} />
                        <span>24/7 Emergency Helpline</span>
                    </div>
                    <a
                        href="tel:+911234567890"
                        className="text-white text-[16px] sm:text-[18px] font-bold tracking-wide hover:underline"
                    >
                        +91 12345 67890
                    </a>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600/20 ring-1 ring-emerald-600/40">
                                <Plus size={22} strokeWidth={5} className="text-emerald-500" />
                            </div>
                            <div className="leading-tight">
                                <h2 className="text-[18px] font-bold text-white">HMS</h2>
                                <p className="text-[11px] font-medium text-gray-400">
                                    Your Health, Our Priority
                                </p>
                            </div>
                        </Link>

                        <p className="mt-4 text-[13px] leading-relaxed text-gray-400">
                            Providing compassionate, modern healthcare to our community with experienced doctors and trusted care since day one.
                        </p>

                        <div className="mt-5">
                            <p className="text-[13px] font-semibold text-white mb-2">
                                Subscribe to our newsletter
                            </p>
                            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full rounded-lg border border-gray-600 bg-transparent px-3 py-2 text-[13px] text-white placeholder:text-gray-500 outline-none focus:border-emerald-500"
                                />
                                <button
                                    type="submit"
                                    className="shrink-0 rounded-lg bg-emerald-600 px-4 py-2 text-[13px] font-medium text-white hover:bg-emerald-700 transition-colors"
                                >
                                    Join
                                </button>
                            </form>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[15px] font-semibold text-white">Quick Links</h3>
                        <ul className="mt-4 space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[13px] text-gray-400 hover:text-emerald-500 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[15px] font-semibold text-white">Departments</h3>
                        <ul className="mt-4 space-y-2.5">
                            {departments.map((dept) => (
                                <li key={dept.name}>
                                    <Link
                                        href={dept.href}
                                        className="text-[13px] text-gray-400 hover:text-emerald-500 transition-colors"
                                    >
                                        {dept.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[15px] font-semibold text-white">Contact Us</h3>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-start gap-2.5 text-[13px] text-gray-400">
                                <MapPin size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span>123 Thana chawk Street, Dehri-on sone, Bihar, 821308</span>
                            </li>
                            <li className="flex items-center gap-2.5 text-[13px] text-gray-400">
                                <Phone size={16} className="text-emerald-500 shrink-0" />
                                <a href="tel:+919876543210" className="hover:text-emerald-500">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5 text-[13px] text-gray-400">
                                <Mail size={16} className="text-emerald-500 shrink-0" />
                                <a href="mailto:contact@hms.com" className="hover:text-emerald-500">
                                    contact@hms.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2.5 text-[13px] text-gray-400">
                                <Clock size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span>Mon – Sat: 8:00 AM – 9:00 PM<br />Sunday: 9:00 AM – 2:00 PM</span>
                            </li>
                        </ul>

                        <div className="mt-5 flex items-center gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-emerald-500 hover:text-emerald-500 transition-colors"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                    <p className="text-[12px] text-gray-500">
                        © {new Date().getFullYear()} HMS. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        <Link
                            href="/privacy-policy"
                            className="text-[12px] text-gray-500 hover:text-emerald-500 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-[12px] text-gray-500 hover:text-emerald-500 transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;