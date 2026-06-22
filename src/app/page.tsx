import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full flex flex-col md:block md:relative md:h-screen md:overflow-hidden bg-surface">
      {/* Background Image Container */}
      <div className="relative w-full h-[55vh] md:absolute md:inset-0 md:h-full hero-zoom overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center md:bg-top bg-no-repeat bg-[url('/home-main-mobile.jpg')] md:bg-[url('/home-main.jpg?v=2')]"
        />
        {/* Scrim for desktop text readability */}
        <div className="hidden md:block absolute inset-0 scrim-gradient pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full py-12 px-margin-mobile bg-surface md:bg-transparent md:absolute md:bottom-0 md:left-0 md:w-full md:px-margin-desktop md:pb-32">
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary md:text-on-primary mb-4 md:mb-6 md:drop-shadow-lg text-balance">
              나무로 짓는 꿈,<br />시간이 머무는 집
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant md:text-on-primary/90 mb-8 md:mb-element-gap max-w-xl md:drop-shadow-md leading-relaxed text-balance">
              아버지와 제가 직접 지은 집입니다.<br />
              좋은 자재와 정직한 손길로, 오래 머물 수 있는 공간을 만들었습니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="/process"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-body-md text-body-md rounded shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center w-full sm:w-auto"
              >
                시공 과정 보기
              </Link>
              <Link
                href="/house"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-primary border border-primary md:text-on-primary md:border-on-primary/50 font-body-md text-body-md rounded hover:bg-primary/5 md:hover:bg-on-primary/10 transition-all duration-300 text-center md:backdrop-blur-sm w-full sm:w-auto"
              >
                완성된 집 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
