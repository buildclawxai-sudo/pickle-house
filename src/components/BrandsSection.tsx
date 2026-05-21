'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// SVG 圖標元件
const PlayerIcon = ({ type, color }: { type: string; color: string }) => {
  const iconClass = `w-10 h-10 text-${color}`;
  
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
    case 'advanced':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'pro':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    case 'speed':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case 'allround':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16M12 4v16M7 7l10 10M17 7L7 17" />
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

const brands = [
  {
    name: 'Enhance',
    description: '來自美國，專注於匹克球裝備的設計與創新。全系列採用泡棉核心，手感舒適、甜點更大。',
    features: ['泡棉核心技術', 'T700 碳纖維表面', '新手友善設計'],
    products: [
      { name: 'DUO', desc: '雙泡沫核心，頂級手感', player: '競技玩家' },
      { name: 'Gen 4.5', desc: '氣囊結構，強大力量', player: '進階玩家' },
      { name: 'EPP Turbo', desc: '浮動泡沫核心，紮實手感', player: '中階玩家' },
      { name: 'SweetSpot Pro', desc: '最大甜點，新手首選', player: '新手友善' }
    ],
    logoUrl: 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/66de52fc-c23d-4650-8775-8adc672ddbe5._CR0%2C0%2C4000%2C4000_SX300_.png',
    color: 'sage',
    recommendations: [
      { type: '競技玩家', paddle: 'DUO', reason: '雙泡沫核心頂級手感，追求極致表現', iconType: 'pro' },
      { type: '進階玩家', paddle: 'Gen 4.5', reason: '氣囊結構提供強大力量，適合進攻型打法', iconType: 'advanced' },
      { type: '中階玩家', paddle: 'EPP Turbo', reason: '浮動泡沫核心，紮實手感，適合精進技術', iconType: 'intermediate' },
      { type: '新手入門', paddle: 'SweetSpot Pro', reason: '超大甜點設計，擊球更容易，失誤更少', iconType: 'beginner' }
    ]
  },
  {
    name: 'Juciao',
    description: '專注於高性能匹克球球拍設計，採用 T700 碳纖維與蜂窩核心，提供絕佳的旋轉與控制。',
    features: ['T700 碳纖維表面', '16mm 厚度平衡', 'USAPA 認證'],
    products: [
      { name: 'Ultra', desc: '雙泡沫核心，37% 更強爆發力', player: '競技玩家' },
      { name: 'WUKONG Pro', desc: 'Kevlar + 碳纖維混合', player: '進階玩家' },
      { name: 'Spin 1.0', desc: 'T700 碳纖維，極致旋轉', player: '中階玩家' }
    ],
    logoUrl: 'https://juciao.com.au/cdn/shop/files/Asset_5_3x_f1854df5-e398-49b3-a921-885b1d7b5d3c.png?height=80&v=1757294412',
    color: 'khaki',
    recommendations: [
      { type: '競技玩家', paddle: 'Ultra', reason: '雙泡沫核心，爆發力提升 37%，比賽首選', iconType: 'pro' },
      { type: '進階玩家', paddle: 'WUKONG Pro', reason: 'Kevlar + 碳纖維混合，耐用且力量十足', iconType: 'advanced' },
      { type: '中階玩家', paddle: 'Spin 1.0', reason: 'T700 碳纖維極致旋轉，適合喜歡切球變化', iconType: 'intermediate' }
    ]
  },
  {
    name: 'Luzz',
    description: '歐洲品牌，以獨特 MPP 泡棉核心技術聞名。Pro 4 Inferno 系列是競技玩家的首選。',
    features: ['MPP 泡棉核心', '90% 吸震效果', '超大甜點'],
    products: [
      { name: 'Pro 4 Inferno', desc: 'MPP 核心，爆炸性力量', player: '競技玩家' },
      { name: 'Cannon', desc: 'T700 碳纖維，力量與控制', player: '進階玩家' },
      { name: 'Glider', desc: '混合型設計，全能表現', player: '中階玩家' }
    ],
    logoUrl: 'https://luzzpickleball.com/cdn/shop/files/logo_d2136651-2567-47c1-acd4-b66f937fa651.png?v=1717117475&width=300',
    color: 'forest',
    recommendations: [
      { type: '競技玩家', paddle: 'Pro 4 Inferno', reason: 'MPP 核心爆炸性力量，歐洲冠軍選手愛用', iconType: 'pro' },
      { type: '進階玩家', paddle: 'Cannon', reason: 'T700 碳纖維，力量與控制完美平衡', iconType: 'advanced' },
      { type: '中階玩家', paddle: 'Glider', reason: '混合型設計，攻守兼備，適合全面發展', iconType: 'intermediate' }
    ]
  },
  {
    name: 'VISPINVO',
    description: '創新品牌，提供高品質、高性價比的匹克球球拍。全系列 USAPA 認證。',
    features: ['T700 熱壓成型', '泡沫注入邊緣', '親民價格'],
    products: [
      { name: 'VS-R16', desc: '16mm 碳纖維，旋轉與控制', player: '全能型' },
      { name: 'VS-YBV51', desc: '無邊框設計，超大甜點', player: '新手友善' },
      { name: 'VS-YBV34', desc: '輕量化設計，快速揮拍', player: '速度型' }
    ],
    logoUrl: 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/8fb2339e-544c-48b8-9f90-b935cf3de039._CR0,0,800,800_SX300_.jpg',
    color: 'sage',
    recommendations: [
      { type: '全能型玩家', paddle: 'VS-R16', reason: '16mm 碳纖維，旋轉與控制兼備，高 CP 值', iconType: 'allround' },
      { type: '速度型玩家', paddle: 'VS-YBV34', reason: '輕量化設計，揮拍快速，適合反應快的打法', iconType: 'speed' },
      { type: '新手入門', paddle: 'VS-YBV51', reason: '無邊框設計超大甜點，價格親民好上手', iconType: 'beginner' }
    ]
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

export default function BrandsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeBrand, setActiveBrand] = useState(0);
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
              <span className="text-sm text-forest font-medium">Our Brands</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-forest mb-6 leading-tight">
              我們代理的品牌
            </h2>

            <p className="text-forest/70 text-lg leading-relaxed">
              匹克屋精選來自世界各地的優質匹克球品牌，為你提供最適合的選擇
            </p>
          </div>

          {/* Brand Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {brands.map((brand, index) => (
              <button
                key={index}
                onClick={() => setActiveBrand(index)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
                  activeBrand === index
                    ? 'bg-forest text-cream'
                    : 'bg-white/60 text-forest/70 hover:bg-white/80'
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>

          {/* Active Brand Content */}
          <div className="bg-white/70 backdrop-blur-sm rounded-softer p-8 shadow-soft mb-20">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
              {/* Brand Logo */}
              <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center bg-white rounded-soft p-4 shadow-sm">
                {brands[activeBrand].logoUrl ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={brands[activeBrand].logoUrl}
                      alt={`${brands[activeBrand].name} Logo`}
                      fill
                      className="object-contain p-1"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className={`w-full h-full bg-${brands[activeBrand].color}/10 rounded-full flex items-center justify-center`}>
                    <span className={`font-serif text-3xl text-${brands[activeBrand].color} font-semibold`}>
                      {brands[activeBrand].name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Brand Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-2xl font-semibold text-forest mb-3">
                  {brands[activeBrand].name}
                </h3>
                <p className="text-forest/70 text-sm leading-relaxed mb-6">
                  {brands[activeBrand].description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {brands[activeBrand].features.map((feature, i) => (
                    <span
                      key={i}
                      className={`bg-${brands[activeBrand].color}/10 text-${brands[activeBrand].color} px-3 py-1 rounded-full text-xs font-medium`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 品牌推薦 - 根據選擇的品牌顯示 */}
          <div className="mb-20">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-forest text-center mb-10">
              {brands[activeBrand].name} 適合什麼樣的你？
            </h3>
            <div className={`grid md:grid-cols-${brands[activeBrand].recommendations.length > 3 ? '4' : '3'} gap-6`}>
              {brands[activeBrand].recommendations.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-soft p-6 shadow-soft text-center"
                >
                  <div className="flex justify-center mb-4">
                    <PlayerIcon type={item.iconType} color={brands[activeBrand].color} />
                  </div>
                  <div className={`inline-block bg-${brands[activeBrand].color}/10 px-3 py-1 rounded-full mb-3`}>
                    <span className={`text-sm text-${brands[activeBrand].color} font-medium`}>{item.type}</span>
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
                <h4 className="font-semibold text-forest mb-3">我們對新手的優勢</h4>
                <ul className="space-y-2 text-forest/70 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-sage mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>SweetSpot Pro / Champion 專為新手設計，甜點比一般球拍大 20%</span>
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
                    <span>多種價位選擇，不用花大錢就能開始匹克球生活</span>
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
              我們代理的品牌多採用新一代泡棉核心技術
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