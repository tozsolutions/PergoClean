'use client';

import { useState, useEffect } from 'react';
import { stats } from '@/lib/site';

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero/pergola-hero.svg"
          alt="PergoClean - Pergola RollingRoof BioClimatic Tente Temizliği"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/logos/PergoClean_Logo.png"
                alt="PergoClean Logo"
                className={`h-14 w-auto transition-all ${
                  scrolled ? '' : 'drop-shadow-lg'
                }`}
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
                }`}
              >
                Hizmetler
              </button>
              <button
                onClick={() => scrollToSection('price-calculator')}
                className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
                }`}
              >
                Fiyat Hesapla
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
                }`}
              >
                Referanslar
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
                }`}
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
                }`}
              >
                SSS
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
                }`}
              >
                İletişim
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/pergoclean"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-5 h-5 flex items-center justify-center transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-300'
                }`}
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a
                href="https://www.tiktok.com/@pergoclean"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-5 h-5 flex items-center justify-center transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-300'
                }`}
              >
                <i className="ri-tiktok-line text-lg"></i>
              </a>
              <a
                href="https://www.youtube.com/@pergoclean"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-5 h-5 flex items-center justify-center transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-300'
                }`}
              >
                <i className="ri-youtube-line text-lg"></i>
              </a>
              <a
                href="https://www.pinterest.com/pergoclean"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-5 h-5 flex items-center justify-center transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-red-700' : 'text-white hover:text-red-300'
                }`}
              >
                <i className="ri-pinterest-line text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
        <h1 className="mb-6">
          <div className="text-5xl md:text-7xl font-extrabold text-white mb-3 tracking-tight">
            PERGOLA ROLLINGROOF
          </div>
          <div className="text-5xl md:text-7xl font-light italic text-amber-300 drop-shadow-lg">
            Profesyonel Temizlik
          </div>
        </h1>

        <p className="text-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Pergola RollingRoof BioClimatic CamTavan ZipPerde ve Tentelerinizde %85-90 oranında ilk
          günkü temizliğine ve hijyenik yeni görünümüne kavuşturuyoruz. Minimum maliyet, maksimum
          sonuç.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('price-calculator')}
            className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            Ücretsiz Fiyat Teklifi Al
          </button>
          <a
            href="https://wa.me/905367731404"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-500 text-white rounded-full font-semibold text-sm hover:bg-green-600 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line text-xl"></i>
            WhatsApp&apos;tan Ulaş
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-amber-300 mb-2">{stats.customers}</div>
            <div className="text-white text-sm">Mutlu Müşteri</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-amber-300 mb-2">{stats.systems}</div>
            <div className="text-white text-sm">Temizlenen Sistem</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-amber-300 mb-2">{stats.satisfaction}</div>
            <div className="text-white text-sm">Memnuniyet Oranı</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <i className="ri-arrow-down-line text-3xl text-white/70"></i>
        </div>
      </div>
    </div>
  );
}
