import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full hero-zoom">
        <div
          className="w-full h-full bg-cover bg-[75%_top] md:bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('/home-main.jpg?v=2')",
          }}
        />
      </div>

      {/* Scrim for text readability */}
      <div className="absolute inset-0 scrim-gradient" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-6 drop-shadow-lg">
            나무로 짓는 꿈,<br />시간이 머무는 집
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/90 mb-element-gap max-w-xl hidden md:block drop-shadow-md leading-relaxed">
            아버지와 제가 직접 지은 집입니다.<br />
            좋은 자재와 정직한 손길로, 오래 머물 수 있는 공간을 만들었습니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/process"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-body-md text-body-md rounded shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center"
            >
              시공 과정 보기
            </Link>
            <Link
              href="/house"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-on-primary border border-on-primary/50 font-body-md text-body-md rounded hover:bg-on-primary/10 transition-all duration-300 text-center backdrop-blur-sm"
            >
              완성된 집 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
