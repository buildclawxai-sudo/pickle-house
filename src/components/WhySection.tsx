'use client';

import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '代理正規來源，品質有保障',
    description: '所有商品皆為原廠授權，品質安心有保障'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: '精選適合新手的球拍，不讓你迷路',
    description: '我們親自試打篩選，為你把關每一支球拍'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: '兼顧手感與外型，打球也要好看',
    description: '質感設計，讓你在球場上自信展現風格'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: '提供友善選拍建議，陪你開始',
    description: '有任何問題，我們都樂意為你解答'
  }
];

export default function WhySection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="why" className="py-24 md:py-32 bg-white/40 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-sage/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`fade-section ${isVisible ? 'visible' : ''}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-forest/10 px-4 py-1.5 rounded-full mb-6">
              <span className="text-sm text-forest font-medium">Why Choose Us</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-forest mb-6">
              為什麼選擇匹克屋
            </h2>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 bg-white/60 backdrop-blur-sm rounded-soft shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center text-sage">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-forest mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-forest/60 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}