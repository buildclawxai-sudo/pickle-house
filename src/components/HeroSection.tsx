'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sage/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-khaki/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-forest/5 rounded-full blur-2xl"></div>
      </div>

      {/* Floating Decorative Shapes */}
      <svg className="absolute top-32 left-20 w-24 h-24 animate-float opacity-15" viewBox="0 0 100 100">
        <path d="M50 10 Q80 40 50 90 Q20 40 50 10" fill="#8B9A8B" opacity="0.3"/>
      </svg>
      <svg className="absolute bottom-40 right-32 w-16 h-16 animate-float opacity-15" style={{animationDelay: '2s'}} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="#C4B8A5" opacity="0.4"/>
      </svg>

      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Small Tagline */}
        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-sage"></div>
          <span className="text-sm text-sage font-medium tracking-wide">台灣匹克球選物平台</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-forest leading-tight mb-6">
          在生活裡，<br/>
          <span className="text-sage">遇見匹克球</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-forest/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          匹克屋 — 專為新手挑選的質感球拍與生活選物
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#products"
            className="btn-primary bg-forest text-cream px-8 py-4 rounded-full text-base font-medium inline-flex items-center gap-2 group"
          >
            查看精選球拍
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="#about"
            className="btn-secondary bg-white/60 backdrop-blur-sm text-forest px-8 py-4 rounded-full text-base font-medium border border-forest/20"
          >
            認識匹克屋
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-sage/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}