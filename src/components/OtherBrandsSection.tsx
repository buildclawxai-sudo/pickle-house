'use client';

import { useEffect, useRef, useState } from 'react';

const brands = [
  {
    name: 'Juciao',
    description: '專注於高性能匹克球球拍設計，採用 T700 碳纖維與蜂窩核心，提供絕佳的旋轉與控制。',
    features: [
      'T700 碳纖維表面，極致旋轉',
      '16mm 厚度，力量與控制平衡',
      'USAPA 認證，適合各級玩家'
    ],
    products: [
      { name: 'Ultra', desc: '雙泡沫核心，37% 更強爆發力', player: '競技玩家' },
      { name: 'Challenger', desc: 'T700 碳纖維，力量與旋轉', player: '中階玩家' },
      { name: 'Champion', desc: '玻璃纖維表面，平衡控制', player: '新手友善' }
    ],
    color: 'sage'
  },
  {
    name: 'Luzz',
    description: '歐洲品牌，以獨特 MPP 泡棉核心技術聞名。Pro 4 Inferno 系列是競技玩家的首選。',
    features: [
      'MPP 泡棉核心，90% 吸震效果',
      'T700 碳纖維表面，強大旋轉',
      '超大甜點，失誤更少'
    ],
    products: [
      { name: 'Pro 4 Inferno', desc: 'MPP 核心，爆炸性力量', player: '競技玩家' },
      { name: 'Pro 4 Blue Blaze', desc: '力量與控制平衡', player: '進階玩家' }
    ],
    color: 'khaki'
  },
  {
    name: 'VISPINVO',
    description: '創新品牌，提供高品質、高性價比的匹克球球拍。全系列 USAPA 認證。',
    features: [
      'T700 碳纖維熱壓成型',
      '泡沫注入邊緣，擴大甜點',
      '親民價格，高品質表現'
    ],
    products: [
      { name: 'VS-R16', desc: '16mm 碳纖維，旋轉與控制', player: '全能型' },
      { name: 'VS-YBV51', desc: '無邊框設計，超大甜點', player: '新手友善' },
      { name: 'VS-YBV34', desc: '輕量化設計，快速揮拍', player: '速度型' }
    ],
    color: 'forest'
  }
];

export default function OtherBrandsSection() {
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
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-sage/10 px-4 py-1.5 rounded-full mb-6">
              <span className="text-sm text-sage font-medium">More Brands</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-forest mb-6 leading-tight">
              更多精選品牌
            </h2>

            <p className="text-forest/70 text-lg leading-relaxed">
              匹克屋持續引進更多優質品牌，為你提供更多選擇
            </p>
          </div>

          {/* Brands */}
          <div className="space-y-12">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-softer p-8 shadow-soft"
              >
                {/* Brand Header */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                  <div className={`w-20 h-20 bg-${brand.color}/10 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className={`font-serif text-3xl text-${brand.color} font-semibold`}>
                      {brand.name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-serif text-2xl font-semibold text-forest mb-2">
                      {brand.name}
                    </h3>
                    <p className="text-forest/60 text-sm leading-relaxed max-w-2xl">
                      {brand.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {brand.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-forest/70 text-sm bg-forest/5 px-4 py-3 rounded-soft"
                    >
                      <svg className={`w-4 h-4 text-${brand.color} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Products */}
                <div className="grid md:grid-cols-3 gap-4">
                  {brand.products.map((product, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-cream to-soft-gray rounded-soft p-5 text-center"
                    >
                      <div className={`inline-block bg-${brand.color}/10 px-3 py-1 rounded-full mb-3`}>
                        <span className={`text-xs text-${brand.color} font-medium`}>{product.player}</span>
                      </div>
                      <h4 className="font-serif text-base font-semibold text-forest mb-1">
                        {product.name}
                      </h4>
                      <p className="text-forest/60 text-xs">
                        {product.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Note */}
          <div className="text-center mt-12">
            <div className="inline-block bg-khaki/20 px-6 py-3 rounded-full">
              <span className="text-forest/70 text-sm">
                更多品牌商品即將上架，敬請期待
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}