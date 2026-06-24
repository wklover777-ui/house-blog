import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full mt-section-gap bg-surface-container border-t border-outline-variant/30">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-element-gap px-margin-mobile md:px-margin-desktop py-margin-desktop max-w-container-max mx-auto transition-all duration-200 ease-in-out">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <span className="font-display-lg text-headline-sm text-primary">
            M LINE
            <span className="block font-body-md text-sm mt-1">M실내건축</span>
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs leading-relaxed">
            직접 짓고, 정직하게 짓습니다.<br/>목조 주택 시공 · M실내건축
          </p>
          <a
            href="https://blog.naver.com/wklover777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body-md text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
            블로그에서 시공 과정 보기
          </a>
        </div>

        {/* Copyright */}
        <div className="flex flex-col mt-4 md:mt-0">
          <p className="font-body-md text-body-md text-on-surface-variant text-sm md:text-right text-balance">
            © 2026 M LINE.<br className="hidden md:block" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
