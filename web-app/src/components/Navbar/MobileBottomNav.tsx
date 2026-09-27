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
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur-sm shadow-[0_-2px_10px_rgba(0,0,0,0.08)] md:hidden"
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
                className="flex flex-col items-center justify-center gap-0.5 py-1.5 text-[10.5px] font-bold transition-colors"
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${isActive
                      ? "bg-[#4bb1c8] text-white shadow-sm"
                      : "text-gray-500"
                    }`}
                >
                  <Icon size={17} strokeWidth={isActive ? 2.8 : 2.4} />
                </span>

                <span
                  className={
                    isActive ? "text-[#4bb1c8] font-extrabold" : "text-gray-600"
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