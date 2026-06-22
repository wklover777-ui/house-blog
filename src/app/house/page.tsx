"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function House() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full h-[614px] md:h-[819px]">
        <div
          className="absolute inset-0 w-full h-full bg-cover"
          style={{
            backgroundImage: "url('/house-hero.jpg')",
            backgroundPosition: "center 60%", // Adjusted to show deck and windows
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full px-margin-mobile md:px-margin-desktop pb-16 max-w-container-max mx-auto md:left-1/2 md:-translate-x-1/2">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-4">
            목행동 주택
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            아버지와 제가 직접 지은 복층형 목조 주택입니다.<br />
            튼튼한 목조 구조와 정성스러운 마감으로, 실용적이면서 오래 머물 수 있는 공간을 만들었습니다.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Presentation & Gallery */}
          <div className="lg:col-span-8 order-2 lg:order-1 space-y-element-gap">
            {/* Philosophy Text */}
            <section className="prose max-w-none">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                아버지와 제가 직접 지은 복층형 목조 주택입니다. 튼튼한 목조 구조와 정성스러운 마감으로, 실용적이면서 오래 머물 수 있는 공간을 만들었습니다.
              </p>
            </section>
            {/* Gallery Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div 
                className="md:col-span-2 group overflow-hidden rounded-lg bg-surface-container aspect-[4/3] md:aspect-video cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setSelectedImage('/house-interior-01.jpg')}
              >
                <img
                  alt="복층 통창과 계단"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/house-interior-01.jpg"
                />
              </div>
              <div 
                className="group overflow-hidden rounded-lg bg-surface-container aspect-square cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setSelectedImage('/house-interior-04.jpg?v=2')}
              >
                <img
                  alt="주방, 거실, 복층 전체"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/house-interior-04.jpg?v=2"
                />
              </div>
              <div 
                className="group overflow-hidden rounded-lg bg-surface-container aspect-square cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setSelectedImage('/house-interior-02.jpg')}
              >
                <img
                  alt="빈 방"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/house-interior-02.jpg"
                />
              </div>
              <div 
                className="group overflow-hidden rounded-lg bg-surface-container aspect-square cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setSelectedImage('/house-interior-03.jpg')}
              >
                <img
                  alt="욕실"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/house-interior-03.jpg"
                />
              </div>
              <div 
                className="group overflow-hidden rounded-lg bg-surface-container aspect-square cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setSelectedImage('/house-interior-05.jpg')}
              >
                <img
                  alt="높은 층고 방과 현관"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/house-interior-05.jpg"
                />
              </div>
            </section>
          </div>

          {/* Right Column: Key Information Sidebar */}
          <div className="lg:col-span-4 order-1 lg:order-2 mb-12 lg:mb-0">
            <aside className="sticky top-32 bg-surface-container rounded-xl p-8 shadow-sm border border-outline-variant/30">
              <h3 className="font-headline-md text-headline-md text-primary mb-8 border-b border-outline-variant/30 pb-4">집 정보</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-4 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                    landscape
                  </span>
                  <div>
                    <span className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">대지 면적</span>
                    <span className="font-body-lg text-body-lg text-on-surface font-medium">40평</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-4 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                    straighten
                  </span>
                  <div>
                    <span className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">건물 면적</span>
                    <span className="font-body-lg text-body-lg text-on-surface font-medium">27평</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-4 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                    layers
                  </span>
                  <div>
                    <span className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">구조</span>
                    <span className="font-body-lg text-body-lg text-on-surface font-medium">복층형 (방 2개, 거실, 화장실 2개)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-4 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                    forest
                  </span>
                  <div>
                    <span className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">공법</span>
                    <span className="font-body-lg text-body-lg text-on-surface font-medium">목조주택</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-4 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                    pin_drop
                  </span>
                  <div>
                    <span className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">위치</span>
                    <span className="font-body-lg text-body-lg text-on-surface font-medium">충청북도 충주시 목행동</span>
                  </div>
                </li>
                <li className="flex items-start pt-4 border-t border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary mr-4 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                    sell
                  </span>
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-50 flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Close lightbox"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>close</span>
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full object-contain rounded shadow-2xl animate-scale-in" 
            alt="확대된 이미지" 
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
          />
        </div>
      )}
    </>
  );
}
