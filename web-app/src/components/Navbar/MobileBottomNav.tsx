"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Stethoscope, ListChecks, Phone, MapPin } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Doctors", href: "/doctors", icon: Stethoscope },
  { name: "Services", href: "/services", icon: ListChecks },
  { name: "Timings", href: "/location", icon: MapPin },
  { name: "Contact", href: "/contact", icon: Phone },
];

function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur-sm md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <ul className="flex items-stretch justify-between px-1">
        {navItems.map(({ name, href, icon: Icon }) => {
          const isActive =
            href === "/"
              ? pathname === "/"
              : pathname === href || pathname?.startsWith(`${href}/`);

          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className="flex flex-col items-center justify-center gap-0.5 py-1.5 text-[9.5px] font-semibold transition-colors"
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
                    isActive
                      ? "bg-[#e0f7fa] text-[#4bb1c8]"
                      : "text-gray-400"
                  }`}
                >
                  <Icon size={15} strokeWidth={isActive ? 2.4 : 2} />
                </span>

                <span
                  className={
                    isActive ? "text-[#4bb1c8]" : "text-gray-500"
                  }
                >
                  {name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MobileBottomNav;