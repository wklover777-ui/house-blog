"use client";
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const GALLERY_IMAGES = [
  { src: '/house-interior-07.jpg', alt: '거실·계단·주방 전체' },
  { src: '/house-interior-10.jpg', alt: '외관 전면' },
  { src: '/house-interior-06.jpg', alt: '거실과 복층 난간' },
  { src: '/house-interior-04.jpg', alt: '거실과 주방' },
  { src: '/house-interior-01.jpg', alt: '2층에서 내려다본 통창과 계단' },
  { src: '/house-interior-11.jpg', alt: '야외 테라스' },
  { src: '/house-interior-12.jpg', alt: '정원과 화단' },
  { src: '/house-interior-05.jpg', alt: '2층에서 내려다본 거실' },
  { src: '/house-interior-09.jpg', alt: '2층 방' },
  { src: '/house-interior-08.jpg', alt: '2층 복도' },
  { src: '/house-interior-03.jpg', alt: '2층 방 내부' },
  { src: '/house-interior-02.jpg', alt: '욕실' },
  { src: '/house-interior-13.jpg', alt: '외관 측면' },
];

const GRID_PREVIEW = 4;

export default function House() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null), []);
  const next = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i + 1) % GALLERY_IMAGES.length : null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, prev, next]);

  const hiddenCount = GALLERY_IMAGES.length - 1 - GRID_PREVIEW;

  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full h-[614px] md:h-[819px]">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-[75%_60%] md:bg-[center_60%]"
          style={{ backgroundImage: "url('/house-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-margin-mobile md:px-margin-desktop pb-16 max-w-container-max mx-auto md:left-1/2 md:-translate-x-1/2">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-4">
            목행동 주택
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            복층 구조의 단독 목조 주택입니다.<br />
            알찬 공간 구성과 풍부한 채광으로, 일상이 편안한 집입니다.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column */}
          <div className="lg:col-span-8 order-2 lg:order-1 space-y-element-gap">
            <section className="prose max-w-none">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                복층 구조로 공간을 넉넉하게 나눴고, 큰 창으로 햇빛이 잘 들어옵니다. 목조 주택 특유의 따뜻함과 단단함을 함께 느낄 수 있는 집입니다.
              </p>
            </section>

            {/* Gallery */}
            <section className="grid grid-cols-2 gap-3 mt-12">
              {/* Main large image */}
              <div
                className="col-span-2 group overflow-hidden rounded-lg bg-surface-container aspect-video cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                onClick={() => openLightbox(0)}
              >
                <img
                  src={GALLERY_IMAGES[0].src}
                  alt={GALLERY_IMAGES[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Thumbnail grid */}
              {GALLERY_IMAGES.slice(1, 1 + GRID_PREVIEW).map((img, i) => {
                const actualIndex = i + 1;
                const isLastSlot = i === GRID_PREVIEW - 1 && hiddenCount > 0;
                return (
                  <div
                    key={img.src}
                    className="relative group overflow-hidden rounded-lg bg-surface-container aspect-square cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                    onClick={() => openLightbox(isLastSlot ? actualIndex : actualIndex)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isLastSlot ? 'brightness-50' : ''}`}
                    />
                    {isLastSlot && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="material-symbols-outlined text-white mb-1" style={{ fontSize: '32px' }}>photo_library</span>
                        <span className="text-white font-medium text-lg">+{hiddenCount} 사진 더 보기</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 order-1 lg:order-2 mb-12 lg:mb-0">
            <aside className="sticky top-32 bg-surface-container rounded-xl p-8 shadow-sm border border-outline-variant/30">
              <h3 className="font-headline-md text-headline-md text-primary mb-8 border-b border-outline-variant/30 pb-4">집 정보</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-4 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>landscape</span>
                  <div>
                    <span className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">대지 면적</span>
                    <span className="font-body-lg text-body-lg text-on-surface font-medium">40평</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-4 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>straighten</span>
                  <div>
                    <span className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">건물 면적</span>
                    <span className="font-body-lg text-body-lg text-on-surface font-medium">27평</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-4 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>layers</span>
                  <div>
                    <span className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">구조</span>
                    <span className="font-body-lg text-body-lg text-on-surface font-medium">복층형 (방 2개, 거실, 화장실 2개)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-4 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>forest</span>
                  <div>
                    <span className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">공법</span>
                    <span className="font-body-lg text-body-lg text-on-surface font-medium">목조주택</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-4 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>pin_drop</span>
                  <div>
                    <span className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">위치</span>
                    <span className="font-body-lg text-body-lg text-on-surface font-medium">충청북도 충주시 목행동</span>
                  </div>
                </li>
                <li className="flex items-start pt-4 border-t border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary mr-4 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>sell</span>
                  <div>
                    <span className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">가격</span>
                    <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary">상담 문의</span>
                  </div>
                </li>
              </ul>
              <Link href="/contact" className="block text-center w-full mt-10 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest py-4 px-8 rounded-full hover:bg-tertiary transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                이 집 문의하기
              </Link>
            </aside>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Counter */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/40 px-4 py-1.5 rounded-full">
            {lightboxIndex + 1} / {GALLERY_IMAGES.length}
          </div>

          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-50"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="닫기"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>close</span>
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all z-50"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="이전 사진"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>chevron_left</span>
          </button>

          {/* Image */}
          <img
            src={GALLERY_IMAGES[lightboxIndex].src}
            alt={GALLERY_IMAGES[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all z-50"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="다음 사진"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>chevron_right</span>
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2" onClick={(e) => e.stopPropagation()}>
            {GALLERY_IMAGES.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(i)}
                className={`w-12 h-12 rounded overflow-hidden border-2 transition-all ${i === lightboxIndex ? 'border-white opacity-100' : 'border-transparent opacity-50 hover:opacity-80'}`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
