'use client';

import { useEffect, useRef, useState } from 'react';

export default function FutureSection() {
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
    <section className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`fade-section ${isVisible ? 'visible' : ''}`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-khaki/20 px-4 py-1.5 rounded-full mb-6">
              <span className="text-sm text-forest/70 font-medium">Coming Soon</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-forest mb-8 leading-tight">
              更多匹克生活，<br/>
              <span className="text-sage">即將登場</span>
            </h2>

            <p className="text-forest/70 text-lg leading-relaxed mb-12">
              活動、教學、體驗、更多生活內容，<br/>
              我們正在準備，敬請期待。
            </p>

            {/* Decorative Elements */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="w-12 h-12 bg-khaki/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-khaki" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}