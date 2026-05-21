'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const brandsProducts = [
  {
    name: 'Enhance',
    color: 'sage',
    products: [
      {
        name: 'DUO',
        tagline: '雙泡沫核心，頂級手感',
        description: 'EPP+EVA 雙泡沫核心，T700 碳纖維表面，絕佳甜點與控制',
        badge: '旗艦款',
        playerType: '追求頂級手感的進階玩家、喜歡全能表現的競技玩家',
        style: '全能型 / 頂級手感',
        image: 'https://enhancepickleball.com/cdn/shop/files/Duo_Elongated_main_product_image.png?v=1778878874&width=600'
      },
      {
        name: 'Gen 4.5',
        tagline: '氣囊結構，強大力量',
        description: 'EPP 泡沫核心搭配氣囊設計，三層 T700 碳纖維，超大甜點',
        badge: '進階推薦',
        playerType: '想要更多力量與甜點的中進階玩家、全場型打法',
        style: '力量型 / 大甜點',
        image: 'https://enhancepickleball.com/cdn/shop/files/EPP_Turbo_Elongated_main_product_image.png?v=1778878878&width=600'
      },
      {
        name: 'EPP Turbo',
        tagline: '浮動泡沫核心，紮實手感',
        description: '浮動 EPP 泡沫核心，CFC 面面層，穩定且易於控制',
        badge: '中階首選',
        playerType: '喜歡紮實連結手感的玩家、追求穩定表現',
        style: '控制型 / 穩定手感',
        image: 'https://enhancepickleball.com/cdn/shop/files/EPP_Turbo_Widebody_main_product_image.png?v=1778878879&width=600'
      },
      {
        name: 'SweetSpot Pro',
        tagline: '最大甜點，新手友善',
        description: '16mm 核心，T700 碳纖維，專為新手設計的超大甜點',
        badge: '新手推薦',
        playerType: '剛接觸匹克球的新手、想要更容易擊中球的玩家',
        style: '新手友善 / 超大甜點',
        image: 'https://enhancepickleball.com/cdn/shop/files/MPP_Turbo_Widebody_main_product_image.png?v=1778878883&width=600'
      }
    ]
  },
  {
    name: 'Juciao',
    color: 'khaki',
    products: [
      {
        name: 'Ultra',
        tagline: '雙泡沫核心，37% 更強爆發力',
        description: 'T700 碳纖維表面，雙泡沫核心設計，力量與控制兼備',
        badge: '競技款',
        playerType: '追求極致爆發力的競技玩家、喜歡進攻型打法',
        style: '力量型 / 爆發力',
        image: 'https://juciao.com.au/cdn/shop/files/6_d273ed0d-e99c-4788-b976-1f1a7aa8e92c.png?v=1770956614&width=600'
      },
      {
        name: 'WUKONG Pro',
        tagline: 'Kevlar + 碳纖維混合',
        description: 'Kevlar 與碳纖維混合表面，耐用且力量十足',
        badge: '進階推薦',
        playerType: '想要耐用且有力量的進階玩家、喜歡強攻',
        style: '耐用型 / 力量',
        image: 'https://juciao.com.au/cdn/shop/files/2_2e15b10f-d140-45af-b3f0-76f957f791b4.png?v=1770956839&width=600'
      },
      {
        name: 'Spin 1.0',
        tagline: 'T700 碳纖維，極致旋轉',
        description: 'T700 碳纖維表面，專為旋轉設計的紋理',
        badge: '中階首選',
        playerType: '喜歡切球變化的中階玩家、追求旋轉控制',
        style: '旋轉型 / 控制',
        image: 'https://juciao.com.au/cdn/shop/files/25.png?v=1770956987&width=600'
      }
    ]
  },
  {
    name: 'Luzz',
    color: 'forest',
    products: [
      {
        name: 'Pro 4 Inferno',
        tagline: 'MPP 核心，爆炸性力量',
        description: 'MPP 泡棉核心技術，90% 吸震效果，超大甜點',
        badge: '旗艦款',
        playerType: '追求極致力量的競技玩家、歐洲冠軍選手愛用',
        style: '力量型 / 頂級',
        image: 'https://luzzpickleball.com/cdn/shop/files/1_71c285c7-052c-4d7f-8069-a67a51cee128.jpg?v=1776741981&width=600'
      },
      {
        name: 'Cannon',
        tagline: 'T700 碳纖維，力量與控制',
        description: 'T700 碳纖維表面，力量與控制完美平衡',
        badge: '進階推薦',
        playerType: '想要力量與控制平衡的進階玩家',
        style: '全能型 / 平衡',
        image: 'https://luzzpickleball.com/cdn/shop/files/1_c410ad7e-ab3b-40b0-b98d-89cd1c2461cc.jpg?v=1776747966&width=600'
      },
      {
        name: 'Glider',
        tagline: '混合型設計，全能表現',
        description: '混合型設計，攻守兼備，適合全面發展',
        badge: '中階首選',
        playerType: '想要全面發展的中階玩家、攻守兼備',
        style: '全能型 / 均衡',
        image: 'https://luzzpickleball.com/cdn/shop/files/1907e2d9c531ba31209bc5d0ad08e0aa.jpg?v=1758855741&width=600'
      }
    ]
  },
  {
    name: 'VISPINVO',
    color: 'sage',
    products: [
      {
        name: 'VS-R16',
        tagline: '16mm 碳纖維，旋轉與控制',
        description: 'T700 熱壓成型，16mm 厚度，旋轉與控制兼備',
        badge: '全能款',
        playerType: '想要全能表現的玩家、高 CP 值首選',
        style: '全能型 / 高 CP 值',
        image: 'https://m.media-amazon.com/images/I/71oUwNQefdL._AC_UL400_.jpg'
      },
      {
        name: 'VS-YBV51',
        tagline: '無邊框設計，超大甜點',
        description: '無邊框設計，甜點更大，新手友善',
        badge: '新手推薦',
        playerType: '剛接觸匹克球的新手、價格親民好上手',
        style: '新手友善 / 大甜點',
        image: 'https://m.media-amazon.com/images/I/71AsGe1jcHL._AC_UL400_.jpg'
      },
      {
        name: 'VS-YBV34',
        tagline: '輕量化設計，快速揮拍',
        description: '輕量化設計，揮拍快速，適合反應快的打法',
        badge: '速度型',
        playerType: '喜歡快速揮拍的速度型玩家、反應快',
        style: '速度型 / 輕量',
        image: 'https://m.media-amazon.com/images/I/71czKdCOBwL._AC_UL400_.jpg'
      }
    ]
  }
];

