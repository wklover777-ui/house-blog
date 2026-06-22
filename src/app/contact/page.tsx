"use client";

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xgojewgr', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-element-gap text-center md:text-left">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
          문의하기
        </h1>
        <p className="font-headline-lg-mobile md:font-headline-md text-headline-lg-mobile md:text-headline-md text-surface-tint">
          집에 대한 궁금한 점, 무엇이든 편하게 물어보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        {/* Contact Form */}
        <div className="md:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_4px_24px_rgba(93,64,55,0.08)]">
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-50 text-green-800 border border-green-200 rounded-md">
              문의가 접수되었습니다. 곧 연락드리겠습니다.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 text-red-800 border border-red-200 rounded-md">
              오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-widest">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-surface-container-lowest border-0 border-b border-primary/30 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-widest">
                  연락처
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-surface-container-lowest border-0 border-b border-primary/30 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-widest">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-surface-container-lowest border-0 border-b border-primary/30 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface transition-colors"
              />
            </div>

            <div>
              <label htmlFor="inquiry-type" className="block font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-widest">
                문의 유형
              </label>
              <select
                id="inquiry-type"
                name="inquiry-type"
                className="w-full bg-surface-container-lowest border-0 border-b border-primary/30 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface transition-colors"
              >
                <option value="building">시공 문의</option>
                <option value="purchasing">분양 문의</option>
                <option value="consulting">기타 상담</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-widest">
                문의 내용
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-surface-container-lowest border-0 border-b border-primary/30 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface transition-colors resize-none"
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-full w-full hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? '전송 중...' : '문의 보내기'}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details & Map */}
        <div className="md:col-span-5 space-y-element-gap">
          <div className="bg-secondary-container/30 p-8 rounded-xl h-full flex flex-col">
            <h3 className="font-headline-md text-headline-md text-primary mb-6">연락처</h3>
            <div className="space-y-4 font-body-md text-body-md text-on-surface-variant mb-8">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">mail</span>
                <a href="mailto:wklover777@gmail.com" className="hover:text-primary transition-colors">
                  wklover777@gmail.com
                </a>
              </div>
            </div>
            {/* Google Maps Embed */}
            <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-sm border border-outline-variant/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1126.360666540726!2d127.91827067181687!3d37.01387417533588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sko!2skr!4v1782107514941!5m2!1sko!2skr"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
