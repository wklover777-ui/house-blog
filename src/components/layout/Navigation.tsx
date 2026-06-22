'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Process', href: '/process' },
    { name: 'House', href: '/house' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        {/* Brand Logo */}
        <Link
          href="/"
          className="font-display-lg-mobile md:font-display-lg text-headline-md md:text-headline-lg tracking-tighter text-primary dark:text-primary-fixed"
        >
          LUMBER &amp; LINE
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-gutter">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-label-md text-label-md tracking-widest uppercase transition-colors px-2 py-1 rounded
                  ${
                    isActive
                      ? 'text-primary dark:text-primary-fixed border-b-2 border-primary pb-1 active:opacity-80 scale-95 transition-transform'
                      : 'text-on-surface-variant dark:text-outline hover:text-primary hover:bg-secondary-container/20 dark:hover:bg-tertiary-container/20'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Trailing CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-on-primary font-label-md text-label-md tracking-widest uppercase rounded hover:bg-tertiary transition-colors duration-300"
          >
            Inquire
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-primary p-2" aria-label="Toggle Menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
