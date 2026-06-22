import Link from 'next/link';

export default function House() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full h-[614px] md:h-[819px]">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOVkgzE15ndM9tN9i1KzDn4Uw_WKNX8ZC0hT7xvflM04Q9CJaXJDJsjLXdPgeIyycMILMzA-ePTnR54GK-x3wPjFAVQeiOdW7eaKzP4sIb7JWLpsdTI4IGBIH_S_4uPuuMe8POSAH0E8A0ou4u-Oh0BS_U3wgqEv8k3LWtG1MBnv-018xHMqrkLXqM6NUlJOzTjvNanWcbX8_XPeJV3fB-ajmX5_BFLnHsyiY2Bez8_ROPowvWc4Efj8JBooSpwMKHNGij4ps3wfQ2')",
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
              <div className="group overflow-hidden rounded-lg bg-surface-container aspect-square md:aspect-auto md:h-96">
                <img
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyTzoMor_k8jW1FWpHfj5GIDhqeqTF-QYMZnM-XzsA92e_P3Stg23GPmbgykC4ZQLBpa-N5USaLodl6bJhiW5CJQGBNYuLwxuo2mwbKhF4slbFbaYddjP44W9o4HFos4MZdjlzrNKGT8p6O5kNS-WGlRFF38GfWoWywz6owpcUZoi2B-lBnGrJRaVHr3RgC7hDQugoucfvVGXMe5rROHoqPeaSnSJyDTWuTeJbL2S4Sz8PjFgghf5F9ZvHmwCTa-4HzyIiHr13zL_m"
                />
              </div>
              <div className="group overflow-hidden rounded-lg bg-surface-container aspect-square md:aspect-auto md:h-96">
                <img
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoUjAlIZhs3tmxvY1koTsf2LWKbATTKlgN5-rULK5a8ectxuDnacjdyDeGwsLXFb75q8CwasNp05pBGUE52HxMnzmVG1HwHcJV2ayvikhkY4weaK3DpDK5eSvkb4WIiBdKADGbb0vD1H2f_rwvUg5hABqYTG7i1oFNAJPh1vUNQvZcKoilsVVAtBLGbDDztVC1AaNVAV2un2ZBh5BiM2Rovr3V8VUOI_k3HU6jhC5o3Ao7buvPgQxAs6e6ergJ377muEWIvUyyAN1L"
                />
              </div>
              <div className="md:col-span-2 group overflow-hidden rounded-lg bg-surface-container aspect-video md:h-[500px]">
                <img
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUez_U_OwdfdlWNwi3TyZ_pgmBhHZBdPE-Ogk9oLtf1cSNuWOPTDaCSzPrZlNj8Ot_Gk-AF78kfE8kehtT1DRF1_WSKppySy99yHpBP9XtEyIkKAxJDbgSZMgr15nKRwJVueVpYp4HKXV6tMC8stoS2DB93grBMtUj6jE_V4vbBuOTHm8CnobJdGSd3MKRRZspuzY5paVj7fFQOu5PxRk4ApJhnERkjh0uNcHycFKjh50r2-ynJu7TpbBMi3xvMUgcVu9qIznflJI3"
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
    </>
  );
}
