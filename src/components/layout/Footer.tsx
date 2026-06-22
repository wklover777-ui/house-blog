import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full mt-section-gap bg-surface-container border-t border-outline-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-element-gap px-margin-mobile md:px-margin-desktop py-margin-desktop max-w-container-max mx-auto transition-all duration-200 ease-in-out">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <span className="font-display-lg text-headline-sm text-primary">
            M LINE
            <span className="block font-body-md text-sm mt-1">M실내건축</span>
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs leading-relaxed">
            직접 짓고, 정직하게 짓습니다.<br/>목조 주택 시공 · M실내건축
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3 md:items-center">
          <nav className="flex flex-col gap-3">
            <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4">
              Instagram
            </Link>
            <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4">
              LinkedIn
            </Link>
            <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4">
              Pinterest
            </Link>
            <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4 mt-4 text-sm">
              Privacy Policy
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-end md:items-end">
          <p className="font-body-md text-body-md text-on-surface-variant text-sm md:text-right text-balance">
            © 2026 M LINE.<br className="hidden md:block" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
