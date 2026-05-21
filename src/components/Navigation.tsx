'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-soft py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="匹克屋 Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <div>
            <div className="font-serif text-lg font-semibold text-forest">匹克屋</div>
            <div className="text-xs text-sage tracking-wider">PICKLE HOUSE</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-forest/80 hover:text-forest transition-colors text-sm font-medium">
            關於我們
          </Link>
          <Link href="#products" className="text-forest/80 hover:text-forest transition-colors text-sm font-medium">
            精選球拍
          </Link>
          <Link href="#why" className="text-forest/80 hover:text-forest transition-colors text-sm font-medium">
            為什麼選擇我們
          </Link>
          <a
            href="https://1shop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-forest text-cream px-5 py-2.5 rounded-full text-sm font-medium"
          >
            前往選購
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-forest p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-sm border-t border-forest/10">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="#about"
              className="block text-forest/80 hover:text-forest transition-colors text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              關於我們
            </Link>
            <Link
              href="#products"
              className="block text-forest/80 hover:text-forest transition-colors text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              精選球拍
            </Link>
            <Link
              href="#why"
              className="block text-forest/80 hover:text-forest transition-colors text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              為什麼選擇我們
            </Link>
            <a
              href="https://1shop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block btn-primary bg-forest text-cream px-5 py-2.5 rounded-full text-sm font-medium text-center"
            >
              前往選購
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
