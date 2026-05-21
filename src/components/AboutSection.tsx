'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AboutSection() {
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
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`fade-section ${isVisible ? 'visible' : ''}`}
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-block bg-sage/10 px-4 py-1.5 rounded-full mb-6">
                <span className="text-sm text-sage font-medium">About Us</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-forest mb-8 leading-tight">
                關於匹克屋
              </h2>

              <div className="space-y-6 text-forest/75 text-lg leading-relaxed">
                <p>
                  匹克球，不只是運動。<br/>
                  它是一種生活的節奏，一種日常的樂趣。
                </p>
                <p>
                  匹克屋相信，好的運動體驗從一把順手的球拍開始。<br/>
                  我們專注為新手挑選質感球拍，<br/>
                  讓每一次揮拍，都成為享受。
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-sage/30"></div>
                <span className="text-sage text-sm tracking-wider">PICKLE HOUSE</span>
              </div>
            </div>

            {/* Right: Brand Logo */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-sage/20 to-khaki/30 rounded-softer p-8 relative overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="#2D4A3E"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)"/>
                  </svg>
                </div>

                {/* Logo Display */}
                <div className="absolute inset-4 bg-white/50 backdrop-blur-sm rounded-soft flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="匹克屋 Logo"
                    width={280}
                    height={280}
                    className="mx-auto object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Floating Accent */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-forest/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}