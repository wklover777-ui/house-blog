import Link from 'next/link';

export default function Process() {
  return (
    <div className="flex-grow pt-32 md:pt-48 pb-section-gap">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap text-center md:text-left">
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-6 text-balance">
          빈 땅에서 집이 되기까지
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-balance">
          땅을 고르는 것부터 집이 완성되기까지, 아버지와 제가 직접 거쳐온 과정을 기록합니다.
        </p>
      </section>

      {/* Staggered Timeline Section */}
      <section className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop timeline-line">
        <div className="flex flex-col gap-section-gap">
          {/* Stage 1 */}
          <article className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-element-gap items-center group">
            {/* Timeline Node */}
            <div className="absolute left-[24px] md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2 border-4 border-background z-20"></div>
            {/* Image Card */}
            <div className="w-full pl-12 md:pl-0 md:pr-element-gap">
              <div className="overflow-hidden rounded-lg ambient-shadow bg-surface-container aspect-[4/3] relative">
                <img
                  alt="Site Selection and Foundation Phase"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="/process-01-foundation.jpg"
                />
              </div>
            </div>
            {/* Content */}
            <div className="pl-12 md:pl-element-gap flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary-container text-primary font-label-md text-label-md">01</span>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-md md:text-headline-md text-primary">대지 선정 및 기초</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant text-balance">
                가장 먼저 땅을 살피고 다졌습니다. 단단한 기초가 있어야 오래가는 집이 되기에, 터를 파고 바닥을 다지는 일부터 정성을 들였습니다.
              </p>
            </div>
          </article>

          {/* Stage 2 */}
          <article className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-element-gap items-center group">
            <div className="absolute left-[24px] md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2 border-4 border-background z-20"></div>
            {/* Content (Reversed on Desktop) */}
            <div className="pl-12 md:pl-0 md:pr-element-gap flex flex-col justify-center md:order-1 order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary-container text-primary font-label-md text-label-md">02</span>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-md md:text-headline-md text-primary">골조 및 목조 시공</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant text-balance">
                집의 뼈대를 세우는 과정입니다. 좋은 목재를 하나하나 직접 짜 맞추며, 튼튼하면서도 따뜻한 구조를 만들었습니다.
              </p>
            </div>
            {/* Image Card */}
            <div className="w-full pl-12 md:pl-element-gap md:order-2 order-1">
              <div className="overflow-hidden rounded-lg ambient-shadow bg-surface-container aspect-[4/3] relative">
                <img
                  alt="Framing and Wood Construction Phase"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="/process-02-framing.jpg"
                />
              </div>
            </div>
          </article>

          {/* Stage 3 */}
          <article className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-element-gap items-center group">
            <div className="absolute left-[24px] md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-outline-variant transform -translate-x-1/2 -translate-y-1/2 border-4 border-background z-20 transition-colors duration-500 hover:bg-primary"></div>
            {/* Image Card */}
            <div className="w-full pl-12 md:pl-0 md:pr-element-gap">
              <div className="overflow-hidden rounded-lg ambient-shadow bg-surface-container aspect-[4/3] relative">
                <img
                  alt="Interior and Exterior Finishing Phase"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="/process-03-finishing.jpg"
                />
              </div>
            </div>
            {/* Content */}
            <div className="pl-12 md:pl-element-gap flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md">03</span>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-md md:text-headline-md text-on-surface">내외장 마감</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant text-balance">
                뼈대 위에 벽과 마감을 입혔습니다. 손이 많이 가는 작업이지만, 마감의 디테일이 집의 완성도를 좌우하기에 꼼꼼히 신경 썼습니다.
              </p>
            </div>
          </article>

          {/* Stage 4 */}
          <article className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-element-gap items-center group">
            <div className="absolute left-[24px] md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-outline-variant transform -translate-x-1/2 -translate-y-1/2 border-4 border-background z-20 transition-colors duration-500 hover:bg-primary"></div>
            {/* Content (Reversed on Desktop) */}
            <div className="pl-12 md:pl-0 md:pr-element-gap flex flex-col justify-center md:order-1 order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md">04</span>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-md md:text-headline-md text-on-surface">준공 및 완성</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant text-balance">
                드디어 집이 완성되었습니다. 빈 땅에서 시작해 사람이 머물 수 있는 공간이 되기까지, 모든 과정에 정성을 담았습니다.
              </p>
            </div>
            {/* Image Card */}
            <div className="w-full pl-12 md:pl-element-gap md:order-2 order-1">
              <div className="overflow-hidden rounded-lg ambient-shadow bg-surface-container aspect-[4/3] relative">
                <img
                  alt="Final Completion Phase"
                  className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                  src="/home-main.jpg?v=2"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-section-gap text-center">
        <div className="bg-secondary-container/30 rounded-xl p-12 md:p-24 border border-outline-variant/30 ambient-shadow backdrop-blur-sm flex flex-col items-center">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-8 text-balance">
            이 집이 궁금하시다면, 편하게 문의해주세요.
          </h2>
          <Link href="/contact" className="inline-block bg-primary text-on-primary font-label-md text-label-md tracking-widest uppercase px-10 py-4 rounded-DEFAULT hover:opacity-90 hover:-translate-y-1 transition-all duration-300 ambient-shadow">
            문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
