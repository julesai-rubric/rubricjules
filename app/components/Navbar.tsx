"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <header className="sticky top-0 w-full bg-primary dark:bg-primary-container z-50 border-b border-outline-variant/10">
      <div className="flex justify-between items-center h-16 px-margin-desktop max-w-max-width mx-auto">
        <Link href="/" className="font-headline-md text-headline-md font-bold text-on-primary tracking-tight">
          Rubric
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "font-label-lg text-label-lg transition-all duration-200 ease-in-out",
                  isActive
                    ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                    : "text-on-primary-container hover:text-on-primary"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <button className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-label-lg text-label-lg hover:brightness-110 transition-all">
          Contact Us
        </button>
      </div>
    </header>
  );
}
