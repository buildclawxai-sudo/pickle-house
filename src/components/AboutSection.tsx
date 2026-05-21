'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const materialCompare = [
  {
    name: '蜂窩核心',
    description: '傳統設計，由六角形蜂窩結構組成',
    pros: ['傳統設計，技術成熟', '重量較輕', '價格較親民'],
    cons: ['手感較硬', '長期使用可能變形', '甜點較小'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/3D_PRINTED_HEXAGONAL_HONEYCOMB_CORE_STRUCTURE.jpg',
    imageAlt: '蜂窩核心結構示意圖'
  },
  {
    name: '泡棉核心',
    description: '新一代技術，由聚合物泡沫組成',
    pros: ['手感柔軟舒適', '甜點更大', '吸震效果佳', '更耐用不易變形'],
    cons: ['重量稍重', '價格較高'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Solid_polymeric_foam.tif/lossless-page1-960px-Solid_polymeric_foam.tif.png',
    imageAlt: '泡棉核心結構示意圖'
  }
];

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
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
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

          {/* 材質差異比較 */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-forest text-center mb-4">
              蜂窩核心 vs 泡棉核心，有什麼不同？
            </h3>
            <p className="text-forest/60 text-center mb-10">
              我們代理的品牌多採用新一代泡棉核心技術
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {materialCompare.map((material, index) => (
                <div
                  key={index}
                  className={`rounded-softer overflow-hidden ${
                    index === 1
                      ? 'bg-forest/5 border-2 border-forest/20'
                      : 'bg-white/60'
                  }`}
                >
                  {/* 材質圖片 */}
                  <div className="relative h-48 bg-gradient-to-br from-cream to-soft-gray">
                    <Image
                      src={material.image}
                      alt={material.imageAlt}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      {index === 1 && (
                        <span className="bg-forest text-cream text-xs px-2 py-1 rounded-full">推薦</span>
                      )}
                      <h4 className="font-serif text-xl font-semibold text-forest">
                        {material.name}
                      </h4>
                    </div>
                    <p className="text-forest/60 text-sm mb-4">{material.description}</p>

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
                </div>
              ))}
            </div>
            
            {/* 圖片來源說明 */}
            <p className="text-forest/40 text-xs text-center mt-6">
              圖片來源：Wikimedia Commons（CC0 公眾領域 / CC BY 4.0）
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