export default function ProductsSection() {
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
    <section id="products" className="py-24 md:py-32 relative bg-cream/30">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`fade-section ${isVisible ? 'visible' : ''}`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-sage/10 px-4 py-1.5 rounded-full mb-6">
              <span className="text-sm text-sage font-medium">Featured Products</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-forest mb-6">
              精選球拍
            </h2>

            <p className="text-forest/60 text-lg max-w-2xl mx-auto">
              每一支都經過我們親自試打與篩選，為你挑選最適合的選擇
            </p>
          </div>

          {/* Brand Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {brandsProducts.map((brand, index) => (
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

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {brandsProducts[activeBrand].products.map((product, index) => (
              <div
                key={index}
                className="product-card bg-white/70 backdrop-blur-sm rounded-soft overflow-hidden shadow-soft group"
              >
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-cream to-soft-gray relative overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className={`w-32 h-32 bg-${brandsProducts[activeBrand].color}/20 rounded-full flex items-center justify-center`}>
                        <span className={`font-serif text-4xl text-${brandsProducts[activeBrand].color} font-semibold`}>
                          {product.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`bg-${brandsProducts[activeBrand].color}/90 text-cream text-xs px-3 py-1 rounded-full font-medium`}>
                      {product.badge}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-forest mb-2">
                    {product.name}
                  </h3>
                  <p className={`text-${brandsProducts[activeBrand].color} text-sm mb-2 font-medium`}>
                    {product.tagline}
                  </p>
                  <p className="text-forest/60 text-sm mb-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Player Type & Style */}
                  <div className="space-y-2 mb-4 pt-3 border-t border-forest/10">
                    <div className="flex items-start gap-2">
                      <svg className={`w-4 h-4 text-${brandsProducts[activeBrand].color} mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-forest/70 text-xs leading-relaxed">
                        {product.playerType}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-khaki flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <p className="text-forest/70 text-xs">
                        {product.style}
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://1shop.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-forest text-sm font-medium group-hover:text-${brandsProducts[activeBrand].color} transition-colors`}
                  >
                    查看詳情
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <a
              href="https://1shop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-forest text-cream px-8 py-4 rounded-full text-base font-medium inline-flex items-center gap-2 group"
            >
              前往 1shop 查看全部商品
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
