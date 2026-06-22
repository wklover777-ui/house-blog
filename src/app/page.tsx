import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full hero-zoom">
        <div
          className="w-full h-full bg-cover bg-top bg-no-repeat"
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
          <p className="font-body-lg text-body-lg text-on-primary/90 mb-element-gap max-w-xl hidden md:block drop-shadow-md">
            자연의 숨결을 그대로 담은 공간. 당신의 일상이 예술이 되는 하이엔드 목조 건축을 경험해보세요.
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
