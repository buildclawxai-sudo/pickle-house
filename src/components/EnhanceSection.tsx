'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// SVG 圖標元件
const PlayerIcon = ({ type }: { type: string }) => {
  const iconClass = 'w-10 h-10 text-sage';
  
  switch (type) {
    case 'beginner':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
        </svg>
      );
    case 'intermediate':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        </svg>
      );
    case 'pro':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
        </svg>
      );
  }
};

const playerTypes = [
  {
    type: '新手入門',
    paddle: 'SweetSpot Pro',
    reason: '超大甜點設計，擊球更容易，失誤更少',
    iconType: 'beginner'
  },
  {
    type: '進階玩家',
    paddle: 'EPP Turbo',
    reason: '紮實手感，穩定控制，適合精進技術',
    iconType: 'intermediate'
  },
  {
    type: '競技玩家',
    paddle: 'DUO / Gen 4.5',
    reason: '頂級手感與力量，適合追求極致表現',
    iconType: 'pro'
  }
];

const materialCompare = [
  {
    name: '蜂窩核心',
    pros: ['傳統設計，技術成熟', '重量較輕', '價格較親民'],
    cons: ['手感較硬', '長期使用可能變形', '甜點較小']
  },
  {
    name: '泡棉核心',
    pros: ['手感柔軟舒適', '甜點更大', '吸震效果佳', '更耐用不易變形'],
    cons: ['重量稍重', '價格較高']
  }
];

export default function EnhanceSection() {
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
    <section className="py-24 md:py-32 bg-white/40 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-khaki/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`fade-section ${isVisible ? 'visible' : ''}`}
        >
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-forest/10 px-4 py-1.5 rounded-full mb-6">
              <span className="text-sm text-forest font-medium">Our Brand</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-forest mb-8 leading-tight">
              我們代理 <span className="text-sage">Enhance</span>
            </h2>

            <p className="text-forest/70 text-lg leading-relaxed mb-8">
              Enhance 來自美國，專注於匹克球裝備的設計與創新。<br/>
              他們相信：好的設計，能讓運動變得更親近。
            </p>

            {/* Brand Logo */}
            <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm px-8 py-4 rounded-soft">
              <Image
                src="https://enhancepickleball.com/cdn/shop/files/logo_new_site.png?v=1776128025&width=200"
                alt="Enhance Logo"
                width={64}
                height={64}
                className="object-contain"
                unoptimized
              />
              <div className="text-left">
                <div className="font-serif text-xl text-forest font-semibold">Enhance</div>
                <div className="text-sm text-sage">Pickleball Equipment</div>
              </div>
            </div>
          </div>

          {/* 為什麼適合我 - Player Types */}
          <div className="mb-20">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-forest text-center mb-10">
              什麼樣的你，適合哪一支球拍？
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {playerTypes.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-soft p-6 shadow-soft text-center"
                >
                  <div className="flex justify-center mb-4">
                    <PlayerIcon type={item.iconType} />
                  </div>
                  <div className="inline-block bg-sage/10 px-3 py-1 rounded-full mb-3">
                    <span className="text-sm text-sage font-medium">{item.type}</span>
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-forest mb-2">
                    {item.paddle}
                  </h4>
                  <p className="text-forest/60 text-sm leading-relaxed">
                    {item.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 新手友善說明 */}
          <div className="bg-gradient-to-r from-sage/10 to-khaki/10 rounded-softer p-8 mb-20">
            <h3 className="font-serif text-2xl font-semibold text-forest mb-6 text-center">
              新手友善，從第一拍開始
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-forest mb-3">為什麼新手需要特別挑選？</h4>
                <ul className="space-y-2 text-forest/70 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sage mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>新手擊球不穩定，需要更大的甜點來包容失誤</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sage mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>太重的球拍容易造成手腕疲勞，影響學習意願</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sage mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>太硬的手感會讓擊球回饋不明顯，難以建立手感</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sage mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>我們精選的球拍，讓新手更快體驗到擊球的樂趣</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-forest mb-3">Enhance 對新手的優勢</h4>
                <ul className="space-y-2 text-forest/70 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sage mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>SweetSpot Pro 專為新手設計，甜點比一般球拍大 20%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sage mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>泡棉核心吸震效果佳，手腕不會痠痛</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sage mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>輕量化設計，揮拍更輕鬆，學習更有效率</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sage mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>價格親民，不用花大錢就能開始匹克球生活</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 材質差異比較 */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-forest text-center mb-4">
              蜂窩核心 vs 泡棉核心，有什麼不同？
            </h3>
            <p className="text-forest/60 text-center mb-10">
              Enhance 全系列採用泡棉核心，這是新一代的球拍技術
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {materialCompare.map((material, index) => (
                <div
                  key={index}
                  className={`rounded-softer p-6 ${
                    index === 1
                      ? 'bg-forest/5 border-2 border-forest/20'
                      : 'bg-white/60'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {index === 1 && (
                      <span className="bg-forest text-cream text-xs px-2 py-1 rounded-full">推薦</span>
                    )}
                    <h4 className="font-serif text-xl font-semibold text-forest">
                      {material.name}
                    </h4>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-sage mb-2 font-medium">優點</p>
                    <ul className="space-y-1">
                      {material.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-forest/70 text-sm">
                          <span className="text-sage text-xs mt-1">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs text-khaki mb-2 font-medium">注意</p>
                    <ul className="space-y-1">
                      {material.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-forest/60 text-sm">
                          <span className="text-khaki text-xs mt-1">−</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}